export interface SlideItem {
  id: number;
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  category: string;
  speakerNotes: string[];
  keyTakeaway: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    letter: 'A' | 'B' | 'C';
    text: string;
    isCorrect: boolean;
  }[];
  explanation: string;
  historicalContext: string;
}

export interface ArtworkHighlight {
  title: string;
  year: string;
  period: string;
  technique: string;
  location: string;
  image: string;
  description: string;
  keyDetails: string[];
}
