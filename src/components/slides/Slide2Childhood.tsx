import React from 'react';
import { MapPin, Baby, Brush, Star, CheckCircle } from 'lucide-react';

export const Slide2Childhood: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 overflow-hidden bg-stone-950 text-stone-100 select-none">
      {/* Decorative subtle header line */}
      <div className="flex items-center justify-between border-b border-stone-800 pb-3">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-medium">
          <span className="font-mono font-bold text-stone-500">DIAPO 02</span>
          <span className="text-stone-700">/</span>
          <span>Les Origines</span>
        </div>
        <span className="text-xs text-stone-400 font-mono">1881 — 1895</span>
      </div>

      {/* Title */}
      <div className="mt-4 mb-4">
        <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Son Enfance : L'Éveil d'un Prodige
        </h2>
        <p className="text-sm sm:text-base text-stone-300 font-sans mt-1">
          Comment un jeune garçon de Málaga a découvert sa passion avant même de parler
        </p>
      </div>

      {/* 3 Core Questions Answers in a refined geometric 3-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-auto">
        {/* Card 1: Où et quand */}
        <div className="bg-stone-900/90 border border-stone-800 hover:border-amber-500/40 p-5 rounded-xl transition-all flex flex-col justify-between shadow-lg">
          <div>
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-3">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono uppercase text-amber-400 font-semibold tracking-wider">
              Naissance & Lieu
            </span>
            <h3 className="font-serif-title text-lg font-bold text-white mt-1 mb-2">
              Quand et où est-il né ?
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Pablo Picasso est né le <strong>25 octobre 1881</strong> à <strong>Málaga</strong>, dans la région ensoleillée d'Andalousie, au sud de l'Espagne.
            </p>
            <p className="text-xs text-stone-400 leading-relaxed mt-2">
              Son nom complet de baptême comptait plus de dix prénoms selon la tradition espagnole ! Il a finalement choisi de signer avec le nom de sa mère : <em>Picasso</em>.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-stone-800 text-[11px] text-stone-400 flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Málaga (Andalousie, Espagne)</span>
          </div>
        </div>

        {/* Card 2: Comment s'est passée son enfance */}
        <div className="bg-stone-900/90 border border-stone-800 hover:border-rose-500/40 p-5 rounded-xl transition-all flex flex-col justify-between shadow-lg">
          <div>
            <div className="w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-3">
              <Baby className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono uppercase text-rose-400 font-semibold tracking-wider">
              Famille & Ambiance
            </span>
            <h3 className="font-serif-title text-lg font-bold text-white mt-1 mb-2">
              Comment s'est passée son enfance ?
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Pablo grandit dans un foyer chaleureux baigné par l'art. Son père, <strong>José Ruiz Blasco</strong>, était lui-même peintre et professeur d'art.
            </p>
            <p className="text-xs text-stone-400 leading-relaxed mt-2">
              Une célèbre anecdote raconte que le premier mot prononcé par le petit Pablo ne fut ni « maman » ni « papa », mais <strong>« piz »</strong>, abréviation du mot espagnol <em>lápiz</em> (crayon) !
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-stone-800 text-[11px] text-stone-400 flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-rose-400" />
            <span>Père professeur de dessin</span>
          </div>
        </div>

        {/* Card 3: Quand a-t-il commencé à peindre */}
        <div className="bg-stone-900/90 border border-stone-800 hover:border-blue-500/40 p-5 rounded-xl transition-all flex flex-col justify-between shadow-lg">
          <div>
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3">
              <Brush className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono uppercase text-blue-400 font-semibold tracking-wider">
              Précocité Inouïe
            </span>
            <h3 className="font-serif-title text-lg font-bold text-white mt-1 mb-2">
              Quand a-t-il commencé à peindre ?
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Il dessine avec passion dès l'âge de <strong>7 ans</strong>. À <strong>8-9 ans</strong>, il peint déjà sa toute première toile à l'huile : <em>Le Petit Picador jaune</em> (1889).
            </p>
            <p className="text-xs text-stone-400 leading-relaxed mt-2">
              À seulement <strong>14 ans</strong>, il réussit l'examen d'entrée aux Beaux-Arts de Barcelone en une seule journée, alors que l'épreuve durait normalement un mois entier !
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-stone-800 text-[11px] text-stone-400 flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
            <span>Admis aux Beaux-Arts à 14 ans</span>
          </div>
        </div>
      </div>

      {/* Bottom Key Takeaway Callout */}
      <div className="mt-4 p-3.5 bg-stone-900/70 border border-stone-800 rounded-xl flex items-center justify-between text-xs text-stone-300">
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong>À retenir :</strong> Picasso n'a jamais fait de dessins d'enfant maladroits. Dès son adolescence, sa technique égalait celle des adultes !
          </span>
        </div>
        <span className="hidden sm:inline text-stone-500 text-[11px]">« Quand j'étais enfant, je dessinais comme Raphaël »</span>
      </div>
    </div>
  );
};
