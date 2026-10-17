import React, { useState } from 'react';
import { FAMOUS_ARTWORKS } from '../../data/slidesData';
import { ArtworkHighlight } from '../../types/presentation';
import { ZoomIn, Eye, Sparkles, BookOpen } from 'lucide-react';

interface Slide6MasterpiecesProps {
  onOpenArtworkModal: (artwork: ArtworkHighlight) => void;
}

export const Slide6Masterpieces: React.FC<Slide6MasterpiecesProps> = ({
  onOpenArtworkModal,
}) => {
  const [selectedArtwork, setSelectedArtwork] = useState<ArtworkHighlight>(FAMOUS_ARTWORKS[0]);

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 overflow-hidden bg-stone-950 text-stone-100 select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-stone-800 pb-3">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-medium">
          <span className="font-mono font-bold text-stone-500">DIAPO 06</span>
          <span className="text-stone-700">/</span>
          <span>Chefs-d'Œuvre Incontournables</span>
        </div>
        <span className="text-xs text-stone-400 font-mono">1903 · 1907 · 1937</span>
      </div>

      {/* Main Title & Artwork Selector */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mt-3 mb-2">
        <div>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Ses Œuvres Célèbres Décodées
          </h2>
          <p className="text-sm text-stone-300 font-sans mt-0.5">
            Comprendre le sens profond de Guernica, des Demoiselles d'Avignon et du Vieux Guitariste
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-900 border border-stone-800 rounded-lg shrink-0">
          {FAMOUS_ARTWORKS.map((work) => {
            const isSelected = selectedArtwork.title === work.title;
            return (
              <button
                key={work.title}
                onClick={() => setSelectedArtwork(work)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  isSelected
                    ? 'bg-amber-500 text-stone-950 shadow-sm'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                {work.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Artwork Detail Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto bg-stone-900/90 border border-stone-800 rounded-2xl p-5 sm:p-6 shadow-xl items-center">
        {/* Left: Artwork viewer with click-to-zoom */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div
            onClick={() => onOpenArtworkModal(selectedArtwork)}
            className="relative rounded-xl overflow-hidden border border-stone-700 bg-stone-950 group cursor-pointer w-full max-w-sm shadow-2xl"
          >
            <img
              src={selectedArtwork.image}
              alt={selectedArtwork.title}
              className="w-full h-64 sm:h-72 object-contain bg-stone-950/80 group-hover:scale-105 transition-transform duration-300"
            />
            {/* Overlay hint */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="px-3 py-1.5 bg-amber-500 text-stone-950 text-xs font-bold rounded-lg shadow-lg flex items-center gap-1.5">
                <ZoomIn className="w-4 h-4" />
                <span>Cliquer pour agrandir</span>
              </span>
            </div>
            <div className="p-2.5 bg-stone-900/95 border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-400">
              <span className="font-serif-title text-stone-200 font-semibold truncate pr-2">
                {selectedArtwork.title} ({selectedArtwork.year})
              </span>
              <span className="shrink-0 text-amber-400 flex items-center gap-1">
                <Eye className="w-3 h-3" /> Zoom
              </span>
            </div>
          </div>
        </div>

        {/* Right: Curatorial answers to the prompt */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 bg-amber-500/15 border border-amber-500/30 text-amber-400 font-mono text-xs rounded">
                {selectedArtwork.year}
              </span>
              <span className="text-xs text-stone-400">·</span>
              <span className="text-xs text-stone-300 font-medium">
                {selectedArtwork.period}
              </span>
            </div>

            <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-white mb-2">
              « {selectedArtwork.title} »
            </h3>

            {/* Answer to prompt: Why he painted it / What it represents */}
            <div className="bg-stone-950/80 p-3.5 rounded-xl border border-stone-800 mb-3">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                {selectedArtwork.title === 'Guernica'
                  ? 'Que représente cette immense fresque ?'
                  : selectedArtwork.title === "Les Demoiselles d'Avignon"
                  ? 'Pourquoi a-t-il peint ce tableau ?'
                  : 'Que représente cette œuvre de la période bleue ?'}
              </h4>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-sans">
                {selectedArtwork.description}
              </p>
            </div>

            {/* Symbols & details */}
            <div className="space-y-1.5">
              <span className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold block">
                Détails symboliques majeurs à observer :
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-300">
                {selectedArtwork.keyDetails.map((detail, idx) => (
                  <li key={idx} className="bg-stone-800/60 p-2.5 rounded-lg border border-stone-750 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-[11px] text-stone-400 pt-2 border-t border-stone-800 flex items-center justify-between">
            <span><strong>Lieu de conservation :</strong> {selectedArtwork.location}</span>
            <span className="text-stone-500">{selectedArtwork.technique}</span>
          </div>
        </div>
      </div>

      {/* Mini note */}
      <div className="text-xs text-stone-400 pt-2 border-t border-stone-800/80 flex items-center justify-between">
        <span>Guernica dénonce la barbarie militaire, Les Demoiselles d'Avignon inventent le cubisme.</span>
        <span className="text-amber-400 font-mono text-[11px]">3 toiles légendaires</span>
      </div>
    </div>
  );
};
