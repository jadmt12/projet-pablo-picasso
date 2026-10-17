import { QuizQuestion, ArtworkHighlight } from '../types/presentation';

// Images importées
import picassoPortrait from '../assets/images/picasso_portrait_1792246527374.jpg';
import guernicaImg from '../assets/images/guernica_artwork_1792246526717.jpg';
import demoisellesImg from '../assets/images/demoiselles_cubism_1792246544702.jpg';
import bluePeriodImg from '../assets/images/blue_period_artwork_1792246527606.jpg';
import rosePeriodImg from '../assets/images/rose_period_saltimbanque_1792246528539.jpg';
import ceramicsImg from '../assets/images/picasso_sculpture_ceramics_1792246529491.jpg';
import collageImg from '../assets/images/picasso_cubist_collage_1792246559129.jpg';

export {
  picassoPortrait,
  guernicaImg,
  demoisellesImg,
  bluePeriodImg,
  rosePeriodImg,
  ceramicsImg,
  collageImg,
};

export const SLIDES_METADATA = [
  {
    id: 1,
    number: 1,
    title: "Pablo Picasso : un génie de l'art",
    subtitle: "Présentation scolaire sur la vie et l'œuvre du plus célèbre peintre du XXe siècle",
    category: "Introduction",
    keyTakeaway: "Pablo Picasso (1881-1973) est le maître incontournable qui a révolutionné la peinture moderne.",
    speakerNotes: [
      "Bonjour à tous. Aujourd'hui, je vais vous présenter Pablo Picasso, l'un des plus grands artistes de tous les temps.",
      "Durant cette présentation, nous allons découvrir son enfance précoce, les étapes marquantes de sa vie, ses différents styles comme le cubisme, et ses chefs-d'œuvre les plus célèbres.",
      "Installez-vous confortablement pour ce voyage à travers les formes et les couleurs !"
    ]
  },
  {
    id: 2,
    number: 2,
    title: "Son enfance",
    subtitle: "Un don précoce né sous le soleil de l'Andalousie",
    category: "Biographie",
    keyTakeaway: "Né en 1881 en Espagne, il dessine avant même de parler et montre un talent exceptionnel dès son plus jeune âge.",
    speakerNotes: [
      "Pour commencer, parlons de ses débuts en Espagne.",
      "Son premier mot était 'piz', abréviation de 'lápiz' qui veut dire crayon en espagnol. Cela montre à quel point le dessin faisait partie de lui.",
      "Son père a vite compris que son fils le dépassait en talent et lui a confié ses propres pinceaux."
    ]
  },
  {
    id: 3,
    number: 3,
    title: "Sa vie et ses grands voyages",
    subtitle: "De l'Espagne à Paris : un destin de 91 années de création",
    category: "Chronologie",
    keyTakeaway: "Une vie de 91 ans entre l'Espagne et la France, marquée par des amitiés fortes, les guerres mondiales et la quête de paix.",
    speakerNotes: [
      "Picasso a vécu 91 ans, ce qui est une très longue vie au cours de laquelle le monde a énormément changé.",
      "Après ses études en Espagne, il s'installe à Paris au fameux atelier du Bateau-Lavoir.",
      "Plus tard, il s'installe sur la Côte d'Azur dans le sud de la France, où la lumière de la Méditerranée lui rappelle son Espagne natale."
    ]
  },
  {
    id: 4,
    number: 4,
    title: "Sa carrière artistique",
    subtitle: "Un créateur infatigable : peintre, sculpteur, graveur et céramiste",
    category: "Disciplines",
    keyTakeaway: "Picasso a créé plus de 50 000 œuvres dans sa vie en explorant tous les domaines des arts visuels.",
    speakerNotes: [
      "Pourquoi Picasso est-il si réputé ? Parce qu'il refusait de se limiter à une seule technique.",
      "Il a produit plus de 50 000 créations. Il peignait, sculptait, gravait et modelait la terre cuite.",
      "Pour lui, chaque objet du quotidien pouvait devenir une œuvre d'art."
    ]
  },
  {
    id: 5,
    number: 5,
    title: "Ses styles artistiques",
    subtitle: "Période bleue, période rose et la grande révolution du cubisme",
    category: "Mouvements",
    keyTakeaway: "Picasso a changé de style plusieurs fois : les bleus mélancoliques, les roses chaleureux du cirque, puis les formes géométriques du cubisme.",
    speakerNotes: [
      "Voici l'une des parties les plus passionnantes : les styles de Picasso.",
      "La période bleue exprime la tristesse suite à la mort de son meilleur ami Casagemas.",
      "Puis la période rose apporte de la douceur avec les saltimbanques et le cirque.",
      "Enfin, avec le cubisme, il casse littéralement les codes en dessinant un objet sous plusieurs angles à la fois."
    ]
  },
  {
    id: 6,
    number: 6,
    title: "Ses œuvres célèbres",
    subtitle: "Des chefs-d'œuvre qui ont bouleversé l'histoire de l'art mondial",
    category: "Chefs-d'œuvre",
    keyTakeaway: "Guernica et Les Demoiselles d'Avignon sont deux toiles monumentales qui ont marqué l'histoire humaine et picturale.",
    speakerNotes: [
      "Regardons maintenant ses tableaux les plus célèbres au monde.",
      "Guernica est une immense fresque en noir et blanc peinte en 1937 pour dénoncer la guerre civile et la barbarie.",
      "Les Demoiselles d'Avignon, peintes en 1907, ont choqué le public de l'époque car les visages sont inspirés de masques et découpés en triangles."
    ]
  },
  {
    id: 7,
    number: 7,
    title: "Ses techniques artistiques",
    subtitle: "L'audace d'inventer : peinture, collage, sculpture et céramique",
    category: "Techniques",
    keyTakeaway: "Picasso n'utilisait pas seulement la peinture à l'huile : il a inventé le collage moderne et assemblait des objets trouvés.",
    speakerNotes: [
      "Picasso adorait tester de nouveaux matériaux.",
      "Il a été parmi les premiers à coller de vrais journaux et du papier peint sur ses toiles.",
      "Il a même fabriqué une tête de taureau célèbre en utilisant une selle et un guidon de vieux vélo !"
    ]
  },
  {
    id: 8,
    number: 8,
    title: "Son influence sur l'art",
    subtitle: "Comment Picasso a libéré l'art moderne pour toujours",
    category: "Héritage",
    keyTakeaway: "Avant lui, on cherchait à copier fidèlement la réalité ; grâce à lui, les artistes ont eu la liberté d'inventer et de déconstruire.",
    speakerNotes: [
      "Comment a-t-il changé le cours de l'histoire ?",
      "Avant Picasso, les peintres voulaient que leurs toiles ressemblent à des photos parfaites.",
      "Picasso a dit : l'art ne doit pas copier ce qu'on voit, mais exprimer ce qu'on pense et ce qu'on ressent."
    ]
  },
  {
    id: 9,
    number: 9,
    title: "Conclusion",
    subtitle: "Ce que Pablo Picasso nous enseigne sur la créativité",
    category: "Bilan",
    keyTakeaway: "Picasso nous invite à regarder le monde avec curiosité, à oser expérimenter sans craindre l'erreur, et à préserver notre regard d'enfant.",
    speakerNotes: [
      "En conclusion, que pouvons-nous retenir de ce génie ?",
      "Picasso a toujours cherché à peindre avec la liberté et l'imagination d'un enfant.",
      "Son œuvre nous inspire à regarder le monde avec curiosité et à ne jamais avoir peur d'exprimer notre propre créativité."
    ]
  },
  {
    id: 10,
    number: 10,
    title: "Quiz final : Testez vos connaissances !",
    subtitle: "5 questions à choix multiples pour réviser en s'amusant",
    category: "Évaluation",
    keyTakeaway: "Testez votre attention avec 5 questions interactives. Choisissez votre réponse pour chaque question !",
    speakerNotes: [
      "À vous de jouer maintenant ! Voici un petit quiz de 5 questions.",
      "Les élèves peuvent voter à main levée pour l'option A, B ou C.",
      "Ne donnez pas les réponses tout de suite, nous allons voir le corrigé complet sur la diapositive suivante."
    ]
  },
  {
    id: 11,
    number: 11,
    title: "Réponses du quiz & Explications",
    subtitle: "Le corrigé complet et pédagogique de chaque question",
    category: "Corrigé",
    keyTakeaway: "Bravo ! Toutes les explications historiques pour approfondir et consolider vos apprentissages.",
    speakerNotes: [
      "Voici le corrigé avec les explications pour chaque question.",
      "Félicitez la classe pour son écoute et invitez vos camarades ou votre professeur à poser des questions !"
    ]
  }
];

export const TIMELINE_EVENTS = [
  {
    year: "1881",
    place: "Málaga (Espagne)",
    title: "Naissance de Pablo",
    description: "Pablo Ruiz y Picasso naît le 25 octobre à Málaga en Andalousie. Son père José, peintre et enseignant, l'initie très tôt."
  },
  {
    year: "1895",
    place: "Barcelone",
    title: "Entrée aux Beaux-Arts",
    description: "À 14 ans seulement, il réussit en une journée l'examen d'entrée de l'École de la Llotja, prévu pour un mois complet."
  },
  {
    year: "1901-1904",
    place: "Paris & Barcelone",
    title: "La Période Bleue",
    description: "Bouleversé par la disparition de son ami Carlos Casagemas, il peint la tristesse et la précarité dans des tons froids de bleu."
  },
  {
    year: "1904-1906",
    place: "Paris (Montmartre)",
    title: "La Période Rose",
    description: "Installé au Bateau-Lavoir à Montmartre et amoureux de Fernande Olivier, il peint l'univers chaleureux du cirque et des arlequins."
  },
  {
    year: "1907",
    place: "Paris",
    title: "Naissance du Cubisme",
    description: "Il peint 'Les Demoiselles d'Avignon', brisant les règles classiques de la perspective en s'inspirant de masques africains."
  },
  {
    year: "1937",
    place: "Paris / Espagne",
    title: "Le chef-d'œuvre 'Guernica'",
    description: "En pleine Guerre civile espagnole, il crie son horreur face au bombardement de la ville basque de Guernica par une toile géante."
  },
  {
    year: "1949",
    place: "Paris",
    title: "La Colombe de la Paix",
    description: "Son dessin de colombe blanche devient l'emblème mondial du mouvement pacifiste et des Congrès pour la paix."
  },
  {
    year: "1973",
    place: "Mougins (France)",
    title: "Fin d'une vie de génie",
    description: "Picasso s'éteint le 8 avril 1973 à l'âge remarquable de 91 ans dans son mas provençal Notre-Dame-de-Vie à Mougins."
  }
];

export const ARTISTIC_STYLES_DATA = [
  {
    id: "bleue",
    name: "La Période Bleue",
    years: "1901 - 1904",
    colorAccent: "#2563EB",
    bgTint: "from-blue-950/40 to-slate-900/80",
    borderTint: "border-blue-500/30",
    whyColor: "Pourquoi le bleu ? Bouleversé par le suicide de son ami cher Carlos Casagemas à Paris, Picasso traverse un profond chagrin.",
    paletteDescription: "Monochromes de bleu de Prusse, bleu cobalt, gris ardoise et vert d'eau glacial.",
    themes: "Mendiants, aveugles, mères démunies, vieillards solitaires et marginaux des ruelles sombres.",
    image: bluePeriodImg,
    exampleWork: "Le Vieux Guitariste aveugle (1903)",
    keyFeature: "Allongement expressif des corps inspiré du peintre Le Greco et ambiance de recueillement spirituel."
  },
  {
    id: "rose",
    name: "La Période Rose",
    years: "1904 - 1906",
    colorAccent: "#F43F5E",
    bgTint: "from-rose-950/40 to-amber-950/30",
    borderTint: "border-rose-500/30",
    whyColor: "Pourquoi le rose ? Installé dans son atelier de Montmartre et heureux avec Fernande Olivier, il retrouve l'espoir et l'amour.",
    paletteDescription: "Nuances délicates de rose poudré, ocre orangé, beige sable, terre de Sienne et corail doux.",
    themes: "Le cirque ambulant Médrano, les saltimbanques nomades, les acrobates, les arlequins et l'enfance poétique.",
    image: rosePeriodImg,
    exampleWork: "Famille de saltimbanques (1905)",
    keyFeature: "Des personnages doux et songeurs, une atmosphère plus légère mais gardant une poignante nostalgie."
  },
  {
    id: "cubisme",
    name: "Le Cubisme",
    years: "1907 - 1919",
    colorAccent: "#D97706",
    bgTint: "from-amber-950/40 to-stone-900/80",
    borderTint: "border-amber-500/30",
    whyColor: "Qu'est-ce que ce mouvement ? Une rupture radicale inventée avec Georges Braque : rejeter la perspective inventée à la Renaissance !",
    paletteDescription: "D'abord des ocres, bruns et gris sobres (cubisme analytique), puis des couleurs vives et collages (cubisme synthétique).",
    themes: "Visages vus de face et de profil simultanément, natures mortes découpées, guitares, violons et bouteilles.",
    image: demoisellesImg,
    exampleWork: "Les Demoiselles d'Avignon (1907)",
    keyFeature: "Déconstruction en facettes géométriques : l'artiste montre toutes les faces d'un objet en même temps sur une surface plate."
  }
];

export const FAMOUS_ARTWORKS: ArtworkHighlight[] = [
  {
    title: "Guernica",
    year: "1937",
    period: "Période engagée / Cubisme dramatique",
    technique: "Huile sur toile monumentale (3,49 m × 7,76 m)",
    location: "Musée national centre d'art Reina Sofía, Madrid",
    image: guernicaImg,
    description: "Un cri universel contre l'horreur de la guerre. Picasso peint cette toile colossale suite au bombardement nazi de la ville basque de Guernica le 26 avril 1937, sur commande du gouvernement républicain espagnol pour l'Exposition universelle de Paris.",
    keyDetails: [
      "Choix du noir, blanc et gris pour rappeler les photos en noir et blanc des journaux imprimés.",
      "Le cheval blessé au centre hennit d'agonie, symbolisant le peuple innocent martyrisé.",
      "La mère éplorée à gauche hurle vers le ciel en portant son enfant mort dans les bras.",
      "L'ampoule électrique au plafond symbolise la technologie destructrice et la vérité nue."
    ]
  },
  {
    title: "Les Demoiselles d'Avignon",
    year: "1907",
    period: "Proto-cubisme fondateur",
    technique: "Huile sur toile (2,43 m × 2,33 m)",
    location: "Museum of Modern Art (MoMA), New York",
    image: demoisellesImg,
    description: "Considéré comme l'acte de naissance de l'art moderne. Picasso peint cinq femmes de la rue d'Avinyó à Barcelone en brisant tous les critères traditionnels de la beauté et de la perspective.",
    keyDetails: [
      "Inspiration décisive des masques tribaux africains et des sculptures ibériques antiques.",
      "Les corps ne sont plus ronds et lisses, mais composés de plans géométriques anguleux.",
      "L'espace est aplati : le fond bleu de rideaux semble projeté au même plan que les silhouettes.",
      "L'œuvre a tellement dérouté ses contemporains qu'elle est restée cachée plusieurs années dans son atelier."
    ]
  },
  {
    title: "Le Vieux Guitariste aveugle",
    year: "1903",
    period: "Période Bleue",
    technique: "Huile sur panneau de bois (1,22 m × 0,82 m)",
    location: "Art Institute of Chicago, États-Unis",
    image: bluePeriodImg,
    description: "Le chef-d'œuvre poignant de la période bleue. Un vieux musicien aveugle et démuni s'incline avec tendresse sur sa guitare, sa seule richesse et son refuge contre l'indifférence du monde.",
    keyDetails: [
      "Contraste saisissant entre la teinte chaude et brune de la guitare et la pâleur bleue du corps.",
      "Mains et doigts allongés d'une élégance tragique, rappelant le style maniériste du Greco.",
      "Témoignage de l'empathie profonde du jeune Picasso de 22 ans pour les personnes sans-abri à Barcelone."
    ]
  }
];

export const ARTISTIC_TECHNIQUES = [
  {
    title: "La Peinture & le Dessin",
    summary: "Du réalisme classique à l'abstraction cubiste",
    details: "Dès l'adolescence, Picasso maîtrise le dessin d'académie au point de pouvoir copier les plus grands maîtres. Il utilise l'huile, la gouache, l'encre de Chine et même la peinture laquée industrielle (Ripolin) pour éviter les traces de pinceau.",
    tools: ["Huile", "Encre de Chine", "Pastel", "Ripolin"]
  },
  {
    title: "Le Papier collé & l'Assemblage",
    summary: "Une invention révolutionnaire en 1912",
    details: "Avec sa 'Nature morte à la chaise cannée' (1912), Picasso colle pour la première fois de vrais morceaux de journal, de toile cirée et de tapisserie sur la toile. Il invente l'art de l'assemblage moderne.",
    tools: ["Journaux", "Partitions", "Carton", "Toile cirée"]
  },
  {
    title: "La Sculpture multiforme",
    summary: "Donner vie aux objets du quotidien",
    details: "Picasso sculpte avec du bois, du plâtre, de la tôle découpée et du fil de fer. Sa célèbre 'Tête de taureau' (1942) est fabriquée avec une vieille selle en cuir et un guidon de bicyclette assemblés !",
    tools: ["Bronze", "Tôle découpée", "Objets trouvés", "Plâtre"]
  },
  {
    title: "La Gravure & la Céramique",
    summary: "L'art populaire et la transmission",
    details: "À Vallauris après la guerre, Picasso s'initie à l'atelier de poterie Madoura. Il modèle plus de 4 000 pièces en terre cuite : pichets en forme d'oiseaux, plats ornés de visages et faïences colorées.",
    tools: ["Terre cuite", "Eau-forte", "Linogravure", "Lithographie"]
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "1. Dans quel pays Pablo Picasso est-il né ?",
    options: [
      { letter: "A", text: "En France", isCorrect: false },
      { letter: "B", text: "En Espagne", isCorrect: true },
      { letter: "C", text: "En Italie", isCorrect: false }
    ],
    explanation: "Pablo Picasso est né le 25 octobre 1881 à Málaga, une ville ensoleillée située en Andalousie, au sud de l'Espagne.",
    historicalContext: "Bien qu'il ait passé la majeure partie de sa vie adulte en France, Picasso a toujours gardé une âme et une culture profondément espagnoles."
  },
  {
    id: 2,
    question: "2. En quelle année est-il né ?",
    options: [
      { letter: "A", text: "1881", isCorrect: true },
      { letter: "B", text: "1900", isCorrect: false },
      { letter: "C", text: "1925", isCorrect: false }
    ],
    explanation: "Picasso est né en 1881 et s'est éteint en 1973, à l'âge très avancé de 91 ans, après avoir créé pendant plus de 75 ans !",
    historicalContext: "À 14 ans seulement, en 1895, il réussissait déjà le concours d'entrée aux Beaux-Arts de Barcelone en un temps record."
  },
  {
    id: 3,
    question: "3. Quel mouvement artistique a-t-il contribué à développer ?",
    options: [
      { letter: "A", text: "L'impressionnisme", isCorrect: false },
      { letter: "B", text: "Le cubisme", isCorrect: true },
      { letter: "C", text: "Le réalisme", isCorrect: false }
    ],
    explanation: "Picasso a fondé le Cubisme aux côtés du peintre français Georges Braque vers 1907-1908, révolutionnant la façon de peindre.",
    historicalContext: "Le mot 'cubisme' vient du critique d'art Louis Vauxcelles qui décrivait les toiles comme des 'petits cubes'."
  },
  {
    id: 4,
    question: "4. Comment s'appelle son célèbre tableau dénonçant les horreurs de la guerre ?",
    options: [
      { letter: "A", text: "La Joconde", isCorrect: false },
      { letter: "B", text: "La Nuit étoilée", isCorrect: false },
      { letter: "C", text: "Guernica", isCorrect: true }
    ],
    explanation: "Peint en 1937, 'Guernica' est une immense fresque en noir et blanc qui dénonce le massacre des civils lors du bombardement de la ville de Guernica.",
    historicalContext: "Ce tableau monumental est aujourd'hui exposé à Madrid et reste l'un des plus puissants symboles pacifistes au monde."
  },
  {
    id: 5,
    question: "5. Quelles couleurs dominent sa période bleue ?",
    options: [
      { letter: "A", text: "Le rouge et le jaune", isCorrect: false },
      { letter: "B", text: "Le bleu et les teintes froides", isCorrect: true },
      { letter: "C", text: "Le vert et le violet", isCorrect: false }
    ],
    explanation: "Entre 1901 et 1904, profondément marqué par la tristesse de la perte d'un ami, Picasso n'utilise presque que du bleu froid, du gris et du cyan.",
    historicalContext: "Cette couleur froide lui servait à exprimer la mélancolie, la solitude et la pauvreté des personnages qu'il peignait."
  }
];
