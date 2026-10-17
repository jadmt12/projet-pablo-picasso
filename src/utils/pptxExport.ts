import pptxgen from 'pptxgenjs';
import {
  SLIDES_METADATA,
  TIMELINE_EVENTS,
  ARTISTIC_STYLES_DATA,
  FAMOUS_ARTWORKS,
  ARTISTIC_TECHNIQUES,
  QUIZ_QUESTIONS,
  picassoPortrait,
  guernicaImg,
  demoisellesImg,
  bluePeriodImg,
  rosePeriodImg,
  ceramicsImg,
  collageImg,
} from '../data/slidesData';

// Helper to convert browser image asset URL into Base64 data string
async function getBase64Image(url: string): Promise<string> {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error('Erreur chargement image:', error);
    return '';
  }
}

export async function exportToPowerPoint(onProgress?: (step: string) => void): Promise<void> {
  onProgress?.('Initialisation du fichier PowerPoint...');
  const pptx = new pptxgen();

  // Configuration du format 16:9
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'Exposé Scolaire - Histoire des Arts';
  pptx.company = 'Classe d’Art & Culture';
  pptx.title = 'Pablo Picasso : un génie de l’art';
  pptx.subject = 'Présentation scolaire en 10 diapositives sur Pablo Picasso';

  // Palette cubiste et muséale
  const C_BG = '0C0A09'; // Stone 950
  const C_CARD = '1C1917'; // Stone 900
  const C_BORDER = '292524'; // Stone 800
  const C_AMBER = 'F59E0B'; // Amber 500
  const C_BLUE = '3B82F6'; // Blue 500
  const C_ROSE = 'F43F5E'; // Rose 500
  const C_WHITE = 'FFFFFF';
  const C_MUTED = 'A8A29E'; // Stone 400
  const C_GREEN = '10B981';

  onProgress?.('Préparation des visuels en haute définition...');
  const [
    portraitB64,
    guernicaB64,
    demoisellesB64,
    bluePeriodB64,
    rosePeriodB64,
    ceramicsB64,
    collageB64,
  ] = await Promise.all([
    getBase64Image(picassoPortrait),
    getBase64Image(guernicaImg),
    getBase64Image(demoisellesImg),
    getBase64Image(bluePeriodImg),
    getBase64Image(rosePeriodImg),
    getBase64Image(ceramicsImg),
    getBase64Image(collageImg),
  ]);

  // Helper pour fond commun et barre supérieure
  const applySlideBase = (slide: pptxgen.Slide, slideNum: number, category: string, total = 11) => {
    // Fond plein
    slide.background = { color: C_BG };

    // Filet d'en-tête supérieur
    slide.addShape(pptx.ShapeType.rect, {
      x: 0.6,
      y: 0.4,
      w: 8.8,
      h: 0.02,
      fill: { color: C_BORDER },
      line: { color: C_BORDER },
    });

    // Numéro & catégorie
    slide.addText(`DIAPO ${String(slideNum).padStart(2, '0')} / ${String(total).padStart(2, '0')}  •  ${category.toUpperCase()}`, {
      x: 0.6,
      y: 0.15,
      w: 8.8,
      h: 0.3,
      fontSize: 9,
      fontFace: 'Arial',
      color: C_AMBER,
      bold: true,
    });

    // Notes de l'orateur associées
    const meta = SLIDES_METADATA.find((s) => s.number === slideNum);
    if (meta && meta.speakerNotes.length > 0) {
      const notesCombined = meta.speakerNotes.join('\n\n') + `\n\n[Idée force] : ${meta.keyTakeaway}`;
      slide.addNotes(notesCombined);
    }
  };

  // ==========================================
  // DIAPOSITIVE 1 : PAGE DE TITRE
  // ==========================================
  onProgress?.('Création de la Diapositive 1 : Titre...');
  {
    const s1 = pptx.addSlide();
    applySlideBase(s1, 1, 'Introduction & Page de Titre');

    // Motifs géométriques cubistes décoratifs en arrière-plan
    s1.addShape(pptx.ShapeType.triangle, {
      x: 8.5,
      y: -0.5,
      w: 2.2,
      h: 2.5,
      fill: { color: '1E3A8A', transparency: 80 },
    });
    s1.addShape(pptx.ShapeType.rect, {
      x: 7.8,
      y: 3.5,
      w: 2.5,
      h: 2.5,
      fill: { color: '78350F', transparency: 85 },
      rotate: 15,
    });

    // Titre principal
    s1.addText([
      { text: 'Pablo Picasso :\n', options: { fontSize: 36, bold: true, color: C_WHITE } },
      { text: 'un génie de l’art', options: { fontSize: 36, bold: true, color: C_AMBER } },
    ], {
      x: 0.6,
      y: 1.0,
      w: 5.4,
      h: 1.6,
      fontFace: 'Georgia',
    });

    // Sous-titre
    s1.addText('Présentation scolaire sur la vie, les révolutions picturales et l’héritage du plus célèbre artiste du XXe siècle (1881 — 1973).', {
      x: 0.6,
      y: 2.8,
      w: 5.2,
      h: 0.8,
      fontSize: 13,
      color: C_MUTED,
      fontFace: 'Calibri',
    });

    // Cartouche Le Père du Cubisme
    s1.addShape(pptx.ShapeType.roundRect, {
      x: 0.6,
      y: 3.8,
      w: 2.5,
      h: 1.2,
      fill: { color: C_CARD },
      line: { color: C_BORDER, width: 1 },
      rectRadius: 0.1,
    });
    s1.addText('LE PÈRE DU CUBISME\nRupture totale avec la perspective traditionnelle pour inventer une nouvelle liberté de créer.', {
      x: 0.7,
      y: 3.9,
      w: 2.3,
      h: 1.0,
      fontSize: 10,
      color: C_MUTED,
      fontFace: 'Calibri',
      bold: false,
    });

    // Cartouche Une Polyvalence Totale
    s1.addShape(pptx.ShapeType.roundRect, {
      x: 3.3,
      y: 3.8,
      w: 2.5,
      h: 1.2,
      fill: { color: C_CARD },
      line: { color: C_BORDER, width: 1 },
      rectRadius: 0.1,
    });
    s1.addText('UNE POLYVALENCE TOTALE\nPeintre, dessinateur, sculpteur, graveur et céramiste : plus de 50 000 œuvres créées.', {
      x: 3.4,
      y: 3.9,
      w: 2.3,
      h: 1.0,
      fontSize: 10,
      color: C_MUTED,
      fontFace: 'Calibri',
      bold: false,
    });

    // Image Portrait
    if (portraitB64) {
      s1.addImage({
        data: portraitB64,
        x: 6.2,
        y: 1.0,
        w: 3.2,
        h: 4.0,
      });
      // Légende sous image
      s1.addText('Pablo Picasso dans son atelier (1881-1973)', {
        x: 6.2,
        y: 5.05,
        w: 3.2,
        h: 0.3,
        fontSize: 9,
        color: C_MUTED,
        align: 'center',
        italic: true,
      });
    }
  }

  // ==========================================
  // DIAPOSITIVE 2 : SON ENFANCE
  // ==========================================
  onProgress?.('Création de la Diapositive 2 : Enfance...');
  {
    const s2 = pptx.addSlide();
    applySlideBase(s2, 2, 'Biographie & Origines (1881-1895)');

    s2.addText('Son Enfance : L’Éveil d’un Prodige', {
      x: 0.6,
      y: 0.6,
      w: 8.8,
      h: 0.6,
      fontSize: 26,
      bold: true,
      fontFace: 'Georgia',
      color: C_WHITE,
    });
    s2.addText('Comment un jeune garçon de Málaga a découvert sa passion avant même de parler.', {
      x: 0.6,
      y: 1.2,
      w: 8.8,
      h: 0.3,
      fontSize: 11,
      fontFace: 'Calibri',
      color: C_MUTED,
    });

    // Card 1 : Quand et où
    s2.addShape(pptx.ShapeType.roundRect, {
      x: 0.6,
      y: 1.7,
      w: 2.7,
      h: 3.2,
      fill: { color: C_CARD },
      line: { color: C_BORDER, width: 1 },
      rectRadius: 0.1,
    });
    s2.addText([
      { text: 'NAISSANCE & LIEU\n\n', options: { fontSize: 9, bold: true, color: C_AMBER } },
      { text: 'Quand et où est-il né ?\n\n', options: { fontSize: 13, bold: true, color: C_WHITE } },
      { text: '• Né le 25 octobre 1881 à Málaga, en Andalousie (sud de l’Espagne).\n\n', options: { fontSize: 10.5, color: C_WHITE } },
      { text: '• Son nom complet de baptême comptait plus de dix prénoms selon la tradition ! Il a choisi de signer du nom de sa mère : Picasso.', options: { fontSize: 9.5, color: C_MUTED } },
    ], { x: 0.8, y: 1.85, w: 2.3, h: 2.8, fontFace: 'Calibri' });

    // Card 2 : Comment s'est passée son enfance
    s2.addShape(pptx.ShapeType.roundRect, {
      x: 3.65,
      y: 1.7,
      w: 2.7,
      h: 3.2,
      fill: { color: C_CARD },
      line: { color: C_BORDER, width: 1 },
      rectRadius: 0.1,
    });
    s2.addText([
      { text: 'FAMILLE & DÉBUTS\n\n', options: { fontSize: 9, bold: true, color: C_ROSE } },
      { text: 'Comment s’est passée son enfance ?\n\n', options: { fontSize: 13, bold: true, color: C_WHITE } },
      { text: '• Son père, José Ruiz Blasco, était peintre et professeur de dessin. Il lui apprend la technique dès le berceau.\n\n', options: { fontSize: 10.5, color: C_WHITE } },
      { text: '• Anecdote célèbre : son premier mot prononcé fut « piz », pour lápiz (crayon en espagnol) !', options: { fontSize: 9.5, color: C_MUTED } },
    ], { x: 3.85, y: 1.85, w: 2.3, h: 2.8, fontFace: 'Calibri' });

    // Card 3 : Quand a-t-il commencé à peindre
    s2.addShape(pptx.ShapeType.roundRect, {
      x: 6.7,
      y: 1.7,
      w: 2.7,
      h: 3.2,
      fill: { color: C_CARD },
      line: { color: C_BORDER, width: 1 },
      rectRadius: 0.1,
    });
    s2.addText([
      { text: 'PRÉCOCITÉ ARTISTIQUE\n\n', options: { fontSize: 9, bold: true, color: C_BLUE } },
      { text: 'Quand a-t-il commencé à peindre ?\n\n', options: { fontSize: 13, bold: true, color: C_WHITE } },
      { text: '• Il dessine vers 7-8 ans. À 8-9 ans, il peint sa première huile : Le Petit Picador jaune (1889).\n\n', options: { fontSize: 10.5, color: C_WHITE } },
      { text: '• À 14 ans, il réussit l’examen d’entrée aux Beaux-Arts de Barcelone en 1 jour au lieu d’un mois.', options: { fontSize: 9.5, color: C_MUTED } },
    ], { x: 6.9, y: 1.85, w: 2.3, h: 2.8, fontFace: 'Calibri' });
  }

  // ==========================================
  // DIAPOSITIVE 3 : SA VIE & FRISE CHRONOLOGIQUE
  // ==========================================
  onProgress?.('Création de la Diapositive 3 : Sa vie...');
  {
    const s3 = pptx.addSlide();
    applySlideBase(s3, 3, 'Chronologie & Grands Lieux (1881-1973)');

    s3.addText('Sa Vie : Lieux, Événements & Destin', {
      x: 0.6,
      y: 0.6,
      w: 8.8,
      h: 0.6,
      fontSize: 26,
      bold: true,
      fontFace: 'Georgia',
      color: C_WHITE,
    });

    // 3 Réponses clés
    s3.addShape(pptx.ShapeType.roundRect, {
      x: 0.6,
      y: 1.35,
      w: 2.7,
      h: 1.6,
      fill: { color: C_CARD },
      line: { color: C_BORDER, width: 1 },
      rectRadius: 0.08,
    });
    s3.addText([
      { text: 'OÙ A-T-IL VÉCU ?\n', options: { fontSize: 10, bold: true, color: C_AMBER } },
      { text: 'Espagne (Málaga, Barcelone, Madrid) puis installation en France dès 1904 : Paris (au Bateau-Lavoir) puis la Côte d’Azur (Vallauris, Cannes, Mougins).', options: { fontSize: 9.5, color: C_MUTED } },
    ], { x: 0.75, y: 1.45, w: 2.4, h: 1.4, fontFace: 'Calibri' });

    s3.addShape(pptx.ShapeType.roundRect, {
      x: 3.65,
      y: 1.35,
      w: 2.7,
      h: 1.6,
      fill: { color: C_CARD },
      line: { color: C_BORDER, width: 1 },
      rectRadius: 0.08,
    });
    s3.addText([
      { text: 'QUAND ET OÙ EST-IL MORT ?\n', options: { fontSize: 10, bold: true, color: C_ROSE } },
      { text: 'Décédé le 8 avril 1973 à Mougins (France), au mas Notre-Dame-de-Vie, à l’âge exceptionnel de 91 ans. Il a créé jusqu’à ses dernières semaines.', options: { fontSize: 9.5, color: C_MUTED } },
    ], { x: 3.8, y: 1.45, w: 2.4, h: 1.4, fontFace: 'Calibri' });

    s3.addShape(pptx.ShapeType.roundRect, {
      x: 6.7,
      y: 1.35,
      w: 2.7,
      h: 1.6,
      fill: { color: C_CARD },
      line: { color: C_BORDER, width: 1 },
      rectRadius: 0.08,
    });
    s3.addText([
      { text: 'ÉVÉNEMENTS MARQUANTS\n', options: { fontSize: 10, bold: true, color: C_BLUE } },
      { text: 'Perte de son ami Casagemas (1901), la guerre civile espagnole et Guernica (1937), puis la célèbre Colombe de la Paix (1949).', options: { fontSize: 9.5, color: C_MUTED } },
    ], { x: 6.85, y: 1.45, w: 2.4, h: 1.4, fontFace: 'Calibri' });

    // Frise chronologique (Dates importantes)
    s3.addText('FRISE CHRONOLOGIQUE DES GRANDES DATES :', {
      x: 0.6,
      y: 3.1,
      w: 8.8,
      h: 0.3,
      fontSize: 10,
      bold: true,
      color: C_AMBER,
    });

    const dates = [
      { y: '1881', t: 'Naissance', d: 'Málaga' },
      { y: '1895', t: 'Beaux-Arts', d: 'Barcelone' },
      { y: '1901', t: 'Période Bleue', d: 'Deuil' },
      { y: '1904', t: 'Période Rose', d: 'Montmartre' },
      { y: '1907', t: 'Cubisme', d: 'Demoiselles' },
      { y: '1937', t: 'Guernica', d: 'Guerre' },
      { y: '1949', t: 'La Colombe', d: 'Paix' },
      { y: '1973', t: 'Décès', d: 'Mougins (91 ans)' },
    ];

    dates.forEach((item, idx) => {
      const xPos = 0.6 + idx * 1.1;
      s3.addShape(pptx.ShapeType.roundRect, {
        x: xPos,
        y: 3.45,
        w: 1.0,
        h: 1.5,
        fill: { color: C_CARD },
        line: { color: idx % 2 === 0 ? C_AMBER : C_BORDER, width: 1 },
        rectRadius: 0.05,
      });
      s3.addText([
        { text: `${item.y}\n`, options: { fontSize: 11, bold: true, color: C_AMBER } },
        { text: `${item.t}\n`, options: { fontSize: 9, bold: true, color: C_WHITE } },
        { text: item.d, options: { fontSize: 8, color: C_MUTED } },
      ], { x: xPos + 0.05, y: 3.55, w: 0.9, h: 1.3, fontFace: 'Calibri', align: 'center' });
    });
  }

  // ==========================================
  // DIAPOSITIVE 4 : SA CARRIÈRE ARTISTIQUE
  // ==========================================
  onProgress?.('Création de la Diapositive 4 : Carrière...');
  {
    const s4 = pptx.addSlide();
    applySlideBase(s4, 4, 'Carrière & Disciplines');

    s4.addText('Sa Carrière Artistique : Un Créateur Universel', {
      x: 0.6,
      y: 0.6,
      w: 8.8,
      h: 0.6,
      fontSize: 26,
      bold: true,
      fontFace: 'Georgia',
      color: C_WHITE,
    });

    // Pourquoi est-il célèbre
    s4.addShape(pptx.ShapeType.roundRect, {
      x: 0.6,
      y: 1.3,
      w: 8.8,
      h: 1.1,
      fill: { color: '2E1065' },
      line: { color: C_AMBER, width: 1 },
      rectRadius: 0.08,
    });
    s4.addText([
      { text: 'POURQUOI PABLO PICASSO EST-IL CÉLÈBRE DANS LE MONDE ENTIER ?\n', options: { fontSize: 11, bold: true, color: C_AMBER } },
      { text: 'Il a brisé les règles académiques de la perspective. Au lieu d’imiter fidèlement la réalité comme un appareil photo, il a réinventé la façon de regarder le monde en peignant ce qu’il pensait et ressentait plutôt que ce qu’il voyait.', options: { fontSize: 10, color: C_WHITE } },
    ], { x: 0.8, y: 1.4, w: 8.4, h: 0.9, fontFace: 'Calibri' });

    // 4 types d'art
    const arts = [
      { t: '1. PEINTRE', sub: '+1 800 toiles', d: 'Du réalisme d’académie aux révolutions cubistes. Exploration totale de la couleur et des matières (huiles, gouaches, Ripolin).' },
      { t: '2. DESSINATEUR', sub: 'Maître du trait', d: 'Des milliers d’esquisses au fusain et à l’encre. Un geste d’une sûreté absolue capable de tracer un taureau d’un seul trait.' },
      { t: '3. SCULPTEUR', sub: 'Audace des formes', d: 'Sculptures en fil de fer, plâtre, bronze et tôle découpée. Création avec des objets trouvés (la Tête de taureau en selle de vélo).' },
      { t: '4. GRAVEUR & CÉRAMISTE', sub: '+4 000 pièces', d: 'Gravure à plaque perdue et travail de la terre cuite à Vallauris (assiettes, pichets et faïences méditerranéennes).' },
    ];

    arts.forEach((a, idx) => {
      const xPos = 0.6 + idx * 2.25;
      s4.addShape(pptx.ShapeType.roundRect, {
        x: xPos,
        y: 2.6,
        w: 2.05,
        h: 2.3,
        fill: { color: C_CARD },
        line: { color: C_BORDER, width: 1 },
        rectRadius: 0.08,
      });
      s4.addText([
        { text: `${a.t}\n`, options: { fontSize: 11, bold: true, color: C_AMBER } },
        { text: `${a.sub}\n\n`, options: { fontSize: 9, color: C_ROSE, bold: true } },
        { text: a.d, options: { fontSize: 9.5, color: C_MUTED } },
      ], { x: xPos + 0.1, y: 2.7, w: 1.85, h: 2.1, fontFace: 'Calibri' });
    });
  }

  // ==========================================
  // DIAPOSITIVE 5 : SES STYLES ARTISTIQUES
  // ==========================================
  onProgress?.('Création de la Diapositive 5 : Styles...');
  {
    const s5 = pptx.addSlide();
    applySlideBase(s5, 5, 'Mouvements & Évolution Stylistique');

    s5.addText('Ses Styles Artistiques Majeurs', {
      x: 0.6,
      y: 0.6,
      w: 8.8,
      h: 0.6,
      fontSize: 26,
      bold: true,
      fontFace: 'Georgia',
      color: C_WHITE,
    });

    // Période Bleue
    s5.addShape(pptx.ShapeType.roundRect, {
      x: 0.6,
      y: 1.35,
      w: 2.7,
      h: 3.5,
      fill: { color: '0F172A' },
      line: { color: C_BLUE, width: 1 },
      rectRadius: 0.08,
    });
    s5.addText([
      { text: 'LA PÉRIODE BLEUE (1901-1904)\n\n', options: { fontSize: 11, bold: true, color: C_BLUE } },
      { text: '• Pourquoi le bleu ? Profondément marqué par le suicide de son ami Casagemas, il exprime sa tristesse et son deuil.\n\n', options: { fontSize: 9.5, color: C_WHITE } },
      { text: '• Sujets : mendiants, aveugles, vieillards solitaires et mères démunies.\n\n', options: { fontSize: 9.5, color: C_MUTED } },
      { text: '• Œuvre phare : Le Vieux Guitariste aveugle (1903).', options: { fontSize: 9, color: C_AMBER, italic: true } },
    ], { x: 0.75, y: 1.45, w: 2.4, h: 3.2, fontFace: 'Calibri' });

    // Période Rose
    s5.addShape(pptx.ShapeType.roundRect, {
      x: 3.65,
      y: 1.35,
      w: 2.7,
      h: 3.5,
      fill: { color: '1C1917' },
      line: { color: C_ROSE, width: 1 },
      rectRadius: 0.08,
    });
    s5.addText([
      { text: 'LA PÉRIODE ROSE (1904-1906)\n\n', options: { fontSize: 11, bold: true, color: C_ROSE } },
      { text: '• Pourquoi le rose ? Amoureux de Fernande Olivier à Montmartre, il retrouve la joie de vivre et la tendresse.\n\n', options: { fontSize: 9.5, color: C_WHITE } },
      { text: '• Couleurs & Sujets : teintes chaudes (rose, ocre, pêche). Univers du cirque Médrano, acrobates, arlequins et saltimbanques.\n\n', options: { fontSize: 9.5, color: C_MUTED } },
      { text: '• Œuvre phare : Famille de saltimbanques (1905).', options: { fontSize: 9, color: C_AMBER, italic: true } },
    ], { x: 3.8, y: 1.45, w: 2.4, h: 3.2, fontFace: 'Calibri' });

    // Le Cubisme
    s5.addShape(pptx.ShapeType.roundRect, {
      x: 6.7,
      y: 1.35,
      w: 2.7,
      h: 3.5,
      fill: { color: '1C1917' },
      line: { color: C_AMBER, width: 1 },
      rectRadius: 0.08,
    });
    s5.addText([
      { text: 'LE CUBISME (1907-1919)\n\n', options: { fontSize: 11, bold: true, color: C_AMBER } },
      { text: '• Qu’est-ce que ce mouvement ? Une rupture radicale inventée avec Georges Braque : rejeter la perspective classique.\n\n', options: { fontSize: 9.5, color: C_WHITE } },
      { text: '• Principe : découper visages et objets en facettes géométriques pour montrer tous les angles à la fois.\n\n', options: { fontSize: 9.5, color: C_MUTED } },
      { text: '• Œuvre phare : Les Demoiselles d’Avignon (1907).', options: { fontSize: 9, color: C_ROSE, italic: true } },
    ], { x: 6.85, y: 1.45, w: 2.4, h: 3.2, fontFace: 'Calibri' });
  }

  // ==========================================
  // DIAPOSITIVE 6 : SES ŒUVRES CÉLÈBRES
  // ==========================================
  onProgress?.('Création de la Diapositive 6 : Œuvres...');
  {
    const s6 = pptx.addSlide();
    applySlideBase(s6, 6, 'Chefs-d’Œuvre Incontournables');

    s6.addText('Ses Œuvres Célèbres Décodées', {
      x: 0.6,
      y: 0.6,
      w: 8.8,
      h: 0.6,
      fontSize: 26,
      bold: true,
      fontFace: 'Georgia',
      color: C_WHITE,
    });

    // 1. Guernica
    s6.addShape(pptx.ShapeType.roundRect, {
      x: 0.6,
      y: 1.35,
      w: 4.2,
      h: 3.5,
      fill: { color: C_CARD },
      line: { color: C_BORDER, width: 1 },
      rectRadius: 0.08,
    });
    if (guernicaB64) {
      s6.addImage({
        data: guernicaB64,
        x: 0.8,
        y: 1.5,
        w: 3.8,
        h: 1.6,
      });
    }
    s6.addText([
      { text: '« GUERNICA » (1937) — Que représente-t-il ?\n', options: { fontSize: 10.5, bold: true, color: C_AMBER } },
      { text: 'Peint en noir, blanc et gris pour évoquer les photographies de journaux. Il dénonce le bombardement nazi de la ville basque de Guernica pendant la Guerre civile espagnole. On y observe le cheval blessé hurlant de douleur, la mère pleurant son enfant mort et l’ampoule symbole de vérité nue.', options: { fontSize: 8.5, color: C_WHITE } },
    ], { x: 0.8, y: 3.2, w: 3.8, h: 1.5, fontFace: 'Calibri' });

    // 2. Les Demoiselles d'Avignon
    s6.addShape(pptx.ShapeType.roundRect, {
      x: 5.2,
      y: 1.35,
      w: 4.2,
      h: 3.5,
      fill: { color: C_CARD },
      line: { color: C_BORDER, width: 1 },
      rectRadius: 0.08,
    });
    if (demoisellesB64) {
      s6.addImage({
        data: demoisellesB64,
        x: 5.4,
        y: 1.5,
        w: 1.6,
        h: 2.0,
      });
    }
    s6.addText([
      { text: '« LES DEMOISELLES D’AVIGNON » (1907)\n\n', options: { fontSize: 10.5, bold: true, color: C_ROSE } },
      { text: 'Pourquoi l’a-t-il peint ?\n', options: { fontSize: 9.5, bold: true, color: C_AMBER } },
      { text: 'Pour briser définitivement les canons traditionnels de la beauté classique. Inspiré par les masques africains et l’art ibérique antique, il représente cinq femmes aux corps anguleux découpés en plans géométriques.', options: { fontSize: 8.5, color: C_WHITE } },
      { text: '\n\n• Acte fondateur du Cubisme', options: { fontSize: 8.5, color: C_MUTED, italic: true } },
    ], { x: 7.15, y: 1.5, w: 2.1, h: 3.1, fontFace: 'Calibri' });
  }

  // ==========================================
  // DIAPOSITIVE 7 : SES TECHNIQUES ARTISTIQUES
  // ==========================================
  onProgress?.('Création de la Diapositive 7 : Techniques...');
  {
    const s7 = pptx.addSlide();
    applySlideBase(s7, 7, 'Matières & Procédés de Création');

    s7.addText('Ses Techniques Artistiques : L’Audace des Matériaux', {
      x: 0.6,
      y: 0.6,
      w: 8.8,
      h: 0.6,
      fontSize: 26,
      bold: true,
      fontFace: 'Georgia',
      color: C_WHITE,
    });

    s7.addText([
      { text: 'UTILISAIT-IL SEULEMENT LA PEINTURE ? Non, un explorateur insatiable !\n', options: { fontSize: 11, bold: true, color: C_AMBER } },
      { text: 'Picasso utilisait des matériaux traditionnels et industriels : huile, gouache, fusain, mais aussi la peinture laquée Ripolin, la terre cuite, le fil de fer et les objets de récupération.', options: { fontSize: 10, color: C_MUTED } },
    ], { x: 0.6, y: 1.25, w: 8.8, h: 0.7, fontFace: 'Calibri' });

    // 4 techniques
    const techs = [
      { t: '1. PEINTURE & DESSIN', d: 'Maîtrise absolue du dessin classique, peinture à l’huile, encres et utilisation audacieuse de peintures industrielles.' },
      { t: '2. PAPIER COLLÉ (1912)', d: 'Invention révolutionnaire du collage : morceaux de journaux, partitions, tissu ciré et cordes directement collés sur la toile.' },
      { t: '3. ASSEMBLAGE SCULPTURAL', d: 'Recyclage poétique : la célèbre Tête de taureau (1942) réalisée simplement avec une selle et un guidon de vieux vélo assemblés.' },
      { t: '4. CÉRAMIQUE & GRAVURE', d: 'À Vallauris, plus de 4 000 pièces en terre cuite (pichets, faïences) et perfectionnement de la linogravure à plaque perdue.' },
    ];

    techs.forEach((tc, idx) => {
      const xPos = 0.6 + idx * 2.25;
      s7.addShape(pptx.ShapeType.roundRect, {
        x: xPos,
        y: 2.1,
        w: 2.05,
        h: 2.7,
        fill: { color: C_CARD },
        line: { color: C_BORDER, width: 1 },
        rectRadius: 0.08,
      });
      s7.addText([
        { text: `${tc.t}\n\n`, options: { fontSize: 10, bold: true, color: C_AMBER } },
        { text: tc.d, options: { fontSize: 9.5, color: C_WHITE } },
      ], { x: xPos + 0.1, y: 2.2, w: 1.85, h: 2.5, fontFace: 'Calibri' });
    });
  }

  // ==========================================
  // DIAPOSITIVE 8 : SON INFLUENCE SUR L'ART
  // ==========================================
  onProgress?.('Création de la Diapositive 8 : Influence...');
  {
    const s8 = pptx.addSlide();
    applySlideBase(s8, 8, 'Héritage & Résonance Universelle');

    s8.addText('Son Influence : Une Onde de Choc sur l’Art', {
      x: 0.6,
      y: 0.6,
      w: 8.8,
      h: 0.6,
      fontSize: 26,
      bold: true,
      fontFace: 'Georgia',
      color: C_WHITE,
    });

    // Box 1 : Comment Picasso a changé l'histoire de l'art
    s8.addShape(pptx.ShapeType.roundRect, {
      x: 0.6,
      y: 1.4,
      w: 4.2,
      h: 3.4,
      fill: { color: C_CARD },
      line: { color: C_BORDER, width: 1 },
      rectRadius: 0.08,
    });
    s8.addText([
      { text: 'COMMENT A-T-IL CHANGÉ L’HISTOIRE DE L’ART ?\n\n', options: { fontSize: 11, bold: true, color: C_AMBER } },
      { text: '1. La fin de l’imitation : il a libéré les peintres de l’obligation de copier le monde réel comme un miroir.\n\n', options: { fontSize: 10, color: C_WHITE } },
      { text: '2. La multiplicité des points de vue : en inventant le cubisme, il a montré qu’on pouvait voir un objet sous toutes ses faces à la fois.\n\n', options: { fontSize: 10, color: C_WHITE } },
      { text: '3. Pionnier de l’art moderne : son travail a inspiré l’art abstrait, le surréalisme et le Pop Art.', options: { fontSize: 10, color: C_MUTED } },
    ], { x: 0.8, y: 1.55, w: 3.8, h: 3.1, fontFace: 'Calibri' });

    // Box 2 : Pourquoi est-il encore si célèbre aujourd'hui ?
    s8.addShape(pptx.ShapeType.roundRect, {
      x: 5.2,
      y: 1.4,
      w: 4.2,
      h: 3.4,
      fill: { color: C_CARD },
      line: { color: C_BORDER, width: 1 },
      rectRadius: 0.08,
    });
    s8.addText([
      { text: 'POURQUOI EST-IL ENCORE SI CÉLÈBRE AUJOURD’HUI ?\n\n', options: { fontSize: 11, bold: true, color: C_BLUE } },
      { text: '1. L’artiste le plus prolifique : plus de 50 000 pièces créées sur 75 ans de travail sans interruption.\n\n', options: { fontSize: 10, color: C_WHITE } },
      { text: '2. Un symbole mondial de paix : son tableau Guernica et son dessin de la Colombe de la paix sont des icônes universelles.\n\n', options: { fontSize: 10, color: C_WHITE } },
      { text: '3. Des musées dédiés : à Paris, Barcelone, Málaga et Antibes, visités par des millions d’élèves chaque année.', options: { fontSize: 10, color: C_MUTED } },
    ], { x: 5.4, y: 1.55, w: 3.8, h: 3.1, fontFace: 'Calibri' });
  }

  // ==========================================
  // DIAPOSITIVE 9 : CONCLUSION
  // ==========================================
  onProgress?.('Création de la Diapositive 9 : Conclusion...');
  {
    const s9 = pptx.addSlide();
    applySlideBase(s9, 9, 'Synthèse & Leçons pour Nous');

    s9.addText('Conclusion : Ce que Pablo Picasso nous Enseigne', {
      x: 0.6,
      y: 0.6,
      w: 8.8,
      h: 0.6,
      fontSize: 26,
      bold: true,
      fontFace: 'Georgia',
      color: C_WHITE,
    });

    s9.addShape(pptx.ShapeType.roundRect, {
      x: 0.6,
      y: 1.35,
      w: 4.2,
      h: 2.2,
      fill: { color: C_CARD },
      line: { color: C_BORDER, width: 1 },
      rectRadius: 0.08,
    });
    s9.addText([
      { text: 'QU’EST-CE QUI REND PICASSO UNIQUE ?\n\n', options: { fontSize: 11, bold: true, color: C_AMBER } },
      { text: '• Sa soif infinie d’apprendre et de réinventer les règles.\n• Son refus de s’enfermer dans un seul style : dès qu’il maîtrisait une technique, il explorait un nouvel horizon.\n• Son immense énergie créatrice jusqu’à 91 ans.', options: { fontSize: 10, color: C_WHITE } },
    ], { x: 0.8, y: 1.45, w: 3.8, h: 2.0, fontFace: 'Calibri' });

    s9.addShape(pptx.ShapeType.roundRect, {
      x: 5.2,
      y: 1.35,
      w: 4.2,
      h: 2.2,
      fill: { color: C_CARD },
      line: { color: C_BORDER, width: 1 },
      rectRadius: 0.08,
    });
    s9.addText([
      { text: 'QUE POUVONS-NOUS APPRENDRE DE SON ART ?\n\n', options: { fontSize: 11, bold: true, color: C_ROSE } },
      { text: '• Oser regarder le monde sous plusieurs facettes.\n• Ne jamais craindre l’erreur : l’expérimentation fait partie de l’apprentissage.\n• Conserver toute sa vie la curiosité et l’émerveillement de l’enfance.', options: { fontSize: 10, color: C_WHITE } },
    ], { x: 5.4, y: 1.45, w: 3.8, h: 2.0, fontFace: 'Calibri' });

    // Phrase de clôture
    s9.addShape(pptx.ShapeType.roundRect, {
      x: 0.6,
      y: 3.75,
      w: 8.8,
      h: 1.1,
      fill: { color: '2E1065' },
      line: { color: C_AMBER, width: 1 },
      rectRadius: 0.08,
    });
    s9.addText([
      { text: 'PENSÉE DE CLÔTURE SUR LA CRÉATIVITÉ ET L’IMAGINATION :\n', options: { fontSize: 10, bold: true, color: C_AMBER } },
      { text: '« L’œuvre de Picasso nous rappelle que l’imagination humaine ne consiste pas à copier le monde tel qu’il nous est donné, mais à avoir le courage de le regarder sous tous ses angles pour inventer notre propre avenir. »', options: { fontSize: 11, italic: true, color: C_WHITE } },
    ], { x: 0.8, y: 3.85, w: 8.4, h: 0.9, fontFace: 'Georgia' });
  }

  // ==========================================
  // DIAPOSITIVE 10 : QUIZ FINAL
  // ==========================================
  onProgress?.('Création de la Diapositive 10 : Quiz...');
  {
    const s10 = pptx.addSlide();
    applySlideBase(s10, 10, 'Évaluation Interactive de la Classe');

    s10.addText('Quiz Final : Testez vos Connaissances !', {
      x: 0.6,
      y: 0.6,
      w: 8.8,
      h: 0.6,
      fontSize: 26,
      bold: true,
      fontFace: 'Georgia',
      color: C_WHITE,
    });
    s10.addText('Choisissez l’option A, B ou C pour chaque question. Les réponses ne sont pas dévoilées sur cette diapositive.', {
      x: 0.6,
      y: 1.15,
      w: 8.8,
      h: 0.3,
      fontSize: 10,
      color: C_MUTED,
      fontFace: 'Calibri',
    });

    const questionsPptx = [
      { num: 'Q1', q: 'Dans quel pays Pablo Picasso est-il né ?', opts: 'A) En France   |   B) En Espagne   |   C) En Italie' },
      { num: 'Q2', q: 'En quelle année est-il né ?', opts: 'A) 1881   |   B) 1900   |   C) 1925' },
      { num: 'Q3', q: 'Quel mouvement artistique a-t-il contribué à développer ?', opts: 'A) L’impressionnisme   |   B) Le cubisme   |   C) Le réalisme' },
      { num: 'Q4', q: 'Comment s’appelle son célèbre tableau dénonçant la guerre ?', opts: 'A) La Joconde   |   B) La Nuit étoilée   |   C) Guernica' },
      { num: 'Q5', q: 'Quelles couleurs dominent sa période bleue ?', opts: 'A) Rouge & jaune   |   B) Bleu & teintes froides   |   C) Vert & violet' },
    ];

    questionsPptx.forEach((item, idx) => {
      const yPos = 1.55 + idx * 0.66;
      s10.addShape(pptx.ShapeType.roundRect, {
        x: 0.6,
        y: yPos,
        w: 8.8,
        h: 0.58,
        fill: { color: C_CARD },
        line: { color: C_BORDER, width: 1 },
        rectRadius: 0.06,
      });
      s10.addText([
        { text: `${item.num}. ${item.q}  —  `, options: { fontSize: 10.5, bold: true, color: C_AMBER } },
        { text: item.opts, options: { fontSize: 10, color: C_WHITE } },
      ], { x: 0.8, y: yPos + 0.08, w: 8.4, h: 0.45, fontFace: 'Calibri' });
    });
  }

  // ==========================================
  // DIAPOSITIVE 11 : RÉPONSES DU QUIZ
  // ==========================================
  onProgress?.('Création de la Diapositive 11 : Corrigé...');
  {
    const s11 = pptx.addSlide();
    applySlideBase(s11, 11, 'Corrigé Officiel & Explications Pédagogiques');

    s11.addText('Réponses du Quiz & Explications Détaillées', {
      x: 0.6,
      y: 0.6,
      w: 8.8,
      h: 0.6,
      fontSize: 26,
      bold: true,
      fontFace: 'Georgia',
      color: C_WHITE,
    });

    const answersList = [
      { q: '1. Pays de naissance', ans: 'B) En Espagne', exp: 'Né le 25 octobre 1881 à Málaga en Andalousie.' },
      { q: '2. Année de naissance', ans: 'A) 1881', exp: 'Il a vécu 91 ans (1881-1973) et a créé pendant plus de 75 ans.' },
      { q: '3. Mouvement artistique', ans: 'B) Le cubisme', exp: 'Fondé avec Georges Braque vers 1907 (Les Demoiselles d’Avignon).' },
      { q: '4. Tableau contre la guerre', ans: 'C) Guernica', exp: 'Fresque monumentale de 1937 dénonçant le bombardement de la ville basque.' },
      { q: '5. Couleurs de la période bleue', ans: 'B) Le bleu et les teintes froides', exp: 'Utilisées entre 1901 et 1904 pour exprimer la mélancolie et la solitude.' },
    ];

    answersList.forEach((item, idx) => {
      const yPos = 1.35 + idx * 0.7;
      s11.addShape(pptx.ShapeType.roundRect, {
        x: 0.6,
        y: yPos,
        w: 8.8,
        h: 0.62,
        fill: { color: C_CARD },
        line: { color: C_GREEN, width: 1 },
        rectRadius: 0.06,
      });
      s11.addText([
        { text: `${item.q} : `, options: { fontSize: 10, bold: true, color: C_WHITE } },
        { text: `${item.ans}  —  `, options: { fontSize: 10.5, bold: true, color: C_GREEN } },
        { text: item.exp, options: { fontSize: 9.5, color: C_MUTED } },
      ], { x: 0.8, y: yPos + 0.08, w: 8.4, h: 0.48, fontFace: 'Calibri' });
    });
  }

  onProgress?.('Génération et téléchargement du fichier .pptx...');
  await pptx.writeFile({ fileName: 'Presentation_Pablo_Picasso.pptx' });
}
