import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Crosshair,
  Clock,
  LayoutGrid,
  Info
} from 'lucide-react';

interface PresentationControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  isLaserActive: boolean;
  onToggleLaser: () => void;
  isTimerActive: boolean;
  onToggleTimer: () => void;
  isGridOpen: boolean;
  onToggleGrid: () => void;
}

export const PresentationControls: React.FC<PresentationControlsProps> = ({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  isLaserActive,
  onToggleLaser,
  isTimerActive,
  onToggleTimer,
  isGridOpen,
  onToggleGrid,
}) => {
  return (
    <footer className="no-print h-16 bg-stone-950/95 border-t border-stone-800/80 px-4 lg:px-8 flex items-center justify-between z-40 select-none">
      {/* Left zone: Utility toggles */}
      <div className="flex items-center gap-2">
        <button
          onClick={onToggleGrid}
          title="Afficher la mosaïque de toutes les diapositives"
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium transition-colors ${
            isGridOpen
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
          }`}
        >
          <LayoutGrid className="w-4 h-4" />
          <span className="hidden sm:inline">Miniatures</span>
        </button>

        <button
          onClick={onToggleLaser}
          title={isLaserActive ? 'Désactiver le pointeur laser virtuel' : 'Activer le pointeur laser virtuel pour pointer les toiles'}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium transition-colors ${
            isLaserActive
              ? 'bg-red-500/20 text-red-400 border border-red-500/30 ring-1 ring-red-500/50'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
          }`}
        >
          <Crosshair className={`w-4 h-4 ${isLaserActive ? 'animate-pulse text-red-400' : ''}`} />
          <span className="hidden sm:inline">Pointeur Laser</span>
        </button>

        <button
          onClick={onToggleTimer}
          title="Minuteur de présentation orale (pour s'entraîner au timing)"
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium transition-colors ${
            isTimerActive
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
          }`}
        >
          <Clock className="w-4 h-4" />
          <span className="hidden sm:inline">Chronomètre</span>
        </button>
      </div>

      {/* Center zone: Slide step indicators & Progress bar */}
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 text-xs font-mono text-stone-300">
          <span className="text-stone-400">Diapositive</span>
          <span className="text-amber-400 font-bold tabular-nums text-sm">
            {String(currentSlide).padStart(2, '0')}
          </span>
          <span className="text-stone-500">/</span>
          <span className="text-stone-400 tabular-nums">
            {String(totalSlides).padStart(2, '0')}
          </span>
        </div>
        {/* Progress track */}
        <div className="w-36 sm:w-48 h-1 bg-stone-800 rounded-full mt-1 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-500 to-rose-500 transition-all duration-300 ease-out"
            style={{ width: `${(currentSlide / totalSlides) * 100}%` }}
          />
        </div>
      </div>

      {/* Right zone: Previous / Next controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={onPrev}
          disabled={currentSlide <= 1}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            currentSlide <= 1
              ? 'text-stone-600 bg-stone-900/50 cursor-not-allowed'
              : 'text-stone-200 bg-stone-800 hover:bg-stone-700 active:scale-95'
          }`}
          title="Diapositive précédente (Touche Flèche Gauche)"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Précédent</span>
        </button>

        <button
          onClick={onNext}
          disabled={currentSlide >= totalSlides}
          className={`flex items-center gap-1 px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            currentSlide >= totalSlides
              ? 'text-stone-600 bg-stone-900/50 cursor-not-allowed'
              : 'text-stone-950 bg-amber-500 hover:bg-amber-400 active:scale-95 shadow-sm'
          }`}
          title="Diapositive suivante (Touche Flèche Droite ou Espace)"
        >
          <span>Suivant</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};
