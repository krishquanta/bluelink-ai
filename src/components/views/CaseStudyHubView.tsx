import React, { useState } from 'react';
import { usePersona } from '../../context/PersonaContext';
import { CASE_STUDIES } from '../../data/caseStudies';
import { PATTERNS } from '../../data/patterns';
import { CaseStudy, Sector } from '../../types';
import {
  FileText,
  Search,
  MapPin,
  ChevronRight,
  X,
  ArrowRight
} from 'lucide-react';

const SECTORS: (Sector | 'All')[] = [
  'All',
  'Agriculture',
  'Urban / Municipal',
  'Industry & Energy',
  'Groundwater & Watershed',
  'Reservoirs & River Basins'
];

export const CaseStudyHubView: React.FC = () => {
  const { setActiveView, setSelectedTransferId } = usePersona();
  const [selectedSector, setSelectedSector] = useState<Sector | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCaseModal, setSelectedCaseModal] = useState<CaseStudy | null>(null);

  const filteredCases = CASE_STUDIES.filter((c) => {
    const matchesSector = selectedSector === 'All' || c.sector === selectedSector;
    const matchesSearch =
      searchQuery === '' ||
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.stateOrCountry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSector && matchesSearch;
  });

  return (
    <div className="space-y-6 sm:space-y-8 pb-16">
      {/* Light Blue Header */}
      <div className="bg-gradient-to-r from-sky-100/80 via-sky-50 to-white rounded-3xl p-6 sm:p-8 text-slate-900 border border-sky-200/80 shadow-xs space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-200/60 text-sky-900 text-xs font-bold">
          <FileText className="w-4 h-4 text-sky-600" />
          <span>EMPIRICAL BENCHMARKS</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Case Study Hub
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
          Explore {CASE_STUDIES.length} verified water-management case studies across Indian states and global models. Filter by sector and hazard type.
        </p>
      </div>

      {/* Filter and Search Bar (Mobile Friendly Scrollable Tabs) */}
      <div className="bg-white rounded-2xl border border-sky-100 p-4 sm:p-5 shadow-2xs space-y-3.5">
        <div className="relative">
          <Search className="w-4 h-4 text-sky-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search cases by region, technique, or tag (e.g. Marathwada, Cape Town, drip, borewell)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-sky-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 text-slate-800 bg-sky-50/20"
          />
        </div>

        {/* Sector Tabs (Horizontal scroll on mobile) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none pt-1 border-t border-sky-50">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1 shrink-0">
            Sector:
          </span>
          {SECTORS.map((s) => (
            <button
              key={s}
              onClick={() => setSelectedSector(s)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all min-h-[36px] ${
                selectedSector === s
                  ? 'bg-sky-500 text-white shadow-2xs font-bold'
                  : 'bg-sky-50 text-slate-600 hover:bg-sky-100'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Case Studies Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredCases.map((cs) => {
          const pattern = PATTERNS.find((p) => p.id === cs.problemSignatureId);

          return (
            <div
              key={cs.id}
              className="bg-white rounded-2xl border border-sky-100 shadow-2xs hover:shadow-xs transition-all p-4 sm:p-5 flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-sky-100 text-sky-800">
                    {cs.sector}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 font-semibold">
                    {cs.evidenceGrade.split(':')[0]}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 line-clamp-2 hover:text-sky-600 transition-colors">
                    {cs.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                    <span className="truncate">
                      {cs.region}, {cs.stateOrCountry}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {cs.problemDescription}
                </p>

                {/* Key Metrics Chips */}
                <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-sky-50">
                  {cs.keyMetrics.map((m, idx) => (
                    <div key={idx} className="p-1.5 rounded-xl bg-sky-50/60 text-center border border-sky-100/60">
                      <span className="text-[10px] text-slate-400 block truncate font-medium">
                        {m.label}
                      </span>
                      <span className="text-xs font-bold text-sky-800 truncate block">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-2 border-t border-sky-50 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 italic truncate max-w-[150px]">
                  {pattern?.name}
                </span>
                <button
                  onClick={() => setSelectedCaseModal(cs)}
                  className="px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-bold flex items-center gap-1 transition-colors min-h-[36px]"
                >
                  <span>Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Case Details Modal */}
      {selectedCaseModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-5 sm:p-8 space-y-5 shadow-xl animate-scaleUp border border-sky-100">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-800">
                  {selectedCaseModal.sector}
                </span>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1.5">
                  {selectedCaseModal.title}
                </h2>
                <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-sky-600" />
                  <span>
                    {selectedCaseModal.region}, {selectedCaseModal.stateOrCountry}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedCaseModal(null)}
                className="p-2 rounded-full hover:bg-sky-50 text-slate-400 hover:text-slate-700 min-h-[40px] min-w-[40px] flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-700">
              <div>
                <span className="font-bold uppercase tracking-wider text-slate-400 block">
                  Climate Trigger:
                </span>
                <p className="p-2.5 rounded-xl bg-sky-50 text-sky-950 border border-sky-100 mt-1 font-medium">
                  {selectedCaseModal.climateTrigger}
                </p>
              </div>

              <div>
                <span className="font-bold uppercase tracking-wider text-slate-400 block">
                  Problem Context:
                </span>
                <p className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 mt-1 leading-relaxed">
                  {selectedCaseModal.problemDescription}
                </p>
              </div>

              <div>
                <span className="font-bold uppercase tracking-wider text-slate-400 block">
                  Solution Mechanism:
                </span>
                <p className="p-3 rounded-xl bg-sky-50 text-sky-950 border border-sky-200 mt-1 font-medium leading-relaxed">
                  {selectedCaseModal.solutionMechanism}
                </p>
              </div>

              <div>
                <span className="font-bold uppercase tracking-wider text-slate-400 block">
                  Measured Outcomes:
                </span>
                <p className="p-3 rounded-xl bg-teal-50 text-teal-950 border border-teal-200 mt-1 leading-relaxed">
                  {selectedCaseModal.outcomes}
                </p>
              </div>

              <div className="pt-2 border-t border-sky-100 space-y-1">
                <span className="font-bold text-slate-500 block">Evidence Grade & Source:</span>
                <p className="text-slate-800 font-medium">
                  {selectedCaseModal.sourceCitation}
                </p>
                <span className="inline-block mt-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {selectedCaseModal.evidenceGrade}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-sky-100">
              <button
                onClick={() => setSelectedCaseModal(null)}
                className="px-4 py-2.5 rounded-xl border border-sky-200 text-xs font-bold text-slate-600 hover:bg-sky-50 min-h-[44px]"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedCaseModal(null);
                  setActiveView('transfer');
                }}
                className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold shadow-2xs flex items-center gap-1.5 min-h-[44px]"
              >
                <span>Find Solution Transfers</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
