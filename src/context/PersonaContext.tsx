import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Persona, Language } from '../types';
import { getUIText, translatePhrase } from '../data/translations';

interface PersonaContextType {
  persona: Persona;
  setPersona: (p: Persona) => void;
  language: Language;
  setLanguage: (l: Language) => void;
  activeView: string;
  setActiveView: (v: string) => void;
  selectedTransferId: string;
  setSelectedTransferId: (id: string) => void;
  selectedCaseId: string;
  setSelectedCaseId: (id: string) => void;
  // Translation helper
  t: (key: string, fallback?: string) => string;
  tPhrase: (phrase: string) => string;
  // Speech synthesis
  isPlayingAudio: boolean;
  audioTranscript: string | null;
  speakAudio: (text: string, lang?: Language) => void;
  stopAudio: () => void;
  clearAudioTranscript: () => void;
}

const PersonaContext = createContext<PersonaContextType | undefined>(undefined);

export const PersonaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [persona, setPersona] = useState<Persona>('farmer');
  const [language, setLanguage] = useState<Language>('en'); // Default is English
  const [activeView, setActiveView] = useState<string>('home');
  const [selectedTransferId, setSelectedTransferId] = useState<string>('transfer-city-to-farmer');
  const [selectedCaseId, setSelectedCaseId] = useState<string>('case-cape-town');
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [audioTranscript, setAudioTranscript] = useState<string | null>(null);

  // Translation helpers bound to current language
  const t = useCallback((key: string, fallback?: string): string => {
    return getUIText(key, language, fallback);
  }, [language]);

  const tPhrase = useCallback((phrase: string): string => {
    return translatePhrase(phrase, language);
  }, [language]);

  // Pre-load synthesis voices
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.getVoices();
      const onVoicesChanged = () => {
        window.speechSynthesis.getVoices();
      };
      window.speechSynthesis.onvoiceschanged = onVoicesChanged;
      return () => {
        window.speechSynthesis.onvoiceschanged = null;
        window.speechSynthesis.cancel();
      };
    }
  }, []);

  const stopAudio = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlayingAudio(false);
  };

  const clearAudioTranscript = () => {
    setAudioTranscript(null);
  };

  const speakAudio = (text: string, langOverride?: Language) => {
    const targetLang = langOverride || language;
    setAudioTranscript(text);

    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported in this browser.');
      return;
    }

    try {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);

      const langMap: Record<Language, string> = {
        en: 'en-IN',
        hi: 'hi-IN',
        ta: 'ta-IN',
        kn: 'kn-IN',
        te: 'te-IN'
      };

      const bcpTag = langMap[targetLang] || 'en-US';
      utterance.lang = bcpTag;
      utterance.rate = 0.92;

      // Select matching voice if available
      const voices = window.speechSynthesis.getVoices();
      const matchingVoice = voices.find(v => v.lang.startsWith(targetLang) || v.lang.includes(bcpTag));
      if (matchingVoice) {
        utterance.voice = matchingVoice;
      }

      utterance.onstart = () => setIsPlayingAudio(true);
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = (e) => {
        console.warn('Speech synthesis event error:', e);
        setIsPlayingAudio(false);
      };

      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.error('Failed to trigger speech synthesis:', err);
      setIsPlayingAudio(false);
    }
  };

  return (
    <PersonaContext.Provider
      value={{
        persona,
        setPersona,
        language,
        setLanguage,
        activeView,
        setActiveView,
        selectedTransferId,
        setSelectedTransferId,
        selectedCaseId,
        setSelectedCaseId,
        t,
        tPhrase,
        isPlayingAudio,
        audioTranscript,
        speakAudio,
        stopAudio,
        clearAudioTranscript
      }}
    >
      {children}
    </PersonaContext.Provider>
  );
};

export const usePersona = () => {
  const context = useContext(PersonaContext);
  if (!context) {
    throw new Error('usePersona must be used within a PersonaProvider');
  }
  return context;
};
