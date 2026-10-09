import { EvidenceSource } from '../types';

export const EVIDENCE_SOURCES: EvidenceSource[] = [
  {
    id: 'src-nature-capetown',
    title: 'Cape Town’s drought: Don’t blame climate change alone',
    authors: 'Muller, Mike',
    year: 2018,
    sourceType: 'Journal Paper',
    publisher: 'Nature, Vol. 559, pp. 174–176',
    evidenceGrade: 'Level 1: Peer-Reviewed Field Trial',
    doiOrUrl: 'https://doi.org/10.1038/d41586-018-05649-1',
    abstractSummary: 'Evaluates the Cape Town Day Zero municipal demand management campaign, showing how transparent risk communication and tiered price/volume rationing cut city water use by over 50% without pipe shutoffs.',
    keyFindings: [
      'Demand dropped from 1,200 MLD to under 520 MLD within 14 months.',
      'Public dashboard of weekly dam depletion curves generated high civic compliance.',
      'Pressure management prevented physical pipe burst losses.'
    ],
    tags: ['Urban Water', 'Drought Management', 'Demand Throttling', 'Nature']
  },
  {
    id: 'src-crida-contingency',
    title: 'District Agriculture Contingency Plans for Chronic Rainfed Drought Belts',
    authors: 'ICAR-CRIDA Taskforce',
    year: 2023,
    sourceType: 'Government Manual',
    publisher: 'Indian Council of Agricultural Research (ICAR)',
    evidenceGrade: 'Level 2: Government SOP / Manual',
    doiOrUrl: 'http://crida.in/cp-2012/index.html',
    abstractSummary: 'Prescriptive contingency agronomic recommendations covering 650 Indian districts for delayed monsoon onset, extended mid-season dry spells, and early monsoon withdrawal.',
    keyFindings: [
      'Identifies critical phenological moisture windows for kharif crops.',
      'Recommends alternate furrow irrigation saving 40-50% water.',
      'Specifies short-duration drought hardy substitute varieties (pearl millet, horse gram).'
    ],
    tags: ['Agriculture', 'ICAR-CRIDA', 'Contingency Sowing', 'Agronomy']
  },
  {
    id: 'src-manual-drought-2016',
    title: 'Manual for Drought Management (2016 Edition)',
    authors: 'Department of Agriculture, Cooperation & Farmers Welfare',
    year: 2016,
    sourceType: 'Government Manual',
    publisher: 'Ministry of Agriculture & Farmers Welfare, GoI',
    evidenceGrade: 'Level 2: Government SOP / Manual',
    doiOrUrl: 'https://agricoop.nic.in/en/manual-drought-management',
    abstractSummary: 'The official statutory standard for drought declaration in India, establishing matrix of rainfall deficit, dry spell duration, remote sensing indices (NDVI/NDWI), soil moisture, and reservoir storage.',
    keyFindings: [
      'Establishes mandatory multi-tier triggers for National Disaster Response Fund (NDRF).',
      'Defines thresholds for severe vs moderate drought across agro-climatic zones.',
      'Requires ground-truthing through randomized Crop Cutting Experiments (CCEs).'
    ],
    tags: ['Statutory Standard', 'Drought Manual', 'NDRF', 'Policy']
  },
  {
    id: 'src-world-bank-apfamgs',
    title: 'Deep Wells and Prudence: Towards Pragmatic Action for Addressing Groundwater Overexploitation in India',
    authors: 'World Bank & FAO Hydrogeology Group',
    year: 2010,
    sourceType: 'UN/World Bank Report',
    publisher: 'The World Bank, Washington DC',
    evidenceGrade: 'Level 1: Peer-Reviewed Field Trial',
    doiOrUrl: 'https://doi.org/10.1596/978-0-8213-8280-6',
    abstractSummary: 'Empirical assessment of the Andhra Pradesh Farmer Managed Groundwater Systems (APFAMGS) across 638 habitations in 7 drought-prone basins.',
    keyFindings: [
      'Farmers self-monitoring static water tables reduced pumping by 33% voluntarily.',
      'Proves participatory hydrogeology outperforms top-down policing in fragmented landholdings.',
      'Preserved net farmer income by shifting to low-water pulses and oilseeds.'
    ],
    tags: ['Groundwater', 'APFAMGS', 'Common Pool', 'World Bank']
  },
  {
    id: 'src-pub-newater',
    title: 'Water Technology Innovation and Circular Infrastructure in Singapore',
    authors: 'Luan, H. & Seah, H.',
    year: 2021,
    sourceType: 'Journal Paper',
    publisher: 'Desalination and Water Treatment, Vol. 214, pp. 115–124',
    evidenceGrade: 'Level 1: Peer-Reviewed Field Trial',
    doiOrUrl: 'https://doi.org/10.1016/j.desal.2021.115432',
    abstractSummary: 'Details the membrane filtration and UV multi-barrier validation protocols that enable Singapore to reuse 40% of municipal wastewater for high-grade industrial wafer fabrication.',
    keyFindings: [
      'Recovery efficiency of 98.5% with energy consumption below 1.1 kWh/m3.',
      'Zero biological contamination incidents over 20 years of operational runtime.',
      'Cascading water quality standards based on end-user thermodynamic requirements.'
    ],
    tags: ['Circular Economy', 'NEWater', 'Membrane Bioreactor', 'Singapore PUB']
  },
  {
    id: 'src-fao-56-irrigation',
    title: 'Crop Evapotranspiration: Guidelines for Computing Crop Water Requirements',
    authors: 'Allen, R. G., Pereira, L. S., Raes, D., & Smith, M.',
    year: 1998,
    sourceType: 'Technical Standard',
    publisher: 'FAO Irrigation and Drainage Paper No. 56, Rome',
    evidenceGrade: 'Level 1: Peer-Reviewed Field Trial',
    doiOrUrl: 'https://www.fao.org/3/x0490e/x0490e00.htm',
    abstractSummary: 'The international definitive mathematical standard for reference evapotranspiration (Penman-Monteith equation) and single/dual crop coefficient dynamics.',
    keyFindings: [
      'Mathematical basis for deficit irrigation water scheduling.',
      'Crop coefficients Kc across initial, mid, and end phenological stages.',
      'Root zone moisture depletion threshold formulas (RAW and TAW).'
    ],
    tags: ['Evapotranspiration', 'FAO-56', 'Penman-Monteith', 'Hydrology']
  },
  {
    id: 'src-cwc-reservoir-bulletin',
    title: 'National Weekly Bulletin on Live Storage Status of 150 Important Reservoirs in India',
    authors: 'Central Water Commission (CWC)',
    year: 2024,
    sourceType: 'Agency Bulletin',
    publisher: 'Ministry of Jal Shakti, Government of India',
    evidenceGrade: 'Level 2: Government SOP / Manual',
    doiOrUrl: 'https://cwc.gov.in/reservoir-storage-bulletin',
    abstractSummary: 'Weekly telemetric monitoring of 150 major reservoirs with live storage capacity of 178.784 BCM (representing ~68% of India total storage capacity).',
    keyFindings: [
      'Southern basin reservoirs (Cauvery, Krishna) dropped to 23% of Full Reservoir Level in April 2024.',
      'Highlights the direct correlation between El Niño events and reservoir storage deficits.',
      'Underlines the failure of calendar-based rule curves during back-to-back deficit years.'
    ],
    tags: ['Reservoir Monitoring', 'CWC', 'Live Storage', 'Cauvery Basin']
  }
];
