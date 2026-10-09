import { TransferAnalysis } from '../types';

export const TRANSFERS: TransferAnalysis[] = [
  {
    id: 'transfer-city-to-farmer',
    title: 'Urban Staged Water Throttling (Cape Town) ➔ Smallholder Plot Deficit Irrigation (Marathwada)',
    sourceCaseId: 'case-cape-town',
    sourceSector: 'Urban / Municipal',
    targetSector: 'Agriculture',
    targetContext: 'Smallholder cotton and soybean farmers in Vidarbha & Marathwada facing a 40-day mid-monsoon break during an El Niño year with depleting farm-pond and unconfined borewell reserves.',
    targetRegion: 'Marathwada (Jalna, Beed, Chhatrapati Sambhaji Nagar), Maharashtra, India',
    patternId: 'pat-1',
    similarityScore: 92,
    feasibilityScore: 84,
    gapAnalysis: {
      dataAvailability: {
        score: 65,
        source: 'Automated municipal SCADA meters & telemetry at dam reservoirs with daily digital reporting.',
        target: 'No metered borehole extraction; no plot-level smart moisture meters among smallholders.',
        gapDescription: 'Target farmers cannot afford INR 25,000 digital capacitance probes or automated SCADA data feeds.',
        substituteMechanism: 'Substitute metered telemetry with free satellite NDVI / Copernicus Sentinel-2 soil moisture indices + physical "feel-and-appearance" soil ball ribbon test calibrated to crop phenological stages.'
      },
      budgetAndCost: {
        score: 78,
        source: 'Multi-million dollar municipal tariff restructuring and mass media advertising campaign.',
        target: 'Resource-poor smallholders with severe credit constraints (< INR 2,000 budget per acre).',
        gapDescription: 'High-cost digital smart-meter retrofits are financially impossible for 2-acre farmers.',
        substituteMechanism: 'Low-cost bio-mulching using crop residue (INR 300/acre) + mobile SMS/voice broadcast funded through existing agricultural extension budgets.'
      },
      scaleAndGranularity: {
        score: 82,
        source: 'Macro-scale municipal utility managing 4 million citizens across 1 unified pipe grid.',
        target: 'Micro-scale individual private farm plots (1–3 acres) with zero centralized hydraulic interconnection.',
        gapDescription: 'Enforcement cannot occur via municipal shutoff valves; decision autonomy lies with each individual farmer.',
        substituteMechanism: 'Shift from coercive supply curtailment to advisory decision-support: give each farmer a 3-day window sowing/watering calendar matching crop vulnerability.'
      },
      technicalSkills: {
        score: 72,
        source: 'Full-time hydraulic engineering staff and computational hydrological modelers.',
        target: 'Smallholder farmers relying on generational intuition and local agricultural input dealers.',
        gapDescription: 'Complex statistical probability curves or cubic-meter quotas cannot be interpreted by farmers.',
        substituteMechanism: 'Convert complex hydrological formulas into binary colored flags: Green (Sufficient), Yellow (Prepare Deficit Irrigation), Red (Life-Saving 2-Hour Night Pumping Only).'
      },
      governanceRegulation: {
        score: 85,
        source: 'Municipal bylaws, water police fines, and legally binding tiered water tariffs.',
        target: 'Unregulated agricultural groundwater extraction under Indian easement laws (landowner owns water below).',
        gapDescription: 'No legal authority can legally penalize a farmer for running their borewell under current state laws.',
        substituteMechanism: 'Leverage Gram Panchayat social norms and collective borewell sharing agreements (Borewell Pooling) modeled after Andhra Pradesh APFAMGS.'
      },
      physicalInfrastructure: {
        score: 75,
        source: 'Pressurized municipal piping network with dynamic pressure-reducing valves (PRVs).',
        target: 'Gravity furrow flood irrigation or basic flexible PVC pipes with frequent power cuts.',
        gapDescription: 'Flood irrigation causes 50–60% conveyance and percolation loss before reaching crop root zones.',
        substituteMechanism: 'Implement alternate furrow irrigation (irrigating every other row) combined with low-cost micro-sprinkler or gravity drip kits.'
      }
    },
    adaptedBlueprint: 'Re-engineer Cape Town’s 5-stage reservoir warning system into a 3-Tier Phenological Deficit Watering Protocol for smallholder cotton/soybean. Instead of restricting tap liters, calculate the crop root-zone moisture deficit using 10-day IMD monsoon outlooks. During rain-deficit stages, trigger 3 mandatory "Life-Saving Protective Irrigations" only at critical phenological stages (Flowering, Square Formation, Boll Development) during cool evening hours, saving 65% water while safeguarding 70% yield.',
    verdict: 'Promising (Needs Pilot)',
    verdictRationale: 'The mathematical problem signature (stochastic supply depletion under variable demand) is an exact match (92%). By replacing expensive SCADA meters with satellite proxies and converting coercive municipal fines into village participatory advisory schedules, the solution is highly viable with low capex.',
    validationChecks: [
      {
        id: 'val-1',
        title: 'Input Data Feasibility',
        category: 'Constraint',
        status: 'pass',
        detail: 'IMD block-level rainfall forecasts and Sentinel-2 soil moisture indices are accessible via open APIs.'
      },
      {
        id: 'val-2',
        title: 'Electricity Reliability Assumption',
        category: 'Assumption',
        status: 'warning',
        detail: 'Assumes agricultural 3-phase grid power is available during recommended 2-hour watering slots. Requires solar pump integration or battery timing.'
      },
      {
        id: 'val-3',
        title: 'Farmer Behavioral Compliance',
        category: 'Operational',
        status: 'pass',
        detail: 'Verified through ICAR-CRIDA field trials in Beed and Jalna; 74% farmers complied when advisory was delivered via voice broadcasts.'
      },
      {
        id: 'val-4',
        title: 'Yield Collapse Risk',
        category: 'Safety',
        status: 'pass',
        detail: 'Agronomic trials confirm deficit irrigation at vegetative stage does not abort bolls if moisture is maintained at flowering.'
      }
    ],
    personaOutputs: {
      farmer: {
        headline: 'Protect Your Crop from Drought: 3 Critical Life-Saving Watering Steps',
        simpleSteps: [
          'Test Soil Moisture: Take soil from 6 inches deep and roll it into a small ball. If it stays firm without crumbling, moisture is currently sufficient.',
          'Hold Off Irrigation for 5 Days: Weather radar predicts rain within 3 days; save your well water for the dry weeks ahead.',
          'Water Only at Critical Stages: Focus watering strictly on flowering (July 25), square formation (Aug 15), and boll growth (Sept 5).',
          'Irrigate Early Morning or Evening: Avoid midday irrigation where up to 40% of water is lost immediately to surface evaporation.'
        ],
        actionPlan: 'Spread organic mulch (crop residue, dried cotton leaves, or straw) along plant furrows to retain ground moisture for 7 extra days. Coordinate with neighboring plots to pool borewell pump hours and avoid motor burnouts.',
        audioScript: {
          en: 'Farmer advisory: An El Niño dry spell is active. Do not flood your field today. Soil moisture is adequate. Provide protective watering only during flowering and boll formation in early morning or late evening hours. Spread straw mulch to save over half your water.',
          hi: 'किसान भाई ध्यान दें: मौसम में अल-नीनो के कारण बारिश कम होने का अनुमान है। अपने खेत में अभी बाढ़ विधि से पानी न दें। केवल फूल आने और गूलर बनते समय शाम को 2 घंटे पानी दें। कपास के तने के पास सूखी घास बिछाएं। इससे आपकी फसल सुरक्षित रहेगी।',
          ta: 'விவசாய தோழரே கவனிக்க: எல் நினோ காரணமாக மழை குறைவு எச்சரிக்கை. உங்கள் பருத்தி பயிருக்கு இப்போது அதிக நீர் பாய்ச்ச வேண்டாம். பூக்கும் மற்றும் காய் பிடிக்கும் பருவத்தில் மட்டும் அதிகாலை அல்லது மாலையில் 2 மணி நேரம் நீர் பாய்ச்சவும்.',
          kn: 'ರೈತ ಬಾಂಧವರೇ ಗಮನಿಸಿ: ಎಲ್ ನಿನೋ ಕಾರಣದಿಂದ ಮಳೆ ಕೊರತೆಯಾಗಲಿದೆ. ನಿಮ್ಮ ಹತ್ತಿ ಬೆಳೆಗೆ ಅನಗತ್ಯವಾಗಿ ನೀರು ಹರಿಸಬೇಡಿ. ಕೇವಲ ಹೂವು ಮತ್ತು ಕಾಯಿ ಬಿಡುವ ಹಂತದಲ್ಲಿ ಸಂಜೆ ವೇಳೆ 2 ಗಂಟೆಗಳ ಕಾಲ ಮಾತ್ರ ನೀರು ನೀಡಿ.',
          te: 'రైతు సోదరులకు సూచన: ఎల్ నినో కారణంగా వర్షపాతం తగ్గే అవకాశం ఉంది. మీ పత్తి పంటకు అనవసరంగా ఎక్కువ నీరు పెట్టవద్దు. పూత మరియు కాయ దశలో మాత్రమే సాయంత్రం వేళల్లో 2 గంటలు నీరు అందించండి.'
        },
        lowCostTips: [
          'Alternate Furrow Watering: Irrigate every second furrow to reduce water application by 50% without stressing crops.',
          'Organic Straw Mulching: Layer 3 inches of dried crop residue over soil roots to retard evaporation.',
          'Run Pumps at Dawn or Night: Maximize power voltage and eliminate solar evaporation during pumping.'
        ]
      },
      government: {
        headline: 'Block-Level Contingency Water Rationing Advisory: SOP & Rollout Framework',
        sopWorkflow: [
          { phase: 'Trigger (T-21 Days)', trigger: 'IMD Standardized Precipitation Index (SPI) < -1.5 for 3 consecutive weeks in July', action: 'Notify District Magistrate & District Agriculture Officer; activate Block Contingency Cell.', owner: 'District Collector & IMD Agromet' },
          { phase: 'Phase 1: Mobilization', trigger: 'Sub-surface soil moisture drops below 40% Field Capacity', action: 'Broadcast vernacular IVR/WhatsApp voice advisories to all registered farmers via KVK and ATMA.', owner: 'Krishi Vigyan Kendra (KVK)' },
          { phase: 'Phase 2: Power Rationalization', trigger: 'Reservoir dead storage trajectory breached', action: 'Schedule agricultural 3-phase power supply exclusively during night slots (22:00 to 06:00) to cut evaporative losses.', owner: 'State Power DISCOM' },
          { phase: 'Phase 3: Seed Contingency', trigger: 'Sowing delayed beyond July 31', action: 'Disburse subsidized short-duration bajra, horse gram, and pulse seeds under RKVY contingency fund.', owner: 'Department of Agriculture' }
        ],
        budgetEstimate: 'INR 18.5 Lakhs per Block (covers mobile tele-advisory, demo plots in 20 Panchayats, and seed buffer distribution).',
        policyRequirements: [
          'Temporary executive order restricting daytime extraction from community lift-irrigation schemes.',
          'Special emergency power roster for agricultural feeders during critical 10-day flowering windows.',
          'Fast-track subsidy for portable micro-sprinkler sets under Per Drop More Crop (PDMC).'
        ],
        monitoringKPIs: [
          'Percentage of farmers adopting alternate-furrow irrigation (Target: 60%).',
          'Avoidance of terminal wilting across cotton acreage (Target: >85% survived).',
          'Agricultural feeder power peak load smoothing index.'
        ]
      },
      engineer: {
        headline: 'Agro-Hydrological Deficit Irrigation Model & Telemetric Soil Moisture Proxy Architecture',
        technicalModel: 'Coupled Thornthwaite-Mather Soil Water Balance & FAO-56 Single Crop Coefficient (Kc) Model',
        governingEquations: 'Dr(t) = Dr(t-1) - (P(t) - RO(t)) - I(t) - CR(t) + ETc(t) + DP(t); where ETc = Kc * ET0, and ET0 is calculated via Penman-Monteith.',
        inputParameters: [
          { name: 'Reference Evapotranspiration', symbol: 'ET0', unit: 'mm/day', source: 'IMD Gridded Weather / NASA POWER API' },
          { name: 'Crop Coefficient (Flowering)', symbol: 'Kc_mid', unit: 'dimensionless', source: 'FAO-56 Table (Cotton: 1.15–1.20)' },
          { name: 'Root Zone Soil Moisture', symbol: 'theta_rz', unit: 'm³/m³', source: 'Copernicus Sentinel-2 & SMAP 1km Downscaled' },
          { name: 'Yield Response Factor', symbol: 'Ky', unit: 'dimensionless', source: 'FAO-33 (Cotton Ky = 0.85)' }
        ],
        telemetryArchitecture: 'Edge inference pipeline: Pulls daily GFS/NCMRWF rainfall forecast (0.125° grid) -> extracts NDVI & NDRE from Sentinel-2 every 5 days -> computes current root zone depletion Dr -> compares against Raw Depletion Threshold (RAW = p * TAW, p = 0.65). When Dr >= RAW, push trigger alert to farmer routing micro-service.',
        errorTolerance: 'Soil Moisture Estimation RMSE <= 0.04 m3/m3; Forecast Rainfall Binary Hit Rate >= 82% at 3-day lead time.'
      },
      researcher: {
        headline: 'Cross-Domain Adaptation: Translating Urban Dynamic Hedging Rules to Rainfed Common-Pool Agriculture',
        theoreticalGrounding: 'Based on Klemes (1979) and Hashimoto et al. (1982) Reservoir Hedging Theory, extending the supply-side rationing matrix to discrete agronomic phenological demand functions under non-stationary climatic forcings.',
        comparativeAnalysis: 'Unlike urban pipe networks where demand is governed by price elasticity and pressure modulation, agricultural crop demand exhibits threshold non-linearities: water stress during the vegetative phase reduces vegetative growth with minimal yield penalty, whereas stress during anthesis causes irreversible flower shedding.',
        confidenceInterval: 'Meta-analysis of 14 deficit irrigation trials across semi-arid vertisols demonstrates 95% CI of yield preservation between [62.4%, 73.8%] with water reduction of [58.0%, 69.2%].',
        knownGaps: [
          'Downscaled satellite soil moisture has 5cm skin depth penetration; requires root-zone extrapolation modeling for 60-90cm taproots.',
          'Farmer risk-aversion leads to "panic pumping" when neighboring borewells are heard operating, breaking game-theoretic Nash equilibrium.',
          'Spatial variability of vertisol clay shrink-swell crack dynamics impacts infiltration bypass flow.'
        ],
        citations: [
          { title: 'Yield response to water', authors: 'Steduto, P., Hsiao, T. C., Fereres, E., & Raes, D.', year: '2012', journal: 'FAO Irrigation and Drainage Paper No. 66', doi: '10.1016/j.agwat.2012.07.011' },
          { title: 'The Cape Town water crisis: Lessons for climate-resilient cities', authors: 'Enqvist, J. P., & Ziervogel, G.', year: '2019', journal: 'Ecology and Society, 24(2)', doi: '10.5751/ES-10989-240214' },
          { title: 'Managing drought in rainfed agriculture through micro-irrigation and conservation tillage', authors: 'Rao, C. S. et al.', year: '2017', journal: 'Agricultural Water Management, 192, 1-12', doi: '10.1016/j.agwat.2017.06.015' }
        ]
      }
    }
  },
  {
    id: 'transfer-industrial-zld-to-apartments',
    title: 'Industrial Zero Liquid Discharge (Thermal Power) ➔ Peri-Urban High-Rise Decentralized STP Reclaim (Bengaluru)',
    sourceCaseId: 'case-power-zld',
    sourceSector: 'Industry & Energy',
    targetSector: 'Urban / Municipal',
    targetContext: 'Gated apartment complexes (200–800 flats) in Outer Ring Road / Whitefield, Bengaluru paying INR 15–25 lakhs/month to private tanker operators after municipal piped connections stalled.',
    targetRegion: 'Bengaluru Peri-Urban (Mahadevapura & Bommanahalli zones), Karnataka, India',
    patternId: 'pat-6',
    similarityScore: 89,
    feasibilityScore: 91,
    gapAnalysis: {
      dataAvailability: {
        score: 85,
        source: 'Continuous Online Effluent Monitoring Systems (OCEMS) with SCADA turbidity and conductivity loggers.',
        target: 'Apartment STPs have zero real-time sensors; periodic manual grab samples sent to commercial labs once a month.',
        gapDescription: 'Apartment resident welfare associations (RWAs) have no real-time insight into whether treated water is biologically safe for toilet flushing.',
        substituteMechanism: 'Deploy low-cost IoT optical turbidity and electrical conductivity inline probes (INR 12,000) with automatic solenoid shutoff if turbidity exceeds 2 NTU.'
      },
      budgetAndCost: {
        score: 80,
        source: 'Heavy industrial capital budget with multi-crore CAPEX amortized over 25-year power generation tariffs.',
        target: 'Apartment RWA maintenance fund collected as monthly maintenance charges (INR 4,000–8,000/flat).',
        gapDescription: 'Complex multi-effect evaporators (MEE) or crystallizers are cost-prohibitive for residential buildings.',
        substituteMechanism: 'Adopt Membrane Bioreactor (MBR) + activated carbon filter + UV polisher instead of thermal evaporation; payback period is under 14 months against tanker bills.'
      },
      scaleAndGranularity: {
        score: 90,
        source: 'Centralized 50,000 m3/day industrial effluent treatment plant on dedicated industrial land.',
        target: 'Compact basement STP footprint (50–250 KLD) with noise and odor constraints.',
        gapDescription: 'Physical spatial constraint in building basements; odor complaints from ground floor residents.',
        substituteMechanism: 'Enclosed aerobic submerged membrane bioreactor (SMBR) with activated carbon odor scrubbers and acoustic dampeners.'
      },
      technicalSkills: {
        score: 75,
        source: 'Certified chemical engineers and wastewater treatment plant operators.',
        target: 'Unskilled contract facilities personnel operating blowers.',
        gapDescription: 'Improper DO (dissolved oxygen) control leads to anaerobic septic conditions and foul odors.',
        substituteMechanism: 'Automated dissolved oxygen (DO) feedback controlling variable frequency drive (VFD) blowers with remote IoT telemetry managed by third-party vendor.'
      },
      governanceRegulation: {
        score: 88,
        source: 'Strict MoEFCC and CPCB industrial discharge norms with closure notices for non-compliance.',
        target: 'State Pollution Control Board mandatory STP mandates for apartments > 120 units.',
        gapDescription: 'Apartments face disconnection notices and heavy penalties if treated effluent is discharged into city stormwater drains.',
        substituteMechanism: '100% in-situ reuse via dual piping for toilet flushing + car washing + garden drip irrigation + excess injected into shallow recharge wells.'
      },
      physicalInfrastructure: {
        score: 82,
        source: 'High-alloy stainless steel pipes, acid-resistant sumps, and automated chemical dosing tanks.',
        target: 'Dual plumbing reticulation already installed in post-2015 apartment complexes by builder.',
        gapDescription: 'Plumbing cross-contamination risk if treated STP water accidentally enters potable drinking pipes.',
        substituteMechanism: 'Color-coded purple pipe standard for recycled water + physical air-gap backflow preventers at all junction manifolds.'
      }
    },
    adaptedBlueprint: 'Adapt industrial Zero Liquid Discharge (ZLD) cascading logic for residential apartment clusters. Instead of discarding secondary STP water into storm drains or paying for tankers, upgrade the treatment train to an automated MBR + UV system. The high-purity permeate is routed directly back into the secondary plumbing loop for toilet flushing (saving 35% freshwater) and landscape maintenance (saving 15%), while the remaining ultra-filtered water recharges the complex’s 8 rainwater harvesting borewells.',
    verdict: 'Proven',
    verdictRationale: 'Over 120 forward-thinking apartment complexes in Bengaluru and Hyderabad have successfully implemented this model. It converts a liability into an asset, achieving 100% water autonomy from tanker suppliers with an average 11-month ROI.',
    validationChecks: [
      {
        id: 'val-zld-1',
        title: 'Microbial Safety Compliance',
        category: 'Safety',
        status: 'pass',
        detail: 'UV disinfection + chlorine residual of 0.5 ppm eliminates E. coli and coliform pathogens below detectable limits.'
      },
      {
        id: 'val-zld-2',
        title: 'Plumbing Dual Pipe Integrity',
        category: 'Constraint',
        status: 'pass',
        detail: 'Applies to buildings where separate flushing and potable water lines are present (standard in RERA compliant apartments).'
      },
      {
        id: 'val-zld-3',
        title: 'Operating Cost Viability',
        category: 'Assumption',
        status: 'pass',
        detail: 'MBR electricity and membrane replacement costs average INR 18 per 1,000 liters, compared to INR 120–180 per 1,000 liters for tanker water.'
      }
    ],
    personaOutputs: {
      farmer: {
        headline: 'Apartment Water Recycling: Achieve Total Independence from Private Water Tankers',
        simpleSteps: [
          'Purify Basement Wastewater: Treat domestic greywater and sewage for toilet flushing and garden use.',
          'Three-Tier Filtration: Run effluent through aerated bio-filters and ultraviolet (UV) disinfection to kill 100% of bacteria.',
          'Color-Code Pipes: Keep recycled water lines clearly marked in purple to prevent confusion with municipal drinking water.',
          'Recharge Local Aquifers: Route clean, surplus filtered water into apartment borewell recharge pits.'
        ],
        actionPlan: 'Propose an STP upgrade at your next Resident Welfare Association meeting: Converting treated effluent for flushing eliminates costly tanker bills, with full payback within 12 months.',
        audioScript: {
          en: 'Apartment residents advisory: By upgrading your basement sewage treatment plant with ultrafiltration, you can reuse 60% of water for flushing and gardens, completely stopping reliance on private water tankers.',
          hi: 'अपार्टमेंट निवासियों के लिए सुझाव: अपनी बिल्डिंग के सीवेज ट्रीटमेंट प्लांट को आधुनिक बनाकर टॉयलेट फ्लश और बागवानी के लिए पानी दोबारा इस्तेमाल करें। इससे हर महीने लाखों रुपये के पानी के टैंकर मंगाने की जरूरत नहीं पड़ेगी।',
          ta: 'அபார்ட்மெண்ட் குடியிருப்பாளர்களே: உங்கள் கழிவுநீர் சுத்திகரிப்பு நிலையத்தை மேம்படுத்துவதன் மூலம் 60% நீரை மீண்டும் பயன்படுத்தலாம். தனியார் லாரி தண்ணீரை நம்பியிருப்பதை முற்றிலும் தவிர்க்கலாம்.',
          kn: 'ಅಪಾರ್ಟ್ಮೆಂಟ್ ನಿವಾಸಿಗಳ ಗಮನಕ್ಕೆ: ನಿಮ್ಮ ಎಸ್‍ಟಿಪಿ ನೀರನ್ನು ಮರುಬಳಕೆ ಮಾಡುವ ಮೂಲಕ ಶೇ.60ರಷ್ಟು ನೀರನ್ನು ಉಳಿಸಬಹುದು ಮತ್ತು ಖಾಸಗಿ ವಾಟರ್ ಟ್ಯಾಂಕರ್ ಅವಲಂಬನೆಯನ್ನು ತಪ್ಪಿಸಬಹುದು.',
          te: 'అపార్ట్‌మెంట్ నివాసితులకు సలహా: మీ ఎస్టీపీ నీటిని శుద్ధి చేసి మరుగుదొడ్లు మరియు తోటలకు వాడటం ద్వారా ప్రైవేట్ వాటర్ ట్యాంకర్ల ఖర్చును పూర్తిగా తగ్గించుకోవచ్చు.'
        },
        lowCostTips: [
          'Install dual-flush buttons on all apartment toilet cisterns.',
          'Replace garden hose pipes with drip irrigation tubes.',
          'Prohibit open-hose car washing in apartment driveways.'
        ]
      },
      government: {
        headline: 'Mandatory Decentralized Greywater Circularity Guidelines for Urban Local Bodies (ULBs)',
        sopWorkflow: [
          { phase: 'Building Plan Approval', trigger: 'Residential projects exceeding 50 dwelling units or 5,000 m2 built-up area', action: 'Enforce mandatory dual plumbing network and space reservation for tertiary MBR treatment.', owner: 'Municipal Town Planning' },
          { phase: 'Commissioning & Inspection', trigger: 'Application for Occupancy Certificate (OC)', action: 'Physical testing of dual plumbing segregation and continuous inline turbidity logging.', owner: 'State Pollution Control Board' },
          { phase: 'Incentive Disbursal', trigger: 'Zero external tanker purchases verified for 6 consecutive months', action: 'Provide 15% rebate on municipal property tax / water cess for certified water-neutral apartments.', owner: 'Municipal Corporation Finance Dept' }
        ],
        budgetEstimate: 'Zero state outlay; funded entirely by private housing developers/RWAs with tax rebate offset of ~INR 2.4 Crores across metropolitan zone.',
        policyRequirements: [
          'Amendment to State Municipal Corporation Building Bye-Laws mandating purple-pipe standards.',
          'Standardized guidelines for injecting tertiary-treated water into unconfined shallow aquifers without contamination.',
          'Empanelment of accredited third-party energy and water auditing agencies.'
        ],
        monitoringKPIs: [
          'Reduction in municipal water drawdowns by bulk residential complexes (Target: 45%).',
          'Elimination of illegal sewage discharge into urban storm drains and stormwater lakes.',
          'Total unconfined groundwater recharge volume achieved (Target: >500 MLD).'
        ]
      },
      engineer: {
        headline: 'Membrane Bioreactor (MBR) + Ultraviolet (UV) Process Design & Water Balance Model',
        technicalModel: 'Tertiary Membrane Bio-Filtration with Continuous Air Scour and Automated Clean-In-Place (CIP)',
        governingEquations: 'Permeate Flux: J = Q_p / (A_m * TMP * mu_t); where TMP is Transmembrane Pressure, mu_t is water viscosity at temperature t.',
        inputParameters: [
          { name: 'Average Daily Inflow', symbol: 'Q_in', unit: 'kL/day', source: 'Apartment Occupancy (150 L/capita * N_residents)' },
          { name: 'Raw Sewage BOD5', symbol: 'BOD_raw', unit: 'mg/L', source: 'Typical Domestic: 250–350 mg/L' },
          { name: 'Treated Permeate BOD5', symbol: 'BOD_out', unit: 'mg/L', source: '< 5 mg/L (Meets CPCB discharge norm)' },
          { name: 'Transmembrane Pressure', symbol: 'TMP', unit: 'kPa', source: 'Operating Range: 10–35 kPa' }
        ],
        telemetryArchitecture: 'Basement IoT PLC panel: monitors Dissolved Oxygen (optical probe), Level Transmitters in equalization and permeate tanks, and inline turbidity (nephelometric). Data streamed via MQTT to RWA dashboard with automatic alert if TMP spikes > 40 kPa indicating membrane fouling.',
        errorTolerance: 'Effluent Turbidity < 1.0 NTU; Total Suspended Solids (TSS) < 2.0 mg/L; Residual Chlorine 0.5–1.0 ppm.'
      },
      researcher: {
        headline: 'Decentralized Water Reclaim Systems: Socio-Hydrological and Thermodynamic Feasibility',
        theoreticalGrounding: 'Grounded in Industrial Ecology and Urban Metabolism frameworks (Wolman, 1965; Kennedy et al., 2011), demonstrating entropy reduction by closing the hydrological loop at the smallest viable spatial boundary.',
        comparativeAnalysis: 'Centralized municipal wastewater treatment in developing megacities incurs massive pumping energetic costs (0.6–1.2 kWh/m3) and transmission losses. Decentralized in-situ MBR consumes approximately 0.9–1.4 kWh/m3 but completely eliminates the fossil-fuel carbon footprint of 12,000-liter diesel water tankers travelling 15–25 km through urban congestion.',
        confidenceInterval: 'Life Cycle Assessment (LCA) indicates net greenhouse gas reduction of 42% [95% CI: 36.8%, 47.4%] compared to diesel tanker hauling.',
        knownGaps: [
          'Long-term accumulation of total dissolved solids (TDS) in closed-loop flushing cycles requires blowdown bleeding.',
          'Emerging contaminants of concern (pharmaceutical residues, microplastics) require advanced oxidation processes (AOP) for full removal.',
          'Social psychology of recycled water flushing aesthetic concerns requires community engagement.'
        ],
        citations: [
          { title: 'The role of decentralized wastewater treatment in modern cities', authors: 'Larsen, T. A., Hoffmann, S., Lüthi, C., Truffer, B., & Maurer, M.', year: '2016', journal: 'Water Research, 91, 233-247', doi: '10.1016/j.watres.2016.01.036' },
          { title: 'Urban water security and the tanker economy: The case of Bengaluru', authors: 'Ranganathan, M.', year: '2021', journal: 'Water Alternatives, 14(2), 341-360' },
          { title: 'Membrane bioreactors for municipal wastewater treatment', authors: 'Judd, S.', year: '2011', journal: 'The MBR Book, 2nd Edition, Elsevier', doi: '10.1016/C2009-0-64293-8' }
        ]
      }
    }
  },
  {
    id: 'transfer-airline-to-canal-warabandi',
    title: 'Airline Dynamic Slot Allocation & Overbooking ➔ Canal Command Head-Tail Equity Water Quota (Krishna/Cauvery)',
    sourceCaseId: 'case-cape-town',
    sourceSector: 'Industry & Energy',
    targetSector: 'Reservoirs & River Basins',
    targetContext: 'Canal irrigation command areas where upstream head-reach farmers grow water-intensive crops leaving zero water for tail-end farmers 40 km downstream.',
    targetRegion: 'Cauvery & Tungabhadra Canal Commands, Karnataka & Tamil Nadu, India',
    patternId: 'pat-2',
    similarityScore: 86,
    feasibilityScore: 78,
    gapAnalysis: {
      dataAvailability: {
        score: 70,
        source: 'Global Distribution Systems (Sabre/Amadeus) with microsecond passenger booking logs.',
        target: 'Manual gate logs by canal gauge readers recorded on paper registers with multi-day reporting lag.',
        gapDescription: 'Upstream diversions cannot be tracked in real time, enabling covert night gate tampering.',
        substituteMechanism: 'Install solar-powered ultrasonic canal stage recorders + LoRaWAN gate angle position sensors on distributary cross-regulators.'
      },
      budgetAndCost: {
        score: 82,
        source: 'Multi-million dollar corporate yield management IT infrastructure.',
        target: 'State Irrigation Department operational maintenance budgets (~ INR 150/hectare).',
        gapDescription: 'Sophisticated dynamic reservation servers exceed irrigation department IT budgets.',
        substituteMechanism: 'Cloud-hosted lightweight algorithmic slot scheduler accessible to Water User Associations (WUAs) via basic mobile interface.'
      },
      scaleAndGranularity: {
        score: 75,
        source: 'Aircraft seats are discrete, individually numbered, and strictly physically segregated.',
        target: 'Continuous water volume that suffers seepage, evaporation, and transit travel delay (12–36 hours).',
        gapDescription: 'Water is a non-discrete fluid subject to dynamic hydraulic lag; 1 m3 released at head does not equal 1 m3 at tail.',
        substituteMechanism: 'Hydraulic unsteady 1D Saint-Venant transit modeling calculating time-of-travel lag and conveyance attenuation curves.'
      },
      technicalSkills: {
        score: 76,
        source: 'Airline revenue management data scientists.',
        target: 'Junior irrigation engineers and traditional village water distributors.',
        gapDescription: 'Complex linear optimization models cannot be calibrated on-the-fly by field lock-gate operators.',
        substituteMechanism: 'Translate optimization schedules into simplified rotational time tables (allotted hours per acre per distributary).'
      },
      governanceRegulation: {
        score: 72,
        source: 'Strict civil aviation passenger boarding passes and biometric gate security.',
        target: 'Upstream commercial farming lobbies operating unpermitted diesel pumps along canal banks.',
        gapDescription: 'Upstream illegal siphoning is backed by local power dynamics, rendering paper quotas ineffective.',
        substituteMechanism: 'Empower federated Water User Associations (WUAs) with legal volumetric bulk water entitlement and mobile photo-whistleblower mechanisms.'
      },
      physicalInfrastructure: {
        score: 79,
        source: 'Airport terminal boarding bridges, secure jetways, and tarmac gates.',
        target: 'Unlined earthen canals with damaged sluice gates, silted beds, and rusted gears.',
        gapDescription: 'Leaking control gates fail to seal shut, allowing steady seepage even when closed.',
        substituteMechanism: 'Low-cost automated solar-actuated overshot flume gates on main branch off-takes.'
      }
    },
    adaptedBlueprint: 'Reframe canal irrigation through airline yield management: treat downstream tail-end water delivery as "guaranteed business-class priority slots." Calculate hydraulic travel lag using Saint-Venant equations so water released at the main dam reaches tail-end sluices during designated, protected rotational windows. During drought seasons, enforce mandatory staggered off-take closures: head reaches receive water only on Days 1–3, while main canal gates bypass head branches to flood tail-end reaches on Days 4–7.',
    verdict: 'Promising (Needs Pilot)',
    verdictRationale: 'Mathematical fairness optimization matches the common-pool problem signature. Requires political backing and automated telemetric gate monitoring to overcome upstream tampering.',
    validationChecks: [
      {
        id: 'val-canal-1',
        title: 'Hydraulic Transit Lag Accuracy',
        category: 'Operational',
        status: 'pass',
        detail: 'Calibrated unsteady flow travel time predictions accurate within +/- 45 minutes across 60 km reach.'
      },
      {
        id: 'val-canal-2',
        title: 'Tail-Reach Equity Guarantee',
        category: 'Safety',
        status: 'pass',
        detail: 'Guarantees minimum 80% designed duty delivery to tail-end distributaries during protected rotational windows.'
      },
      {
        id: 'val-canal-3',
        title: 'Upstream Conflict Risk',
        category: 'Constraint',
        status: 'warning',
        detail: 'Requires administrative support and WUA joint patrols during initial 3 weeks of rotational enforcement.'
      }
    ],
    personaOutputs: {
      farmer: {
        headline: 'Fair Canal Water Rotation: Guaranteed Water Delivery for Every Tail-End Farmer',
        simpleSteps: [
          'Scheduled Water Rotations: Head-reach gates close for 4 days every week so water flows uninterrupted to tail-end farmers.',
          'Track Your Timing via Mobile: Your allotted hours per acre are confirmed in advance on your phone.',
          'No Illegal Pumps: Community monitoring teams verify canal banks during transit windows.',
          'Plant Resilient Crops: Shift from flood-irrigated paddy to pulses or oilseeds during deficit irrigation cycles.'
        ],
        actionPlan: 'Coordinate with your local Water User Association (WUA) to ensure gate locks and rotational schedules are respected by both upstream and downstream farmers.',
        audioScript: {
          en: 'Canal irrigators announcement: Canal water will now run on a strict rotational schedule. Tail-end farmers will receive uninterrupted water for 4 consecutive days while upstream gates remain closed. Plan your irrigation according to your allotted mobile time window.',
          hi: 'नहर के किसान भाइयों: अब नहर में पानी रोटेशन प्रणाली से दिया जाएगा। टेल-एंड (अंतिम छोर) के किसानों के लिए नहर 4 दिन लगातार खुली रहेगी। सभी किसान अपनी बारी के अनुसार ही पानी लें।',
          ta: 'வாய்க்கால் பாசன விவசாயிகளே: வாய்க்கால் நீர் சுழற்சி முறையில் வழங்கப்படும். கடைமடை விவசாயிகளுக்கு 4 நாட்கள் தடையின்றி நீர் கிடைக்க வழிவகை செய்யப்பட்டுள்ளது.',
          kn: 'ಕಾಲುವೆ ನೀರಾವರಿ ರೈತರೇ: ಕಾಲುವೆ ನೀರನ್ನು ಇನ್ನು ಮುಂದೆ ಸರದಿಯ ಪ್ರಕಾರ ಹಂಚಲಾಗುವುದು. ಕೊನೆಯ ಹಂತದ ರೈತರಿಗೆ 4 ದಿನ ನಿರಂತರ ನೀರು ದೊರೆಯಲಿದೆ.',
          te: 'కాలువ ఆయకట్టు రైతులారా: కాలువ నీరు ఇకపై వంతుల వారీగా అందించబడుతుంది. చివరి ఆయకట్టు రైతులకు 4 రోజుల పాటు నిరంతరాయంగా నీరు అందుతుంది.'
        },
        lowCostTips: [
          'Construct field border strips before canal opening to prevent run-off wastage.',
          'Use portable tarpaulin flumes instead of unlined earthen field ditches.'
        ]
      },
      government: {
        headline: 'Canal Command Rotational Equity & Volumetric Quota Administration SOP',
        sopWorkflow: [
          { phase: 'Pre-Season Water Audit', trigger: 'Reservoir live storage assessed on July 1 & October 1', action: 'Calculate gross allocatable volume; deduct 20% conveyance loss; establish per-acre rotational quota.', owner: 'Chief Engineer (Irrigation)' },
          { phase: 'Rotational Gate Scheduling', trigger: 'Canal opening announcement', action: 'Issue strict rotational roster: Head distributaries closed during tail-end delivery cycles.', owner: 'Executive Engineer, Canal Division' },
          { phase: 'Anti-Siphoning Flying Squads', trigger: 'Canal transit phase', action: 'Deploy joint revenue-police flying squads to seize unauthorized pumps along main canal banks.', owner: 'Sub-Divisional Magistrate (SDM)' }
        ],
        budgetEstimate: 'INR 45 Lakhs per canal command for LoRa gate telemetry and logistics.',
        policyRequirements: [
          'Enactment of statutory Water Users Association (WUA) empowerment under State Irrigation Management Acts.',
          'Penal fines for illegal canal bund cutting increased to INR 10,000 with criminal trespass provisions.'
        ],
        monitoringKPIs: [
          'Tail-to-Head Delivery Ratio (Target: > 0.75).',
          'Reduction in canal head-end irrigation water duty wastage.',
          'Zero localized farmer clashes during water rotation cycles.'
        ]
      },
      engineer: {
        headline: 'Unsteady 1D Hydraulic Wave Routing & Predictive Rotational Gate Optimization',
        technicalModel: 'Saint-Venant 1D Hydrodynamic Wave Routing coupled with Mixed-Integer Linear Programming (MILP)',
        governingEquations: 'Continuity: dQ/dx + dA/dt = q_lat; Momentum: dQ/dt + d(Q²/A)/dx + g*A*(dh/dx + S_f - S_0) = 0.',
        inputParameters: [
          { name: 'Manning Roughness Coefficient', symbol: 'n', unit: 's/m^(1/3)', source: 'Concrete: 0.015; Earthen: 0.025–0.035' },
          { name: 'Canal Bed Slope', symbol: 'S_0', unit: 'm/m', source: 'Topographical Canal Longitudinal Section' },
          { name: 'Travel Time to Tail Reach', symbol: 'T_lag', unit: 'hours', source: 'Hydrodynamic Wave Calibration' },
          { name: 'Seepage Infiltration Rate', symbol: 'q_seep', unit: 'm³/s/km', source: 'Ponding Infiltration Tests' }
        ],
        telemetryArchitecture: 'Solar ultrasonic stage sensors at 5 km intervals transmit water level h(t) via 4G/LoRa to irrigation SCADA. Real-time backwater curve model calculates actual discharge Q(t) and adjusts upstream automated flume gates to maintain constant head at branch off-takes.',
        errorTolerance: 'Delivery discharge error at tail off-take <= 5%; Water arrival time forecast error <= 30 minutes.'
      },
      researcher: {
        headline: 'Algorithmic Fairness in Asymmetric Fluid Distribution: Resolving the Spatial Head-Tail Dilemma',
        theoreticalGrounding: 'Synthesizes Arrow-Debreu General Equilibrium with Ostrom Common-Pool Resource design principles, specifically addressing spatial asymmetry where upstream agents possess geographical first-mover power.',
        comparativeAnalysis: 'Unlike telecommunication packet scheduling where buffer storage is virtually lossless, open-channel hydrodynamic networks involve physical transit attenuation, seepage decay, and non-linear wave subsidence that penalize tail-end agents by up to 40% in dry conditions.',
        confidenceInterval: 'Hydraulic simulation of 180 canal command days demonstrates 90% confidence interval of tail-end equity index Gini coefficient improving from 0.68 down to 0.24.',
        knownGaps: [
          'Canal siltation dynamically alters cross-sectional roughness n, degrading model calibration after high-turbidity flood events.',
          'Night-time unauthorized pumping remains difficult to isolate without thermal satellite drone surveillance.',
          'Sub-surface return flows from upstream flooded fields alter localized water tables.'
        ],
        citations: [
          { title: 'Warabandi in Pakistan’s canal irrigation systems', authors: 'Bandaragoda, D. J.', year: '1998', journal: 'IIMI Research Report No. 17', doi: '10.3910/2009.020' },
          { title: 'Equity and efficiency in irrigation water distribution', authors: 'Chambers, R.', year: '1988', journal: 'Managing Canal Irrigation, Cambridge University Press' },
          { title: 'Hydrodynamic modeling of irrigation canals for real-time control', authors: 'Malaterre, P. O., & Baume, J. P.', year: '1998', journal: 'Journal of Irrigation and Drainage Engineering, 124(2), 71-81', doi: '10.1061/(ASCE)0733-9437(1998)124:2(71)' }
        ]
      }
    }
  }
];
