import React from 'react';
import { Globe, Lightbulb, Users, ShieldCheck, HeartHandshake } from 'lucide-react';

export const Slide8Influence: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 overflow-hidden bg-stone-950 text-stone-100 select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-stone-800 pb-3">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-medium">
          <span className="font-mono font-bold text-stone-500">DIAPO 08</span>
          <span className="text-stone-700">/</span>
          <span>Héritage & Résonance</span>
        </div>
        <span className="text-xs text-stone-400 font-mono">L'Art Moderne Déclenché</span>
      </div>

      {/* Main Title */}
      <div className="mt-3 mb-3">
        <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Son Influence : Une Onde de Choc sur l'Art
        </h2>
        <p className="text-sm text-stone-300 font-sans mt-0.5">
          Comment Picasso a transformé à jamais la façon dont les artistes créent
        </p>
      </div>

      {/* 2 Main Question Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-auto">
        {/* Block 1: Comment Picasso a-t-il changé l'histoire de l'art ? */}
        <div className="bg-stone-900/90 border border-stone-800 hover:border-amber-500/40 p-5 rounded-2xl flex flex-col justify-between shadow-xl transition-all">
          <div>
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
              <Lightbulb className="w-5 h-5" />
            </div>

            <span className="text-xs font-mono uppercase text-amber-400 font-semibold tracking-wider">
              La Révolution Esthétique
            </span>
            <h3 className="font-serif-title text-xl font-bold text-white mt-1 mb-2">
              Comment a-t-il changé l'histoire de l'art ?
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
              <p>
                <strong>1. La fin de l'imitation :</strong> Avant Picasso, l'artiste était jugé sur sa capacité à copier fidèlement le monde comme une photographie. Picasso a montré que l'art pouvait être une création autonome de l'esprit.
              </p>
              <p>
                <strong>2. La multiplication des perspectives :</strong> En créant le cubisme avec Georges Braque, il a prouvé qu'un objet pouvait être vu simultanément de face, de dos et de côté.
              </p>
              <p>
                <strong>3. Une inspiration universelle :</strong> Son audace a ouvert la voie à l'art abstrait, au surréalisme, au constructivisme et plus tard au Pop Art !
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-800 text-[11px] text-stone-400 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Liberté absolue accordée aux artistes du XXe siècle</span>
          </div>
        </div>

        {/* Block 2: Pourquoi est-il encore célèbre aujourd'hui ? */}
        <div className="bg-stone-900/90 border border-stone-800 hover:border-blue-500/40 p-5 rounded-2xl flex flex-col justify-between shadow-xl transition-all">
          <div>
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
              <Globe className="w-5 h-5" />
            </div>

            <span className="text-xs font-mono uppercase text-blue-400 font-semibold tracking-wider">
              Un Mythe Mondial
            </span>
            <h3 className="font-serif-title text-xl font-bold text-white mt-1 mb-2">
              Pourquoi est-il encore si célèbre aujourd'hui ?
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
              <p>
                <strong>1. L'artiste le plus prolifique :</strong> Avec plus de 50 000 pièces créées sur 75 ans, son œuvre monumentale bat tous les records de créativité.
              </p>
              <p>
                <strong>2. Un symbole mondial de paix :</strong> Sa colombe de la paix et sa fresque <em>Guernica</em> demeurent les plus puissants symboles pacifistes universels.
              </p>
              <p>
                <strong>3. Des musées sur tous les continents :</strong> Les musées Picasso de Paris, Barcelone, Málaga et Antibes attirent chaque année des millions d'élèves et de passionnés.
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-800 text-[11px] text-stone-400 flex items-center gap-1.5">
            <HeartHandshake className="w-4 h-4 text-blue-400" />
            <span>Une icône de la culture populaire et de l'anticonformisme</span>
          </div>
        </div>
      </div>

      {/* Footer takeaway */}
      <div className="text-xs text-stone-400 pt-2 border-t border-stone-800/80 flex items-center justify-between">
        <span>Sans Picasso, notre design graphique moderne, nos affiches et l'art contemporain ne seraient pas les mêmes.</span>
        <span className="text-amber-400 font-mono text-[11px]">Héritage universel</span>
      </div>
    </div>
  );
};
