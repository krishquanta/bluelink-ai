import React, { useState } from 'react';
import { usePersona } from '../../context/PersonaContext';
import {
  INDIA_DROUGHT_REGIONS,
  NATIONAL_DROUGHT_SUMMARY,
  RESERVOIR_STORAGE_TREND,
  HISTORICAL_EL_NINO_IMPACT
} from '../../data/droughtData';
import { PATTERNS } from '../../data/patterns';
import { RegionDroughtStatus } from '../../types';
import {
  Activity,
  TrendingDown,
  ArrowRight,
  Droplets,
  Calendar,
  Sparkles
} from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend
} from 'recharts';

export const DroughtDashboardView: React.FC = () => {
  const { setActiveView, setSelectedTransferId } = usePersona();
  const [selectedRegion, setSelectedRegion] = useState<RegionDroughtStatus>(INDIA_DROUGHT_REGIONS[0]);

  return (
    <div className="space-y-6 sm:space-y-8 pb-16">
      {/* Light Blue Header */}
      <div className="bg-gradient-to-r from-sky-100/80 via-sky-50 to-white rounded-3xl p-6 sm:p-8 text-slate-900 border border-sky-200/80 shadow-xs space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-200/60 text-sky-900 text-xs font-bold">
            <Activity className="w-4 h-4 text-sky-600" />
            <span>CASE STUDY #1 • HYDRO-INFORMATICS</span>
          </div>
          <span className="text-[11px] font-mono text-sky-800 bg-white px-2.5 py-1 rounded-md border border-sky-200 font-semibold">
            Active Event: {NATIONAL_DROUGHT_SUMMARY.currentElNinoPhase}
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          El Niño & Drought Telemetry Dashboard
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
          Integrated hydro-meteorological indicators from IMD, CWC, and CGWB. Tap any drought hotspot to inspect telemetry and trigger pre-matched cross-domain solutions.
        </p>
      </div>

      {/* National Metric Cards (Mobile 2x2 Grid) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white p-4 rounded-2xl border border-sky-100 shadow-2xs space-y-0.5">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
            Monsoon Rainfall Deficit
          </span>
          <span className="text-2xl sm:text-3xl font-black text-rose-600 block">
            {NATIONAL_DROUGHT_SUMMARY.monsoonRainfallDeficit}%
          </span>
          <span className="text-[10px] text-slate-500">Below Long Period Average</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-sky-100 shadow-2xs space-y-0.5">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
            150 Reservoir Storage
          </span>
          <span className="text-2xl sm:text-3xl font-black text-amber-600 block">
            {NATIONAL_DROUGHT_SUMMARY.cwcReservoirLiveStoragePct}%
          </span>
          <span className="text-[10px] text-slate-500">Normal 10-Yr Avg: 54.2%</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-sky-100 shadow-2xs space-y-0.5">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
            Drought Districts
          </span>
          <span className="text-2xl sm:text-3xl font-black text-slate-900 block">
            {NATIONAL_DROUGHT_SUMMARY.districtsUnderDroughtDeclaration}
          </span>
          <span className="text-[10px] text-slate-500">Across 8 Peninsular States</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-sky-100 shadow-2xs space-y-0.5">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
            Over-Exploited Blocks
          </span>
          <span className="text-2xl sm:text-3xl font-black text-sky-800 block">
            {NATIONAL_DROUGHT_SUMMARY.overExploitedBlocks}
          </span>
          <span className="text-[10px] text-slate-500">CGWB Assessment Units</span>
        </div>
      </div>

      {/* Main Grid: Regional Hotspots & Detail Telemetry */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Hotspots List */}
        <div className="lg:col-span-5 space-y-2.5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1">
            Regional Drought Hotspots ({INDIA_DROUGHT_REGIONS.length})
          </h2>

          <div className="space-y-2">
            {INDIA_DROUGHT_REGIONS.map((region) => {
              const isSelected = selectedRegion.id === region.id;
              return (
                <div
                  key={region.id}
                  onClick={() => setSelectedRegion(region)}
                  className={`p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-sky-50 border-sky-400 shadow-2xs'
                      : 'bg-white border-sky-100 hover:border-sky-200'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-bold text-slate-900">
                      {region.name}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        region.activeAlertLevel.includes('Red')
                          ? 'bg-rose-100 text-rose-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {region.activeAlertLevel}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1 border-t border-sky-50">
                    <div>
                      <span className="text-[10px] text-slate-400 block">Rainfall Deficit</span>
                      <strong className="text-rose-600">{region.rainfallDeficitPct}%</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">Reservoirs</span>
                      <strong className="text-amber-600">{region.reservoirStoragePct}%</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">Groundwater</span>
                      <strong className="text-slate-800">{region.groundwaterStress}</strong>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Region Telemetry Card */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-sky-100 p-5 sm:p-8 shadow-xs space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Selected Regional Telemetry
              </span>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-0.5">
                {selectedRegion.name}
              </h2>
              <span className="text-xs text-slate-500">
                Basin: <strong>{selectedRegion.riverBasin}</strong> • State: <strong>{selectedRegion.state}</strong>
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-sky-50 text-right border border-sky-100">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">
                Precipitation Index (SPI)
              </span>
              <span className="text-base sm:text-lg font-black text-rose-600 font-mono">
                {selectedRegion.spiIndex}
              </span>
              <span className="text-[10px] text-slate-500 block">Meteorological Drought</span>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed bg-sky-50/30 p-3.5 rounded-xl border border-sky-100">
            {selectedRegion.description}
          </p>

          {/* Applicable Cross-Domain Patterns for this Region */}
          <div className="space-y-2.5 pt-1">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-sky-600" />
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Applicable Cross-Domain Patterns:
              </h3>
            </div>

            <div className="space-y-2">
              {selectedRegion.recommendedPatterns.map((patId) => {
                const pattern = PATTERNS.find((p) => p.id === patId);
                if (!pattern) return null;

                return (
                  <div
                    key={patId}
                    className="p-3.5 rounded-xl bg-sky-50/60 border border-sky-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5"
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-sky-950">
                          {pattern.name}
                        </span>
                        <span className="text-[10px] px-2 py-0.2 rounded-full bg-sky-200/80 text-sky-900 font-semibold">
                          {pattern.category}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 line-clamp-1">
                        {pattern.tagline}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        if (selectedRegion.id === 'region-marathwada') {
                          setSelectedTransferId('transfer-city-to-farmer');
                        } else if (selectedRegion.id === 'region-cauvery') {
                          setSelectedTransferId('transfer-industrial-zld-to-apartments');
                        } else {
                          setSelectedTransferId('transfer-airline-to-canal-warabandi');
                        }
                        setActiveView('transfer');
                      }}
                      className="px-3 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold shrink-0 flex items-center justify-center gap-1 shadow-2xs transition-all min-h-[38px]"
                    >
                      <span>Deploy Transfer</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Reservoir Storage Telemetry Line Chart */}
      <div className="bg-white rounded-3xl border border-sky-100 p-5 sm:p-8 shadow-xs space-y-3">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <TrendingDown className="w-5 h-5 text-rose-500" />
            <span>National Reservoir Live Storage Depletion (CWC 150 Key Reservoirs)</span>
          </h2>
          <p className="text-xs text-slate-500">
            Comparing El Niño Drought Storage Depletion (%) against the 10-Year Climatological Normal and Dead Storage Threshold.
          </p>
        </div>

        <div className="h-64 sm:h-72 w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={RESERVOIR_STORAGE_TREND}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} />
              <YAxis stroke="#94a3b8" fontSize={11} unit="%" domain={[0, 100]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #bae6fd',
                  borderRadius: '12px',
                  color: '#0f172a',
                  fontSize: '11px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Legend wrapperStyle={{ fontSize: '11px' }} />
              <Line
                type="monotone"
                dataKey="storage2024"
                name="2023–24 El Niño Storage (%)"
                stroke="#0284c7"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="normal10yr"
                name="10-Year Normal Avg (%)"
                stroke="#94a3b8"
                strokeWidth={2}
                strokeDasharray="4 4"
              />
              <Line
                type="monotone"
                dataKey="criticalThreshold"
                name="Dead Storage Warning (20%)"
                stroke="#f59e0b"
                strokeWidth={2}
                strokeDasharray="2 2"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Historical Teleconnections Table (Responsive Scroll) */}
      <div className="bg-white rounded-3xl border border-sky-100 p-5 sm:p-8 shadow-xs space-y-3">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-sky-600" />
          <span>Historical Indian El Niño Teleconnection Matrix (1880–2024)</span>
        </h2>
        <p className="text-xs text-slate-500">
          60% of all major Indian droughts coincide with El Niño warm phase anomalies.
        </p>

        <div className="overflow-x-auto border border-sky-100 rounded-2xl">
          <table className="w-full text-left text-xs min-w-[500px]">
            <thead className="bg-sky-50 text-sky-900 uppercase font-semibold">
              <tr>
                <th className="p-3">Drought Year</th>
                <th className="p-3">Niño 3.4 SST Anomaly</th>
                <th className="p-3">Monsoon Deficit</th>
                <th className="p-3">Crop Yield Impact</th>
                <th className="p-3">Declaration Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sky-100 text-slate-800">
              {HISTORICAL_EL_NINO_IMPACT.map((item, idx) => (
                <tr key={idx} className="hover:bg-sky-50/40">
                  <td className="p-3 font-bold text-slate-900">{item.year}</td>
                  <td className="p-3 font-mono text-sky-800 font-bold">{item.sstAnomaly}</td>
                  <td className="p-3 font-bold text-rose-600">{item.monsoonDeficit}%</td>
                  <td className="p-3 font-bold text-amber-600">{item.foodgrainDropPct}%</td>
                  <td className="p-3 text-slate-700">{item.droughtDeclaration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
