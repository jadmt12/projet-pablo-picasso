import React, { useState, useEffect, useCallback, useRef } from 'react';
import { SLIDES_METADATA } from './data/slidesData';
import { ArtworkHighlight } from './types/presentation';
import { exportToPowerPoint } from './utils/pptxExport';
import { HeaderNav } from './components/HeaderNav';
import { PresentationControls } from './components/PresentationControls';
import { LaserPointer } from './components/LaserPointer';
import { PresentationTimer } from './components/PresentationTimer';
import { PresenterNotesDrawer } from './components/PresenterNotesDrawer';
import { SlideThumbnailGrid } from './components/SlideThumbnailGrid';
import { ArtworkModal } from './components/ArtworkModal';
import { PrintHandout } from './components/PrintHandout';

// Slides
import { Slide1Title } from './components/slides/Slide1Title';
import { Slide2Childhood } from './components/slides/Slide2Childhood';
import { Slide3LifeTimeline } from './components/slides/Slide3LifeTimeline';
import { Slide4Career } from './components/slides/Slide4Career';
import { Slide5Styles } from './components/slides/Slide5Styles';
import { Slide6Masterpieces } from './components/slides/Slide6Masterpieces';
import { Slide7Techniques } from './components/slides/Slide7Techniques';
import { Slide8Influence } from './components/slides/Slide8Influence';
import { Slide9Conclusion } from './components/slides/Slide9Conclusion';
import { Slide10Quiz } from './components/slides/Slide10Quiz';
import { Slide11Answers } from './components/slides/Slide11Answers';
import { Check, Download, X } from 'lucide-react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = SLIDES_METADATA.length; // 11 slides

  // UI state
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLaserActive, setIsLaserActive] = useState(false);
  const [isTimerOpen, setIsTimerOpen] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isGridOpen, setIsGridOpen] = useState(false);
  const [inspectedArtwork, setInspectedArtwork] = useState<ArtworkHighlight | null>(null);

  // PowerPoint export state
  const [isExportingPptx, setIsExportingPptx] = useState(false);
  const [exportProgress, setExportProgress] = useState('');
  const [showExportSuccess, setShowExportSuccess] = useState(false);

  // Quiz interactive state
  const [userAnswers, setUserAnswers] = useState<Record<number, 'A' | 'B' | 'C' | null>>({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
  });

  const containerRef = useRef<HTMLDivElement>(null);

  // Slide navigation handlers
  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides));
  }, [totalSlides]);

  const handleGoToSlide = useCallback((slideNum: number) => {
    if (slideNum >= 1 && slideNum <= totalSlides) {
      setCurrentSlide(slideNum);
    }
  }, [totalSlides]);

  // Quiz selection handler
  const handleSelectQuizOption = useCallback((questionId: number, letter: 'A' | 'B' | 'C') => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: prev[questionId] === letter ? null : letter,
    }));
  }, []);

  const handleResetQuiz = useCallback(() => {
    setUserAnswers({ 1: null, 2: null, 3: null, 4: null, 5: null });
  }, []);

  // Export to PowerPoint .pptx
  const handleExportPptx = async () => {
    try {
      setIsExportingPptx(true);
      await exportToPowerPoint((step) => {
        setExportProgress(step);
      });
      setShowExportSuccess(true);
    } catch (err) {
      console.error('Erreur export PowerPoint:', err);
    } finally {
      setIsExportingPptx(false);
      setExportProgress('');
    }
  };

  // Fullscreen toggle
  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(() => {
        setIsFullscreen(true);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          setIsFullscreen(false);
        }).catch(() => {
          setIsFullscreen(false);
        });
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (inspectedArtwork !== null) {
        if (e.key === 'Escape') setInspectedArtwork(null);
        return;
      }
      if (isGridOpen) {
        if (e.key === 'Escape') setIsGridOpen(false);
        return;
      }
      if (isNotesOpen && e.key === 'Escape') {
        setIsNotesOpen(false);
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentSlide(1);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentSlide(totalSlides);
      } else if (e.key === 'l' || e.key === 'L') {
        setIsLaserActive((prev) => !prev);
      } else if (e.key === 'n' || e.key === 'N') {
        setIsNotesOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, inspectedArtwork, isGridOpen, isNotesOpen, totalSlides]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      ref={containerRef}
      className={`min-h-screen flex flex-col bg-stone-950 text-stone-100 font-sans selection:bg-amber-500 selection:text-white ${
        isLaserActive ? 'cursor-none' : ''
      }`}
    >
      {/* Laser Pointer overlay */}
      <LaserPointer isActive={isLaserActive} />

      {/* Top Bar Contract Navigation */}
      <HeaderNav
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onGoToSlide={handleGoToSlide}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
        showNotes={isNotesOpen}
        onToggleNotes={() => setIsNotesOpen((prev) => !prev)}
        onPrint={handlePrint}
        onExportPptx={handleExportPptx}
        isExportingPptx={isExportingPptx}
        exportProgress={exportProgress}
      />

      {/* Main 16:9 Slide Stage */}
      <main className="no-print flex-1 flex items-center justify-center p-2 sm:p-4 lg:p-6 overflow-hidden">
        {/* 16:9 Presentation Frame with subtle shadow and border */}
        <div className="w-full max-w-7xl aspect-[16/9] max-h-[calc(100vh-8.5rem)] bg-stone-950 border border-stone-800/90 rounded-2xl shadow-2xl overflow-hidden relative flex flex-col transition-all duration-300">
          {currentSlide === 1 && (
            <Slide1Title
              onStart={() => handleGoToSlide(2)}
              onExportPptx={handleExportPptx}
              isExportingPptx={isExportingPptx}
            />
          )}
          {currentSlide === 2 && <Slide2Childhood />}
          {currentSlide === 3 && <Slide3LifeTimeline />}
          {currentSlide === 4 && <Slide4Career />}
          {currentSlide === 5 && <Slide5Styles />}
          {currentSlide === 6 && (
            <Slide6Masterpieces
              onOpenArtworkModal={(artwork) => setInspectedArtwork(artwork)}
            />
          )}
          {currentSlide === 7 && <Slide7Techniques />}
          {currentSlide === 8 && <Slide8Influence />}
          {currentSlide === 9 && (
            <Slide9Conclusion onGoToQuiz={() => handleGoToSlide(10)} />
          )}
          {currentSlide === 10 && (
            <Slide10Quiz
              userAnswers={userAnswers}
              onSelectOption={handleSelectQuizOption}
              onResetQuiz={handleResetQuiz}
              onGoToAnswers={() => handleGoToSlide(11)}
            />
          )}
          {currentSlide === 11 && (
            <Slide11Answers
              userAnswers={userAnswers}
              onGoBackToQuiz={() => handleGoToSlide(10)}
              onResetQuiz={handleResetQuiz}
              onPrint={handlePrint}
            />
          )}
        </div>
      </main>

      {/* Bottom Presentation Controls */}
      <PresentationControls
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrev={handlePrev}
        onNext={handleNext}
        isLaserActive={isLaserActive}
        onToggleLaser={() => setIsLaserActive((prev) => !prev)}
        isTimerActive={isTimerOpen}
        onToggleTimer={() => setIsTimerOpen((prev) => !prev)}
        isGridOpen={isGridOpen}
        onToggleGrid={() => setIsGridOpen(true)}
      />

      {/* Floating Stopwatch Timer */}
      <PresentationTimer
        isOpen={isTimerOpen}
        onClose={() => setIsTimerOpen(false)}
      />

      {/* Presenter Notes Drawer for Student Oral Presentation */}
      <PresenterNotesDrawer
        currentSlide={currentSlide}
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
      />

      {/* Slide Thumbnails Drawer */}
      <SlideThumbnailGrid
        currentSlide={currentSlide}
        isOpen={isGridOpen}
        onSelectSlide={handleGoToSlide}
        onClose={() => setIsGridOpen(false)}
      />

      {/* Artwork Zoom Detail Modal */}
      <ArtworkModal
        artwork={inspectedArtwork}
        onClose={() => setInspectedArtwork(null)}
      />

      {/* Success Notification after downloading PPTX */}
      {showExportSuccess && (
        <div className="fixed bottom-20 right-6 z-50 bg-stone-900 border border-emerald-500/40 rounded-xl p-4 shadow-2xl max-w-sm text-stone-200 animate-in fade-in slide-in-from-bottom-4">
          <div className="flex items-start justify-between gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Check className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">
                Fichier PowerPoint téléchargé !
              </h4>
              <p className="text-[11px] text-stone-300 mt-1 leading-relaxed">
                Le fichier <strong>Presentation_Pablo_Picasso.pptx</strong> est prêt. Vous pouvez l'ouvrir directement dans <em>Microsoft PowerPoint</em>, <em>Google Slides</em> ou <em>Keynote</em>.
              </p>
            </div>
            <button
              onClick={() => setShowExportSuccess(false)}
              className="text-stone-400 hover:text-white p-1 rounded"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Printable Sheet for Classroom / Teachers */}
      <PrintHandout />
    </div>
  );
}
