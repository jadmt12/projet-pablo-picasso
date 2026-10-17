import React from 'react';
import { QUIZ_QUESTIONS } from '../../data/slidesData';
import { HelpCircle, ArrowRight, RotateCcw, CheckCircle2 } from 'lucide-react';

interface Slide10QuizProps {
  userAnswers: Record<number, 'A' | 'B' | 'C' | null>;
  onSelectOption: (questionId: number, letter: 'A' | 'B' | 'C') => void;
  onResetQuiz: () => void;
  onGoToAnswers: () => void;
}

export const Slide10Quiz: React.FC<Slide10QuizProps> = ({
  userAnswers,
  onSelectOption,
  onResetQuiz,
  onGoToAnswers,
}) => {
  const answeredCount = Object.values(userAnswers).filter(Boolean).length;
  const isComplete = answeredCount === QUIZ_QUESTIONS.length;

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8 lg:p-10 overflow-hidden bg-stone-950 text-stone-100 select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-stone-800 pb-2.5">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-medium">
          <span className="font-mono font-bold text-stone-500">DIAPO 10</span>
          <span className="text-stone-700">/</span>
          <span>Évaluation Interactive</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
          <span>Réponses sélectionnées : </span>
          <span className="text-amber-400 font-bold tabular-nums">
            {answeredCount} / {QUIZ_QUESTIONS.length}
          </span>
        </div>
      </div>

      {/* Main Title & Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-2 mb-2">
        <div>
          <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Quiz Final : 5 Questions pour la Classe
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 font-sans mt-0.5">
            Choisissez l'option A, B ou C pour chaque question. Les réponses ne sont pas dévoilées ici !
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onResetQuiz}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-stone-400 hover:text-white bg-stone-900 border border-stone-800 rounded-lg transition-colors"
            title="Effacer vos sélections"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Réinitialiser</span>
          </button>

          <button
            onClick={onGoToAnswers}
            className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold bg-amber-500 hover:bg-amber-400 text-stone-950 rounded-lg shadow-md transition-all active:scale-95"
          >
            <span>Voir le Corrigé (Diapo 11)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* The 5 Questions Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-auto overflow-y-auto max-h-[64vh] pr-1">
        {QUIZ_QUESTIONS.map((q) => {
          const selectedLetter = userAnswers[q.id];

          return (
            <div
              key={q.id}
              className={`bg-stone-900/90 border rounded-xl p-3.5 flex flex-col justify-between shadow-lg transition-all ${
                selectedLetter
                  ? 'border-amber-500/50 bg-stone-900'
                  : 'border-stone-800 hover:border-stone-700'
              }`}
            >
              <div>
                <div className="flex items-start gap-2 mb-2">
                  <span className="font-mono text-xs font-bold px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-400 shrink-0 mt-0.5">
                    Q{q.id}
                  </span>
                  <h3 className="font-serif-title text-sm font-semibold text-white leading-snug">
                    {q.question.replace(/^\d+\.\s*/, '')}
                  </h3>
                </div>

                {/* 3 Options: A, B, C */}
                <div className="space-y-1.5 mt-2">
                  {q.options.map((opt) => {
                    const isPicked = selectedLetter === opt.letter;
                    return (
                      <button
                        key={opt.letter}
                        onClick={() => onSelectOption(q.id, opt.letter)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center justify-between border ${
                          isPicked
                            ? 'bg-amber-500 text-stone-950 border-amber-400 font-bold shadow-sm'
                            : 'bg-stone-950/80 text-stone-300 border-stone-800 hover:bg-stone-800 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-5 h-5 rounded-full flex items-center justify-center font-mono text-[11px] font-bold ${
                              isPicked
                                ? 'bg-stone-950 text-amber-400'
                                : 'bg-stone-800 text-stone-300'
                            }`}
                          >
                            {opt.letter}
                          </span>
                          <span className="truncate">{opt.text}</span>
                        </div>
                        {isPicked && <CheckCircle2 className="w-4 h-4 text-stone-950 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Status footer for this card */}
              <div className="mt-3 pt-2 border-t border-stone-800/80 flex items-center justify-between text-[10px] text-stone-400">
                <span>{selectedLetter ? `Option choisie : ${selectedLetter}` : 'En attente de votre vote'}</span>
                <span className="text-stone-500">3 choix</span>
              </div>
            </div>
          );
        })}

        {/* 6th Card: Classroom Prompt card */}
        <div className="bg-gradient-to-br from-stone-900 to-amber-950/20 border border-stone-800 p-4 rounded-xl flex flex-col justify-between">
          <div>
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center mb-2">
              <HelpCircle className="w-4 h-4" />
            </div>
            <h4 className="font-serif-title text-sm font-bold text-amber-300 mb-1">
              Animation en classe
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed font-sans">
              Interrogez vos camarades à main levée pour chaque question avant de cliquer sur vos réponses !
            </p>
          </div>

          <div className="pt-3 border-t border-stone-800">
            <button
              onClick={onGoToAnswers}
              className="w-full py-2 bg-stone-800 hover:bg-stone-700 text-amber-400 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Accéder au corrigé complet</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer hint */}
      <div className="text-xs text-stone-400 pt-2 border-t border-stone-800/80 flex items-center justify-between">
        <span>Conformément aux consignes, les bonnes réponses ne sont pas dévoilées sur cette diapositive.</span>
        <span className="text-amber-400 text-[11px] font-mono">Diapositive suivante : Corrigé</span>
      </div>
    </div>
  );
};
