import React from 'react';
import {
  HelpCircle,
  ShieldCheck,
  Sparkles,
  Layers,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

export const AboutMethodologyView: React.FC = () => {
  return (
    <div className="space-y-8 sm:space-y-12 pb-16">
      {/* Light Blue Header */}
      <div className="bg-gradient-to-r from-sky-100/80 via-sky-50 to-white rounded-3xl p-6 sm:p-10 text-slate-900 border border-sky-200/80 shadow-xs space-y-3 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-200/60 text-sky-900 text-xs font-bold">
          <HelpCircle className="w-4 h-4 text-sky-600" />
          <span>PLATFORM ARCHITECTURE & RIGOR</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
          How BlueLink Works
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Building trust through radical transparency. Discover how our AI engine converts fragmented water case studies into verified cross-sector solutions without hallucinations.
        </p>
      </div>

      {/* The Core Insight: Signatures vs Keywords */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-sky-100 p-5 sm:p-8 shadow-xs space-y-4">
        <div className="space-y-1">
          <span className="text-[11px] font-bold text-sky-700 uppercase tracking-wider">
            Foundational Principle
          </span>
          <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900">
            Why Matching Signatures Beats Keyword Search
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            If a farmer searches for "cotton wilting in dry break", they only receive generic farming articles. Keyword search is trapped inside sectoral boundaries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-slate-800 font-bold uppercase tracking-wider block text-[11px]">
              Keyword Search (Siloed)
            </span>
            <ul className="space-y-1.5 text-slate-600">
              <li className="flex items-start gap-1.5">
                <span className="text-rose-500 font-bold">✕</span>
                <span>Searches for "drip irrigation" or "crop wilting".</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-rose-500 font-bold">✕</span>
                <span>Blind to urban municipal rationing breakthroughs in Cape Town or Singapore.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-rose-500 font-bold">✕</span>
                <span>Returns generic text ungrounded in real constraints.</span>
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 space-y-2">
            <span className="text-sky-900 font-bold uppercase tracking-wider block text-[11px]">
              BlueLink Signature Abstraction (Cross-Domain)
            </span>
            <ul className="space-y-1.5 text-sky-950">
              <li className="flex items-start gap-1.5">
                <span className="text-sky-600 font-bold">✓</span>
                <span>Abstracts to: <em>"Demand prediction under supply uncertainty with stepped throttling."</em></span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-sky-600 font-bold">✓</span>
                <span>Discovers matching mathematical problems in urban rationing and industrial cooling.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-sky-600 font-bold">✓</span>
                <span>Audits 6 gap dimensions and engineers cheap physical substitutes.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* The 7-Step AI Pipeline */}
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="text-center space-y-1">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
            Engine Pipeline
          </span>
          <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900">
            The 7-Stage AI Pipeline Architecture
          </h2>
        </div>

        <div className="space-y-3">
          {[
            {
              step: 'Step 1: Ingest',
              title: 'Multi-Source Hydrological Ingestion',
              desc: 'Official government manuals (ICAR-CRIDA, Manual for Drought Management), CWC reservoir storage bulletins, CGWB groundwater yearbooks, and academic papers are parsed.'
            },
            {
              step: 'Step 2: Extract',
              title: 'Structured Field Extraction',
              desc: 'An LLM extracts 6 structured entities: Trigger event, initial condition, constraint matrix, intervention mechanism, quantitative metrics, and source provenance.'
            },
            {
              step: 'Step 3: Abstract',
              title: 'Domain-Neutral Pattern Abstraction',
              desc: 'The solution mechanism is stripped of domain jargon and mapped into an abstract algorithmic interaction pattern (e.g. Stochastic Dynamic Programming Hedging, Ostrom CPR Governance).'
            },
            {
              step: 'Step 4: Match',
              title: 'Cross-Domain Homology Search',
              desc: 'Vector embeddings and knowledge graph traversals match user problem signatures with candidate solutions located in entirely different sectors (City ➔ Field, Industry ➔ Basin).'
            },
            {
              step: 'Step 5: Adapt',
              title: '6-Dimension Gap Analysis & Technological Substitution',
              desc: 'The engine audits divergences in Data, Budget, Scale, Skills, Regulation, and Physical Assets, explicitly formulating low-cost substitutes.'
            },
            {
              step: 'Step 6: Validate',
              title: 'Assumption & Constraint Verification Layer',
              desc: 'Tests every source assumption against target realities (e.g., verifying if agricultural power is available at night), assigning a transparent verdict: Proven, Promising, or Conditional.'
            },
            {
              step: 'Step 7: Explain',
              title: 'Quadruple Audience Dynamic Synthesis',
              desc: 'Generates 4 tailored output versions: Farmer (plain language + audio voice), Water Authority (SOPs & triggers), Engineer (equations & telemetry), and Researcher (confidence & citations).'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-4 sm:p-5 rounded-2xl border border-sky-100 shadow-2xs flex items-start gap-3.5"
            >
              <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                0{idx + 1}
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700">
                  {item.step}
                </span>
                <h3 className="font-bold text-xs sm:text-sm text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Safety & Anti-Hallucination Framework */}
      <div className="max-w-4xl mx-auto bg-sky-50 border border-sky-200 rounded-3xl p-5 sm:p-8 space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-sky-500 text-white">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">Safety & Anti-Hallucination Principles</h3>
            <span className="text-xs text-slate-500">Designed for environmental reliability</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-white border border-sky-100 space-y-1">
            <span className="font-bold text-sky-900 block">Strict Provenance</span>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              Every quantitative recommendation must cite a verified DOI, CWC bulletin, or ICAR-CRIDA agronomic trial. AI hypotheses are explicitly labeled.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-sky-100 space-y-1">
            <span className="font-bold text-sky-900 block">Human Expert Loop</span>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              Before any cross-domain transfer receives a "Proven" badge, it passes domain review by an agronomist, civil engineer, or water authority official.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-sky-100 space-y-1">
            <span className="font-bold text-sky-900 block">Agronomic Thresholds</span>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              Deficit irrigation recommendations never advise moisture throttling during anthesis/flowering stages where water stress would abort yields.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
