import React from 'react';
import { usePersona } from '../../context/PersonaContext';
import { Volume2, VolumeX, X } from 'lucide-react';

export const AudioTranscriptBanner: React.FC = () => {
  const { isPlayingAudio, audioTranscript, stopAudio, clearAudioTranscript, t } = usePersona();

  if (!audioTranscript) return null;

  return (
    <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 max-w-xl w-[92%] sm:w-full bg-white/95 backdrop-blur-md border border-sky-300 rounded-2xl shadow-xl p-3.5 sm:p-4 text-slate-900 animate-slideDown">
      <div className="flex items-start justify-between gap-2.5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
            {isPlayingAudio ? (
              <Volume2 className="w-4 h-4 animate-pulse text-sky-600" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-400" />
            )}
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 block">
              {isPlayingAudio ? 'Live Audio Broadcast Playing' : 'Voice Advisory Transcript'}
            </span>
            <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed mt-0.5">
              "{audioTranscript}"
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 shrink-0">
          {isPlayingAudio && (
            <button
              onClick={stopAudio}
              className="px-2.5 py-1 rounded-lg bg-rose-50 text-rose-700 border border-rose-200 text-[10px] font-bold hover:bg-rose-100"
            >
              {t('btnStopAudio', 'Stop')}
            </button>
          )}
          <button
            onClick={() => {
              stopAudio();
              clearAudioTranscript();
            }}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
