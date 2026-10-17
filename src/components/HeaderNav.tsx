import React from 'react';
import { Maximize2, Minimize2, FileText, Printer, Download, Loader2 } from 'lucide-react';

interface HeaderNavProps {
  currentSlide: number;
  totalSlides: number;
  onGoToSlide: (slideNumber: number) => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  showNotes: boolean;
  onToggleNotes: () => void;
  onPrint: () => void;
  onExportPptx: () => void;
  isExportingPptx: boolean;
  exportProgress: string;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  currentSlide,
  totalSlides,
  onGoToSlide,
  isFullscreen,
  onToggleFullscreen,
  showNotes,
  onToggleNotes,
  onPrint,
  onExportPptx,
  isExportingPptx,
  exportProgress,
}) => {
  // Navigation shortcuts for key slide chapters
  const quickLinks = [
    { label: 'Introduction', slide: 1 },
    { label: 'Enfance & Vie', slide: 2 },
    { label: 'Styles', slide: 5 },
    { label: 'Chefs-d’œuvre', slide: 6 },
    { label: 'Quiz', slide: 10 },
  ];

  return (
    <header className="no-print h-14 bg-stone-950/90 border-b border-stone-800 backdrop-blur-md px-4 lg:px-8 flex items-center justify-between gap-8 z-40 select-none">
      {/* Zone 1: Single text element wordmark */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={() => onGoToSlide(1)}
          className="text-left group flex items-center gap-2 focus:outline-none"
        >
          <span className="w-2.5 h-2.5 bg-amber-500 transform rotate-45 group-hover:scale-125 transition-transform"></span>
          <span className="font-serif-title text-lg lg:text-xl font-bold tracking-tight text-stone-100 whitespace-nowrap">
            Pablo Picasso
          </span>
          <span className="hidden sm:inline text-xs text-stone-400 font-sans tracking-wide">
            · Exposé d'Histoire des Arts
          </span>
        </button>
      </div>

      {/* Zone 2: Concise text navigation links */}
      <nav className="hidden md:flex items-center gap-5 text-xs lg:text-sm font-medium text-stone-300">
        {quickLinks.map((item) => {
          const isActive = currentSlide === item.slide;
          return (
            <button
              key={item.label}
              onClick={() => onGoToSlide(item.slide)}
              className={`transition-colors whitespace-nowrap shrink-0 hover:text-amber-400 py-1 border-b-2 ${
                isActive
                  ? 'border-amber-500 text-amber-400 font-semibold'
                  : 'border-transparent text-stone-400'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Zone 3: Functional presentation action buttons */}
      <div className="flex items-center gap-2 lg:gap-3 shrink-0">
        {/* PowerPoint .pptx direct download button */}
        <button
          onClick={onExportPptx}
          disabled={isExportingPptx}
          title="Télécharger directement la présentation au format PowerPoint (.pptx)"
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 rounded-md transition-all shadow-sm hover:shadow active:scale-95 whitespace-nowrap disabled:opacity-75 disabled:cursor-wait"
        >
          {isExportingPptx ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              <span className="max-w-[120px] truncate">{exportProgress || 'Génération...'}</span>
            </>
          ) : (
            <>
              <Download className="w-3.5 h-3.5" />
              <span>Télécharger .PPTX</span>
            </>
          )}
        </button>

        <button
          onClick={onToggleNotes}
          title="Afficher les notes pour l'orateur / élève"
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
            showNotes
              ? 'bg-amber-600/30 text-amber-300 border border-amber-500/40'
              : 'bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white border border-stone-700'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Notes</span>
        </button>

        <button
          onClick={onPrint}
          title="Imprimer ou enregistrer en PDF la présentation"
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white rounded-md border border-stone-700 transition-colors whitespace-nowrap"
        >
          <Printer className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">PDF</span>
        </button>

        <button
          onClick={onToggleFullscreen}
          title={isFullscreen ? 'Quitter le plein écran' : 'Plein écran (Mode Présentation)'}
          className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white border border-stone-700 rounded-md transition-all whitespace-nowrap"
        >
          {isFullscreen ? (
            <>
              <Minimize2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Quitter</span>
            </>
          ) : (
            <>
              <Maximize2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Diaporama</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
};
