import React from 'react';
import { QUIZ_QUESTIONS } from '../../data/slidesData';
import { CheckCircle2, XCircle, Award, RotateCcw, Printer, ArrowLeft } from 'lucide-react';

interface Slide11AnswersProps {
  userAnswers: Record<number, 'A' | 'B' | 'C' | null>;
  onGoBackToQuiz: () => void;
  onResetQuiz: () => void;
  onPrint: () => void;
}

export const Slide11Answers: React.FC<Slide11AnswersProps> = ({
  userAnswers,
  onGoBackToQuiz,
  onResetQuiz,
  onPrint,
}) => {
  // Calculate score
  let score = 0;
  let totalAnswered = 0;

  QUIZ_QUESTIONS.forEach((q) => {
    const userChoice = userAnswers[q.id];
    if (userChoice) {
      totalAnswered++;
      const correctOpt = q.options.find((o) => o.isCorrect);
      if (correctOpt && userChoice === correctOpt.letter) {
        score++;
      }
    }
  });

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8 lg:p-10 overflow-hidden bg-stone-950 text-stone-100 select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-stone-800 pb-2.5">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-medium">
          <span className="font-mono font-bold text-stone-500">DIAPO 11</span>
          <span className="text-stone-700">/</span>
          <span>Corrigé Officiel</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono">
          {totalAnswered > 0 ? (
            <span className="text-emerald-400 font-bold">
              Votre Score : {score} / {QUIZ_QUESTIONS.length}
            </span>
          ) : (
            <span className="text-stone-400">Mode Corrigé pour la Classe</span>
          )}
        </div>
      </div>

      {/* Main Title & Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-2 mb-2">
        <div>
          <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Réponses du Quiz & Explications Détaillées
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 font-sans mt-0.5">
            Toutes les réponses expliquées simplement pour consolider les connaissances scolaires
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onGoBackToQuiz}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-stone-300 hover:text-white bg-stone-900 border border-stone-800 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Retour au quiz</span>
          </button>

          <button
            onClick={onPrint}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg border border-stone-700 transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Imprimer la synthèse</span>
          </button>
        </div>
      </div>

      {/* 5 Questions Solutions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-auto overflow-y-auto max-h-[64vh] pr-1">
        {QUIZ_QUESTIONS.map((q) => {
          const userChoice = userAnswers[q.id];
          const correctOpt = q.options.find((o) => o.isCorrect)!;
          const isUserCorrect = userChoice === correctOpt.letter;

          return (
            <div
              key={q.id}
              className="bg-stone-900/90 border border-stone-800 p-3.5 rounded-xl flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <span className="font-mono text-xs font-bold px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 shrink-0">
                    Question {q.id}
                  </span>
                  {userChoice && (
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                        isUserCorrect
                          ? 'bg-emerald-500/20 text-emerald-300'
                          : 'bg-red-500/20 text-red-300'
                      }`}
                    >
                      {isUserCorrect ? (
                        <>
                          <CheckCircle2 className="w-3 h-3" /> Correct
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3 h-3" /> Faux ({userChoice})
                        </>
                      )}
                    </span>
                  )}
                </div>

                <h4 className="font-serif-title text-sm font-semibold text-stone-100 mb-2">
                  {q.question.replace(/^\d+\.\s*/, '')}
                </h4>

                {/* Correct Answer Highlight */}
                <div className="bg-emerald-950/40 border border-emerald-500/30 p-2.5 rounded-lg mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-500 text-stone-950 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                    {correctOpt.letter}
                  </span>
                  <span className="text-xs font-bold text-emerald-300">
                    {correctOpt.text}
                  </span>
                </div>

                {/* Pedagogical Explanation */}
                <p className="text-xs text-stone-300 leading-relaxed font-sans">
                  {q.explanation}
                </p>
              </div>

              {/* Historical context snippet */}
              <div className="mt-2.5 pt-2 border-t border-stone-800/80 text-[11px] text-stone-400">
                💡 <span className="text-stone-300">{q.historicalContext}</span>
              </div>
            </div>
          );
        })}

        {/* 6th Card: Score & Congratulations card */}
        <div className="bg-gradient-to-br from-amber-500/15 via-stone-900 to-emerald-500/15 border border-amber-500/30 p-4 rounded-xl flex flex-col justify-between shadow-xl">
          <div>
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-2">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="font-serif-title text-base font-bold text-white mb-1">
              Félicitations pour cet exposé !
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Vous avez exploré toutes les facettes du génie de Pablo Picasso : son enfance à Málaga, ses périodes bleue et rose, la révolution du cubisme et le message universel de Guernica.
            </p>
          </div>

          <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-xs">
            <span className="text-amber-400 font-semibold">Exposé terminé avec succès</span>
            <button
              onClick={onResetQuiz}
              className="text-stone-400 hover:text-white flex items-center gap-1 text-[11px]"
            >
              <RotateCcw className="w-3 h-3" /> Recommencer
            </button>
          </div>
        </div>
      </div>

      {/* Footer message */}
      <div className="text-xs text-stone-400 pt-2 border-t border-stone-800/80 flex items-center justify-between">
        <span>Remerciez votre auditoire pour son attention et invitez vos camarades à poser leurs questions !</span>
        <span className="text-emerald-400 font-mono text-[11px]">Bravo à tous !</span>
      </div>
    </div>
  );
};
