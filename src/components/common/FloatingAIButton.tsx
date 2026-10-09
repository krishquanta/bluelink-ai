import React from 'react';
import { usePersona } from '../../context/PersonaContext';
import { Sparkles, Cpu, Zap, ArrowUpRight } from 'lucide-react';

export const FloatingAIButton: React.FC = () => {
  const { activeView, setActiveView, t } = usePersona();

  const isAlreadyOnStudio = activeView === 'ai-studio';

  const handleClick = () => {
    setActiveView('ai-studio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-3.5 sm:right-6 z-50 flex items-center">
      {/* Outer Pulse Glow Animation */}
      <div className="relative group">
        {!isAlreadyOnStudio && (
          <span className="absolute -inset-1 rounded-full bg-sky-400/30 animate-ping opacity-75 pointer-events-none" />
        )}

        <button
          onClick={handleClick}
          aria-label={t('floatingAITooltip', 'Open BlueLink AI Studio')}
          className={`relative flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-full shadow-lg transition-all duration-300 min-h-[46px] sm:min-h-[50px] ${
            isAlreadyOnStudio
              ? 'bg-gradient-to-r from-sky-600 via-sky-500 to-teal-600 text-white shadow-sky-400/40 ring-2 ring-sky-300 scale-102'
              : 'bg-gradient-to-r from-sky-500 via-sky-600 to-teal-500 text-white hover:from-sky-600 hover:to-teal-600 shadow-sky-500/35 hover:shadow-xl hover:scale-105 active:scale-95'
          }`}
        >
          {/* AI Icon with rotating/shining effect */}
          <div className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 backdrop-blur-xs text-white">
            <Sparkles className="w-4 h-4 sm:w-4.5 sm:h-4.5 animate-pulse text-amber-200" />
            <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-emerald-300 border border-sky-600" />
          </div>

          {/* AI Label & Subtitle */}
          <div className="text-left flex flex-col justify-center">
            <div className="flex items-center gap-1">
              <span className="text-xs sm:text-sm font-extrabold tracking-wide uppercase drop-shadow-xs">
                {t('floatingAILabel', 'AI Studio')}
              </span>
              <ArrowUpRight className="w-3 h-3 text-sky-100 hidden sm:inline opacity-80" />
            </div>
            <span className="text-[10px] sm:text-[10.5px] font-medium text-sky-100/90 leading-none truncate max-w-[120px] sm:max-w-none">
              {t('floatingAIBadge', 'Live Gemini • 50 Cases')}
            </span>
          </div>

          {/* Status Indicator */}
          <span className="hidden md:inline-flex items-center px-1.5 py-0.5 rounded-full bg-white/25 text-[9px] font-bold tracking-tight text-white uppercase ml-0.5">
            Core AI
          </span>
        </button>
      </div>
    </div>
  );
};
