import React from 'react';
import { Droplets, ShieldCheck, ExternalLink, Heart } from 'lucide-react';
import { usePersona } from '../../context/PersonaContext';

export const Footer: React.FC = () => {
  const { setActiveView } = usePersona();

  return (
    <footer className="bg-sky-50/60 text-slate-600 text-sm border-t border-sky-100 mt-16 pb-20 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Brand & Pitch */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-extrabold text-lg">
              <div className="w-8 h-8 rounded-xl bg-sky-500 flex items-center justify-center text-white shadow-xs">
                <Droplets className="w-5 h-5" />
              </div>
              <span>BlueLink</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              AI-powered cross-domain water solutions platform. Bridging water-management breakthroughs across farmers, households, cities, industries, water authorities, and researchers.
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-sky-200 text-xs text-sky-800 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              <span>Evidence-Graded AI Engine</span>
            </div>
          </div>

          {/* Column 2: Platform Modules */}
          <div>
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-3">
              Platform Modules
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => setActiveView('explorer')}
                  className="hover:text-sky-600 transition-colors"
                >
                  Problem Signature Explorer
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveView('transfer')}
                  className="hover:text-sky-600 transition-colors flex items-center gap-1"
                >
                  <span>Solution Transfer Workbench</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-sky-100 text-sky-800 font-bold">Core</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveView('patterns')}
                  className="hover:text-sky-600 transition-colors"
                >
                  Abstract Pattern Library
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveView('cases')}
                  className="hover:text-sky-600 transition-colors"
                >
                  Indexed Case Studies Hub
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveView('drought')}
                  className="hover:text-sky-600 transition-colors"
                >
                  El Niño Drought Dashboard
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Data Feeds */}
          <div>
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-3">
              Validated Data Sources
            </h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li>India Meteorological Department (IMD)</li>
              <li>Central Water Commission (CWC)</li>
              <li>Central Ground Water Board (CGWB)</li>
              <li>ICAR-CRIDA Contingency Guidelines</li>
              <li>Copernicus Sentinel-2 Soil Moisture</li>
              <li>
                <button
                  onClick={() => setActiveView('vault')}
                  className="text-sky-600 hover:text-sky-800 font-bold inline-flex items-center gap-1 mt-1"
                >
                  <span>Browse Evidence Vault</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: 4-Audience Persona Layer */}
          <div>
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-3">
              4-Audience Output
            </h4>
            <p className="text-xs text-slate-500 mb-2 leading-relaxed">
              Every cross-domain solution dynamically synthesizes four views:
            </p>
            <div className="grid grid-cols-2 gap-1.5 text-[11px]">
              <div className="p-2 rounded-xl bg-white border border-sky-100 shadow-2xs">
                <span className="text-sky-800 font-bold block">🌾 Farmer</span>
                <span className="text-slate-500 text-[10px]">Plain steps + Voice</span>
              </div>
              <div className="p-2 rounded-xl bg-white border border-sky-100 shadow-2xs">
                <span className="text-sky-800 font-bold block">🏛️ Authority</span>
                <span className="text-slate-500 text-[10px]">SOPs & Triggers</span>
              </div>
              <div className="p-2 rounded-xl bg-white border border-sky-100 shadow-2xs">
                <span className="text-sky-800 font-bold block">⚙️ Engineer</span>
                <span className="text-slate-500 text-[10px]">Math & Telemetry</span>
              </div>
              <div className="p-2 rounded-xl bg-white border border-sky-100 shadow-2xs">
                <span className="text-sky-800 font-bold block">🔬 Researcher</span>
                <span className="text-slate-500 text-[10px]">Citations & DOIs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-sky-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2 text-center sm:text-left">
          <p>© 2026 BlueLink • Cross-Domain Water Solutions Platform</p>
          <div className="flex items-center justify-center gap-1 text-slate-500">
            <span>Designed for Climate-Resilient Water Governance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
