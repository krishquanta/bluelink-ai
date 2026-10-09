import { ProblemSignature } from '../types';

export const PATTERNS: ProblemSignature[] = [
  {
    id: 'pat-1',
    name: 'Demand Prediction Under Supply Uncertainty',
    category: 'Forecasting & Throttling',
    tagline: 'Matching variable incoming supply with stepped, threshold-based consumption throttling',
    abstractPattern: 'Predicting future inflow/depletion trajectories over finite horizon and triggering pre-calibrated consumption constraints before critical reserve depletion occurs.',
    coreMechanism: 'Coupled predictive inflow modeling + multi-tier threshold triggers + behavioral/mechanic consumption throttling + transparent deficit communication.',
    mathematicalArchetype: 'Stochastic Dynamic Programming (SDP) / Hedging Rule: Minimize E[Loss(Demand - Release)] subject to Storage(t+1) = Storage(t) + Inflow(t) - Release(t) - Evaporation(t).',
    keyVariables: ['Storage Reserve R(t)', 'Forecast Inflow I(t+dt)', 'Depletion Rate D(t)', 'Action Thresholds T1..Tn', 'Price/Behavioral Elasticity'],
    applicableSectors: ['Agriculture', 'Urban / Municipal', 'Reservoirs & River Basins', 'Industry & Energy'],
    exampleAnalogies: [
      'Urban Day Zero staged rationing (Cape Town / Melbourne)',
      'Crop stage deficit irrigation scheduling (Marathwada / Israel)',
      'Hydropower rule curve throttling during monsoon breaks'
    ]
  },
  {
    id: 'pat-2',
    name: 'Dynamic Multi-User Common-Pool Allocation',
    category: 'Equitable Distribution',
    tagline: 'Eliminating head-tail and privileged-first inequity in linear or shared conveyance networks',
    abstractPattern: 'Rationing a shared, dwindling finite flow among competing asynchronous downstream stakeholders to ensure equitable survival-level quotas rather than first-come-first-served exhaustion.',
    coreMechanism: 'Proportional fractional rationing + rotational scheduling (Warabandi/Slot allocation) + real-time conveyance auditing + collective non-compliance penalties.',
    mathematicalArchetype: 'Proportional Fairness Optimization: Maximize Sum(w_i * ln(x_i)) subject to Sum(x_i) <= Total Available Supply.',
    keyVariables: ['Upstream Head Flow Q_head', 'Tail End Reach Flow Q_tail', 'Transmission Seepage S(x)', 'User Quotas q_i', 'Enforcement Index'],
    applicableSectors: ['Agriculture', 'Reservoirs & River Basins', 'Urban / Municipal', 'Groundwater & Watershed'],
    exampleAnalogies: [
      'Airline overbooking & dynamic seat inventory management',
      'Canal command rotational warabandi between head and tail farmers',
      'Municipal water tanker surge pricing & biometric token quotas'
    ]
  },
  {
    id: 'pat-3',
    name: 'Decentralized Cascade Buffering & Micro-Storage',
    category: 'Hydrological Buffering',
    tagline: 'Capturing erratic flash runoff in stepped interlinked micro-receptors to recharge underlying strata',
    abstractPattern: 'Fragmenting large peak deluge volumes across a networked mesh of stepped topographical retention nodes to attenuate flood hydrographs while maximizing local groundwater percolation.',
    coreMechanism: 'Stepped elevation cascade overflows + sediment traps + subterranean infiltration enhancement + decentralized local stewardship.',
    mathematicalArchetype: 'Cascaded Reservoir Routing / Muskingum Hydrologic Routing: dS_i/dt = I_i(t) - Q_i(t) - Infiltration_i(t).',
    keyVariables: ['Cascade Storage Capacities C_1..n', 'Spillway Heights H_i', 'Siltation Index', 'Infiltration Rate f_c', 'Baseflow Contribution'],
    applicableSectors: ['Groundwater & Watershed', 'Agriculture', 'Urban / Municipal', 'Reservoirs & River Basins'],
    exampleAnalogies: [
      'South Indian historic Cascade Tank Systems (Eris in Tamil Nadu / Tanks in Karnataka)',
      'Tokyo G-CANS underground surge retention silos',
      'Paani Foundation continuous contour trenches (CCT) & check dams'
    ]
  },
  {
    id: 'pat-4',
    name: 'Non-Revenue Water Loss & Transient Leakage Elimination',
    category: 'Loss Reduction',
    tagline: 'Identifying and arresting invisible distribution losses before increasing supply extraction',
    abstractPattern: 'Continuous mass-balance monitoring of inputs vs delivered endpoints to detect anomalous dissipation, isolating hydraulic zones, and stabilizing operating pressures to halve leakage.',
    coreMechanism: 'District Metered Area (DMA) acoustic zoning + Pressure Reducing Valves (PRVs) + automated acoustic/satellite transient vibration detection.',
    mathematicalArchetype: 'Hydraulic Node Pressure-Leakage Power Law: Q_leak = C * P^N1 (where P is pressure, N1 ~ 0.5-1.5).',
    keyVariables: ['System Input Volume (SIV)', 'Billed Authorized Consumption', 'Background Leakage Flow', 'Average Zone Pressure (AZP)', 'Acoustic Signal Anomaly'],
    applicableSectors: ['Urban / Municipal', 'Industry & Energy', 'Agriculture', 'Groundwater & Watershed'],
    exampleAnalogies: [
      'Singapore PUB smart acoustic sensor grid on municipal mains',
      'Pressurized drip irrigation line pressure compensation & emitter clogging alerts',
      'Jal Jeevan Mission rural piped network IoT flow-balance audits'
    ]
  },
  {
    id: 'pat-5',
    name: 'Participatory Common-Pool Aquifer Self-Governance',
    category: 'Community Governance',
    tagline: 'Transforming invisible subterranean groundwater competition into transparent collective water budgets',
    abstractPattern: 'Democratizing subsurface hydrogeological awareness among unmetered independent extractors, aligning aggregate pumping with annual recharge through social compacts and cropping crop shifts.',
    coreMechanism: 'Community well-level telemetry + seasonal Water Balance Budgeting + social compact banning predatory high-water cash crops + shared borewell pooling.',
    mathematicalArchetype: 'Ostrom Common-Pool Resource (CPR) Equilibrium Game: Collective payoff exceeds Nash Defection payoff when monitoring costs < social penalty.',
    keyVariables: ['Static Water Table Depth h(t)', 'Recharge Factor R_monsoon', 'Draft Extraction Q_draft', 'Cropping Water Demand ET_crop', 'Social Compliance %'],
    applicableSectors: ['Groundwater & Watershed', 'Agriculture', 'Urban / Municipal'],
    exampleAnalogies: [
      'Hiware Bazar & Ralegan Siddhi village water budgeting (Maharashtra)',
      'APFAMGS (Andhra Pradesh Farmer Managed Groundwater Systems)',
      'Atal Bhujal Yojana Water Security Plans across 8,220 Gram Panchayats'
    ]
  },
  {
    id: 'pat-6',
    name: 'Closed-Loop Circular Water Cascades (Fit-for-Purpose)',
    category: 'Circular Economy',
    tagline: 'Reusing effluent in multi-stage quality downgrades rather than discharging after single pass',
    abstractPattern: 'Grading water quality requirements by application tier (potable, cooling/industrial, irrigation, toilet flushing) and cascading spent effluent through tiered purification loops.',
    coreMechanism: 'Membrane bioreactors / Reverse Osmosis + dual plumbing reticulation + decentralized tertiary polishing + stringent biological safety standards.',
    mathematicalArchetype: 'Water Pinch Analysis / Minimum Freshwater Target: Minimize Freshwater Intake subject to Contaminant Load Mass Balances.',
    keyVariables: ['Influent COD/BOD/TDS', 'Recovery Ratio %', 'Energy Intensity kWh/m3', 'Dual Reticulation Capex', 'Public Acceptance Index'],
    applicableSectors: ['Industry & Energy', 'Urban / Municipal', 'Agriculture'],
    exampleAnalogies: [
      'Singapore NEWater & industrial ultrapure water recycling',
      'Thermal power plant Zero Liquid Discharge (ZLD) recirculating cooling towers',
      'Bengaluru apartment complex decentralized STP wastewater reuse for gardens and flushing'
    ]
  },
  {
    id: 'pat-7',
    name: 'Early-Warning-Triggered Staged Contingency Protocols',
    category: 'Disaster Governance',
    tagline: 'Switching operational decisions on forecast probabilities weeks before visual drought collapse',
    abstractPattern: 'Translating ocean-atmosphere probabilistic anomalies into predefined administrative, financial, and agronomic playbooks well before field manifests visible crisis.',
    coreMechanism: 'Ensemble ENSO / IOD anomaly tracking + automated threshold triggers + dynamic contingency crop seed prepositioning + emergency credit/moratorium triggers.',
    mathematicalArchetype: 'Decision Theory under Severe Uncertainty (MaxiMin / Info-Gap Robustness): Action A* maximizes outcome across poorest plausible rainfall percentiles.',
    keyVariables: ['Sea Surface Temperature Anomaly Nino3.4', 'Monsoon Break Duration (days)', 'Soil Moisture Depletion Index (SMDI)', 'Contingency Seed Reserves', 'Relief Latency (days)'],
    applicableSectors: ['Agriculture', 'Reservoirs & River Basins', 'Urban / Municipal', 'Groundwater & Watershed'],
    exampleAnalogies: [
      'ICAR-CRIDA District Agriculture Contingency Plans',
      'Famine Early Warning Systems Network (FEWS NET) famine response triggers',
      'Karnataka KSNDMC Varuna Mitra Gram Panchayat rainfall advisory alerts'
    ]
  }
];
