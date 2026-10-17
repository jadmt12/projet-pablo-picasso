import React from 'react';
import { Palette, PenTool, Hammer, Layers, Flame, Award } from 'lucide-react';

export const Slide4Career: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 overflow-hidden bg-stone-950 text-stone-100 select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-stone-800 pb-3">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-medium">
          <span className="font-mono font-bold text-stone-500">DIAPO 04</span>
          <span className="text-stone-700">/</span>
          <span>Carrière & Polyvalence</span>
        </div>
        <span className="text-xs text-stone-400 font-mono">+50 000 créations artistiques</span>
      </div>

      {/* Main Title */}
      <div className="mt-3 mb-3">
        <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Sa Carrière Artistique : Un Créateur Universel
        </h2>
        <p className="text-sm text-stone-300 font-sans mt-0.5">
          Pourquoi Picasso est-il entré dans l'histoire ? Quels arts a-t-il révolutionnés ?
        </p>
      </div>

      {/* Why is he famous callout banner */}
      <div className="bg-gradient-to-r from-amber-500/15 via-rose-500/10 to-blue-500/15 border border-amber-500/30 rounded-xl p-4 shadow-lg mb-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif-title text-base font-bold text-amber-300">
              Pourquoi Pablo Picasso est-il si célèbre dans le monde entier ?
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed mt-1">
              Pendant des siècles, la peinture cherchait à copier la nature comme un miroir. <strong>Picasso a brisé cette règle !</strong> Il a prouvé qu'un artiste ne doit pas peindre ce qu'il voit, mais ce qu'il imagine et ressent. Sa liberté d'esprit a ouvert la porte à tout l'art moderne.
            </p>
          </div>
        </div>
      </div>

      {/* 4 Artistic Disciplines Cards (Peintre, Dessinateur, Sculpteur, Graveur & Céramiste) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 my-auto">
        {/* 1. Peintre */}
        <div className="bg-stone-900/90 border border-stone-800 hover:border-amber-500/40 p-4 rounded-xl flex flex-col justify-between group transition-all">
          <div>
            <div className="w-9 h-9 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Palette className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-mono uppercase text-amber-400 font-semibold">
              Discipline 01
            </span>
            <h4 className="font-serif-title text-base font-bold text-white mt-1 mb-1.5">
              Peintre Visionnaire
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Plus de 1 800 toiles majeures à l'huile. Il invente de nouvelles manières de poser la couleur, du réalisme classique aux toiles cubistes les plus audacieuses.
            </p>
          </div>
          <div className="mt-3 pt-2.5 border-t border-stone-800 text-[11px] text-stone-400">
            Huiles sur toile, gouaches, laques
          </div>
        </div>

        {/* 2. Dessinateur */}
        <div className="bg-stone-900/90 border border-stone-800 hover:border-blue-500/40 p-4 rounded-xl flex flex-col justify-between group transition-all">
          <div>
            <div className="w-9 h-9 rounded-lg bg-blue-500/15 text-blue-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <PenTool className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-mono uppercase text-blue-400 font-semibold">
              Discipline 02
            </span>
            <h4 className="font-serif-title text-base font-bold text-white mt-1 mb-1.5">
              Dessinateur Virtuose
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Des carnets entiers remplis d'esquisses au trait continu. Son geste est si sûr qu'il peut dessiner une colombe ou un taureau en un seul trait de plume fluide.
            </p>
          </div>
          <div className="mt-3 pt-2.5 border-t border-stone-800 text-[11px] text-stone-400">
            Fusain, pastel, encre de Chine
          </div>
        </div>

        {/* 3. Sculpteur */}
        <div className="bg-stone-900/90 border border-stone-800 hover:border-rose-500/40 p-4 rounded-xl flex flex-col justify-between group transition-all">
          <div>
            <div className="w-9 h-9 rounded-lg bg-rose-500/15 text-rose-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Hammer className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-mono uppercase text-rose-400 font-semibold">
              Discipline 03
            </span>
            <h4 className="font-serif-title text-base font-bold text-white mt-1 mb-1.5">
              Sculpteur Audacieux
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Il révolutionne la sculpture en utilisant des matériaux inattendus : fil de fer, tôle pliée, plâtre brut et objets de récupération du quotidien.
            </p>
          </div>
          <div className="mt-3 pt-2.5 border-t border-stone-800 text-[11px] text-stone-400">
            Bronze, fer soudé, bois, plâtre
          </div>
        </div>

        {/* 4. Graveur & Céramiste */}
        <div className="bg-stone-900/90 border border-stone-800 hover:border-emerald-500/40 p-4 rounded-xl flex flex-col justify-between group transition-all">
          <div>
            <div className="w-9 h-9 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Layers className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-mono uppercase text-emerald-400 font-semibold">
              Discipline 04
            </span>
            <h4 className="font-serif-title text-base font-bold text-white mt-1 mb-1.5">
              Graveur & Céramiste
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Maître de l'eau-forte et de la linogravure à plaque perdue. À Vallauris, il façonne plus de 4 000 poteries, pichets et assiettes aux motifs mythologiques.
            </p>
          </div>
          <div className="mt-3 pt-2.5 border-t border-stone-800 text-[11px] text-stone-400">
            Terre cuite, faïence, lithographie
          </div>
        </div>
      </div>

      {/* Footer takeaway */}
      <div className="text-xs text-stone-400 pt-3 border-t border-stone-800/80 flex items-center justify-between">
        <span>Picasso a déclaré : <em>« Donnez-moi un musée et je le remplirai. »</em></span>
        <span className="text-amber-400 font-mono text-[11px]">Tous les médiums explorés</span>
      </div>
    </div>
  );
};
