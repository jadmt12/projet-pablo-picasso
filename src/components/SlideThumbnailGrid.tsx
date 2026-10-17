import React from 'react';
import { X, Check } from 'lucide-react';
import { SLIDES_METADATA } from '../data/slidesData';

interface SlideThumbnailGridProps {
  currentSlide: number;
  isOpen: boolean;
  onSelectSlide: (slideNumber: number) => void;
  onClose: () => void;
}

export const SlideThumbnailGrid: React.FC<SlideThumbnailGridProps> = ({
  currentSlide,
  isOpen,
  onSelectSlide,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex flex-col p-6 sm:p-10 overflow-y-auto">
      <div className="flex items-center justify-between max-w-6xl w-full mx-auto pb-6 border-b border-stone-800">
        <div>
          <h2 className="font-serif-title text-2xl text-stone-100 font-bold">
            Sommaire des Diapositives
          </h2>
          <p className="text-xs text-stone-400 mt-1">
            Cliquez sur une diapositive pour y accéder instantanément
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-2 bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white rounded-lg transition-colors"
          title="Fermer la vue miniature"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl w-full mx-auto mt-8">
        {SLIDES_METADATA.map((slide) => {
          const isActive = currentSlide === slide.number;
          return (
            <button
              key={slide.id}
              onClick={() => {
                onSelectSlide(slide.number);
                onClose();
              }}
              className={`text-left p-4 rounded-xl border transition-all flex flex-col justify-between group h-36 ${
                isActive
                  ? 'bg-amber-500/10 border-amber-500 ring-2 ring-amber-500/30'
                  : 'bg-stone-900 border-stone-800 hover:border-stone-600 hover:bg-stone-850'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-amber-500">
                    DIAPO {String(slide.number).padStart(2, '0')}
                  </span>
                  <span className="text-[11px] text-stone-400 uppercase tracking-wider">
                    {slide.category}
                  </span>
                </div>
                <h4 className="font-serif-title text-sm font-semibold text-stone-200 line-clamp-2 group-hover:text-amber-300 transition-colors">
                  {slide.title}
                </h4>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-stone-800/80 text-[11px] text-stone-400">
                <span className="truncate pr-2">{slide.subtitle}</span>
                {isActive && <Check className="w-4 h-4 text-amber-400 shrink-0" />}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
