import React, { useState } from 'react';
import { usePersona } from '../../context/PersonaContext';
import { runAITransferEngine, DynamicAIResult } from '../../services/aiEngine';
import {
  Sparkles,
  Zap,
  ArrowRight,
  CheckCircle2,
  Volume2,
  VolumeX,
  Droplets,
  Activity,
  FileText,
  ShieldCheck,
  Globe,
  RefreshCw
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const HomeView: React.FC = () => {
  const { 
    setActiveView, 
    setSelectedTransferId, 
    language, 
    isPlayingAudio, 
    speakAudio, 
    stopAudio, 
    t 
  } = usePersona();

  const [problemInput, setProblemInput] = useState(
    'Our farm in Marathwada is facing a 35-day monsoon dry spell during an El Niño year. Borewell water is dropping fast and cotton crops are starting to wilt. How do we survive this with only 30% usual water?'
  );
  const [isSolving, setIsSolving] = useState(false);
  const [aiResult, setAiResult] = useState<DynamicAIResult | null>(null);

  const quickPrompts = [
    {
      emoji: '🌾',
      label: 'Farm Borewell Dry Spell',
      text: 'Smallholder cotton farmers in Marathwada facing a 40-day mid-monsoon break during an El Niño deficit with unconfined borewells drying up.'
    },
    {
      emoji: '🏢',
      label: 'Apartment Tanker Crisis',
      text: 'A 500-unit high-rise apartment complex in Bengaluru spending 20 lakhs monthly on private water tankers while treated greywater is dumped into drains.'
    },
    {
      emoji: '🌊',
      label: 'Canal Tail-End Inequity',
      text: 'Upstream sugarcane farms along the canal divert all released dam water at night, leaving downstream tail-end farmers 40 km away with zero irrigation.'
    },
    {
      emoji: '🚰',
      label: 'Saline Borewell Water',
      text: 'Borewells in coastal Saurashtra turning saline (TDS > 4000 ppm) due to sea-water intrusion, destroying groundnut crops.'
    }
  ];

  const handleSolve = async (promptToUse?: string) => {
    const text = (promptToUse || problemInput).trim();
    if (!text || isSolving) return;

    setIsSolving(true);
    try {
      const result = await runAITransferEngine(text);
      setAiResult(result);
      setSelectedTransferId(result.transferAnalysis.id);

      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsSolving(false);
    }
  };

  const handlePlayVoice = () => {
    if (!aiResult) return;
    if (isPlayingAudio) {
      stopAudio();
    } else {
      const script =
        aiResult.transferAnalysis.personaOutputs.farmer.audioScript[language] ||
        aiResult.transferAnalysis.personaOutputs.farmer.audioScript.en;
      speakAudio(script, language);
    }
  };

  return (
    <div className="space-y-8 sm:space-y-12 pb-16 max-w-5xl mx-auto">
      {/* Friendly Hero Banner */}
      <section className="text-center space-y-3 pt-2 sm:pt-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-sky-600" />
          <span>AI-POWERED CROSS-DOMAIN WATER SOLUTIONS</span>
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Solve Any Water Crisis with{' '}
          <span className="bg-gradient-to-r from-sky-600 to-teal-600 bg-clip-text text-transparent">
            BlueLink AI
          </span>
        </h1>

        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          From failing farm borewells to municipal tanker shortages, get immediate, verified solutions adapted from real-world global benchmarks.
        </p>
      </section>

      {/* Main Interactive AI Problem Solver Box */}
      <section className="bg-white rounded-3xl border border-sky-200/90 shadow-md p-5 sm:p-8 space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
            <Droplets className="w-4 h-4 text-sky-600" />
            <span>Describe your water challenge:</span>
          </label>
          <span className="text-[11px] text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full font-semibold border border-sky-100">
            Powered by Gemini Flash & 50 Cases
          </span>
        </div>

        <textarea
          value={problemInput}
          onChange={(e) => setProblemInput(e.target.value)}
          rows={3}
          className="w-full p-4 rounded-2xl border border-sky-200 focus:ring-2 focus:ring-sky-400 text-xs sm:text-sm text-slate-800 bg-sky-50/20 resize-none leading-relaxed placeholder:text-slate-400"
          placeholder="e.g. Our cotton crop is drying up after 30 days of no rain and the well is low. What can we do with 30% water?"
        />

        {/* 1-Tap Example Challenge Chips */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            Or tap an example to test instantly:
          </span>
          <div className="flex flex-wrap gap-2">
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setProblemInput(p.text);
                  handleSolve(p.text);
                }}
                className="text-xs bg-sky-50/70 hover:bg-sky-100 text-slate-700 hover:text-sky-900 px-3 py-1.5 rounded-xl border border-sky-100 transition-colors flex items-center gap-1.5 font-medium"
              >
                <span>{p.emoji}</span>
                <span>{p.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Big Action Button */}
        <button
          onClick={() => handleSolve()}
          disabled={isSolving || !problemInput.trim()}
          className="w-full py-3.5 sm:py-4 rounded-2xl bg-sky-500 hover:bg-sky-600 disabled:opacity-50 text-white font-extrabold text-sm sm:text-base shadow-md shadow-sky-400/25 flex items-center justify-center gap-2 transition-all min-h-[50px]"
        >
          {isSolving ? (
            <>
              <RefreshCw className="w-5 h-5 animate-spin" />
              <span>Analyzing Problem & Matching Solutions...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              <span>Find Solution with AI</span>
            </>
          )}
        </button>
      </section>

      {/* Generated AI Solution Card (Clean, Simple, Actionable) */}
      {aiResult && (
        <section className="bg-gradient-to-br from-white via-sky-50/40 to-white rounded-3xl border border-sky-300 p-5 sm:p-8 shadow-md space-y-6 animate-scaleUp">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-sky-100 pb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                AI SOLUTION GENERATED
              </span>
              <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 mt-1">
                {aiResult.bestSourceCase.title} ➔ Adapted for Your Context
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <span className="text-[10px] uppercase text-slate-400 block font-semibold">
                  Match Score
                </span>
                <span className="text-lg font-black text-sky-700">
                  {aiResult.similarityScore}%
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase text-slate-400 block font-semibold">
                  Feasibility
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  {aiResult.feasibilityScore}/100
                </span>
              </div>
            </div>
          </div>

          {/* Vernacular Voice Broadcast Box */}
          <div className="p-4 rounded-2xl bg-sky-100/60 border border-sky-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-sky-800 tracking-wider flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-sky-600" />
                <span>Audio Advisory in {language.toUpperCase()}:</span>
              </span>
              <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                "{aiResult.transferAnalysis.personaOutputs.farmer.audioScript[language] || aiResult.transferAnalysis.personaOutputs.farmer.audioScript.en}"
              </p>
            </div>

            <button
              onClick={handlePlayVoice}
              className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold shadow-xs transition-all min-h-[40px] ${
                isPlayingAudio
                  ? 'bg-rose-500 hover:bg-rose-600 text-white animate-pulse'
                  : 'bg-sky-500 hover:bg-sky-600 text-white'
              }`}
            >
              {isPlayingAudio ? (
                <>
                  <VolumeX className="w-4 h-4" />
                  <span>Stop</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4" />
                  <span>Listen Voice</span>
                </>
              )}
            </button>
          </div>

          {/* 3 Simple Action Steps */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              3 Immediate Action Steps:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {aiResult.transferAnalysis.personaOutputs.farmer.simpleSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-sky-100 shadow-2xs space-y-1.5"
                >
                  <div className="w-7 h-7 rounded-full bg-sky-500 text-white flex items-center justify-center font-extrabold text-xs">
                    {idx + 1}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-sky-100">
            <span className="text-xs text-slate-500 font-medium">
              Verified against <strong>ICAR-CRIDA DACP</strong> & <strong>Manual for Drought Management 2016</strong>.
            </span>

            <button
              onClick={() => {
                setSelectedTransferId(aiResult.transferAnalysis.id);
                setActiveView('transfer');
              }}
              className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs flex items-center gap-2 shadow-xs min-h-[42px]"
            >
              <span>View Full Solution Workbench</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      )}

      {/* 3 Simple Feature Cards (Clean & Visual) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          onClick={() => setActiveView('transfer')}
          className="p-5 rounded-3xl bg-white border border-sky-100 hover:border-sky-300 hover:shadow-sm cursor-pointer transition-all space-y-2 group"
        >
          <div className="w-10 h-10 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
            Cross-Domain Solutions
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            See how urban Day Zero rationing was adapted into cotton irrigation schedules, saving 48% water.
          </p>
        </div>

        <div
          onClick={() => setActiveView('drought')}
          className="p-5 rounded-3xl bg-white border border-sky-100 hover:border-sky-300 hover:shadow-sm cursor-pointer transition-all space-y-2 group"
        >
          <div className="w-10 h-10 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Activity className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
            Live Drought Map & Alerts
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Track real-time reservoir levels, monsoonal rainfall deficits, and El Niño sensitivity across India.
          </p>
        </div>

        <div
          onClick={() => setActiveView('cases')}
          className="p-5 rounded-3xl bg-white border border-sky-100 hover:border-sky-300 hover:shadow-sm cursor-pointer transition-all space-y-2 group"
        >
          <div className="w-10 h-10 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:scale-105 transition-transform">
            <FileText className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
            50 Bounded Case Studies
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Every recommendation is grounded in 50 peer-reviewed cases and 5 statutory Indian hydrological manuals.
          </p>
        </div>
      </section>

      {/* 3-Step Simple Explainer */}
      <section className="bg-sky-50/60 rounded-3xl border border-sky-100 p-6 sm:p-8 space-y-4">
        <h3 className="text-xs font-bold text-sky-800 uppercase tracking-wider text-center">
          How BlueLink Works in 3 Steps
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="space-y-1">
            <span className="text-lg font-black text-sky-600">01</span>
            <h4 className="text-xs font-bold text-slate-900">Input Your Problem</h4>
            <p className="text-[11px] text-slate-500">
              Type in natural language (farm dry spell, apartment tanker, or canal dispute).
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-lg font-black text-sky-600">02</span>
            <h4 className="text-xs font-bold text-slate-900">Cross-Domain AI Match</h4>
            <p className="text-[11px] text-slate-500">
              Matches mathematical patterns across agriculture, cities, and industry.
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-lg font-black text-sky-600">03</span>
            <h4 className="text-xs font-bold text-slate-900">Get Actionable Steps</h4>
            <p className="text-[11px] text-slate-500">
              Listen to native voice advisories or export government emergency SOPs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
