import React, { useState } from 'react';
import { usePersona } from '../../context/PersonaContext';
import { Persona, Language } from '../../types';
import {
  Droplets,
  Repeat,
  Activity,
  FileText,
  VolumeX,
  Menu,
  X,
  Globe,
  Sparkles,
  ChevronDown,
  Award,
  PlusCircle,
  HelpCircle,
  Layers,
  Compass
} from 'lucide-react';

const LANG_OPTS: { id: Language; label: string; nativeName: string }[] = [
  { id: 'en', label: 'English', nativeName: 'English' },
  { id: 'hi', label: 'हिन्दी', nativeName: 'हिन्दी (Hindi)' },
  { id: 'ta', label: 'தமிழ்', nativeName: 'தமிழ் (Tamil)' },
  { id: 'kn', label: 'ಕನ್ನಡ', nativeName: 'ಕನ್ನಡ (Kannada)' },
  { id: 'te', label: 'తెలుగు', nativeName: 'తెలుగు (Telugu)' }
];

export const Navbar: React.FC = () => {
  const {
    activeView,
    setActiveView,
    language,
    setLanguage,
    isPlayingAudio,
    stopAudio,
    t
  } = usePersona();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  // Streamlined 4 primary navigation items
  const mainNavLinks = [
    { id: 'home', label: t('navAIStudio', 'AI Solver'), icon: Sparkles, highlight: true },
    { id: 'transfer', label: t('navTransfer', 'Solutions'), icon: Repeat },
    { id: 'drought', label: t('navDrought', 'Drought Map'), icon: Activity },
    { id: 'cases', label: t('navCases', '50 Cases'), icon: FileText }
  ];

  // Secondary items in clean "More" menu
  const moreNavLinks = [
    { id: 'ai-studio', label: 'AI Testbench Studio', icon: Sparkles },
    { id: 'explorer', label: t('navExplorer', 'Problem Explorer'), icon: Compass },
    { id: 'patterns', label: t('navPatterns', 'Pattern Library'), icon: Layers },
    { id: 'vault', label: t('navVault', 'Evidence Vault'), icon: Award },
    { id: 'contribute', label: t('navContribute', 'Contribute'), icon: PlusCircle },
    { id: 'about', label: t('navMethodology', 'Methodology'), icon: HelpCircle }
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-sky-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo: BlueLink */}
            <div
              onClick={() => setActiveView('home')}
              className="flex items-center gap-2.5 cursor-pointer group select-none"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center text-white shadow-md shadow-sky-400/20 group-hover:scale-105 transition-transform">
                <Droplets className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
                  {t('brandName', 'BlueLink')}
                </span>
                <span className="hidden sm:inline-block ml-2 text-[11px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">
                  AI Water Platform
                </span>
              </div>
            </div>

            {/* Desktop Clean Navigation (4 Main Tabs + More Dropdown) */}
            <nav className="hidden md:flex items-center space-x-1.5">
              {mainNavLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeView === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => setActiveView(link.id)}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                      isActive
                        ? 'bg-sky-500 text-white shadow-xs'
                        : link.highlight
                        ? 'bg-sky-50 text-sky-700 hover:bg-sky-100 border border-sky-200'
                        : 'text-slate-600 hover:text-sky-700 hover:bg-sky-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.label}</span>
                  </button>
                );
              })}

              {/* More Menu Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                  className="flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-sky-700 hover:bg-sky-50 transition-all"
                >
                  <span>More</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {moreDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-sky-100 p-2 z-50 animate-fadeIn">
                    {moreNavLinks.map((subLink) => {
                      const SubIcon = subLink.icon;
                      return (
                        <button
                          key={subLink.id}
                          onClick={() => {
                            setActiveView(subLink.id);
                            setMoreDropdownOpen(false);
                          }}
                          className={`w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-left transition-colors ${
                            activeView === subLink.id
                              ? 'bg-sky-50 text-sky-700 font-bold'
                              : 'text-slate-700 hover:bg-sky-50'
                          }`}
                        >
                          <SubIcon className="w-3.5 h-3.5 text-sky-600" />
                          <span>{subLink.label}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </nav>

            {/* Right Controls: Audio + Language */}
            <div className="flex items-center gap-2">
              {/* Audio Stop Button (if playing) */}
              {isPlayingAudio && (
                <button
                  onClick={stopAudio}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 border border-rose-200 hover:bg-rose-200 text-xs font-bold animate-pulse"
                  title="Stop Audio Broadcast"
                >
                  <VolumeX className="w-3.5 h-3.5 text-rose-600" />
                  <span className="hidden sm:inline">Stop Audio</span>
                </button>
              )}

              {/* Prominent Language Translator Selector */}
              <div className="flex items-center gap-1 bg-sky-50 px-2.5 py-1.5 rounded-xl border border-sky-200 shadow-2xs">
                <Globe className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <select
                  aria-label="Select Interface Language"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as Language)}
                  className="bg-transparent text-slate-800 font-bold text-xs focus:outline-none cursor-pointer"
                >
                  {LANG_OPTS.map((l) => (
                    <option key={l.id} value={l.id}>
                      {l.nativeName}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-sky-50 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Full Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-sky-100 bg-white px-4 pt-3 pb-6 space-y-1 shadow-lg animate-fadeIn">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3">
              Primary Navigation
            </span>
            {mainNavLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeView === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    setActiveView(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold min-h-[44px] ${
                    isActive
                      ? 'bg-sky-500 text-white font-bold'
                      : 'text-slate-700 hover:bg-sky-50'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4" />
                    <span>{link.label}</span>
                  </div>
                </button>
              );
            })}

            <div className="pt-2 border-t border-slate-100">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3">
                More Features
              </span>
              <div className="grid grid-cols-2 gap-1 pt-1">
                {moreNavLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <button
                      key={link.id}
                      onClick={() => {
                        setActiveView(link.id);
                        setMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-slate-700 hover:bg-sky-50 text-left"
                    >
                      <Icon className="w-3.5 h-3.5 text-sky-600" />
                      <span className="truncate">{link.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Sticky Bottom Nav Bar (Super Clean 4 Buttons) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-sky-100 shadow-lg px-2 py-1.5 flex items-center justify-around">
        {mainNavLinks.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`flex flex-col items-center justify-center flex-1 py-1 rounded-xl transition-all min-h-[46px] ${
                item.highlight && isActive
                  ? 'bg-sky-500 text-white font-bold shadow-xs'
                  : item.highlight
                  ? 'bg-sky-50 text-sky-700 font-bold'
                  : isActive
                  ? 'text-sky-600 font-bold'
                  : 'text-slate-500 hover:text-sky-600'
              }`}
            >
              <Icon className="w-5 h-5 mb-0.5" />
              <span className="text-[11px] tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
};
