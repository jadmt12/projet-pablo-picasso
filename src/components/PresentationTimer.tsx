import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, X } from 'lucide-react';

interface PresentationTimerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PresentationTimer: React.FC<PresentationTimerProps> = ({ isOpen, onClose }) => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (!isRunning && interval) {
      clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  if (!isOpen) return null;

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;

  const isWarning = minutes >= 8;
  const isDanger = minutes >= 10;

  return (
    <div className="fixed bottom-20 left-4 z-40 bg-stone-900/95 border border-stone-700/80 rounded-xl p-3.5 shadow-2xl backdrop-blur-md flex flex-col gap-2 min-w-[200px] text-stone-200">
      <div className="flex items-center justify-between text-xs text-stone-400 font-medium">
        <span>Minuteur d'Exposé</span>
        <button
          onClick={onClose}
          className="text-stone-400 hover:text-white p-0.5 rounded"
          title="Fermer le chronomètre"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="flex items-center justify-center py-1">
        <span
          className={`font-mono text-3xl font-bold tracking-wider tabular-nums ${
            isDanger
              ? 'text-red-400 animate-pulse'
              : isWarning
              ? 'text-amber-400'
              : 'text-emerald-400'
          }`}
        >
          {formattedTime}
        </span>
      </div>

      <div className="text-[11px] text-center text-stone-400">
        {minutes < 3 && 'Introduction & Début'}
        {minutes >= 3 && minutes < 7 && 'Milieu : Styles & Œuvres'}
        {minutes >= 7 && minutes < 10 && 'Approche de la fin : Quiz'}
        {minutes >= 10 && 'Temps limite conseillé atteint'}
      </div>

      <div className="flex items-center justify-center gap-2 pt-1">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
            isRunning
              ? 'bg-amber-600 hover:bg-amber-500 text-white'
              : 'bg-emerald-600 hover:bg-emerald-500 text-white'
          }`}
        >
          {isRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          <span>{isRunning ? 'Pause' : 'Démarrer'}</span>
        </button>

        <button
          onClick={() => {
            setIsRunning(false);
            setSeconds(0);
          }}
          className="p-1.5 text-stone-400 hover:text-white hover:bg-stone-800 rounded-md transition-colors"
          title="Remettre à zéro"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
