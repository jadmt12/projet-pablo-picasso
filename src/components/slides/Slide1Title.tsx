import React from 'react';
import { picassoPortrait } from '../../data/slidesData';
import { Sparkles, Download, ArrowRight } from 'lucide-react';

interface SlideProps {
  onStart: () => void;
  onExportPptx?: () => void;
  isExportingPptx?: boolean;
}

export const Slide1Title: React.FC<SlideProps> = ({
  onStart,
  onExportPptx,
  isExportingPptx = false,
}) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-14 overflow-hidden bg-stone-950 text-stone-100 select-none">
      {/* Background cubist geometric motifs */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl transform -rotate-12" />
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-amber-500/25 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-rose-600/25 rounded-full blur-3xl" />

        {/* Angular cubist graphic planes */}
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0,0 450,0 200,600 0,400" fill="#2563EB" opacity="0.07" />
          <polygon points="500,0 1200,0 800,700 300,500" fill="#D97706" opacity="0.05" />
          <polygon points="900,200 1440,0 1440,900 1100,800" fill="#DC2626" opacity="0.06" />
          <line x1="100" y1="0" x2="900" y2="800" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="6 6" opacity="0.15" />
          <line x1="1200" y1="100" x2="300" y2="900" stroke="#F59E0B" strokeWidth="1" opacity="0.1" />
        </svg>
      </div>

      {/* Top Tagline */}
      <div className="relative z-10 flex items-center justify-between border-b border-stone-800/80 pb-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-medium">
          <span className="w-2 h-2 bg-amber-500 rounded-sm" />
          <span>Histoire des Arts & Culture</span>
          <span className="text-stone-600">·</span>
          <span className="text-stone-400">Exposé Scolaire</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-stone-400 font-mono">
          <span>1881 — 1973</span>
          <span className="text-stone-600">|</span>
          <span>91 ans de création</span>
        </div>
      </div>

      {/* Main Hero Body */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
        {/* Left Column: Title & Presentation narrative */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-xs text-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Diapositive 01 · Page de Titre</span>
            </div>
            <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Pablo Picasso : <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-blue-400">
                un génie de l'art
              </span>
            </h1>
            <p className="text-base sm:text-lg text-stone-300 font-sans max-w-xl leading-relaxed pt-2">
              Découvrez la vie fascinante, les révolutions picturales et l'héritage d'un artiste espagnol d'exception qui a transformé la vision du monde moderne.
            </p>
          </div>

          {/* Highlights bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="bg-stone-900/80 border border-stone-800 p-3.5 rounded-xl">
              <span className="text-xs text-amber-400 font-semibold block mb-1">
                Le Père du Cubisme
              </span>
              <p className="text-xs text-stone-400 leading-relaxed">
                Une rupture totale avec la perspective traditionnelle pour inventer une nouvelle liberté de créer.
              </p>
            </div>
            <div className="bg-stone-900/80 border border-stone-800 p-3.5 rounded-xl">
              <span className="text-xs text-blue-400 font-semibold block mb-1">
                Une Polyvalence Totale
              </span>
              <p className="text-xs text-stone-400 leading-relaxed">
                Peintre, dessinateur, sculpteur, graveur et céramiste auteur de plus de 50 000 œuvres.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={onStart}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-sm rounded-lg shadow-lg hover:shadow-amber-500/20 transition-all active:scale-95"
            >
              <span>Commencer la présentation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {onExportPptx && (
              <button
                onClick={onExportPptx}
                disabled={isExportingPptx}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 font-semibold text-sm rounded-lg shadow-sm transition-all active:scale-95 disabled:opacity-50"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Télécharger en fichier .PPTX</span>
              </button>
            )}
          </div>
        </div>

        {/* Right Column: Picasso Portrait with cubist artistic frame */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group max-w-xs sm:max-w-sm w-full">
            {/* Angled geometric backing plates */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-blue-600 via-amber-500 to-rose-600 rounded-2xl transform rotate-2 group-hover:rotate-1 transition-transform opacity-60 blur-sm" />
            <div className="absolute -inset-1 bg-stone-900 rounded-2xl" />

            <div className="relative rounded-xl overflow-hidden border border-stone-700/80 shadow-2xl bg-stone-900">
              <img
                src={picassoPortrait}
                alt="Portrait de Pablo Picasso dans son atelier avec sculptures et céramiques"
                className="w-full h-80 sm:h-96 object-cover object-center filter contrast-105"
              />

              <div className="p-3.5 bg-stone-900/95 border-t border-stone-800">
                <p className="font-serif-title text-sm font-semibold text-stone-100">
                  Pablo Picasso (1881 - 1973)
                </p>
                <p className="text-[11px] text-stone-400 mt-0.5">
                  Dans son atelier du sud de la France avec ses sculptures de terre cuite et sa colombe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Metadata */}
      <div className="relative z-10 flex flex-wrap items-center justify-between pt-4 border-t border-stone-800/80 text-[11px] text-stone-500">
        <span>Format 16:9 · Téléchargeable au format Microsoft PowerPoint (.pptx)</span>
        <span>Touches clavier : Flèches [←] et [→] ou [Espace]</span>
      </div>
    </div>
  );
};
