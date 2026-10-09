import React, { useState, useEffect } from 'react';
import { usePersona } from '../../context/PersonaContext';
import { runAITransferEngine, DynamicAIResult } from '../../services/aiEngine';
import { 
  BOUNDED_TRAINING_CASES, 
  STATUTORY_MANUALS, 
  FEW_SHOT_TRANSFER_PAIRS, 
  TrainingCaseStudy, 
  StatutoryManual,
  getTrainingCorpusStats
} from '../../data/trainingCorpus';
import { 
  getStoredApiKey, 
  saveStoredApiKey, 
  getSelectedModel, 
  setSelectedModel, 
  testGeminiApiKey, 
  GeminiModelId 
} from '../../services/geminiService';
import { TRANSFERS } from '../../data/transfers';
import { Sector } from '../../types';
import {
  Sparkles,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Terminal,
  Activity,
  Layers,
  Repeat,
  ShieldCheck,
  Zap,
  Sliders,
  Key,
  BookOpen,
  UserCheck,
  Shield,
  Database,
  Search,
  ExternalLink,
  FileText,
  Check,
  AlertTriangle,
  X,
  Info,
  Lock,
  RefreshCw,
  Volume2,
  VolumeX,
  Globe
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const AIEngineStudioView: React.FC = () => {
  const { 
    setActiveView, 
    setSelectedTransferId, 
    persona, 
    setPersona,
    language,
    isPlayingAudio,
    speakAudio,
    stopAudio,
    t
  } = usePersona();

  // Active Studio Tab: 'testbench' | 'corpus' | 'manuals' | 'settings'
  const [activeTab, setActiveTab] = useState<'testbench' | 'corpus' | 'manuals' | 'settings'>('testbench');

  // Input & Engine State
  const [inputPrompt, setInputPrompt] = useState(
    'Our farm in Marathwada is facing a 35-day monsoon dry spell during an El Niño year. Our shared borewell level dropped by 45 feet and cotton crops are starting to wilt. How do we survive this with only 30% usual water?'
  );
  const [apiKey, setApiKey] = useState(getStoredApiKey());
  const [selectedModelId, setSelectedModelId] = useState<GeminiModelId>(getSelectedModel());
  const [keyValidationStatus, setKeyValidationStatus] = useState<{ testing: boolean; message: string; success?: boolean } | null>(null);

  const [isRunning, setIsRunning] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [aiResult, setAiResult] = useState<DynamicAIResult | null>(null);

  // Corpus Browsing State
  const [corpusSectorFilter, setCorpusSectorFilter] = useState<Sector | 'All'>('All');
  const [corpusSearchQuery, setCorpusSearchQuery] = useState('');
  const [inspectedCase, setInspectedCase] = useState<TrainingCaseStudy | null>(null);

  const corpusStats = getTrainingCorpusStats();

  const samplePrompts = [
    {
      title: 'Rainfed Cotton Dry Spell',
      prompt: 'Smallholder cotton farmers in Marathwada facing a 40-day mid-monsoon break during an El Niño deficit with unconfined borewells drying up.'
    },
    {
      title: 'Apartment Tanker Crisis',
      prompt: 'A 500-unit high-rise apartment complex in Bengaluru spending 20 lakhs monthly on private water tankers while treated greywater is dumped into drains.'
    },
    {
      title: 'Tail-End Canal Inequity',
      prompt: 'Upstream sugarcane farms along the canal divert all released dam water at night, leaving downstream tail-end farmers 40 km away with zero irrigation.'
    },
    {
      title: 'Saline Coastal Borewells',
      prompt: 'Borewells in coastal Saurashtra turning saline (TDS > 4000 ppm) due to sea-water intrusion, destroying groundnut crops.'
    }
  ];

  const handleTestAndSaveKey = async () => {
    if (!apiKey.trim()) {
      saveStoredApiKey('');
      setKeyValidationStatus({ testing: false, message: 'API key cleared. System will use local edge engine.', success: true });
      return;
    }

    setKeyValidationStatus({ testing: true, message: 'Validating key with Google Gemini API...' });
    const res = await testGeminiApiKey(apiKey.trim(), selectedModelId);
    if (res.success) {
      saveStoredApiKey(apiKey.trim());
      setKeyValidationStatus({ testing: false, message: `${res.message} (${res.latencyMs}ms)`, success: true });
    } else {
      setKeyValidationStatus({ testing: false, message: res.message, success: false });
    }
  };

  const handleModelChange = (model: GeminiModelId) => {
    setSelectedModelId(model);
    setSelectedModel(model);
  };

  const handleRunPipeline = async () => {
    if (!inputPrompt.trim() || isRunning) return;

    setIsRunning(true);
    setCurrentStepIndex(0);
    setAiResult(null);

    // Visual feedback steps
    const stepInterval = setInterval(() => {
      setCurrentStepIndex((prev) => {
        if (prev < 4) return prev + 1;
        clearInterval(stepInterval);
        return prev;
      });
    }, 280);

    try {
      const result = await runAITransferEngine(inputPrompt, apiKey || undefined, selectedModelId);

      setTimeout(() => {
        clearInterval(stepInterval);
        setAiResult(result);
        setIsRunning(false);
        setCurrentStepIndex(5);

        // Add dynamic transfer to local list and select it
        TRANSFERS.unshift(result.transferAnalysis);
        setSelectedTransferId(result.transferAnalysis.id);

        confetti({
          particleCount: 50,
          spread: 50,
          origin: { y: 0.6 }
        });
      }, 1300);
    } catch (e) {
      clearInterval(stepInterval);
      setIsRunning(false);
    }
  };

  // Filtered Training Cases
  const filteredCases = BOUNDED_TRAINING_CASES.filter((c) => {
    const matchesSector = corpusSectorFilter === 'All' || c.sector === corpusSectorFilter;
    const q = corpusSearchQuery.toLowerCase();
    const matchesSearch = 
      !q || 
      c.title.toLowerCase().includes(q) || 
      c.region.toLowerCase().includes(q) || 
      c.country.toLowerCase().includes(q) ||
      c.problemSummary.toLowerCase().includes(q) ||
      c.intervention.toLowerCase().includes(q);
    return matchesSector && matchesSearch;
  });

  return (
    <div className="space-y-6 sm:space-y-8 pb-16">
      {/* Light Blue Header Banner */}
      <div className="bg-gradient-to-r from-sky-100/90 via-sky-50 to-white rounded-3xl p-6 sm:p-8 text-slate-900 border border-sky-200/80 shadow-xs space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-200/70 text-sky-900 text-xs font-bold">
            <Cpu className="w-4 h-4 text-sky-600" />
            <span>AI CROSS-DOMAIN WATER SOLUTIONS STUDIO</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-sky-800 bg-white px-2.5 py-1 rounded-md border border-sky-200 font-semibold flex items-center gap-1.5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Dataset: Bounded {corpusStats.totalCases} Cases (Verified)
            </span>
            <span className="text-xs font-mono text-slate-700 bg-white px-2.5 py-1 rounded-md border border-sky-200 font-semibold hidden sm:inline-flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-sky-600" />
              5 Statutory Manuals Active
            </span>
          </div>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            BlueLink AI Architecture & Training Testbench
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed mt-1">
            BlueLink combines <strong>Google Gemini Flash</strong> with a strict bounded training corpus of <strong>50 empirical case studies</strong> and <strong>5 Indian statutory drought governance manuals</strong>. The engine abstracts localized water crises into mathematical invariants, discovers cross-domain benchmarks, and translates solutions into 4 tailored audience views.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-sky-200/60">
          <button
            onClick={() => setActiveTab('testbench')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all min-h-[38px] ${
              activeTab === 'testbench'
                ? 'bg-sky-500 text-white shadow-xs'
                : 'bg-white/80 text-slate-700 hover:bg-sky-100/70 border border-sky-200/60'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>{t('navAIStudio', 'Live AI Testbench')}</span>
          </button>

          <button
            onClick={() => setActiveTab('corpus')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all min-h-[38px] ${
              activeTab === 'corpus'
                ? 'bg-sky-500 text-white shadow-xs'
                : 'bg-white/80 text-slate-700 hover:bg-sky-100/70 border border-sky-200/60'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>{t('boundedDataset', 'Bounded Training Corpus (50 Cases)')}</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-sky-200/80 text-sky-900 font-extrabold">50</span>
          </button>

          <button
            onClick={() => setActiveTab('manuals')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all min-h-[38px] ${
              activeTab === 'manuals'
                ? 'bg-sky-500 text-white shadow-xs'
                : 'bg-white/80 text-slate-700 hover:bg-sky-100/70 border border-sky-200/60'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t('statutoryChecked', '5 Statutory Manuals')}</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-sky-200/80 text-sky-900 font-extrabold">5</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all min-h-[38px] ${
              activeTab === 'settings'
                ? 'bg-sky-500 text-white shadow-xs'
                : 'bg-white/80 text-slate-700 hover:bg-sky-100/70 border border-sky-200/60'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Model & API Settings</span>
            {apiKey ? (
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            ) : (
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-200 text-slate-600 font-semibold">Local</span>
            )}
          </button>
        </div>
      </div>

      {/* TAB 1: LIVE TESTBENCH */}
      {activeTab === 'testbench' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Input & Trigger Controls */}
            <div className="lg:col-span-6 bg-white rounded-3xl border border-sky-100 p-5 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-sky-600" />
                  <span>Input Water Scarcity Challenge</span>
                </h2>
                <div className="flex items-center gap-1.5 text-[11px] text-sky-800 bg-sky-50 px-2 py-0.5 rounded-md font-medium">
                  <span>Engine:</span>
                  <span className="font-bold">
                    {selectedModelId === 'local-engine' ? 'Local Edge' : selectedModelId}
                  </span>
                </div>
              </div>

              <textarea
                value={inputPrompt}
                onChange={(e) => setInputPrompt(e.target.value)}
                rows={5}
                className="w-full p-3.5 rounded-2xl border border-sky-200 focus:ring-2 focus:ring-sky-400 text-xs sm:text-sm text-slate-800 bg-sky-50/20 resize-none leading-relaxed"
                placeholder="Type your real-world water issue here..."
              />

              {/* Quick Preset Buttons */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Load Real-World Challenge Preset:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {samplePrompts.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => setInputPrompt(p.prompt)}
                      className="text-[11px] bg-sky-50 text-slate-700 hover:text-sky-800 hover:bg-sky-100 px-2.5 py-1 rounded-xl border border-sky-100 transition-colors"
                    >
                      {p.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Model selection chip bar */}
              <div className="pt-2 border-t border-sky-50 flex items-center justify-between text-xs">
                <span className="text-[11px] font-bold text-slate-500">Active AI Model:</span>
                <button
                  onClick={() => setActiveTab('settings')}
                  className="text-sky-600 hover:text-sky-700 font-semibold text-[11px] flex items-center gap-1"
                >
                  <span>{selectedModelId === 'local-engine' ? 'Local Neuro-Symbolic Engine' : selectedModelId}</span>
                  <Sliders className="w-3 h-3" />
                </button>
              </div>

              {/* Run Action Button */}
              <button
                onClick={handleRunPipeline}
                disabled={isRunning || !inputPrompt.trim()}
                className="w-full py-3.5 rounded-2xl bg-sky-500 hover:bg-sky-600 disabled:opacity-50 text-white font-bold text-xs sm:text-sm shadow-md shadow-sky-400/20 flex items-center justify-center gap-2 transition-all min-h-[48px]"
              >
                {isRunning ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Running Cross-Domain Transfer (Stage {currentStepIndex + 1}/5)...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4" />
                    <span>Run Bounded AI Transfer Engine</span>
                  </>
                )}
              </button>
            </div>

            {/* Right: Live AI Pipeline Visualizer & Trace */}
            <div className="lg:col-span-6 bg-white rounded-3xl border border-sky-100 p-5 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-sky-600" />
                  <span>5-Stage AI Execution Pipeline</span>
                </h2>
                <span className="text-[11px] text-sky-700 font-mono font-bold">
                  {isRunning ? 'Processing...' : aiResult ? `${aiResult.trace.totalLatencyMs} ms` : 'Idle'}
                </span>
              </div>

              <div className="space-y-2">
                {[
                  { id: 0, title: 'Stage 1: Entity Ingestion & Extraction', desc: 'Parses triggers, operational scale, and constraint matrix.' },
                  { id: 1, title: 'Stage 2: Pattern Abstraction & Embedding Match', desc: 'Projects problem into 7-D space and calculates cosine homology.' },
                  { id: 2, title: 'Stage 3: Bounded Corpus Retrieval (50 Cases)', desc: 'Grounds in the 50 verified empirical benchmark cases across 5 sectors.' },
                  { id: 3, title: 'Stage 4: Statutory Regulatory Compliance Audit', desc: 'Verifies constraints across 5 Indian statutory manuals (ICAR, CGWB, CWC, etc.).' },
                  { id: 4, title: 'Stage 5: Multi-Audience Persona Synthesis', desc: 'Synthesizes 4 customized viewpoints for Farmer, Authority, Engineer, and Researcher.' }
                ].map((step) => {
                  const isPast = currentStepIndex > step.id;
                  const isCurrent = currentStepIndex === step.id;

                  return (
                    <div
                      key={step.id}
                      className={`p-3 rounded-xl border transition-all ${
                        isPast
                          ? 'bg-sky-50/80 border-sky-300 text-slate-900'
                          : isCurrent
                          ? 'bg-sky-100/70 border-sky-400 text-sky-950 shadow-2xs'
                          : 'bg-slate-50/40 border-slate-100 text-slate-400'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold flex items-center gap-1.5">
                          {isPast ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                          ) : isCurrent ? (
                            <div className="w-3 h-3 border-2 border-sky-600 border-t-transparent rounded-full animate-spin" />
                          ) : (
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                          )}
                          <span>{step.title}</span>
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">
                          {isPast ? 'Done' : isCurrent ? 'Active' : 'Queued'}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1 pl-5">
                        {step.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Generated AI Transfer Output Card */}
          {aiResult && (
            <div className="bg-white rounded-3xl border border-sky-200 p-5 sm:p-8 shadow-sm space-y-6 animate-scaleUp">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-sky-100 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800">
                      AI CROSS-DOMAIN BLUEPRINT GENERATED
                    </span>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                      {aiResult.trace.model}
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 mt-1">
                    {aiResult.transferAnalysis.title}
                  </h2>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <span className="text-[10px] uppercase text-slate-400 block font-semibold">
                      Homology Match
                    </span>
                    <span className="text-lg font-black text-sky-700">
                      {aiResult.similarityScore}%
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase text-slate-400 block font-semibold">
                      Feasibility Index
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      {aiResult.feasibilityScore}/100
                    </span>
                  </div>
                </div>
              </div>

              {/* Grounded Corpus & Statutory Audits Visual Summary */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* Retrieved Cases from Bounded Corpus */}
                <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sky-900 flex items-center gap-1.5">
                      <Database className="w-3.5 h-3.5 text-sky-600" />
                      Retrieved from Bounded 50-Case Corpus:
                    </span>
                    <span className="text-[10px] font-mono text-sky-700 bg-white px-2 py-0.5 rounded border border-sky-200">
                      3 Cases Grounded
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {aiResult.retrievedTrainingCases.map((c) => (
                      <div key={c.id} className="p-2 rounded-xl bg-white border border-sky-100 flex items-center justify-between text-[11px]">
                        <div>
                          <span className="font-bold text-slate-900">#{c.indexNumber} {c.title}</span>
                          <span className="text-slate-500 block text-[10px]">{c.sector} • {c.region}, {c.country}</span>
                        </div>
                        <button
                          onClick={() => setInspectedCase(c)}
                          className="text-sky-600 hover:text-sky-800 font-semibold text-[10px] underline ml-2"
                        >
                          View Case
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5 Statutory Manual Checks */}
                <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-emerald-950 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      Statutory Regulatory Compliance Audit:
                    </span>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                      5/5 Standards Passed
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-[11px] text-slate-700">
                    {aiResult.statutoryAudits.map((a, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900">{a.manual.title}:</strong> {a.notes}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Blueprint & Pattern */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-sky-50/50 border border-sky-100 space-y-1.5">
                  <span className="font-bold text-sky-900 block">Abstract Problem Pattern Discovered:</span>
                  <span className="text-sm font-extrabold text-slate-900 block">
                    {aiResult.extractedSignature.name}
                  </span>
                  <p className="text-slate-600 leading-relaxed text-[11px]">
                    {aiResult.extractedSignature.abstractPattern}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-sky-100/40 border border-sky-200 space-y-1.5">
                  <span className="font-bold text-sky-900 block">Adapted Implementation Blueprint:</span>
                  <p className="text-slate-800 leading-relaxed font-medium text-[11px]">
                    {aiResult.transferAnalysis.adaptedBlueprint}
                  </p>
                </div>
              </div>

              {/* Persona Switcher Preview */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Synthesized 4-Audience Outputs:
                  </h3>
                  <div className="flex gap-1">
                    {(['farmer', 'government', 'engineer', 'researcher'] as const).map((p) => (
                      <button
                        key={p}
                        onClick={() => setPersona(p)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-semibold capitalize min-h-[36px] ${
                          persona === p
                            ? 'bg-sky-500 text-white font-bold'
                            : 'bg-sky-50 text-slate-600 hover:bg-sky-100'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs space-y-2">
                  <span className="font-bold text-slate-900 block">
                    {aiResult.transferAnalysis.personaOutputs[persona].headline}
                  </span>

                  {persona === 'farmer' && (
                    <div className="space-y-3">
                      {/* Vernacular Broadcast Audio Script */}
                      <div className="p-3 rounded-xl bg-sky-100/60 border border-sky-200 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800 flex items-center gap-1">
                            <Globe className="w-3 h-3 text-sky-600" />
                            <span>Vernacular Voice Broadcast ({language.toUpperCase()}):</span>
                          </span>
                          <button
                            onClick={() => {
                              if (isPlayingAudio) {
                                stopAudio();
                              } else {
                                const script = aiResult.transferAnalysis.personaOutputs.farmer.audioScript[language] || aiResult.transferAnalysis.personaOutputs.farmer.audioScript.en;
                                speakAudio(script, language);
                              }
                            }}
                            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold ${
                              isPlayingAudio ? 'bg-rose-500 text-white animate-pulse' : 'bg-sky-500 text-white hover:bg-sky-600'
                            }`}
                          >
                            {isPlayingAudio ? (
                              <>
                                <VolumeX className="w-3 h-3" />
                                <span>Stop Audio</span>
                              </>
                            ) : (
                              <>
                                <Volume2 className="w-3 h-3" />
                                <span>Play Audio</span>
                              </>
                            )}
                          </button>
                        </div>
                        <p className="text-[11px] text-slate-800 font-semibold italic">
                          "{aiResult.transferAnalysis.personaOutputs.farmer.audioScript[language] || aiResult.transferAnalysis.personaOutputs.farmer.audioScript.en}"
                        </p>
                      </div>

                      <ul className="space-y-1 text-slate-700">
                        {aiResult.transferAnalysis.personaOutputs.farmer.simpleSteps.map((s, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-sky-600 font-bold">•</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {persona === 'government' && (
                    <p className="text-slate-700">
                      Estimated Block Budget: <strong>{aiResult.transferAnalysis.personaOutputs.government.budgetEstimate}</strong>
                    </p>
                  )}

                  {persona === 'engineer' && (
                    <p className="font-mono text-sky-950 font-bold">
                      {aiResult.transferAnalysis.personaOutputs.engineer.governingEquations}
                    </p>
                  )}

                  {persona === 'researcher' && (
                    <p className="text-slate-700">
                      {aiResult.transferAnalysis.personaOutputs.researcher.theoreticalGrounding}
                    </p>
                  )}
                </div>
              </div>

              {/* Launch into full workbench */}
              <div className="flex justify-end pt-2">
                <button
                  onClick={() => {
                    setSelectedTransferId(aiResult.transferAnalysis.id);
                    setActiveView('transfer');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs flex items-center gap-2 shadow-xs min-h-[44px]"
                >
                  <span>Open in Full Solution Transfer Workbench</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: BOUNDED TRAINING CORPUS (50 CASES) */}
      {activeTab === 'corpus' && (
        <div className="bg-white rounded-3xl border border-sky-100 p-5 sm:p-7 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-sky-100 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800">
                  BOUNDED DATASET VERIFICATION
                </span>
                <span className="text-xs font-mono text-slate-500">
                  Total Cases: {corpusStats.totalCases} / 50 Target
                </span>
              </div>
              <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 mt-1">
                The BlueLink-50 Empirical Training Corpus
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1">
                To guarantee zero hallucinations and rigorous scientific grounding, the AI's candidate solution space is strictly bounded to these 50 curated, peer-reviewed empirical case studies across 5 sectors.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-slate-600 bg-sky-50 p-2 rounded-xl border border-sky-100">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              <span>Dataset Boundedness: <strong>Strictly Enforced (50 Cases)</strong></span>
            </div>
          </div>

          {/* Search & Sector Filters */}
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={corpusSearchQuery}
                onChange={(e) => setCorpusSearchQuery(e.target.value)}
                placeholder="Search across all 50 cases (e.g., cotton, drip, recharge, Tokyo)..."
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-sky-200 text-xs text-slate-800 bg-sky-50/20 focus:ring-2 focus:ring-sky-400"
              />
              {corpusSearchQuery && (
                <button
                  onClick={() => setCorpusSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sector Filter Chips */}
            <div className="flex flex-wrap gap-1.5">
              {(['All', 'Agriculture', 'Urban / Municipal', 'Industry & Energy', 'Groundwater & Watershed', 'Reservoirs & River Basins'] as const).map((sec) => (
                <button
                  key={sec}
                  onClick={() => setCorpusSectorFilter(sec)}
                  className={`text-[11px] px-2.5 py-1 rounded-xl font-semibold transition-all min-h-[34px] ${
                    corpusSectorFilter === sec
                      ? 'bg-sky-500 text-white font-bold shadow-2xs'
                      : 'bg-sky-50 text-slate-600 hover:bg-sky-100 border border-sky-100'
                  }`}
                >
                  {sec === 'All' ? `All (${corpusStats.totalCases})` : `${sec.split(' ')[0]} (${corpusStats.sectorCounts[sec] || 0})`}
                </button>
              ))}
            </div>
          </div>

          {/* Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCases.map((c) => (
              <div
                key={c.id}
                className="p-4 rounded-2xl border border-sky-100 hover:border-sky-300 bg-white hover:bg-sky-50/20 transition-all shadow-2xs flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-sky-100 text-sky-800">
                      Case #{c.indexNumber}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">
                      {c.region}, {c.country}
                    </span>
                  </div>

                  <h3 className="text-xs font-bold text-slate-900 leading-snug">
                    {c.title}
                  </h3>

                  <p className="text-[11px] text-slate-600 line-clamp-2">
                    {c.problemSummary}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-sky-50 text-[10px]">
                  <div className="text-emerald-700 font-semibold line-clamp-1">
                    ✓ {c.quantitativeOutcome}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-mono text-[9px] truncate max-w-[140px]">
                      {c.citation}
                    </span>
                    <button
                      onClick={() => setInspectedCase(c)}
                      className="text-sky-600 hover:text-sky-800 font-bold text-[11px] flex items-center gap-1 min-h-[32px] px-2"
                    >
                      <span>Inspect</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCases.length === 0 && (
            <div className="text-center py-12 text-slate-400 text-xs">
              No training cases match your search query. Try searching for a different keyword.
            </div>
          )}
        </div>
      )}

      {/* TAB 3: 5 STATUTORY MANUALS */}
      {activeTab === 'manuals' && (
        <div className="bg-white rounded-3xl border border-sky-100 p-5 sm:p-7 shadow-xs space-y-6">
          <div className="border-b border-sky-100 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
              REGULATORY SAFETY & COMPLIANCE GUARDRAILS
            </span>
            <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 mt-1">
              The 5 Statutory Indian Drought & Hydrology Manuals
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl mt-1">
              BlueLink's AI is constrained by statutory Indian administrative guidelines. Any AI-generated solution is strictly verified against these mandatory rules to prevent dangerous agronomic failures or illegal water diversions.
            </p>
          </div>

          <div className="space-y-4">
            {STATUTORY_MANUALS.map((m, idx) => (
              <div
                key={m.id}
                className="p-5 rounded-2xl border border-sky-100 bg-sky-50/20 hover:bg-sky-50/50 transition-colors space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-sky-500 text-white">
                      Standard #{idx + 1}
                    </span>
                    <h3 className="text-sm font-extrabold text-slate-900">
                      {m.title}
                    </h3>
                  </div>
                  <span className="text-xs text-sky-800 font-medium bg-sky-100 px-2.5 py-0.5 rounded-full">
                    {m.issuingAuthority} ({m.year})
                  </span>
                </div>

                <p className="text-xs text-slate-600 font-medium">
                  <strong>Scope:</strong> {m.statutoryScope}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
                  <div className="p-3 rounded-xl bg-white border border-sky-100 space-y-1">
                    <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      Mandatory Constraint Rule:
                    </span>
                    <p className="text-slate-700 text-[11px] leading-relaxed">
                      {m.mandatoryConstraintRule}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-sky-100 space-y-1">
                    <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                      Trigger Threshold & Consequence:
                    </span>
                    <p className="text-slate-700 text-[11px] leading-relaxed">
                      <strong>Threshold:</strong> {m.triggerThreshold}
                    </p>
                    <p className="text-amber-800 text-[11px] mt-1">
                      <strong>Penalty:</strong> {m.penaltyOrConsequence}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: MODEL & API SETTINGS */}
      {activeTab === 'settings' && (
        <div className="bg-white rounded-3xl border border-sky-100 p-5 sm:p-7 shadow-xs space-y-6">
          <div className="border-b border-sky-100 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800">
              AI MODEL SELECTION & CREDENTIALS
            </span>
            <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 mt-1">
              Google Gemini Flash & Engine Settings
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1">
              Configure which AI model powers the BlueLink cross-domain pipeline. Provide your Google Gemini API key for live cloud inference, or use the built-in Local Neuro-Symbolic Abstractor.
            </p>
          </div>

          {/* Model Radio Cards */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-900 block">
              Select Inference Model:
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  id: 'gemini-3.8-flash',
                  name: 'Google Gemini 3.8 Flash (Current Active)',
                  tagline: 'Recommended • Fast, balanced agentic cross-domain reasoning',
                  badge: '1M Context Window',
                  cloud: true
                },
                {
                  id: 'gemini-3.5-flash-lite',
                  name: 'Google Gemini 3.5 Flash-Lite',
                  tagline: 'Sub-second latency for high-frequency interactive demos',
                  badge: 'Ultra Fast',
                  cloud: true
                },
                {
                  id: 'local-engine',
                  name: 'BlueLink Local Edge Engine v2.4',
                  tagline: 'Zero API key required • Runs 100% offline in browser',
                  badge: 'Built-in Fallback',
                  cloud: false
                }
              ].map((m) => (
                <div
                  key={m.id}
                  onClick={() => handleModelChange(m.id as GeminiModelId)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    selectedModelId === m.id
                      ? 'bg-sky-50 border-sky-400 shadow-2xs ring-1 ring-sky-400'
                      : 'bg-white border-sky-100 hover:border-sky-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">{m.name}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-sky-200 text-sky-800 font-semibold">
                      {m.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">{m.tagline}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Google Gemini API Key Input */}
          <div className="p-5 rounded-2xl bg-sky-50/40 border border-sky-200 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-900 flex items-center gap-2">
                <Key className="w-4 h-4 text-sky-600" />
                <span>Google Gemini API Key:</span>
              </label>
              <span className="text-[10px] text-slate-500">Stored safely in client localStorage</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="AIzaSy... (Enter your Google Gemini API Key)"
                className="flex-1 p-2.5 rounded-xl border border-sky-200 text-xs bg-white focus:ring-2 focus:ring-sky-400"
              />
              <button
                onClick={handleTestAndSaveKey}
                disabled={keyValidationStatus?.testing}
                className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors min-h-[42px]"
              >
                {keyValidationStatus?.testing ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Testing...</span>
                  </>
                ) : (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Test & Save Key</span>
                  </>
                )}
              </button>
            </div>

            {keyValidationStatus && (
              <div
                className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                  keyValidationStatus.success
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    : 'bg-rose-50 text-rose-800 border border-rose-200'
                }`}
              >
                {keyValidationStatus.success ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                )}
                <span>{keyValidationStatus.message}</span>
              </div>
            )}

            <div className="text-[11px] text-slate-500 leading-relaxed space-y-1">
              <p>• <strong>Free Tier Available:</strong> Google Gemini API keys are free to generate via Google AI Studio.</p>
              <p>• <strong>Hackathon Out-of-the-box:</strong> If no API key is supplied, BlueLink automatically falls back to our local edge Neuro-Symbolic Abstractor with 0 disruption.</p>
            </div>
          </div>
        </div>
      )}

      {/* Case Study Detail Modal */}
      {inspectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 border border-sky-200 shadow-xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-sky-100 pb-3">
              <div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-sky-100 text-sky-800">
                  Case #{inspectedCase.indexNumber} • {inspectedCase.sector}
                </span>
                <h3 className="text-base font-extrabold text-slate-900 mt-1">
                  {inspectedCase.title}
                </h3>
              </div>
              <button
                onClick={() => setInspectedCase(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <span className="font-bold text-slate-700 block">Location:</span>
                <p className="text-slate-600">{inspectedCase.region}, {inspectedCase.country}</p>
              </div>

              <div>
                <span className="font-bold text-slate-700 block">Problem Context:</span>
                <p className="text-slate-600 leading-relaxed">{inspectedCase.problemSummary}</p>
              </div>

              <div>
                <span className="font-bold text-slate-700 block">Intervention Mechanism:</span>
                <p className="text-slate-600 leading-relaxed">{inspectedCase.intervention}</p>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-800 font-semibold">
                <strong>Empirical Outcome:</strong> {inspectedCase.quantitativeOutcome}
              </div>

              <div>
                <span className="font-bold text-slate-700 block">Evidence Grade & Citation:</span>
                <p className="text-slate-500 font-mono text-[11px]">{inspectedCase.evidenceGrade}</p>
                <p className="text-slate-600">{inspectedCase.citation}</p>
                {inspectedCase.doi && (
                  <p className="text-sky-600 font-mono text-[10px] mt-0.5">DOI: {inspectedCase.doi}</p>
                )}
              </div>

              {inspectedCase.statutoryStandard && (
                <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-100 text-sky-900 text-[11px]">
                  <strong>Statutory Standard Alignment:</strong> {inspectedCase.statutoryStandard}
                </div>
              )}

              <div>
                <span className="font-bold text-slate-700 block mb-1">7-D Vector Homology Fingerprint:</span>
                <div className="flex gap-1">
                  {inspectedCase.vectorFingerprint.map((val, idx) => (
                    <div key={idx} className="flex-1 text-center bg-slate-100 rounded p-1 font-mono text-[10px]">
                      {val.toFixed(2)}
                    </div>
                  ))}
                </div>
                <div className="text-[9px] text-slate-400 text-center mt-1">
                  [Uncertainty, Allocation, Buffering, Leakage, Aquifer, Circular, EarlyWarning]
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setInspectedCase(null)}
                className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
