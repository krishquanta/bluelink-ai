export type Persona = 'farmer' | 'government' | 'engineer' | 'researcher';

export type Language = 'en' | 'hi' | 'ta' | 'kn' | 'te';

export type Sector = 
  | 'Agriculture'
  | 'Urban / Municipal'
  | 'Industry & Energy'
  | 'Groundwater & Watershed'
  | 'Reservoirs & River Basins';

export type FeasibilityVerdict = 
  | 'Proven' 
  | 'Promising (Needs Pilot)' 
  | 'High Risk / Conditional' 
  | 'Not Transferable';

export type EvidenceGrade = 
  | 'Level 1: Peer-Reviewed Field Trial'
  | 'Level 2: Government SOP / Manual'
  | 'Level 3: Municipal / Empirical Pilot'
  | 'Level 4: Hydrological Simulation'
  | 'Level 5: AI Abstracted Hypothesis';

export interface ProblemSignature {
  id: string;
  name: string;
  category: string;
  tagline: string;
  abstractPattern: string;
  coreMechanism: string;
  mathematicalArchetype: string;
  keyVariables: string[];
  applicableSectors: Sector[];
  exampleAnalogies: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  sector: Sector;
  region: string;
  stateOrCountry: string;
  climateTrigger: string;
  problemDescription: string;
  problemSignatureId: string;
  solutionMechanism: string;
  outcomes: string;
  evidenceGrade: EvidenceGrade;
  sourceCitation: string;
  doi?: string;
  keyMetrics: { label: string; value: string }[];
  tags: string[];
  imageUrl?: string;
}

export interface GapDimension {
  score: number; // 0 - 100, where 100 means high match / low gap
  source: string;
  target: string;
  gapDescription: string;
  substituteMechanism: string;
}

export interface ValidationCheck {
  id: string;
  title: string;
  category: 'Assumption' | 'Constraint' | 'Operational' | 'Safety';
  status: 'pass' | 'warning' | 'fail';
  detail: string;
}

export interface PersonaOutputs {
  farmer: {
    headline: string;
    simpleSteps: string[];
    actionPlan: string;
    audioScript: Record<Language, string>;
    lowCostTips: string[];
  };
  government: {
    headline: string;
    sopWorkflow: { phase: string; trigger: string; action: string; owner: string }[];
    budgetEstimate: string;
    policyRequirements: string[];
    monitoringKPIs: string[];
  };
  engineer: {
    headline: string;
    technicalModel: string;
    governingEquations: string;
    inputParameters: { name: string; symbol: string; unit: string; source: string }[];
    telemetryArchitecture: string;
    errorTolerance: string;
  };
  researcher: {
    headline: string;
    theoreticalGrounding: string;
    comparativeAnalysis: string;
    confidenceInterval: string;
    knownGaps: string[];
    citations: { title: string; authors: string; year: string; journal: string; doi?: string }[];
  };
}

export interface TransferAnalysis {
  id: string;
  title: string;
  sourceCaseId: string;
  sourceSector: Sector;
  targetSector: Sector;
  targetContext: string;
  targetRegion: string;
  patternId: string;
  similarityScore: number;
  feasibilityScore: number;
  gapAnalysis: {
    dataAvailability: GapDimension;
    budgetAndCost: GapDimension;
    scaleAndGranularity: GapDimension;
    technicalSkills: GapDimension;
    governanceRegulation: GapDimension;
    physicalInfrastructure: GapDimension;
  };
  adaptedBlueprint: string;
  verdict: FeasibilityVerdict;
  verdictRationale: string;
  validationChecks: ValidationCheck[];
  personaOutputs: PersonaOutputs;
}

export interface RegionDroughtStatus {
  id: string;
  name: string;
  state: string;
  riverBasin: string;
  rainfallDeficitPct: number; // e.g. -38%
  reservoirStoragePct: number; // e.g. 29% of FRL
  groundwaterStress: 'Critical' | 'Semi-Critical' | 'Over-Exploited' | 'Safe';
  spiIndex: number; // e.g. -1.82
  elNinoSensitivity: 'Extreme' | 'High' | 'Moderate';
  activeAlertLevel: 'Red (Severe)' | 'Orange (Moderate)' | 'Yellow (Advisory)';
  recommendedPatterns: string[];
  description: string;
}

export interface EvidenceSource {
  id: string;
  title: string;
  authors: string;
  year: number;
  sourceType: 'Journal Paper' | 'Government Manual' | 'Agency Bulletin' | 'UN/World Bank Report' | 'Technical Standard';
  publisher: string;
  evidenceGrade: EvidenceGrade;
  doiOrUrl: string;
  abstractSummary: string;
  keyFindings: string[];
  tags: string[];
}

export interface ContributedCase {
  id: string;
  title: string;
  contributorName: string;
  organization: string;
  organizationType: 'NGO' | 'Government Authority' | 'Research Institution' | 'Farmer Producer Org' | 'Industry';
  sector: Sector;
  region: string;
  problemDescription: string;
  solutionMechanism: string;
  outcomes: string;
  evidenceLink: string;
  proposedPattern: string;
  status: 'Pending Review' | 'Verified' | 'Community Sourced';
  submittedDate: string;
}
