import React from 'react';
import { ARTISTIC_TECHNIQUES, collageImg, ceramicsImg } from '../../data/slidesData';
import { Sparkles, Layers, Scissors, Palette, Flame } from 'lucide-react';

export const Slide7Techniques: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 overflow-hidden bg-stone-950 text-stone-100 select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-stone-800 pb-3">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-medium">
          <span className="font-mono font-bold text-stone-500">DIAPO 07</span>
          <span className="text-stone-700">/</span>
          <span>Matières & Procédés</span>
        </div>
        <span className="text-xs text-stone-400 font-mono">Peinture · Collage · Sculpture · Céramique</span>
      </div>

      {/* Main Title */}
      <div className="mt-3 mb-2">
        <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Ses Techniques : L'Audace des Matériaux
        </h2>
        <p className="text-sm text-stone-300 font-sans mt-0.5">
          Utilisait-il seulement la peinture à l'huile ? Non, un explorateur insatiable de matières
        </p>
      </div>

      {/* Two visual showcases + 4 technical cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto items-stretch">
        {/* Left: 4 structured technique blocks */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Card 1: Peinture & Dessin */}
          <div className="bg-stone-900/90 border border-stone-800 p-3.5 rounded-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-amber-400 mb-1">
                <Palette className="w-4 h-4" />
                <h3 className="font-serif-title text-sm font-bold text-white">
                  1. Peinture & Dessin
                </h3>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                Il utilise l'huile, la gouache, le fusain et même la peinture laquée industrielle (Ripolin) pour un rendu lisse sans trace de pinceau.
              </p>
            </div>
            <div className="mt-2 pt-2 border-t border-stone-800 flex flex-wrap gap-1 text-[10px] text-stone-400">
              <span className="bg-stone-800 px-1.5 py-0.5 rounded">Huile</span>
              <span className="bg-stone-800 px-1.5 py-0.5 rounded">Gouache</span>
              <span className="bg-stone-800 px-1.5 py-0.5 rounded">Ripolin</span>
            </div>
          </div>

          {/* Card 2: Collage & Papiers collés */}
          <div className="bg-stone-900/90 border border-stone-800 p-3.5 rounded-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-rose-400 mb-1">
                <Scissors className="w-4 h-4" />
                <h3 className="font-serif-title text-sm font-bold text-white">
                  2. L'Invention du Collage
                </h3>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                Dès 1912, il colle de vrais fragments de journaux, partitions musicales, toile cirée et cordes directement sur le tableau.
              </p>
            </div>
            <div className="mt-2 pt-2 border-t border-stone-800 flex flex-wrap gap-1 text-[10px] text-stone-400">
              <span className="bg-stone-800 px-1.5 py-0.5 rounded">Journaux</span>
              <span className="bg-stone-800 px-1.5 py-0.5 rounded">Partitions</span>
              <span className="bg-stone-800 px-1.5 py-0.5 rounded">Toile cirée</span>
            </div>
          </div>

          {/* Card 3: Assemblage & Sculpture */}
          <div className="bg-stone-900/90 border border-stone-800 p-3.5 rounded-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-blue-400 mb-1">
                <Layers className="w-4 h-4" />
                <h3 className="font-serif-title text-sm font-bold text-white">
                  3. L'Assemblage & Sculpture
                </h3>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                Il donne une seconde vie aux objets trouvés. Sa célèbre « Tête de taureau » est faite d'une selle et d'un guidon de vieux vélo assemblés !
              </p>
            </div>
            <div className="mt-2 pt-2 border-t border-stone-800 flex flex-wrap gap-1 text-[10px] text-stone-400">
              <span className="bg-stone-800 px-1.5 py-0.5 rounded">Tôle</span>
              <span className="bg-stone-800 px-1.5 py-0.5 rounded">Bronze</span>
              <span className="bg-stone-800 px-1.5 py-0.5 rounded">Objets trouvés</span>
            </div>
          </div>

          {/* Card 4: Gravure & Céramique */}
          <div className="bg-stone-900/90 border border-stone-800 p-3.5 rounded-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <Flame className="w-4 h-4" />
                <h3 className="font-serif-title text-sm font-bold text-white">
                  4. Céramique & Gravure
                </h3>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                À Vallauris, il tourne et peint plus de 4 000 pièces en terre cuite et perfectionne la linogravure polychrome à plaque perdue.
              </p>
            </div>
            <div className="mt-2 pt-2 border-t border-stone-800 flex flex-wrap gap-1 text-[10px] text-stone-400">
              <span className="bg-stone-800 px-1.5 py-0.5 rounded">Terre cuite</span>
              <span className="bg-stone-800 px-1.5 py-0.5 rounded">Linogravure</span>
              <span className="bg-stone-800 px-1.5 py-0.5 rounded">Litho</span>
            </div>
          </div>
        </div>

        {/* Right: 2 Visual Illustrations */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-3 items-stretch">
          {/* Visual 1: Collage */}
          <div className="bg-stone-900 border border-stone-800 rounded-xl overflow-hidden flex flex-col justify-between group">
            <div className="h-44 sm:h-52 overflow-hidden bg-stone-950">
              <img
                src={collageImg}
                alt="Papiers collés cubistes et violon"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-2.5 bg-stone-900">
              <span className="text-[10px] font-mono text-amber-400 font-semibold uppercase block">
                Papier Collé (1913)
              </span>
              <p className="text-[11px] text-stone-300 font-serif-title truncate">
                Violon, journal et partitions
              </p>
            </div>
          </div>

          {/* Visual 2: Ceramics */}
          <div className="bg-stone-900 border border-stone-800 rounded-xl overflow-hidden flex flex-col justify-between group">
            <div className="h-44 sm:h-52 overflow-hidden bg-stone-950">
              <img
                src={ceramicsImg}
                alt="Céramiques et poteries de Vallauris"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-2.5 bg-stone-900">
              <span className="text-[10px] font-mono text-emerald-400 font-semibold uppercase block">
                Céramique (Vallauris)
              </span>
              <p className="text-[11px] text-stone-300 font-serif-title truncate">
                Plat à la colombe & pichet
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer message */}
      <div className="text-xs text-stone-400 pt-2 border-t border-stone-800/80 flex items-center justify-between">
        <span>Pour Picasso, tout matériau pouvait se transformer en chef-d'œuvre entre les mains d'un créateur curieux.</span>
        <span className="text-amber-400 font-mono text-[11px]">Révolution du collage</span>
      </div>
    </div>
  );
};
