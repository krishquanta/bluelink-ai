import { Language } from '../types';

export interface TranslationDictionary {
  [key: string]: {
    en: string;
    hi: string;
    ta: string;
    kn: string;
    te: string;
  };
}

export const UI_TRANSLATIONS: TranslationDictionary = {
  // Navigation & Branding
  brandName: {
    en: 'BlueLink',
    hi: 'ब्लूलिंक (BlueLink)',
    ta: 'ப்ளூலிங்க் (BlueLink)',
    kn: 'ಬ್ಲೂಲಿಂಕ್ (BlueLink)',
    te: 'బ్లూలింక్ (BlueLink)'
  },
  brandTagline: {
    en: 'Cross-Domain Water Solutions Platform',
    hi: 'क्रॉस-डोमेन जल समाधान मंच',
    ta: 'துறை-இடை நீர் தீர்வுகள் தளம்',
    kn: 'ವಿವಿಧ ಕ್ಷೇತ್ರಗಳ ಜಲ ಪರಿಹಾರ ವೇದಿಕೆ',
    te: 'క్రాస్-డొమైన్ నీటి పరిష్కారాల వేదిక'
  },
  aiWaterEngine: {
    en: 'AI WATER ENGINE',
    hi: 'एआई जल इंजन',
    ta: 'AI நீர் இயந்திரம்',
    kn: 'AI ಜಲ ಎಂಜಿನ್',
    te: 'AI నీటి ఇంజిన్'
  },
  navHome: {
    en: 'Home',
    hi: 'होम',
    ta: 'முகப்பு',
    kn: 'ಮುಖಪುಟ',
    te: 'హోమ్'
  },
  navAIStudio: {
    en: 'AI Studio',
    hi: 'एआई स्टूडियो',
    ta: 'AI அரங்கம்',
    kn: 'AI ಸ್ಟುಡಿಯೋ',
    te: 'AI స్టూడియో'
  },
  navExplorer: {
    en: 'Problem Explorer',
    hi: 'समस्या खोज',
    ta: 'சிக்கல் ஆய்வாளர்',
    kn: 'ಸಮಸ್ಯೆ ಅನ್ವೇಷಕ',
    te: 'సమస్య అన్వేషకుడు'
  },
  navTransfer: {
    en: 'Solution Transfer',
    hi: 'समाधान स्थानांतरण',
    ta: 'தீர்வு மாற்றம்',
    kn: 'ಪರಿಹಾರ ವರ್ಗಾವಣೆ',
    te: 'పరిష్కార బదిలీ'
  },
  navPatterns: {
    en: 'Pattern Library',
    hi: 'पैटर्न लाइब्रेरी',
    ta: 'மாதிரி நூலகம்',
    kn: 'ಮಾದರಿ ಗ್ರಂಥಾಲಯ',
    te: 'నమూనా లైబ్రరీ'
  },
  navCases: {
    en: 'Case Studies',
    hi: 'केस स्टडीज',
    ta: 'நடைமுறை ஆய்வுகள்',
    kn: 'ಪ್ರಕರಣ ಅಧ್ಯಯನಗಳು',
    te: 'కేస్ స్టడీస్'
  },
  navDrought: {
    en: 'Drought Dashboard',
    hi: 'सूखा डैशबोर्ड',
    ta: 'வறட்சி தகவல் பலகை',
    kn: 'ಬರಗಾಲ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
    te: 'కరువు డాష్‌బోర్డ్'
  },
  navVault: {
    en: 'Evidence Vault',
    hi: 'प्रमाण वॉल्ट',
    ta: 'சான்று பெட்டகம்',
    kn: 'ಸಾಕ್ಷ್ಯ ವಾಲ್ಟ್',
    te: 'సాక్ష్య వాల్ట్'
  },
  navContribute: {
    en: 'Contribute',
    hi: 'योगदान दें',
    ta: 'பங்களிக்கவும்',
    kn: 'ಕೊಡುಗೆ ನೀಡಿ',
    te: 'సహకరించండి'
  },
  navMethodology: {
    en: 'Methodology',
    hi: 'पद्धति (मेथडोलॉजी)',
    ta: 'முறைமை',
    kn: 'ವಿಧಾನಶಾಸ್ತ್ರ',
    te: 'విధానము'
  },

  // Personas
  personaFarmer: {
    en: 'Farmer & Field',
    hi: 'किसान और खेत',
    ta: 'விவசாயி & நிலம்',
    kn: 'ರೈತ ಮತ್ತು ಕೃಷಿಭೂಮಿ',
    te: 'రైతు & పొలం'
  },
  personaGovt: {
    en: 'Water Authority',
    hi: 'जल प्रशासन / सरकार',
    ta: 'நீர் நிர்வாகம்',
    kn: 'ಜಲ ಪ್ರಾಧಿಕಾರ',
    te: 'నీటి ప్రాధికార సంస్థ'
  },
  personaEngineer: {
    en: 'Technical Engineer',
    hi: 'तकनीकी इंजीनियर',
    ta: 'தொழில்நுட்ப பொறியாளர்',
    kn: 'ತಾಂತ್ರಿಕ ಎಂಜಿನಿಯರ್',
    te: 'టెక్నికల్ ఇంజనీర్'
  },
  personaResearcher: {
    en: 'Academic Researcher',
    hi: 'शोधकर्ता (अकादमिक)',
    ta: 'ஆராய்ச்சியாளர்',
    kn: 'ಸಂಶೋಧಕ',
    te: 'పరిశోధకుడు'
  },

  // Hero Section
  heroTitle1: {
    en: 'Break the Silos of',
    hi: 'जल प्रबंधन के बंधनों को तोड़ें',
    ta: 'நீர் மேலாண்மை தடைகளை உடைப்போம்',
    kn: 'ಜಲ ನಿರ್ವಹಣೆಯ ಮಿತಿಗಳನ್ನು ಮುರಿಯಿರಿ',
    te: 'నీటి యాజమాన్య అవరోధాలను ఛేదించండి'
  },
  heroTitle2: {
    en: 'Water Management Innovation',
    hi: 'नवाचार आधारित जल समाधान',
    ta: 'புதுமையான நீர் மேலாண்மை தீர்வுகள்',
    kn: 'ನವೀನ ಜಲ ನಿರ್ವಹಣಾ ಪರಿಹಾರಗಳು',
    te: 'వినూత్న నీటి పరిష్కారాలు'
  },
  heroSubtitle: {
    en: 'Most water tools answer questions within a single sector. BlueLink uses AI pattern abstraction to transfer proven solutions between agriculture, cities, industry, and groundwater.',
    hi: 'पारंपरिक उपकरण केवल एक ही क्षेत्र में काम करते हैं। ब्लूलिंक एआई द्वारा कृषि, शहर, उद्योग और भूजल के बीच सिद्ध समाधानों का आदान-प्रदान करता है।',
    ta: 'பாரம்பரிய கருவிகள் ஒரே துறையில் மட்டுமே செயல்படுகின்றன. விவசாயம், நகர்ப்புறம் மற்றும் தொழில் துறைகளுக்கிடையே நிரூபிக்கப்பட்ட தீர்வுகளை ப்ளூலிங்க் AI மூலம் இணைக்கிறது.',
    kn: 'ಸಾಂಪ್ರದಾಯಿಕ ಉಪಕರಣಗಳು ಒಂದೇ ವಲಯದಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ. ಬ್ಲೂಲಿಂಕ್ AI ಮೂಲಕ ಕೃಷಿ, ನಗರ, ಕೈಗಾರಿಕೆ ಮತ್ತು ಅಂತರ್ಜಲದ ನಡುವೆ ಪರಿಹಾರಗಳನ್ನು ಸಂಯೋಜಿಸುತ್ತದೆ.',
    te: 'సాంప్రదాయ సాధనాలు ఒకే రంగంలో పనిచేస్తాయి. వ్యవసాయం, నగరాలు, పరిశ్రమల మధ్య ధృవీకరించబడిన పరిష్కారాలను బ్లూలింక్ AI బదిలీ చేస్తుంది.'
  },
  launchAIStudio: {
    en: 'Launch Live AI Studio',
    hi: 'लाइव एआई स्टूडियो शुरू करें',
    ta: 'நேரடி AI அரங்கத்தை தொடங்கு',
    kn: 'ಲೈವ್ AI ಸ್ಟುಡಿಯೋ ಪ್ರಾರಂಭಿಸಿ',
    te: 'లైవ్ AI స్టూడియోను ప్రారంభించండి'
  },
  exploreFlagship: {
    en: 'Explore Flagship Transfer Demo',
    hi: 'प्रमुख स्थानांतरण डेमो देखें',
    ta: 'முக்கிய மாதிரி மாற்றத்தை காண்க',
    kn: 'ಪ್ರಮುಖ ವರ್ಗಾವಣೆ ಡೆಮೊ ನೋಡಿ',
    te: 'ప్రధాన బదిలీ డెమోను చూడండి'
  },

  // Action Buttons
  btnExecuteAI: {
    en: 'Execute Cross-Domain AI Pipeline',
    hi: 'क्रॉस-डोमेन एआई पाइपलाइन चलाएं',
    ta: 'துறை-இடை AI அமைப்பை இயக்குக',
    kn: 'ಕ್ರಾಸ್-ಡೊಮೈನ್ AI ಪೈಪ್‌ಲೈನ್ ಚಲಾಯಿಸಿ',
    te: 'క్రాస్-డొమైన్ AI పైప్‌లైన్‌ను అమలు చేయండి'
  },
  btnInspectTrace: {
    en: 'Inspect AI Trace',
    hi: 'एआई ट्रेस की जांच करें',
    ta: 'AI தடத்தை ஆய்வு செய்க',
    kn: 'AI ಟ್ರೇಸ್ ಪರಿಶೀಲಿಸಿ',
    te: 'AI ట్రేస్‌ను తనిఖీ చేయండి'
  },
  btnOpenWorkbench: {
    en: 'Open in Full Solution Transfer Workbench',
    hi: 'पूर्ण समाधान वर्कबेंच में खोलें',
    ta: 'முழு தீர்வு மேடையில் திறக்க',
    kn: 'ಪೂರ್ಣ ಪರಿಹಾರ ವರ್ಕ್‌ಬೆಂಚ್‌ನಲ್ಲಿ ತೆರೆಯಿರಿ',
    te: 'పూర్తి పరిష్కార వర్క్‌బెంచ్‌లో తెరవండి'
  },
  btnListenAudio: {
    en: 'Listen Voice Advisory',
    hi: 'ध्वनि सलाह सुनें',
    ta: 'குரல் ஆலோசனையை கேட்கவும்',
    kn: 'ಧ್ವನಿ ಸಲಹೆಯನ್ನು ಆಲಿಸಿ',
    te: 'వాయిస్ సలహాను వినండి'
  },
  btnStopAudio: {
    en: 'Stop Audio',
    hi: 'ऑडियो रोकें',
    ta: 'ஆடியோவை நிறுத்து',
    kn: 'ಆಡಿಯೋ ನಿಲ್ಲಿಸಿ',
    te: 'ఆడియోను ఆపండి'
  },

  // Floating AI Button
  floatingAILabel: {
    en: 'AI Studio',
    hi: 'एआई स्टूडियो',
    ta: 'AI அரங்கம்',
    kn: 'AI ಸ್ಟುಡಿಯೋ',
    te: 'AI స్టూడియో'
  },
  floatingAIBadge: {
    en: 'Live Gemini • 50 Cases',
    hi: 'लाइव जेमिनी • 50 केस',
    ta: 'நேரடி ஜெமினி • 50 ஆய்வுகள்',
    kn: 'ಲೈವ್ ಜೆಮಿನಿ • 50 ಪ್ರಕರಣಗಳು',
    te: 'లైవ్ జెమిని • 50 కేసులు'
  },
  floatingAITooltip: {
    en: 'Click to open Cross-Domain AI Reasoning Engine',
    hi: 'क्रॉस-डोमेन एआई रीजनिंग इंजन खोलने के लिए क्लिक करें',
    ta: 'AI பகுப்பாய்வு இயந்திரத்தைத் திறக்க கிளிக் செய்க',
    kn: 'AI ತರ್ಕ ಎಂಜಿನ್ ತೆರೆಯಲು ಕ್ಲಿಕ್ ಮಾಡಿ',
    te: 'AI రీజనింగ్ ఇంజిన్‌ను తెరవడానికి క్లిక్ చేయండి'
  },

  // Status & Badges
  statusActive: {
    en: 'Active & Ready',
    hi: 'सक्रिय और तैयार',
    ta: 'செயலில் மற்றும் தயார்',
    kn: 'ಸಕ್ರಿಯ ಮತ್ತು ಸಿದ್ಧ',
    te: 'యాక్టివ్ మరియు సిద్ధం'
  },
  boundedDataset: {
    en: 'Bounded 50-Case Corpus',
    hi: 'सीमित 50-केस कॉर्पस',
    ta: 'கட்டுப்படுத்தப்பட்ட 50 வழக்குகள்',
    kn: '50-ಪ್ರಕರಣಗಳ ಸೀಮಿತ ಕಾರ್ಪಸ್',
    te: 'పరిమిత 50-కేసుల కార్పస్'
  },
  statutoryChecked: {
    en: '5 Statutory Manuals Verified',
    hi: '5 वैधानिक मैनुअल सत्यापित',
    ta: '5 சட்டப்பூர்வ வழிகாட்டிகள் சரிபார்க்கப்பட்டன',
    kn: '5 ಶಾಸನಬದ್ಧ ಕೈಪಿಡಿಗಳು ಪರಿಶೀಲಿಸಲಾಗಿದೆ',
    te: '5 చట్టబద్ధమైన మాన్యువల్స్ ధృవీకరించబడ్డాయి'
  }
};

/**
 * Translate a UI key into the chosen language, falling back to English.
 */
export function getUIText(key: string, lang: Language = 'en', fallback?: string): string {
  const item = UI_TRANSLATIONS[key];
  if (item && item[lang]) {
    return item[lang];
  }
  if (item && item.en) {
    return item.en;
  }
  return fallback || key;
}

/**
 * Common phrase mappings for dynamic text translation (e.g. verdicts, sectors, stages)
 */
export const PHRASE_TRANSLATIONS: Record<string, Record<Language, string>> = {
  'Agriculture': {
    en: 'Agriculture',
    hi: 'कृषि एवं सिंचाई',
    ta: 'விவசாயம் & பாசனம்',
    kn: 'ಕೃಷಿ ಮತ್ತು ನೀರಾವರಿ',
    te: 'వ్యవసాయం & నీటిపారుదల'
  },
  'Urban / Municipal': {
    en: 'Urban / Municipal',
    hi: 'शहरी / नगर पालिका',
    ta: 'நகர்ப்புறம் / நகராட்சி',
    kn: 'ನಗರ / ಪುರಸಭೆ',
    te: 'పట్టణ / మునిసిపల్'
  },
  'Industry & Energy': {
    en: 'Industry & Energy',
    hi: 'उद्योग एवं ऊर्जा',
    ta: 'தொழில்துறை & ஆற்றல்',
    kn: 'ಕೈಗಾರಿಕೆ ಮತ್ತು ಶಕ್ತಿ',
    te: 'పరిశ్రమ & శక్తి'
  },
  'Groundwater & Watershed': {
    en: 'Groundwater & Watershed',
    hi: 'भूजल एवं जलक्षेत्र',
    ta: 'நிலத்தடி நீர் & நீர்ப்பிடிப்பு',
    kn: 'ಅಂತರ್ಜಲ ಮತ್ತು ಜಲಾನಯನ',
    te: 'భూగర్భ జలాలు & వాటర్‌షెడ్'
  },
  'Reservoirs & River Basins': {
    en: 'Reservoirs & River Basins',
    hi: 'जलाशय एवं नदी बेसिन',
    ta: 'நீர்த்தேக்கங்கள் & நதிப் படுகைகள்',
    kn: 'ಜಲಾಶಯಗಳು ಮತ್ತು ನದಿ ಕಣಿವೆಗಳು',
    te: 'రిజర్వాయర్లు & నదీ పరీవాహక ప్రాంతాలు'
  },
  'Proven': {
    en: 'Proven',
    hi: 'प्रमाणित',
    ta: 'நிரூபிக்கப்பட்டது',
    kn: 'ಸಾಬೀತಾಗಿದೆ',
    te: 'నిరూపించబడింది'
  },
  'Promising (Needs Pilot)': {
    en: 'Promising (Needs Pilot)',
    hi: 'आशाजनक (पायलट परीक्षण आवश्यक)',
    ta: 'நம்பிக்கைக்குரியது (பரிசோதனை தேவை)',
    kn: 'ಭರವಸೆಯುಳ್ಳದ್ದು (ಪೈಲಟ್ ಅಗತ್ಯ)',
    te: 'ఆశాజనకం (పైలట్ అవసరం)'
  },
  'High Risk / Conditional': {
    en: 'High Risk / Conditional',
    hi: 'उच्च जोखिम / सशर्त',
    ta: 'அதிக ஆபத்து / நிபந்தனைக்குட்பட்டது',
    kn: 'ಹೆಚ್ಚಿನ ಅಪಾಯ / ಷರತ್ತುಬದ್ಧ',
    te: 'అధిక ప్రమాదం / షరతులతో కూడిన'
  }
};

export function translatePhrase(phrase: string, lang: Language): string {
  if (lang === 'en') return phrase;
  if (PHRASE_TRANSLATIONS[phrase] && PHRASE_TRANSLATIONS[phrase][lang]) {
    return PHRASE_TRANSLATIONS[phrase][lang];
  }
  return phrase;
}
