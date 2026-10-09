import { RegionDroughtStatus } from '../types';

export const INDIA_DROUGHT_REGIONS: RegionDroughtStatus[] = [
  {
    id: 'region-marathwada',
    name: 'Marathwada Basin (Godavari Command)',
    state: 'Maharashtra',
    riverBasin: 'Godavari Basin',
    rainfallDeficitPct: -34,
    reservoirStoragePct: 22,
    groundwaterStress: 'Critical',
    spiIndex: -1.92,
    elNinoSensitivity: 'Extreme',
    activeAlertLevel: 'Red (Severe)',
    recommendedPatterns: ['pat-1', 'pat-5', 'pat-3'],
    description: 'Deep black vertisols suffering extended 38-day dry spell. Jayakwadi and minor irrigation reservoirs below live storage thresholds. Over 80% kharif cotton and soybean facing flower abortion without protective irrigation.'
  },
  {
    id: 'region-cauvery',
    name: 'Cauvery River Basin & Bengaluru Urban',
    state: 'Karnataka & Tamil Nadu',
    riverBasin: 'Cauvery Basin',
    rainfallDeficitPct: -38,
    reservoirStoragePct: 28,
    groundwaterStress: 'Over-Exploited',
    spiIndex: -2.15,
    elNinoSensitivity: 'Extreme',
    activeAlertLevel: 'Red (Severe)',
    recommendedPatterns: ['pat-1', 'pat-2', 'pat-6'],
    description: 'Severe deficit in KRS and Kabini reservoirs. Bangalore experiencing 500 MLD drinking water shortfall with 6,900 public and private borewells dried up. Inter-state canal releases constrained.'
  },
  {
    id: 'region-rayalaseema',
    name: 'Rayalaseema Hard-Rock Zone (Anantapur & Kurnool)',
    state: 'Andhra Pradesh',
    riverBasin: 'Pennar & Tungabhadra',
    rainfallDeficitPct: -29,
    reservoirStoragePct: 31,
    groundwaterStress: 'Over-Exploited',
    spiIndex: -1.68,
    elNinoSensitivity: 'High',
    activeAlertLevel: 'Red (Severe)',
    recommendedPatterns: ['pat-5', 'pat-1', 'pat-3'],
    description: 'Granitic hard-rock aquifers with low specific yield. Groundnut smallholders hit by late monsoon arrival. Deep borewells pumping air; farm ponds exhausted.'
  },
  {
    id: 'region-vidarbha',
    name: 'Vidarbha Rainfed Belt (Yavatmal & Amravati)',
    state: 'Maharashtra',
    riverBasin: 'Wainganga & Wardha',
    rainfallDeficitPct: -22,
    reservoirStoragePct: 41,
    groundwaterStress: 'Semi-Critical',
    spiIndex: -1.34,
    elNinoSensitivity: 'High',
    activeAlertLevel: 'Orange (Moderate)',
    recommendedPatterns: ['pat-3', 'pat-1', 'pat-7'],
    description: 'Cotton belt facing unseasonal dry breaks. Farm ponds created under state schemes partially filled; groundwater extraction accelerating to salvage rabi sowing.'
  },
  {
    id: 'region-saurashtra',
    name: 'Saurashtra & Kutch Peninsula',
    state: 'Gujarat',
    riverBasin: 'Mahi, Sabarmati & Coastal',
    rainfallDeficitPct: -18,
    reservoirStoragePct: 48,
    groundwaterStress: 'Semi-Critical',
    spiIndex: -1.12,
    elNinoSensitivity: 'Moderate',
    activeAlertLevel: 'Orange (Moderate)',
    recommendedPatterns: ['pat-4', 'pat-6', 'pat-1'],
    description: 'Buffered by SAUNI Yojana Narmada pipeline grid, but groundwater salinity intrusion accelerating in coastal taluks. Micro-irrigation adoption high.'
  },
  {
    id: 'region-bundelkhand',
    name: 'Bundelkhand Rocky Plateau',
    state: 'Uttar Pradesh & Madhya Pradesh',
    riverBasin: 'Yamuna (Ken-Betwa Command)',
    rainfallDeficitPct: -26,
    reservoirStoragePct: 35,
    groundwaterStress: 'Critical',
    spiIndex: -1.54,
    elNinoSensitivity: 'High',
    activeAlertLevel: 'Orange (Moderate)',
    recommendedPatterns: ['pat-3', 'pat-5', 'pat-7'],
    description: 'Granite bedrock preventing deep infiltration. Traditional Haveli and Chandela tanks heavily silted. Seasonal out-migration of farm labor commencing.'
  }
];

export const NATIONAL_DROUGHT_SUMMARY = {
  currentElNinoPhase: 'Strong Warm Phase (+1.8°C SST Anomaly in Niño 3.4)',
  monsoonRainfallDeficit: -19.4,
  cwcReservoirLiveStoragePct: 36.8, // 150 major reservoirs
  cwcNormalStoragePct: 54.2, // 10-year average
  districtsUnderDroughtDeclaration: 246,
  overExploitedBlocks: 1186,
  agriculturalAcreageImpactedMha: 14.8,
  criticalDrinkingWaterCities: ['Bengaluru', 'Chennai Peri-Urban', 'Latur', 'Solapur', 'Anantapur']
};

export const RESERVOIR_STORAGE_TREND = [
  { month: 'Jun', storage2024: 24, normal10yr: 32, criticalThreshold: 20 },
  { month: 'Jul', storage2024: 31, normal10yr: 48, criticalThreshold: 20 },
  { month: 'Aug', storage2024: 39, normal10yr: 64, criticalThreshold: 20 },
  { month: 'Sep', storage2024: 42, normal10yr: 76, criticalThreshold: 20 },
  { month: 'Oct', storage2024: 38, normal10yr: 71, criticalThreshold: 20 },
  { month: 'Nov', storage2024: 34, normal10yr: 63, criticalThreshold: 20 },
  { month: 'Dec', storage2024: 29, normal10yr: 55, criticalThreshold: 20 }
];

export const HISTORICAL_EL_NINO_IMPACT = [
  { year: '2002', sstAnomaly: '+1.3°C', monsoonDeficit: -19.2, foodgrainDropPct: -17.9, droughtDeclaration: 'National Catastrophe' },
  { year: '2009', sstAnomaly: '+1.6°C', monsoonDeficit: -21.8, foodgrainDropPct: -7.0, droughtDeclaration: 'Severe (338 Districts)' },
  { year: '2015', sstAnomaly: '+2.4°C', monsoonDeficit: -14.3, foodgrainDropPct: -4.5, droughtDeclaration: 'Back-to-Back Drought' },
  { year: '2023–24', sstAnomaly: '+1.9°C', monsoonDeficit: -16.4, foodgrainDropPct: -5.8, droughtDeclaration: 'Severe Regional Crises' }
];
