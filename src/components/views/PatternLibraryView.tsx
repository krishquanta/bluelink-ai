import React, { useState } from 'react';
import { usePersona } from '../../context/PersonaContext';
import { PATTERNS } from '../../data/patterns';
import { ProblemSignature, Sector } from '../../types';
import {
  Layers,
  ChevronRight,
  CheckCircle2,
  Search
} from 'lucide-react';

const SECTORS: Sector[] = [
  'Agriculture',
  'Urban / Municipal',
  'Industry & Energy',
  'Groundwater & Watershed',
  'Reservoirs & River Basins'
];

export const PatternLibraryView: React.FC = () => {
  const { setActiveView } = usePersona();
  const [selectedPattern, setSelectedPattern] = useState<ProblemSignature | null>(PATTERNS[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPatterns = PATTERNS.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.abstractPattern.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 sm:space-y-8 pb-16">
      {/* Light Blue Header */}
      <div className="bg-gradient-to-r from-sky-100/80 via-sky-50 to-white rounded-3xl p-6 sm:p-8 text-slate-900 border border-sky-200/80 shadow-xs space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-200/60 text-sky-900 text-xs font-bold">
          <Layers className="w-4 h-4 text-sky-600" />
          <span>ONTOLOGICAL KNOWLEDGE BASE</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Abstract Pattern Library
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
          The foundation of cross-domain transfer. We represent water problems not by surface sector descriptions, but as abstract mathematical and behavioral interaction archetypes.
        </p>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-2xl border border-sky-100 p-3 sm:p-4 shadow-2xs">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Filter patterns by concept, category, or mechanism (e.g. hedging, allocation, loss, cascade)..."
          className="w-full px-4 py-2.5 rounded-xl border border-sky-200 text-xs sm:text-sm focus:ring-2 focus:ring-sky-400 text-slate-800 bg-sky-50/20"
        />
      </div>

      {/* Main Grid: Patterns List & Deep Dive Pane */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left List of Patterns */}
        <div className="lg:col-span-5 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1">
            Problem Patterns ({filteredPatterns.length})
          </h2>

          <div className="space-y-2">
            {filteredPatterns.map((pat) => {
              const isSelected = selectedPattern?.id === pat.id;
              return (
                <div
                  key={pat.id}
                  onClick={() => setSelectedPattern(pat)}
                  className={`p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-sky-50 border-sky-400 shadow-2xs'
                      : 'bg-white border-sky-100 hover:border-sky-200'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-800">
                      {pat.category}
                    </span>
                    <span className="text-xs font-bold text-sky-700">
                      {pat.applicableSectors.length} Sectors
                    </span>
                  </div>

                  <h3 className="font-bold text-xs sm:text-sm text-slate-900 mt-1">
                    {pat.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 line-clamp-2 mt-1">
                    {pat.tagline}
                  </p>

                  <div className="flex items-center justify-between pt-2 mt-2 border-t border-sky-50 text-[11px]">
                    <span className="text-slate-400">ID: {pat.id}</span>
                    <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-sky-600' : 'text-slate-300'}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Deep Dive Pane */}
        {selectedPattern && (
          <div className="lg:col-span-7 bg-white rounded-3xl border border-sky-100 p-5 sm:p-8 shadow-xs space-y-5">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-sky-100 text-sky-800">
                  {selectedPattern.category}
                </span>
                <span className="text-xs font-mono text-slate-400 font-semibold">
                  {selectedPattern.id}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                {selectedPattern.name}
              </h2>
              <p className="text-xs sm:text-sm text-sky-900 font-medium bg-sky-50 p-3 rounded-xl border border-sky-100">
                "{selectedPattern.tagline}"
              </p>
            </div>

            {/* Abstract Formulation */}
            <div className="space-y-1 text-xs">
              <span className="font-bold uppercase tracking-wider text-slate-400 block">
                Domain-Neutral Abstract Pattern:
              </span>
              <p className="text-slate-700 leading-relaxed bg-sky-50/30 p-3.5 rounded-xl border border-sky-100">
                {selectedPattern.abstractPattern}
              </p>
            </div>

            {/* Core Mechanism */}
            <div className="space-y-1 text-xs">
              <span className="font-bold uppercase tracking-wider text-slate-400 block">
                Core Generative Mechanism:
              </span>
              <p className="text-slate-800 font-medium leading-relaxed bg-sky-100/50 p-3.5 rounded-xl border border-sky-200">
                {selectedPattern.coreMechanism}
              </p>
            </div>

            {/* Mathematical Archetype */}
            <div className="p-4 rounded-xl bg-sky-100/40 text-slate-900 font-mono text-xs space-y-1.5 border border-sky-200">
              <span className="text-[10px] text-sky-800 uppercase tracking-wider block font-bold">
                Mathematical / Algorithmic Archetype
              </span>
              <p className="text-sky-950 font-bold">
                {selectedPattern.mathematicalArchetype}
              </p>
            </div>

            {/* Key Governing Variables */}
            <div className="space-y-1.5 text-xs">
              <span className="font-bold uppercase tracking-wider text-slate-400 block">
                Key Independent & State Variables:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedPattern.keyVariables.map((v, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-sky-50 text-slate-700 font-mono text-[11px] font-semibold border border-sky-100"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>

            {/* Cross-Sector Applicability Matrix */}
            <div className="space-y-1.5 text-xs">
              <span className="font-bold uppercase tracking-wider text-slate-400 block">
                Sector Cross-Applicability:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {SECTORS.map((s) => {
                  const applies = selectedPattern.applicableSectors.includes(s);
                  return (
                    <div
                      key={s}
                      className={`p-2.5 rounded-xl border flex items-center gap-2 ${
                        applies
                          ? 'bg-sky-50 border-sky-200 text-sky-900 font-bold'
                          : 'bg-slate-50 border-slate-200 text-slate-400 line-through opacity-50'
                      }`}
                    >
                      <CheckCircle2
                        className={`w-3.5 h-3.5 ${applies ? 'text-sky-600' : 'text-slate-300'}`}
                      />
                      <span>{s}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Real-World Analogies */}
            <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 space-y-1.5 text-xs">
              <span className="font-bold uppercase tracking-wider text-sky-900 block">
                Empirical Case Manifestations:
              </span>
              <ul className="space-y-1 text-slate-700">
                {selectedPattern.exampleAnalogies.map((ex, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-sky-500 font-bold">•</span>
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
