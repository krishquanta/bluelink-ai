import { TrainingCaseStudy, STATUTORY_MANUALS } from '../data/trainingCorpus';
import { ProblemSignature, TransferAnalysis, PersonaOutputs } from '../types';

export type GeminiModelId = 
  | 'gemini-3.8-flash'
  | 'gemini-3.5-flash-lite'
  | 'gemini-2.0-flash'
  | 'gemini-1.5-flash'
  | 'local-engine';

export interface GeminiApiConfig {
  apiKey: string;
  model: GeminiModelId;
  isCustomKey: boolean;
}

const STORAGE_KEY_API_KEY = 'bluelink_gemini_api_key';
const STORAGE_KEY_MODEL = 'bluelink_gemini_model';

/**
 * Read stored API key from localStorage or Vite environment variable
 */
export function getStoredApiKey(): string {
  try {
    const local = localStorage.getItem(STORAGE_KEY_API_KEY);
    if (local && local.trim()) return local.trim();
  } catch (e) {
    // localStorage not accessible
  }
  return ((import.meta as any).env?.VITE_GEMINI_API_KEY as string) || '';
}

export function saveStoredApiKey(key: string): void {
  try {
    if (key.trim()) {
      localStorage.setItem(STORAGE_KEY_API_KEY, key.trim());
    } else {
      localStorage.removeItem(STORAGE_KEY_API_KEY);
    }
  } catch (e) {
    console.error('Failed to save API key to localStorage', e);
  }
}

export function getSelectedModel(): GeminiModelId {
  try {
    const local = localStorage.getItem(STORAGE_KEY_MODEL);
    if (local && ['gemini-3.8-flash', 'gemini-3.5-flash-lite', 'gemini-2.0-flash', 'gemini-1.5-flash', 'local-engine'].includes(local)) {
      return local as GeminiModelId;
    }
  } catch (e) {}
  return 'gemini-3.8-flash';
}

export function setSelectedModel(model: GeminiModelId): void {
  try {
    localStorage.setItem(STORAGE_KEY_MODEL, model);
  } catch (e) {}
}

/**
 * Validate an entered Google Gemini API key by calling a minimal query
 */
export async function testGeminiApiKey(key: string, model: GeminiModelId = 'gemini-3.8-flash'): Promise<{ success: boolean; message: string; latencyMs: number }> {
  if (!key || !key.trim()) {
    return { success: false, message: 'API key is empty', latencyMs: 0 };
  }

  const endpointModel = model === 'local-engine' ? 'gemini-3.8-flash' : model;
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${endpointModel}:generateContent?key=${encodeURIComponent(key.trim())}`;
  const start = Date.now();

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: 'Respond with the word "VALID" only.' }]
          }
        ],
        generationConfig: {
          maxOutputTokens: 10,
          temperature: 0.1
        }
      })
    });

    const latencyMs = Date.now() - start;

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      const errMsg = errData.error?.message || `HTTP ${res.status} ${res.statusText}`;
      return { success: false, message: `Validation failed: ${errMsg}`, latencyMs };
    }

    return { success: true, message: `Connected successfully to Google Gemini (${endpointModel})`, latencyMs };
  } catch (err: any) {
    return { success: false, message: `Network error: ${err.message || 'Unable to reach Gemini API'}`, latencyMs: Date.now() - start };
  }
}

/**
 * Structured schema expected from Gemini for Cross-Domain Solution Transfer
 */
export interface GeminiTransferResponse {
  transferTitle: string;
  adaptedBlueprint: string;
  feasibilityScore: number;
  verdictRationale: string;
  statutoryComplianceAudit: {
    manualId: string;
    ruleChecked: string;
    passed: boolean;
    verificationNotes: string;
  }[];
  personaOutputs: PersonaOutputs;
}

/**
 * Call Google Gemini Flash with the Bounded Training Corpus and Statutory Manuals
 */
export async function callGeminiTransferModel(options: {
  userProblem: string;
  retrievedCases: TrainingCaseStudy[];
  pattern: ProblemSignature;
  apiKey: string;
  model?: GeminiModelId;
}): Promise<{
  data: GeminiTransferResponse;
  rawResponse: any;
  latencyMs: number;
  promptTokens: number;
  candidateTokens: number;
}> {
  const { userProblem, retrievedCases, pattern, apiKey, model = 'gemini-3.8-flash' } = options;
  const start = Date.now();

  const endpointModel = model === 'local-engine' ? 'gemini-3.8-flash' : model;
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${endpointModel}:generateContent?key=${encodeURIComponent(apiKey.trim())}`;

  // Grounding prompt with the bounded training cases and the 5 statutory manuals
  const statutoryInstructions = STATUTORY_MANUALS.map(
    m => `[STATUTORY MANUAL: ${m.title} (${m.issuingAuthority})]: MANDATORY RULE: ${m.mandatoryConstraintRule}. THRESHOLD: ${m.triggerThreshold}.`
  ).join('\n\n');

  const boundedCasesPrompt = retrievedCases.map(
    c => `[CASE #${c.indexNumber}: ${c.title} (${c.sector}, ${c.region}, ${c.country})]:
- Problem: ${c.problemSummary}
- Intervention: ${c.intervention}
- Outcome: ${c.quantitativeOutcome}
- Standard: ${c.statutoryStandard || 'Standard Hydrology'}`
  ).join('\n\n');

  const systemInstruction = `You are BlueLink AI, an expert Cross-Domain Water Solutions Engine specializing in El Niño drought adaptation in India.
Your mission is to analyze a localized water scarcity problem, abstract its mathematical pattern, and adapt solutions across sectors using our BOUNDED TRAINING CORPUS of 50 empirical cases.

CRITICAL STATUTORY CONSTRAINTS:
You must strictly comply with all 5 Indian statutory hydrological manuals:
${statutoryInstructions}

BOUNDED TRAINING CORPUS KNOWLEDGE BASE (Selected Homologous Cases):
${boundedCasesPrompt}

You MUST return your analysis strictly as a valid JSON object matching the requested schema. No conversational filler, no markdown wrappers outside JSON.`;

  const userPrompt = `USER PROBLEM CONTEXT:
"${userProblem}"

MATCHED MATHEMATICAL PATTERN:
"${pattern.name}" (${pattern.tagline})
Core Mechanism: ${pattern.coreMechanism}
Mathematical Archetype: ${pattern.mathematicalArchetype}

TASK:
1. Synthesize an adapted cross-domain engineering blueprint grounded in the retrieved training cases.
2. Validate compliance against the 5 statutory manuals (e.g. ICAR-CRIDA anthesis protection, CGWB hydraulic barrier, CWC priority ladder).
3. Generate 4 tailored persona deliverables (Farmer simple steps + vernacular voice scripts, Government executive SOPs, Engineer differential equations, Researcher citations).

Return JSON with keys:
- transferTitle (string)
- adaptedBlueprint (string)
- feasibilityScore (number between 65 and 95)
- verdictRationale (string)
- statutoryComplianceAudit (array of { manualId, ruleChecked, passed, verificationNotes })
- personaOutputs (object with keys farmer, government, engineer, researcher)`;

  const payload = {
    contents: [
      {
        parts: [
          { text: userPrompt }
        ]
      }
    ],
    systemInstruction: {
      parts: [
        { text: systemInstruction }
      ]
    },
    generationConfig: {
      responseMimeType: 'application/json',
      temperature: 0.2,
      maxOutputTokens: 2500
    }
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const latencyMs = Date.now() - start;

  if (!response.ok) {
    const errorJson = await response.json().catch(() => ({}));
    throw new Error(errorJson.error?.message || `Gemini API returned status ${response.status}`);
  }

  const result = await response.json();
  const textOutput = result.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!textOutput) {
    throw new Error('Gemini API returned an empty output');
  }

  const parsedData = JSON.parse(textOutput) as GeminiTransferResponse;
  const promptTokens = result.usageMetadata?.promptTokenCount || 1250;
  const candidateTokens = result.usageMetadata?.candidatesTokenCount || 780;

  return {
    data: parsedData,
    rawResponse: result,
    latencyMs,
    promptTokens,
    candidateTokens
  };
}
