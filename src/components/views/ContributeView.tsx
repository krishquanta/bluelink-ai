import React, { useState } from 'react';
import { PATTERNS } from '../../data/patterns';
import { Sector, ContributedCase } from '../../types';
import {
  PlusCircle,
  Send,
  CheckCircle2,
  ThumbsUp
} from 'lucide-react';
import confetti from 'canvas-confetti';

const INITIAL_QUEUE: ContributedCase[] = [
  {
    id: 'contrib-1',
    title: 'Solar Direct-Drive Borewell Micro-Desalination in Saline Coastal Aquifers',
    contributorName: 'Dr. Ramesh Patel',
    organization: 'Water Infrastructure Development Group',
    organizationType: 'Government Authority',
    sector: 'Groundwater & Watershed',
    region: 'Saurashtra & Kutch, Gujarat',
    problemDescription: 'Coastal agricultural borewells turning saline (TDS > 3,500 ppm), stunting groundnut yields and forcing farmers to abandon plots.',
    solutionMechanism: 'Adapted containerized solar-powered RO membranes with energy recovery devices, powered directly by off-grid 10 HP solar pumps without chemical coagulants.',
    outcomes: 'Recovered 40,000 liters/day of irrigation permeate (TDS 450 ppm); restored productive cropping across 18 saline hectares.',
    evidenceLink: 'https://water.gov.in/solar-desal-pilot',
    proposedPattern: 'pat-6',
    status: 'Pending Review',
    submittedDate: '2026-09-28'
  },
  {
    id: 'contrib-2',
    title: 'Sugar Mill Boiler Wastewater Condensate Recycling for Cane Furrows',
    contributorName: 'Sunita Deshmukh',
    organization: 'Sugarcane Farmers Cooperative',
    organizationType: 'Farmer Producer Org',
    sector: 'Industry & Energy',
    region: 'Kolhapur, Maharashtra',
    problemDescription: 'Cooperative sugar mills discharging high-temperature condensate into streams while surrounding farms suffered from dry canals.',
    solutionMechanism: 'Installed heat exchangers and sand filters to cool and polish condensate for distribution via underground PVC pipelines to 220 member farms.',
    outcomes: 'Supplied 1.8 million liters/day of irrigation water during drought months, saving 35 community borewells from exhaustion.',
    evidenceLink: 'https://krishi.gov.in/cane-condensate-pilot',
    proposedPattern: 'pat-6',
    status: 'Verified',
    submittedDate: '2026-09-15'
  }
];

export const ContributeView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'submit' | 'queue'>('submit');
  const [queue, setQueue] = useState<ContributedCase[]>(INITIAL_QUEUE);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Form State
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [org, setOrg] = useState('');
  const [orgType, setOrgType] = useState<ContributedCase['organizationType']>('NGO');
  const [sector, setSector] = useState<Sector>('Agriculture');
  const [region, setRegion] = useState('');
  const [problem, setProblem] = useState('');
  const [mechanism, setMechanism] = useState('');
  const [outcomes, setOutcomes] = useState('');
  const [evidenceLink, setEvidenceLink] = useState('');
  const [proposedPattern, setProposedPattern] = useState(PATTERNS[0].id);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !problem || !mechanism) return;

    const newCase: ContributedCase = {
      id: `contrib-${Date.now()}`,
      title,
      contributorName: name || 'Anonymous Innovator',
      organization: org || 'Independent Practitioner',
      organizationType: orgType,
      sector,
      region: region || 'India',
      problemDescription: problem,
      solutionMechanism: mechanism,
      outcomes: outcomes || 'Measured water savings in field evaluation.',
      evidenceLink: evidenceLink || 'Submitted for empirical peer review.',
      proposedPattern,
      status: 'Pending Review',
      submittedDate: new Date().toISOString().split('T')[0]
    };

    setQueue([newCase, ...queue]);
    setSubmittedSuccess(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });

    setTitle('');
    setName('');
    setOrg('');
    setProblem('');
    setMechanism('');
    setOutcomes('');
    setEvidenceLink('');
  };

  const handleValidate = (id: string) => {
    setQueue(
      queue.map((c) =>
        c.id === id ? { ...c, status: 'Verified' as const } : c
      )
    );
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  return (
    <div className="space-y-6 sm:space-y-8 pb-16">
      {/* Light Blue Header */}
      <div className="bg-gradient-to-r from-sky-100/80 via-sky-50 to-white rounded-3xl p-6 sm:p-8 text-slate-900 border border-sky-200/80 shadow-xs space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-200/60 text-sky-900 text-xs font-bold">
          <PlusCircle className="w-4 h-4 text-sky-600" />
          <span>COLLABORATIVE WATER REPOSITORY</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Contribute a Case or Validate a Transfer
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
          Help expand BlueLink’s repository of cross-domain water innovations. Submit a field-tested case study or review pending transfer proposals as a domain expert.
        </p>

        {/* Tab Switcher */}
        <div className="flex gap-2 pt-2">
          <button
            onClick={() => setActiveTab('submit')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all min-h-[40px] ${
              activeTab === 'submit'
                ? 'bg-sky-500 text-white shadow-2xs'
                : 'bg-white text-slate-600 hover:bg-sky-50 border border-sky-100'
            }`}
          >
            Submit Solution
          </button>
          <button
            onClick={() => setActiveTab('queue')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 min-h-[40px] ${
              activeTab === 'queue'
                ? 'bg-sky-500 text-white shadow-2xs'
                : 'bg-white text-slate-600 hover:bg-sky-50 border border-sky-100'
            }`}
          >
            <span>Review Queue</span>
            <span className="px-1.5 py-0.2 rounded-full bg-sky-100 text-sky-800 text-[10px]">
              {queue.length}
            </span>
          </button>
        </div>
      </div>

      {/* Tab 1: Submit Form */}
      {activeTab === 'submit' && (
        <div className="bg-white rounded-3xl border border-sky-100 p-5 sm:p-8 shadow-xs max-w-3xl mx-auto space-y-5">
          {submittedSuccess && (
            <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 text-sky-950 flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-xs sm:text-sm">Submission Received!</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Your case study has been logged in the review queue. Thank you for contributing to climate resilience.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-xs text-slate-700">
            <div>
              <label className="font-bold text-slate-900 block mb-1">
                Case Study Title *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="E.g., Solar Borewell Desalination for Coastal Farms"
                className="w-full p-3 rounded-xl border border-sky-200 focus:ring-2 focus:ring-sky-400 text-xs bg-sky-50/20"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-900 block mb-1">
                  Contributor Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="E.g., Dr. Ramesh Patel"
                  className="w-full p-3 rounded-xl border border-sky-200 focus:ring-2 focus:ring-sky-400 text-xs bg-sky-50/20"
                />
              </div>

              <div>
                <label className="font-bold text-slate-900 block mb-1">
                  Organization
                </label>
                <input
                  type="text"
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                  placeholder="E.g., Water Resources Society / NGO"
                  className="w-full p-3 rounded-xl border border-sky-200 focus:ring-2 focus:ring-sky-400 text-xs bg-sky-50/20"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="font-bold text-slate-900 block mb-1">
                  Organization Type
                </label>
                <select
                  value={orgType}
                  onChange={(e) => setOrgType(e.target.value as any)}
                  className="w-full p-3 rounded-xl border border-sky-200 focus:ring-2 focus:ring-sky-400 text-xs bg-sky-50/20"
                >
                  <option value="NGO">NGO / Civil Society</option>
                  <option value="Government Authority">Government Authority</option>
                  <option value="Research Institution">Research Institution</option>
                  <option value="Farmer Producer Org">Farmer Producer Org</option>
                  <option value="Industry">Industry / Private Utility</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-900 block mb-1">
                  Primary Sector
                </label>
                <select
                  value={sector}
                  onChange={(e) => setSector(e.target.value as Sector)}
                  className="w-full p-3 rounded-xl border border-sky-200 focus:ring-2 focus:ring-sky-400 text-xs bg-sky-50/20"
                >
                  <option value="Agriculture">Agriculture</option>
                  <option value="Urban / Municipal">Urban / Municipal</option>
                  <option value="Industry & Energy">Industry & Energy</option>
                  <option value="Groundwater & Watershed">Groundwater & Watershed</option>
                  <option value="Reservoirs & River Basins">Reservoirs & River Basins</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-900 block mb-1">
                  Region
                </label>
                <input
                  type="text"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  placeholder="E.g., Gujarat, India"
                  className="w-full p-3 rounded-xl border border-sky-200 focus:ring-2 focus:ring-sky-400 text-xs bg-sky-50/20"
                />
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-900 block mb-1">
                Problem Description *
              </label>
              <textarea
                required
                rows={3}
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                placeholder="What physical, climatic, or water shortage challenges were faced?"
                className="w-full p-3 rounded-xl border border-sky-200 focus:ring-2 focus:ring-sky-400 text-xs bg-sky-50/20"
              />
            </div>

            <div>
              <label className="font-bold text-slate-900 block mb-1">
                Solution Mechanism *
              </label>
              <textarea
                required
                rows={3}
                value={mechanism}
                onChange={(e) => setMechanism(e.target.value)}
                placeholder="Describe what technically or operationally solved the issue."
                className="w-full p-3 rounded-xl border border-sky-200 focus:ring-2 focus:ring-sky-400 text-xs bg-sky-50/20"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-900 block mb-1">
                  Measured Outcomes
                </label>
                <input
                  type="text"
                  value={outcomes}
                  onChange={(e) => setOutcomes(e.target.value)}
                  placeholder="E.g., 55% water saved, 40,000 L/day reclaimed"
                  className="w-full p-3 rounded-xl border border-sky-200 focus:ring-2 focus:ring-sky-400 text-xs bg-sky-50/20"
                />
              </div>

              <div>
                <label className="font-bold text-slate-900 block mb-1">
                  Evidence Link / Source
                </label>
                <input
                  type="text"
                  value={evidenceLink}
                  onChange={(e) => setEvidenceLink(e.target.value)}
                  placeholder="E.g., URL or Publication Citation"
                  className="w-full p-3 rounded-xl border border-sky-200 focus:ring-2 focus:ring-sky-400 text-xs bg-sky-50/20"
                />
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-900 block mb-1">
                Proposed Abstract Pattern
              </label>
              <select
                value={proposedPattern}
                onChange={(e) => setProposedPattern(e.target.value)}
                className="w-full p-3 rounded-xl border border-sky-200 focus:ring-2 focus:ring-sky-400 text-xs bg-sky-50/20"
              >
                {PATTERNS.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({p.category})
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs shadow-xs flex items-center justify-center gap-2 transition-all min-h-[44px]"
            >
              <Send className="w-4 h-4" />
              <span>Submit Case for Review</span>
            </button>
          </form>
        </div>
      )}

      {/* Tab 2: Review Queue */}
      {activeTab === 'queue' && (
        <div className="space-y-3.5 max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-600" />
              <span>Domain Review Queue</span>
            </h2>
            <span className="text-xs text-slate-400">
              Expert Verification Loop
            </span>
          </div>

          <div className="space-y-3">
            {queue.map((item) => {
              const pattern = PATTERNS.find((p) => p.id === item.proposedPattern);

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-sky-100 p-4 sm:p-5 shadow-2xs space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-sky-100 text-sky-800">
                        {item.sector}
                      </span>
                      <span className="text-xs text-slate-500">
                        By <strong>{item.contributorName}</strong> ({item.organization})
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        item.status === 'Verified'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">{item.title}</h3>
                    <span className="text-xs text-slate-400">
                      Region: {item.region} • Date: {item.submittedDate}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs">
                    <div className="p-3 rounded-xl bg-sky-50/20 border border-sky-100 space-y-1">
                      <span className="font-bold text-slate-700 block">Problem Context:</span>
                      <p className="text-slate-600 text-[11px]">{item.problemDescription}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-sky-50/60 border border-sky-200 space-y-1">
                      <span className="font-bold text-sky-900 block">Mechanism & Outcomes:</span>
                      <p className="text-slate-700 text-[11px] font-medium">{item.solutionMechanism}</p>
                      <span className="text-[10px] text-sky-800 block mt-1">
                        Outcomes: {item.outcomes}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-sky-50 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="text-slate-500 text-[11px]">
                      Pattern: <strong className="text-slate-800">{pattern?.name}</strong>
                    </span>

                    {item.status !== 'Verified' && (
                      <button
                        onClick={() => handleValidate(item.id)}
                        className="px-3.5 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-2xs transition-all min-h-[38px]"
                      >
                        <ThumbsUp className="w-3.5 h-3.5" />
                        <span>Validate Transfer</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
