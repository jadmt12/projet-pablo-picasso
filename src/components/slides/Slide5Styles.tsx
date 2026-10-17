import React, { useState } from 'react';
import { ARTISTIC_STYLES_DATA } from '../../data/slidesData';
import { Sparkles, Eye, ArrowRight } from 'lucide-react';

export const Slide5Styles: React.FC = () => {
  const [selectedStyleId, setSelectedStyleId] = useState<'bleue' | 'rose' | 'cubisme'>('bleue');
  const activeStyle = ARTISTIC_STYLES_DATA.find((s) => s.id === selectedStyleId)!;

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 overflow-hidden bg-stone-950 text-stone-100 select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-stone-800 pb-3">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-medium">
          <span className="font-mono font-bold text-stone-500">DIAPO 05</span>
          <span className="text-stone-700">/</span>
          <span>Évolution Artistique</span>
        </div>
        <span className="text-xs text-stone-400 font-mono">Bleu · Rose · Cubisme</span>
      </div>

      {/* Main Title & Style Switcher tabs */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mt-3 mb-3">
        <div>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Ses Trois Grands Styles Majeurs
          </h2>
          <p className="text-sm text-stone-300 font-sans mt-0.5">
            D'une palette à l'autre : comprendre les émotions et les révolutions de Picasso
          </p>
        </div>

        {/* Style selector buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-900 border border-stone-800 rounded-lg shrink-0">
          <button
            onClick={() => setSelectedStyleId('bleue')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              selectedStyleId === 'bleue'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            1. Période Bleue
          </button>
          <button
            onClick={() => setSelectedStyleId('rose')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              selectedStyleId === 'rose'
                ? 'bg-rose-500 text-white shadow-sm'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            2. Période Rose
          </button>
          <button
            onClick={() => setSelectedStyleId('cubisme')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              selectedStyleId === 'cubisme'
                ? 'bg-amber-500 text-stone-950 shadow-sm'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            3. Le Cubisme
          </button>
        </div>
      </div>

      {/* Active Style Spotlight Panel */}
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto p-5 sm:p-6 rounded-2xl border transition-all duration-300 bg-gradient-to-br ${activeStyle.bgTint} ${activeStyle.borderTint}`}>
        {/* Left: Artwork Visual */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-stone-950 group">
            <img
              src={activeStyle.image}
              alt={activeStyle.name}
              className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-3 bg-stone-950/90 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="font-serif-title font-semibold text-stone-200">
                {activeStyle.exampleWork}
              </span>
              <span className="font-mono text-stone-400 text-[11px]">{activeStyle.years}</span>
            </div>
          </div>
        </div>

        {/* Right: Detailed explanations answering prompt questions */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: activeStyle.colorAccent }}
              />
              <span className="font-mono text-xs uppercase tracking-wider text-stone-300 font-semibold">
                {activeStyle.years}
              </span>
            </div>

            <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-white mb-2">
              {activeStyle.name}
            </h3>

            {/* Why this color / What is this movement */}
            <div className="bg-black/30 backdrop-blur-sm p-3.5 rounded-xl border border-white/10 mb-3">
              <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                {selectedStyleId === 'cubisme' ? 'Qu’est-ce que ce mouvement ?' : 'Pourquoi ces couleurs ?'}
              </h4>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-sans">
                {activeStyle.whyColor}
              </p>
            </div>

            {/* Palette & Subjects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-stone-900/60 p-3 rounded-lg border border-white/5">
                <span className="text-stone-400 block font-semibold mb-0.5">Palette de couleurs</span>
                <p className="text-stone-200 leading-relaxed">{activeStyle.paletteDescription}</p>
              </div>
              <div className="bg-stone-900/60 p-3 rounded-lg border border-white/5">
                <span className="text-stone-400 block font-semibold mb-0.5">Sujets de prédilection</span>
                <p className="text-stone-200 leading-relaxed">{activeStyle.themes}</p>
              </div>
            </div>
          </div>

          {/* Key difference callout */}
          <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs text-stone-300 flex items-start gap-2">
            <Eye className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Caractéristique visuelle :</strong> {activeStyle.keyFeature}
            </div>
          </div>
        </div>
      </div>

      {/* Mini Comparative Bar at bottom */}
      <div className="grid grid-cols-3 gap-2 text-center text-xs text-stone-400 pt-2 border-t border-stone-800/80">
        <div className={`p-1.5 rounded transition-colors ${selectedStyleId === 'bleue' ? 'text-blue-400 font-semibold' : ''}`}>
          Bleue : Tristesse & Solitude
        </div>
        <div className={`p-1.5 rounded transition-colors ${selectedStyleId === 'rose' ? 'text-rose-400 font-semibold' : ''}`}>
          Rose : Cirque, Tendresse & Amour
        </div>
        <div className={`p-1.5 rounded transition-colors ${selectedStyleId === 'cubisme' ? 'text-amber-400 font-semibold' : ''}`}>
          Cubisme : Géométrie & Nouveaux Angles
        </div>
      </div>
    </div>
  );
};
