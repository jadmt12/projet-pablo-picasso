import React from 'react';
import { X, Volume2, Lightbulb, MessageSquareQuote } from 'lucide-react';
import { SLIDES_METADATA } from '../data/slidesData';

interface PresenterNotesDrawerProps {
  currentSlide: number;
  isOpen: boolean;
  onClose: () => void;
}

export const PresenterNotesDrawer: React.FC<PresenterNotesDrawerProps> = ({
  currentSlide,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const currentMeta = SLIDES_METADATA.find((s) => s.number === currentSlide);

  return (
    <div className="fixed top-14 right-0 bottom-16 w-full max-w-sm sm:max-w-md bg-stone-900/98 border-l border-stone-800 shadow-2xl z-40 p-5 overflow-y-auto backdrop-blur-md flex flex-col justify-between text-stone-200">
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-stone-800">
          <div className="flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm font-semibold text-stone-100">
              Notes pour l'orateur (Diapositive {currentSlide})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white p-1 rounded-md hover:bg-stone-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Current slide reminder */}
        <div className="mt-4">
          <span className="text-[11px] uppercase tracking-wider text-amber-500/90 font-medium">
            Titre de la diapositive
          </span>
          <p className="font-serif-title text-base font-semibold text-stone-100 mt-0.5">
            {currentMeta?.title}
          </p>
          <p className="text-xs text-stone-400 mt-1">
            {currentMeta?.subtitle}
          </p>
        </div>

        {/* What to say */}
        <div className="mt-6 space-y-3">
          <span className="text-[11px] uppercase tracking-wider text-stone-400 font-medium flex items-center gap-1.5">
            <MessageSquareQuote className="w-3.5 h-3.5 text-amber-400" />
            Que dire à la classe (Guide oral)
          </span>

          <div className="space-y-2.5">
            {currentMeta?.speakerNotes.map((note, idx) => (
              <div
                key={idx}
                className="bg-stone-800/80 p-3 rounded-lg border border-stone-700/60 text-xs text-stone-200 leading-relaxed"
              >
                <span className="font-mono text-amber-400 font-bold mr-1.5">{idx + 1}.</span>
                {note}
              </div>
            ))}
          </div>
        </div>

        {/* Key takeaway */}
        <div className="mt-6 p-3.5 bg-amber-500/10 border border-amber-500/25 rounded-lg">
          <span className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5 mb-1">
            <Lightbulb className="w-3.5 h-3.5" /> Idée force à retenir
          </span>
          <p className="text-xs text-stone-300 leading-relaxed">
            {currentMeta?.keyTakeaway}
          </p>
        </div>
      </div>

      {/* Classroom oral tip */}
      <div className="pt-4 mt-6 border-t border-stone-800 text-[11px] text-stone-400">
        💡 <strong className="text-stone-300">Conseil d'oral :</strong> Regardez vos camarades et le professeur dans les yeux, parlez calmement sans réciter trop vite, et pointez les images avec le pointeur laser virtuel !
      </div>
    </div>
  );
};
