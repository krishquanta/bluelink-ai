import React, { useState } from 'react';
import { usePersona } from '../../context/PersonaContext';
import { PATTERNS } from '../../data/patterns';
import { CASE_STUDIES } from '../../data/caseStudies';
import { TRANSFERS } from '../../data/transfers';
import { Sector } from '../../types';
import {
  Compass,
  Search,
  ArrowRight,
  Layers,
  ChevronRight
} from 'lucide-react';

const SECTORS: Sector[] = [
  'Agriculture',
  'Urban / Municipal',
  'Industry & Energy',
  'Groundwater & Watershed',
  'Reservoirs & River Basins'
];

export const ProblemExplorerView: React.FC = () => {
  const { setActiveView, setSelectedTransferId } = usePersona();

  const [selectedSector, setSelectedSector] = useState<Sector | 'All'>('Agriculture');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePatternFilter, setActivePatternFilter] = useState<string>('All');

  const filteredTransfers = TRANSFERS.filter((transfer) => {
    const matchesSector =
      selectedSector === 'All' ||
      transfer.targetSector === selectedSector ||
      transfer.sourceSector === selectedSector;

    const matchesSearch =
      searchQuery === '' ||
      transfer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transfer.targetContext.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transfer.adaptedBlueprint.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesPattern =
      activePatternFilter === 'All' || transfer.patternId === activePatternFilter;

    return matchesSector && matchesSearch && matchesPattern;
  });

  return (
    <div className="space-y-6 sm:space-y-8 pb-16">
      {/* Light Blue Page Header */}
      <div className="bg-gradient-to-r from-sky-100/80 via-sky-50 to-white rounded-3xl p-6 sm:p-8 text-slate-900 shadow-xs border border-sky-200/80">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-200/60 text-sky-900 text-xs font-bold">
            <Compass className="w-4 h-4 text-sky-600" />
            <span>CROSS-DOMAIN SOLUTION DISCOVERY</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Problem Signature Explorer
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Select your sector and water challenge. BlueLink identifies your abstract problem signature and scans across distinct industries, cities, and watersheds for proven solutions.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar (Mobile Friendly Scrollable Tabs) */}
      <div className="bg-white rounded-2xl border border-sky-100 p-4 sm:p-5 shadow-2xs space-y-3.5">
        <div className="relative">
          <Search className="w-4 h-4 text-sky-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by keyword, crop, city, or challenge (e.g. cotton, dry spell, tanker, canal)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-sky-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 text-slate-800 bg-sky-50/20"
          />
        </div>

        {/* Sector Tabs (Horizontal scroll on mobile) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none pt-1 border-t border-sky-50">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1 shrink-0">
            Sector:
          </span>
          <button
            onClick={() => setSelectedSector('All')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all min-h-[36px] ${
              selectedSector === 'All'
                ? 'bg-sky-500 text-white shadow-2xs font-bold'
                : 'bg-sky-50 text-slate-600 hover:bg-sky-100'
            }`}
          >
            All Sectors
          </button>
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

        {/* Pattern Quick Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none pt-1 border-t border-sky-50">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1 shrink-0">
            Pattern:
          </span>
          <button
            onClick={() => setActivePatternFilter('All')}
            className={`px-2.5 py-1 rounded-lg text-xs whitespace-nowrap transition-all ${
              activePatternFilter === 'All'
                ? 'bg-slate-800 text-white font-bold'
                : 'text-slate-600 hover:bg-sky-50'
            }`}
          >
            All Patterns
          </button>
          {PATTERNS.slice(0, 4).map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePatternFilter(p.id)}
              className={`px-2.5 py-1 rounded-lg text-xs whitespace-nowrap transition-all ${
                activePatternFilter === p.id
                  ? 'bg-slate-800 text-white font-bold'
                  : 'text-slate-600 hover:bg-sky-50'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* Matched Cross-Domain Solutions */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <span>Matched Solution Transfers</span>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-800">
              {filteredTransfers.length} Available
            </span>
          </h2>
          <span className="text-xs text-slate-400 hidden sm:inline">
            Ranked by Pattern Homology
          </span>
        </div>

        {filteredTransfers.length === 0 ? (
          <div className="p-8 sm:p-12 text-center bg-white rounded-3xl border border-sky-100 space-y-3">
            <Layers className="w-10 h-10 text-sky-300 mx-auto" />
            <h3 className="text-sm font-bold text-slate-700">No Matches Found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Try adjusting your search criteria or clear your sector filter.
            </p>
            <button
              onClick={() => {
                setSelectedSector('All');
                setActivePatternFilter('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-sky-500 text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            {filteredTransfers.map((item) => {
              const pattern = PATTERNS.find((p) => p.id === item.patternId);
              const sourceCase = CASE_STUDIES.find((c) => c.id === item.sourceCaseId);

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-sky-100 shadow-2xs hover:shadow-sm transition-all p-4 sm:p-6 space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold">
                      <span className="px-2 py-0.5 rounded-md bg-sky-50 text-sky-800 border border-sky-100">
                        Source: {item.sourceSector}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                      <span className="px-2 py-0.5 rounded-md bg-teal-50 text-teal-800 border border-teal-100">
                        Target: {item.targetSector}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-800">
                        {item.similarityScore}% Homology
                      </span>
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          item.verdict === 'Proven'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {item.verdict}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 hover:text-sky-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      <strong>Target Context:</strong> {item.targetContext}
                    </p>
                  </div>

                  {/* Benchmark & Blueprint */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-sky-50/30 border border-sky-100 space-y-1">
                      <span className="font-bold text-slate-700 block">
                        Source Benchmark ({sourceCase?.region}):
                      </span>
                      <p className="text-slate-600 leading-relaxed text-[11px]">
                        {sourceCase?.solutionMechanism}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-sky-50/70 border border-sky-200 space-y-1">
                      <span className="font-bold text-sky-900 block">
                        Adapted Target Blueprint:
                      </span>
                      <p className="text-slate-700 leading-relaxed text-[11px] line-clamp-3">
                        {item.adaptedBlueprint}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-sky-50">
                    <div className="text-xs text-slate-500">
                      Region: <strong>{item.targetRegion}</strong> • Feasibility: <strong className="text-sky-700">{item.feasibilityScore}/100</strong>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedTransferId(item.id);
                        setActiveView('transfer');
                      }}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold shadow-2xs flex items-center justify-center gap-1.5 transition-all min-h-[44px]"
                    >
                      <span>Open Transfer Workbench</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
