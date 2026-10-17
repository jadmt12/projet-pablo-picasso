import React from 'react';
import { X, ZoomIn, MapPin, Calendar, Palette } from 'lucide-react';
import { ArtworkHighlight } from '../types/presentation';

interface ArtworkModalProps {
  artwork: ArtworkHighlight | null;
  onClose: () => void;
}

export const ArtworkModal: React.FC<ArtworkModalProps> = ({ artwork, onClose }) => {
  if (!artwork) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-stone-900 border border-stone-700/80 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col text-stone-200">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-stone-800">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-500">
              {artwork.period} · {artwork.year}
            </span>
            <h3 className="font-serif-title text-2xl font-bold text-stone-100">
              « {artwork.title} »
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 sm:p-6">
          {/* Left: Artwork Frame */}
          <div className="relative rounded-xl overflow-hidden bg-stone-950 border border-stone-800 flex items-center justify-center group min-h-[300px]">
            <img
              src={artwork.image}
              alt={artwork.title}
              className="max-h-[420px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-[10px] text-stone-300 flex items-center gap-1">
              <ZoomIn className="w-3 h-3 text-amber-400" />
              <span>Détail HD</span>
            </div>
          </div>

          {/* Right: Curatorial details */}
          <div className="flex flex-col justify-between space-y-4">
            <div>
              <div className="space-y-2 text-xs text-stone-300 pb-3 border-b border-stone-800">
                <div className="flex items-center gap-2">
                  <Palette className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>Technique :</strong> {artwork.technique}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>Conservation :</strong> {artwork.location}</span>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-1.5">
                  Analyse de l'œuvre
                </h4>
                <p className="text-sm text-stone-300 leading-relaxed font-sans">
                  {artwork.description}
                </p>
              </div>

              <div className="mt-4">
                <h4 className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2">
                  Éléments clés à observer
                </h4>
                <ul className="space-y-1.5 text-xs text-stone-300">
                  {artwork.keyDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-800">
              <button
                onClick={onClose}
                className="w-full py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold rounded-lg transition-colors"
              >
                Retour à la diapositive
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
