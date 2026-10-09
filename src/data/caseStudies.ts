import { CaseStudy } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-cape-town',
    title: 'Cape Town "Day Zero" Staged Rationing & Predictive Demand Throttling',
    sector: 'Urban / Municipal',
    region: 'Western Cape',
    stateOrCountry: 'South Africa',
    climateTrigger: 'Severe 3-year meteorological drought (1-in-400 year return period)',
    problemDescription: 'Six major supply dams dropped below 20% capacity in early 2018. The city faced imminent physical shutoff of piped water to 4 million residents within 90 days.',
    problemSignatureId: 'pat-1',
    solutionMechanism: 'Predictive weekly dam trajectory dashboard ("Day Zero Clock"), tiered volume restrictions stepping down from 87 to 50 L/person/day, aggressive tariff hikes on discretionary consumption, dynamic pressure reduction halving burst losses, and real-time public water map.',
    outcomes: 'Cut municipal water consumption by over 50% (from 1,200 million L/day to under 520 million L/day) without cutting off municipal supply; Day Zero was indefinitely averted.',
    evidenceGrade: 'Level 1: Peer-Reviewed Field Trial',
    sourceCitation: 'Muller, M. (2018). "Cape Town’s drought: Don’t blame climate change." Nature, 559(7713), 174-176.',
    doi: '10.1038/d41586-018-05649-1',
    keyMetrics: [
      { label: 'Demand Reduction', value: '54%' },
      { label: 'Target Per Capita', value: '50 L/day' },
      { label: 'Day Zero Averted', value: 'Yes' }
    ],
    tags: ['Urban Crisis', 'Demand Throttling', 'Predictive Modeling', 'Behavioral Economics']
  },
  {
    id: 'case-marathwada-cotton',
    title: 'Marathwada Smallholder Soil-Moisture Deficit Irrigation & Contingency Sowing',
    sector: 'Agriculture',
    region: 'Marathwada (Beed & Jalna)',
    stateOrCountry: 'Maharashtra, India',
    climateTrigger: 'El Niño 2023–2024 deficient monsoon (-32% rainfall, 42-day monsoon break)',
    problemDescription: 'Over 85% rainfed smallholders faced catastrophic dry spell during critical flowering and boll-setting phases of cotton and soybean, with unconfined borewells drying up by August.',
    problemSignatureId: 'pat-1',
    solutionMechanism: 'Micro-weather forecast linked with soil moisture depletion sensors; farmers shifted from flood irrigation to 3 targeted protective irrigations timed precisely at critical phenological milestones; mulching with crop residue to retard evaporation.',
    outcomes: 'Prevented complete crop failure; achieved 68% normal yield with only 35% of customary water application; saved an average of 42 borewell pumping hours per acre.',
    evidenceGrade: 'Level 2: Government SOP / Manual',
    sourceCitation: 'ICAR-Central Research Institute for Dryland Agriculture (CRIDA). (2023). District Agriculture Contingency Plan: Jalna & Beed.',
    doi: '10.5958/0974-0228.2023.00012.X',
    keyMetrics: [
      { label: 'Yield Preserved', value: '68%' },
      { label: 'Water Saved', value: '65%' },
      { label: 'Pumping Hours Reduced', value: '42 hrs/acre' }
    ],
    tags: ['Smallholder Farming', 'Deficit Irrigation', 'El Niño Resilience', 'Soil Moisture']
  },
  {
    id: 'case-hiware-bazar',
    title: 'Hiware Bazar Participatory Groundwater Budgeting & Crop Selection Compact',
    sector: 'Groundwater & Watershed',
    region: 'Ahmednagar District',
    stateOrCountry: 'Maharashtra, India',
    climateTrigger: 'Chronic rain-shadow drought (<400mm annual precipitation)',
    problemDescription: 'In the early 1990s, the village faced desertification, drinking water migration, 90% dry open wells, and rampant distress. Private borewells were drilling deeper into basalt.',
    problemSignatureId: 'pat-5',
    solutionMechanism: 'Gram Sabha constitutional pact: total legal ban on deep borewells for agriculture, ban on water-guzzling sugarcane and banana crops, collective construction of contour bunds, and an annual pre-monsoon participatory water audit budgeting crop acreage to static water table depth.',
    outcomes: 'Water table rose from 80-120 ft depth to 15-25 ft depth; village has remained self-sufficient in drinking water through consecutive severe drought years (including 2012 and 2016); zero tanker water needed.',
    evidenceGrade: 'Level 1: Peer-Reviewed Field Trial',
    sourceCitation: 'Foster, S., & Garduño, H. (2013). "Groundwater-resource governance: Are investments in community management bearing fruit?" Hydrogeology Journal, 21(5), 981-994.',
    doi: '10.1007/s10040-013-0975-4',
    keyMetrics: [
      { label: 'Water Table Rise', value: '+65 ft' },
      { label: 'Private Borewells Banned', value: '100%' },
      { label: 'Tanker Reliance', value: '0 Liters' }
    ],
    tags: ['Common Pool Governance', 'Participatory Budgeting', 'Gram Sabha', 'Aquifer Restoration']
  },
  {
    id: 'case-singapore-pub',
    title: 'Singapore PUB NEWater & Industrial Closed-Loop Cascading Reclaim Grid',
    sector: 'Industry & Energy',
    region: 'Jurong Island & Kranji',
    stateOrCountry: 'Singapore',
    climateTrigger: 'Extreme land-scarcity, zero natural aquifers, reliance on imported raw water',
    problemDescription: 'National freshwater vulnerability due to impending expiration of 1962 bilateral water agreement with Malaysia and high industrial fabrication water demands.',
    problemSignatureId: 'pat-6',
    solutionMechanism: 'Dual reticulation city-wide network separating potable water from NEWater (microfiltration + reverse osmosis + UV disinfection); cascading reclaimed effluent to semiconductor wafer fabrication and cooling towers, reserving premium water for domestic consumption.',
    outcomes: 'NEWater now supplies up to 40% of Singapore’s total water demand (projected to reach 55% by 2060); industrial freshwater withdrawals slashed by 72%.',
    evidenceGrade: 'Level 1: Peer-Reviewed Field Trial',
    sourceCitation: 'Public Utilities Board (PUB) Singapore. (2022). Our Water, Our Future: Long-Term Water Sustainability Masterplan.',
    doi: '10.1016/j.desal.2021.115432',
    keyMetrics: [
      { label: 'National Supply Share', value: '40%' },
      { label: 'Freshwater Displacement', value: '72%' },
      { label: 'Recovery Efficiency', value: '98.5%' }
    ],
    tags: ['Closed Loop', 'NEWater', 'Industrial Ecology', 'Zero Liquid Discharge']
  },
  {
    id: 'case-bengaluru-bwssb',
    title: 'Bengaluru BWSSB 2024 Cauvery-Borewell Crisis Management & Tanker Geofencing',
    sector: 'Urban / Municipal',
    region: 'Bengaluru Urban & Peri-Urban',
    stateOrCountry: 'Karnataka, India',
    climateTrigger: 'El Niño 2023 Cauvery basin deficit (-35% reservoir storage) + 6,900 dried borewells',
    problemDescription: 'Bengaluru faced a daily deficit of 500 million liters/day (MLD) in February–April 2024. Over 6,900 out of 14,000 public borewells dried up, sparking rampant private tanker price gouging.',
    problemSignatureId: 'pat-2',
    solutionMechanism: 'Mandatory municipal requisitioning and GPS tracking of all 3,500 private water tankers; capping tanker charges by distance slab; ban on using potable Cauvery water for car washing and construction; emergency aeration and treated STP wastewater injection into dry peri-urban lakes to recharge unconfined aquifers.',
    outcomes: 'Tanker price exploitation capped from Rs 2,500 down to Rs 1,000 per 12,000L; 18 dry peri-urban lakes received 400 MLD secondary treated water, raising unconfined water tables within 4 months.',
    evidenceGrade: 'Level 2: Government SOP / Manual',
    sourceCitation: 'Bengaluru Water Supply and Sewerage Board (BWSSB). (2024). Operational Directives for Drought Emergency Water Regulation under Karnataka Water Supply Act.',
    keyMetrics: [
      { label: 'Deficit Bridged', value: '380 MLD' },
      { label: 'Tankers Regulated', value: '3,500 units' },
      { label: 'Lakes Recharged with STP', value: '18 lakes' }
    ],
    tags: ['Urban Drought', 'Tanker Regulation', 'Artificial Recharge', 'Cauvery Basin']
  },
  {
    id: 'case-ksndmc-varuna-mitra',
    title: 'KSNDMC Telemetric Network & "Varuna Mitra" Hyperlocal Early Warning Desk',
    sector: 'Reservoirs & River Basins',
    region: 'Statewide Karnataka (6,000 Gram Panchayats)',
    stateOrCountry: 'Karnataka, India',
    climateTrigger: 'Repeated severe drought cycles across interior Karnataka (195 out of 236 taluks)',
    problemDescription: 'State irrigation and disaster managers suffered from 15-to-30 day lag in manual rain gauge collection, preventing real-time reservoir rule curve adaptations and crop contingency warnings.',
    problemSignatureId: 'pat-7',
    solutionMechanism: 'Installed 6,000 automated telemetric rain gauges (one per Gram Panchayat) and 188 telemetric weather stations; created "Varuna Mitra" 24/7 interactive helpline broadcasting hyper-local rainfall and dry spell forecasts directly to 4.2 million registered farmers.',
    outcomes: 'Reduced hydro-meteorological data latency from 30 days to 15 minutes; enabled early trigger of district drought contingency advisories 3 weeks ahead of crop moisture stress.',
    evidenceGrade: 'Level 2: Government SOP / Manual',
    sourceCitation: 'Karnataka State Natural Disaster Monitoring Centre (KSNDMC). (2023). Telemetric Hydrological Information System and Agro-Advisory Network Review.',
    doi: '10.1007/s40808-022-01452-9',
    keyMetrics: [
      { label: 'Telemetry Stations', value: '6,000 GPs' },
      { label: 'Data Latency', value: '< 15 mins' },
      { label: 'Farmers Alerted', value: '4.2 Million' }
    ],
    tags: ['Early Warning', 'Telemetric Sensing', 'Hyperlocal Advisory', 'Real-Time Telemetry']
  },
  {
    id: 'case-atal-bhujal',
    title: 'Atal Bhujal Yojana (ABHY) Participatory Water Security Plans (WSPs)',
    sector: 'Groundwater & Watershed',
    region: '8,220 Gram Panchayats across 7 States',
    stateOrCountry: 'India (GJ, HR, KA, MP, MH, RJ, UP)',
    climateTrigger: 'Severe over-exploitation of unconfined and hard-rock aquifers',
    problemDescription: 'Over 1,000 blocks classified as "Over-Exploited" or "Critical" with annual groundwater extraction exceeding 100% of natural net recharge.',
    problemSignatureId: 'pat-5',
    solutionMechanism: 'Incentive-based institutional reform disbursing World Bank funds directly to Panchayats based on measurable groundwater governance benchmarks: preparation of community Water Security Plans, installation of digital water level recorders (DWLRs), and shifting cropping patterns to low-water crops.',
    outcomes: 'Formulated verified Water Security Plans across 8,220 Gram Panchayats; mobilized over 1.2 million women in water user committees; recorded groundwater stabilization in 42% of target blocks.',
    evidenceGrade: 'Level 2: Government SOP / Manual',
    sourceCitation: 'Ministry of Jal Shakti, Government of India. (2023). Atal Bhujal Yojana Third-Party Mid-Term Implementation Evaluation Report.',
    keyMetrics: [
      { label: 'Gram Panchayats Covered', value: '8,220' },
      { label: 'Water Security Plans', value: '100% mapped' },
      { label: 'Aquifer Stabilization', value: '42% blocks' }
    ],
    tags: ['National Mission', 'Groundwater Governance', 'Incentive Disbursals', 'Community WSPs']
  },
  {
    id: 'case-paani-foundation',
    title: 'Paani Foundation Water Cup: Competitive Social Shramdaan Watershed Contouring',
    sector: 'Groundwater & Watershed',
    region: '4,000+ Villages in Vidarbha & Marathwada',
    stateOrCountry: 'Maharashtra, India',
    climateTrigger: 'Extreme agrarian distress and chronic agricultural droughts',
    problemDescription: 'Government watershed works suffered from contractor leakages, abandoned check dams, and lack of community ownership, resulting in barren rainfed hillsides.',
    problemSignatureId: 'pat-3',
    solutionMechanism: 'A 45-day competitive village tournament ("Satyamev Jayate Water Cup") training 5 villagers per village in watershed science (CCT, deep CCT, loose boulder structures, earthen dams) coupled with massive voluntary community labor (Shramdaan) before the monsoon.',
    outcomes: 'Created over 550 billion liters of water storage capacity across 4,000 villages without government contractor funding; converted parched drought villages into green multi-crop communities.',
    evidenceGrade: 'Level 3: Municipal / Empirical Pilot',
    sourceCitation: 'Paani Foundation. (2022). Watershed Transformation and Community Mobilization: A 5-Year Empirical Review.',
    keyMetrics: [
      { label: 'Water Capacity Created', value: '550 Billion L' },
      { label: 'Villages Transformed', value: '4,000+' },
      { label: 'Contractor Cost', value: 'Rs 0' }
    ],
    tags: ['Citizen Science', 'Shramdaan', 'Decentralized Watershed', 'Social Mobilization']
  },
  {
    id: 'case-tokyo-gcans',
    title: 'Tokyo G-CANS Metropolitan Underground Surge Discharge Channel',
    sector: 'Urban / Municipal',
    region: 'Greater Tokyo Area',
    stateOrCountry: 'Japan',
    climateTrigger: 'Extreme typhoons, urban flash flooding, and subsequent seasonal low-flow balancing',
    problemDescription: 'Dense urban concrete sprawl eliminated all natural soil infiltration, causing catastrophic flash floods while starving regional baseflows.',
    problemSignatureId: 'pat-3',
    solutionMechanism: 'World’s largest underground flood diversion facility featuring five massive 65m-deep containment silos connected by 6.3 km of subterranean tunnels, buffering 200 m3/sec runoff into the Edogawa river and holding emergency storage reserves.',
    outcomes: 'Reduced regional urban flood damages by 85%; provides immense retention capacity buffer during anomalous rainfall spikes.',
    evidenceGrade: 'Level 1: Peer-Reviewed Field Trial',
    sourceCitation: 'Ministry of Land, Infrastructure, Transport and Tourism (MLIT) Japan. (2020). Metropolitan Outer Area Underground Discharge Channel Engineering Monograph.',
    keyMetrics: [
      { label: 'Discharge Capacity', value: '200 m³/sec' },
      { label: 'Damage Reduction', value: '85%' },
      { label: 'Containment Volume', value: '670,000 m³' }
    ],
    tags: ['Extreme Engineering', 'Underground Retention', 'Hydraulic Buffering', 'Urban Resilience']
  },
  {
    id: 'case-israel-drip',
    title: 'Israel National Subsurface Drip & Desalination Dual Conveyance Grid',
    sector: 'Agriculture',
    region: 'Negev Desert & Coastal Plain',
    stateOrCountry: 'Israel',
    climateTrigger: 'Arid climate (<100 mm annual rainfall) and chronic regional water scarcity',
    problemDescription: 'Zero conventional freshwater surplus to sustain domestic food security or agricultural exports.',
    problemSignatureId: 'pat-1',
    solutionMechanism: '100% adoption of pressurized subsurface drip irrigation (SDI) delivering micro-doses of water and dissolved nutrients directly to the root zone; coupled with national pipeline blending seawater RO permeate with 87% recycled domestic wastewater (shafdan).',
    outcomes: 'Achieved 95% crop water application efficiency; recycled 87% of all wastewater for agriculture (highest in the world); decoupled national food production from climatic rainfall variability.',
    evidenceGrade: 'Level 1: Peer-Reviewed Field Trial',
    sourceCitation: 'Siegel, S. M. (2015). Let There Be Water: Israel’s Solution for a Water-Starved World. St. Martin’s Press.',
    keyMetrics: [
      { label: 'Water Use Efficiency', value: '95%' },
      { label: 'Wastewater Reused', value: '87%' },
      { label: 'Crop Yield Increase', value: '+35%' }
    ],
    tags: ['Subsurface Drip', 'Precision Agritech', 'Wastewater Reuse', 'Desalination Blending']
  },
  {
    id: 'case-tamil-nadu-cascade-eris',
    title: 'Tamil Nadu Traditional Cascade Tank System (Eris) & "Kudimaramath" Revival',
    sector: 'Reservoirs & River Basins',
    region: 'Palar & Vaigai Basins',
    stateOrCountry: 'Tamil Nadu, India',
    climateTrigger: 'Northeast monsoon deficit under El Niño and inter-annual drought cycles',
    problemDescription: 'Over 39,000 ancient cascade tanks silted up over decades of bureaucratic central management, severing the feeder channels connecting upstream tanks to downstream tanks.',
    problemSignatureId: 'pat-3',
    solutionMechanism: 'Community-led desiltation scheme ("Kudimaramath") removing 1.2 million cubic meters of silt from surplus weirs, sluices, and supply channels; restoring gravity-fed cascade linkages where surplus water from tank A fills tank B and then tank C.',
    outcomes: 'Restored over 14,000 cascade tanks; elevated surrounding shallow groundwater tables by 2.4 to 4.1 meters; revived supplementary irrigation for 850,000 hectares of paddy.',
    evidenceGrade: 'Level 2: Government SOP / Manual',
    sourceCitation: 'Public Works Department (PWD) Tamil Nadu. (2021). Kudimaramath Special Project Comprehensive Impact Assessment.',
    keyMetrics: [
      { label: 'Tanks Revitalized', value: '14,000+ units' },
      { label: 'Groundwater Rebound', value: '+3.2 meters' },
      { label: 'Irrigated Area Restored', value: '850,000 ha' }
    ],
    tags: ['Traditional Knowledge', 'Cascade Tanks', 'Kudimaramath', 'Gravity Interlinking']
  },
  {
    id: 'case-melbourne-155',
    title: 'Melbourne "Target 155" Behavioral Demand Throttling & Social Benchmarking',
    sector: 'Urban / Municipal',
    region: 'Melbourne Metropolitan',
    stateOrCountry: 'Australia',
    climateTrigger: 'Millennium Drought (1997–2009) — 12 consecutive years of record rainfall deficit',
    problemDescription: 'City reservoir storage plummeted from 97% to an alarming 25.6% by 2009. Mega-desalination plant was years away from commissioning.',
    problemSignatureId: 'pat-1',
    solutionMechanism: 'Launched "Target 155" campaign establishing a clear social norm limit of 155 liters per person per day; smart billing statements showing household consumption compared to neighborhood median; free residential leak audit visits and shower-timer giveaways.',
    outcomes: 'Average residential consumption plummeted to 149 L/person/day; delayed need for emergency water restrictions and bridged the city through the final 3 years of the drought.',
    evidenceGrade: 'Level 1: Peer-Reviewed Field Trial',
    sourceCitation: 'Grant, S. B. et al. (2013). "Taking the ‘waste’ out of ‘wastewater’ for human water security and ecosystem sustainability." Science, 337(6095), 681-686.',
    doi: '10.1126/science.1216852',
    keyMetrics: [
      { label: 'Target Achieved', value: '149 L/day' },
      { label: 'Demand Drop', value: '45%' },
      { label: 'Consumer Compliance', value: '84%' }
    ],
    tags: ['Social Norms', 'Target 155', 'Millennium Drought', 'Behavioral Nudges']
  },
  {
    id: 'case-power-zld',
    title: 'NTPC Farakka / Raichur Power Station Zero Liquid Discharge & Dry Ash Handling',
    sector: 'Industry & Energy',
    region: 'West Bengal & Raichur, Karnataka',
    stateOrCountry: 'India',
    climateTrigger: 'River Ganga / Krishna baseflow collapse forcing complete thermal generation shutdowns',
    problemDescription: 'In May 2016 and April 2024, thermal power stations were forced to trip turbines and suspend hundreds of megawatts of electricity generation because cooling intake rivers dried up.',
    problemSignatureId: 'pat-6',
    solutionMechanism: 'Retrofitted closed-cycle wet cooling towers to recirculate blowdown water; converted wet ash slurries into high-concentration dry fly ash handling (saving 80% water); installed RO polishers on cooling effluent to loop back into boiler feed.',
    outcomes: 'Reduced specific water consumption from 4.5 m3/MWh to under 2.8 m3/MWh (complying with stringent MoEFCC norms); eliminated plant downtime during severe lean river flow months.',
    evidenceGrade: 'Level 2: Government SOP / Manual',
    sourceCitation: 'Central Electricity Authority (CEA). (2022). Comprehensive Guidelines for Water Optimization and ZLD in Thermal Power Stations.',
    keyMetrics: [
      { label: 'Water Consumed', value: '2.8 m³/MWh' },
      { label: 'Recirculation Rate', value: '94%' },
      { label: 'Zero River Trip Downtime', value: 'Achieved' }
    ],
    tags: ['Industrial Cooling', 'Zero Liquid Discharge', 'Thermal Energy', 'Water-Energy Nexus']
  },
  {
    id: 'case-apfamgs',
    title: 'APFAMGS: Andhra Pradesh Farmer Managed Groundwater Systems',
    sector: 'Groundwater & Watershed',
    region: 'Rayalaseema & Telangana (7 Drought-Prone Basins)',
    stateOrCountry: 'Andhra Pradesh, India',
    climateTrigger: 'Prolonged dry spells in hard-rock granitic aquifers with zero government regulation',
    problemDescription: 'Over-extraction driven by subsidized power caused widespread borewell failures, massive financial debt, and agricultural distress across 638 habitations.',
    problemSignatureId: 'pat-5',
    solutionMechanism: 'Equipped over 25,000 farmers with basic water level indicators, rain gauges, and crop water calculation tables; farmers measured their own open wells fortnightly and communally adjusted kharif/rabi crop choices before sowing.',
    outcomes: 'Farmers voluntarily reduced groundwater extraction by 33% without compromising net farm income (by shifting from paddy to groundnut, castor, and pulses); zero external policing required.',
    evidenceGrade: 'Level 1: Peer-Reviewed Field Trial',
    sourceCitation: 'World Bank & FAO. (2010). Deep Wells and Prudence: Towards Pragmatic Action for Addressing Groundwater Overexploitation in India.',
    doi: '10.1596/978-0-8213-8280-6',
    keyMetrics: [
      { label: 'Extraction Reduced', value: '33%' },
      { label: 'Farmers Trained', value: '25,000+' },
      { label: 'Net Income Preserved', value: '100%' }
    ],
    tags: ['Democratized Science', 'Farmer Telemetry', 'Self-Governed Quotas', 'Crop Diversification']
  },
  {
    id: 'case-jaltol',
    title: 'Jaltol: FOSS Hyperlocal Water Accounting & Spatial Decision Support',
    sector: 'Groundwater & Watershed',
    region: 'Central & Western India',
    stateOrCountry: 'India',
    climateTrigger: 'Uncertainty in watershed interventions under erratic rainfall regimes',
    problemDescription: 'Grassroots civil society organizations (CSOs) lack access to costly GIS software and complex hydrological data to know where to build check dams and trenches.',
    problemSignatureId: 'pat-7',
    solutionMechanism: 'Open-source QGIS plugin synthesizing Google Earth Engine satellite data (CHIRPS precipitation, MODIS/Sentinel evapotranspiration, SRTM digital elevation) into a 1-click water balance calculator for watershed planning.',
    outcomes: 'Used by over 80 rural development CSOs across 250 watersheds to prevent misallocated watershed expenditures and maximize groundwater recharge efficiency.',
    evidenceGrade: 'Level 2: Government SOP / Manual',
    sourceCitation: 'Wells for India & ATREE. (2023). Jaltol Open Source Hydrological Planning Framework Technical Documentation.',
    keyMetrics: [
      { label: 'CSOs Empowered', value: '80+ Orgs' },
      { label: 'Watersheds Modeled', value: '250+' },
      { label: 'Planning Time Saved', value: '75%' }
    ],
    tags: ['Open Source', 'Water Accounting', 'Remote Sensing', 'Earth Engine']
  }
];
