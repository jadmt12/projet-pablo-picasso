import React, { useState } from 'react';
import { TIMELINE_EVENTS } from '../../data/slidesData';
import { Compass, Skull, CalendarDays, ChevronRight } from 'lucide-react';

export const Slide3LifeTimeline: React.FC = () => {
  const [selectedEventIndex, setSelectedEventIndex] = useState(0);
  const selectedEvent = TIMELINE_EVENTS[selectedEventIndex];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 overflow-hidden bg-stone-950 text-stone-100 select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-stone-800 pb-3">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-medium">
          <span className="font-mono font-bold text-stone-500">DIAPO 03</span>
          <span className="text-stone-700">/</span>
          <span>Parcours & Chronologie</span>
        </div>
        <span className="text-xs text-stone-400 font-mono">1881 — 1973</span>
      </div>

      {/* Title */}
      <div className="mt-3 mb-2">
        <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Sa Vie : Lieux, Événements & Destin
        </h2>
        <p className="text-sm text-stone-300 font-sans mt-0.5">
          91 ans de voyages, d'amitiés artistiques et de tournants historiques
        </p>
      </div>

      {/* Top Summary Cards (Where he lived, When he died, Major events) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-2">
        <div className="bg-stone-900/90 border border-stone-800 p-3.5 rounded-xl">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Compass className="w-3.5 h-3.5" />
            <span>Où a-t-il vécu ?</span>
          </div>
          <p className="text-xs text-stone-300 leading-relaxed">
            D'abord en <strong>Espagne</strong> (Málaga, Barcelone, Madrid) puis en <strong>France</strong> à partir de 1904 : Paris (au légendaire <em>Bateau-Lavoir</em>) puis dans le sud ensoleillé (Vallauris, Cannes, Mougins).
          </p>
        </div>

        <div className="bg-stone-900/90 border border-stone-800 p-3.5 rounded-xl">
          <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Skull className="w-3.5 h-3.5" />
            <span>Quand et où est-il mort ?</span>
          </div>
          <p className="text-xs text-stone-300 leading-relaxed">
            Picasso est décédé le <strong>8 avril 1973</strong> à <strong>Mougins</strong>, sur la Côte d'Azur en France. Il avait <strong>91 ans</strong> et peignait encore quelques semaines avant sa mort.
          </p>
        </div>

        <div className="bg-stone-900/90 border border-stone-800 p-3.5 rounded-xl">
          <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <CalendarDays className="w-3.5 h-3.5" />
            <span>Événements marquants</span>
          </div>
          <p className="text-xs text-stone-300 leading-relaxed">
            La perte tragique de son ami Casagemas (1901), la guerre civile espagnole (1936-39), l'occupation de Paris (1940-44) et la création de la colombe pacifiste (1949).
          </p>
        </div>
      </div>

      {/* Interactive Horizontal Timeline */}
      <div className="bg-stone-900/95 border border-stone-800/90 rounded-2xl p-4 sm:p-5 shadow-xl mt-2">
        <div className="flex items-center justify-between mb-3 text-xs text-stone-400">
          <span className="font-semibold uppercase tracking-wider text-amber-400">
            Frise Chronologique des Grandes Dates
          </span>
          <span className="text-[11px] hidden sm:inline">
            Cliquez sur une date pour lire les détails
          </span>
        </div>

        {/* Timeline rail with buttons */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5 pb-3 border-b border-stone-800">
          {TIMELINE_EVENTS.map((event, idx) => {
            const isSelected = selectedEventIndex === idx;
            return (
              <button
                key={event.year}
                onClick={() => setSelectedEventIndex(idx)}
                className={`py-2 px-1 text-center rounded-lg transition-all flex flex-col items-center justify-center border ${
                  isSelected
                    ? 'bg-amber-500 text-stone-950 border-amber-400 font-bold shadow-md scale-105'
                    : 'bg-stone-800/80 text-stone-300 border-stone-700/60 hover:bg-stone-750 hover:text-white'
                }`}
              >
                <span className="font-mono text-xs font-bold leading-tight">{event.year}</span>
                <span className="text-[9px] truncate max-w-[80px] opacity-80 mt-0.5">{event.place}</span>
              </button>
            );
          })}
        </div>

        {/* Active event detail focus */}
        <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs bg-stone-950/60 p-3 rounded-xl border border-stone-800/80">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-amber-400 font-bold text-sm">
                {selectedEvent.year}
              </span>
              <span className="text-stone-500">·</span>
              <span className="text-stone-300 font-semibold">{selectedEvent.title}</span>
              <span className="text-stone-500">({selectedEvent.place})</span>
            </div>
            <p className="text-stone-400 leading-relaxed font-sans">
              {selectedEvent.description}
            </p>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={() => setSelectedEventIndex((prev) => (prev > 0 ? prev - 1 : TIMELINE_EVENTS.length - 1))}
              className="px-2 py-1 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded text-xs"
            >
              ← Précédent
            </button>
            <button
              onClick={() => setSelectedEventIndex((prev) => (prev < TIMELINE_EVENTS.length - 1 ? prev + 1 : 0))}
              className="px-2 py-1 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded text-xs"
            >
              Suivant →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
