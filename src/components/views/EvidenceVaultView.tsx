import React, { useState } from 'react';
import { EVIDENCE_SOURCES } from '../../data/evidenceSources';
import { EvidenceSource } from '../../types';
import {
  Award,
  Search,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';

export const EvidenceVaultView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGrade, setSelectedGrade] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredSources = EVIDENCE_SOURCES.filter((src) => {
    const matchesSearch =
      searchQuery === '' ||
      src.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      src.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      src.abstractSummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      src.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesGrade =
      selectedGrade === 'All' || src.evidenceGrade.includes(selectedGrade);

    return matchesSearch && matchesGrade;
  });

  const handleCopyCitation = (src: EvidenceSource) => {
    const bibtex = `@article{${src.id},\n  title={${src.title}},\n  author={${src.authors}},\n  year={${src.year}},\n  publisher={${src.publisher}},\n  url={${src.doiOrUrl}}\n}`;
    navigator.clipboard.writeText(bibtex);
    setCopiedId(src.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6 sm:space-y-8 pb-16">
      {/* Light Blue Header */}
      <div className="bg-gradient-to-r from-sky-100/80 via-sky-50 to-white rounded-3xl p-6 sm:p-8 text-slate-900 border border-sky-200/80 shadow-xs space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-200/60 text-sky-900 text-xs font-bold">
          <Award className="w-4 h-4 text-sky-600" />
          <span>SCIENTIFIC PROVENANCE & PEER REVIEW</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Evidence Vault
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
          Grounding every cross-domain claim in verified peer-reviewed literature, statutory government manuals, and official hydrological bulletins. No ungrounded claims.
        </p>
      </div>

      {/* Tiered Evidence Legend Bar */}
      <div className="bg-white rounded-2xl border border-sky-100 p-4 sm:p-5 shadow-2xs space-y-2.5">
        <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
          Tiered Credibility Grading Architecture:
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 text-xs">
          <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-200 text-sky-950">
            <span className="font-bold block">Level 1: Field Trial / RCT</span>
            <span className="text-[10px] text-sky-700">Peer-reviewed, empirical</span>
          </div>
          <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-200 text-sky-950">
            <span className="font-bold block">Level 2: Govt SOP / Manual</span>
            <span className="text-[10px] text-sky-700">Official statutory guidelines</span>
          </div>
          <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-200 text-sky-950">
            <span className="font-bold block">Level 3: Empirical Pilot</span>
            <span className="text-[10px] text-sky-700">Municipal/NGO pilot data</span>
          </div>
          <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-200 text-sky-950">
            <span className="font-bold block">Level 4: Simulation</span>
            <span className="text-[10px] text-sky-700">Calibrated hydro-models</span>
          </div>
          <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-950">
            <span className="font-bold block">Level 5: AI Hypothesis</span>
            <span className="text-[10px] text-amber-700">Requires physical pilot</span>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl border border-sky-100 p-3.5 sm:p-4 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-sky-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search papers, manuals, or DOIs..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-sky-200 text-xs focus:ring-2 focus:ring-sky-400 bg-sky-50/20"
          />
        </div>

        <div className="flex items-center gap-1.5 self-start sm:self-center text-xs">
          <span className="text-slate-400 font-bold uppercase text-[10px] mr-1">Filter:</span>
          {['All', 'Level 1', 'Level 2'].map((g) => (
            <button
              key={g}
              onClick={() => setSelectedGrade(g)}
              className={`px-3 py-1.5 rounded-xl font-semibold transition-all min-h-[36px] ${
                selectedGrade === g
                  ? 'bg-sky-500 text-white shadow-2xs'
                  : 'bg-sky-50 text-slate-600 hover:bg-sky-100'
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* Sources List */}
      <div className="space-y-3.5">
        {filteredSources.map((src) => (
          <div
            key={src.id}
            className="bg-white rounded-2xl border border-sky-100 p-4 sm:p-6 shadow-2xs hover:shadow-xs transition-all space-y-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-sky-100 text-sky-800">
                  {src.sourceType}
                </span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                    src.evidenceGrade.includes('Level 1')
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                      : 'bg-sky-50 text-sky-800 border-sky-200'
                  }`}
                >
                  {src.evidenceGrade}
                </span>
              </div>

              <button
                onClick={() => handleCopyCitation(src)}
                className="text-slate-500 hover:text-slate-800 text-xs font-medium flex items-center gap-1 bg-sky-50 hover:bg-sky-100 px-2.5 py-1 rounded-xl border border-sky-100 transition-colors min-h-[36px]"
                title="Copy BibTeX"
              >
                {copiedId === src.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Copied BibTeX!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Cite / BibTeX</span>
                  </>
                )}
              </button>
            </div>

            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">{src.title}</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {src.authors} ({src.year}) • <span className="font-semibold text-sky-800">{src.publisher}</span>
              </p>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed bg-sky-50/30 p-3 rounded-xl border border-sky-100">
              {src.abstractSummary}
            </p>

            <div className="space-y-1 text-xs">
              <span className="font-bold text-slate-700 block">Key Grounded Findings:</span>
              <ul className="list-disc pl-4 space-y-0.5 text-slate-600">
                {src.keyFindings.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>

            <div className="pt-2 border-t border-sky-50 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex flex-wrap gap-1">
                {src.tags.map((t, i) => (
                  <span
                    key={i}
                    className="text-[10px] bg-sky-50 text-sky-800 px-2 py-0.5 rounded-md"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <a
                href={src.doiOrUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sky-600 hover:text-sky-800 font-bold flex items-center gap-1 text-xs min-h-[36px]"
              >
                <span>Access Primary Source</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
