import React from 'react';
import { usePersona } from '../../context/PersonaContext';
import { Persona } from '../../types';
import { UserCheck, Shield, Cpu, BookOpen } from 'lucide-react';

export const PersonaBanner: React.FC = () => {
  const { persona, setPersona, t } = usePersona();

  const personaConfig: Record<Persona, { label: string; icon: React.ComponentType<{ className?: string }>; desc: string }> = {
    farmer: {
      label: t('personaFarmer', 'Farmer & Citizen Perspective'),
      icon: UserCheck,
      desc: 'Plain language, actionable 3-day steps, low-cost field interventions, and optional voice audio broadcast.'
    },
    government: {
      label: t('personaGovt', 'Water Authority & Policy Perspective'),
      icon: Shield,
      desc: 'Standard Operating Procedures (SOPs), emergency triggers, administrative ownership, and contingency budgets.'
    },
    engineer: {
      label: t('personaEngineer', 'Technical Engineer Perspective'),
      icon: Cpu,
      desc: 'Hydrological mass-balance models, governing differential equations, sensor telemetry feeds, and error bounds.'
    },
    researcher: {
      label: t('personaResearcher', 'Academic Researcher Perspective'),
      icon: BookOpen,
      desc: 'Theoretical grounding, comparative analysis, 95% confidence intervals, peer-reviewed citations, and open research gaps.'
    }
  };

  const current = personaConfig[persona];
  const Icon = current.icon;

  return (
    <div className="border border-sky-200/80 bg-sky-50/70 rounded-2xl p-3.5 sm:p-4 mb-6 shadow-2xs transition-all space-y-3 sm:space-y-0 sm:flex sm:items-center sm:justify-between sm:gap-4">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-xl bg-white text-sky-600 shadow-2xs border border-sky-100 shrink-0 mt-0.5">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-wider font-extrabold text-sky-700 bg-sky-100 px-2 py-0.5 rounded-full">
              Active Perspective
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-900">
              {current.label}
            </span>
          </div>
          <p className="text-xs mt-1 text-slate-600 leading-relaxed max-w-2xl">
            {current.desc}
          </p>
        </div>
      </div>

      {/* Touch-Friendly Persona Pills (Horizontal scroll on mobile) */}
      <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none shrink-0 bg-white/80 p-1 rounded-xl border border-sky-100">
        {(['farmer', 'government', 'engineer', 'researcher'] as Persona[]).map((p) => (
          <button
            key={p}
            onClick={() => setPersona(p)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all capitalize min-h-[36px] ${
              persona === p
                ? 'bg-sky-500 text-white shadow-2xs font-bold'
                : 'text-slate-600 hover:text-sky-700 hover:bg-sky-50'
            }`}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
};
