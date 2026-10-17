import React from 'react';
import { Sparkles, Compass, Lightbulb, Heart, ArrowRight } from 'lucide-react';

interface Slide9ConclusionProps {
  onGoToQuiz: () => void;
}

export const Slide9Conclusion: React.FC<Slide9ConclusionProps> = ({ onGoToQuiz }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 overflow-hidden bg-stone-950 text-stone-100 select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-stone-800 pb-3">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-medium">
          <span className="font-mono font-bold text-stone-500">DIAPO 09</span>
          <span className="text-stone-700">/</span>
          <span>Synthèse Scolaire</span>
        </div>
        <span className="text-xs text-stone-400 font-mono">Bilan & Réflexion</span>
      </div>

      {/* Main Title */}
      <div className="mt-3 mb-2">
        <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Conclusion : Leçons d'un Regard Neuf
        </h2>
        <p className="text-sm text-stone-300 font-sans mt-0.5">
          Ce que le génie de Pablo Picasso nous enseigne aujourd'hui
        </p>
      </div>

      {/* 2 Core Synthesis Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-auto">
        {/* Card 1: Qu'est-ce qui rend Pablo Picasso unique ? */}
        <div className="bg-stone-900/90 border border-stone-800 p-5 rounded-2xl flex flex-col justify-between shadow-xl">
          <div>
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
              <Sparkles className="w-5 h-5" />
            </div>

            <span className="text-xs font-mono uppercase text-amber-400 font-semibold tracking-wider">
              Une Singularité Totale
            </span>
            <h3 className="font-serif-title text-xl font-bold text-white mt-1 mb-2">
              Qu'est-ce qui rend Pablo Picasso unique ?
            </h3>

            <ul className="space-y-2 text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                <span><strong>Un courage créatif permanent :</strong> Dès qu'il maîtrisait parfaitement un style, il l'abandonnait pour en inventer un tout nouveau, sans craindre la critique.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                <span><strong>Une énergie créatrice inépuisable :</strong> De son premier tableau à 8 ans jusqu'à ses dernières toiles à 91 ans, il n'a jamais cessé d'explorer.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                <span><strong>L'art comme cri de conscience :</strong> Il a mis son pinceau au service de la paix avec <em>Guernica</em> et sa célèbre colombe.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Card 2: Qu'est-ce que nous pouvons apprendre de son art ? */}
        <div className="bg-stone-900/90 border border-stone-800 p-5 rounded-2xl flex flex-col justify-between shadow-xl">
          <div>
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mb-3">
              <Compass className="w-5 h-5" />
            </div>

            <span className="text-xs font-mono uppercase text-rose-400 font-semibold tracking-wider">
              À Retenir Pour Nous
            </span>
            <h3 className="font-serif-title text-xl font-bold text-white mt-1 mb-2">
              Que pouvons-nous apprendre de son art ?
            </h3>

            <ul className="space-y-2 text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                <span><strong>Multiplier les points de vue :</strong> Dans la vie comme en peinture, regarder une situation sous plusieurs facettes évite les jugements hâtifs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                <span><strong>Ne pas avoir peur de se tromper :</strong> Chaque tentative et chaque erreur font partie du voyage de l'apprentissage.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                <span><strong>Garder notre âme d'enfant :</strong> Conserver intacte la curiosité, l'émerveillement et la liberté de rêver.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Striking Final Thought Banner (without inventing fake quote attributed to Picasso) */}
      <div className="bg-gradient-to-r from-amber-500/15 via-stone-900 to-rose-500/15 border border-amber-500/30 p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div className="space-y-1">
          <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
            Pensée de clôture sur l'imagination
          </span>
          <p className="font-serif-title text-base sm:text-lg text-white font-medium italic">
            « L'œuvre de Picasso nous rappelle que l'imagination humaine ne consiste pas à copier le monde tel qu'il nous est donné, mais à avoir le courage de le regarder sous tous ses angles pour inventer notre propre avenir. »
          </p>
        </div>

        <button
          onClick={onGoToQuiz}
          className="shrink-0 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2 active:scale-95"
        >
          <span>Passer au Quiz Final</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Footer info */}
      <div className="text-xs text-stone-500 pt-2 border-t border-stone-800/80 flex items-center justify-between">
        <span>Fin de la partie théorique de l'exposé</span>
        <span className="text-stone-400 text-[11px]">Prochaine étape : Quiz interactif de la classe</span>
      </div>
    </div>
  );
};
