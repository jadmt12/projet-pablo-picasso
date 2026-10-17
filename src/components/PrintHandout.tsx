import React from 'react';
import { SLIDES_METADATA, QUIZ_QUESTIONS, FAMOUS_ARTWORKS } from '../data/slidesData';

export const PrintHandout: React.FC = () => {
  return (
    <div className="hidden print:block p-8 bg-white text-stone-900 max-w-4xl mx-auto font-sans">
      <div className="border-b-2 border-stone-900 pb-4 mb-6">
        <h1 className="text-3xl font-bold font-serif">Pablo Picasso : Un génie de l'art</h1>
        <p className="text-sm text-stone-600 mt-1">
          Dossier pédagogique & Synthèse pour l'exposé d'Histoire des Arts · 10 Diapositives
        </p>
      </div>

      <div className="space-y-6">
        {/* Section 1 : Repères biographiques */}
        <section className="border border-stone-300 p-4 rounded-lg">
          <h2 className="text-lg font-bold text-stone-900 font-serif mb-2 border-b pb-1">
            1. Repères Biographiques & Enfance
          </h2>
          <ul className="text-xs space-y-1.5 text-stone-700">
            <li><strong>Naissance :</strong> 25 octobre 1881 à Málaga (Andalousie, Espagne).</li>
            <li><strong>Enfance :</strong> Fils de José Ruiz Blasco (peintre et professeur de dessin). Premier mot : « piz » (lápiz = crayon).</li>
            <li><strong>Précocité :</strong> Première toile à l'huile à 8 ans (<em>Le Petit Picador jaune</em>). Reçu aux Beaux-Arts de Barcelone à 14 ans en un seul jour.</li>
            <li><strong>Lieux de vie :</strong> Espagne (Málaga, La Corogne, Barcelone, Madrid) puis France (Paris au Bateau-Lavoir dès 1904, puis la Côte d'Azur).</li>
            <li><strong>Décès :</strong> 8 avril 1973 à Mougins (France) à l'âge de 91 ans.</li>
          </ul>
        </section>

        {/* Section 2 : Les Périodes artistiques */}
        <section className="border border-stone-300 p-4 rounded-lg">
          <h2 className="text-lg font-bold text-stone-900 font-serif mb-2 border-b pb-1">
            2. Les Trois Grands Styles Majeurs
          </h2>
          <div className="grid grid-cols-3 gap-3 text-xs text-stone-700">
            <div className="bg-stone-50 p-2.5 rounded border">
              <strong className="block text-stone-900 mb-1">Période Bleue (1901-1904)</strong>
              Déclenchée par le deuil de son ami Casagemas. Camaïeux de bleus froids, mélancolie, solitude, mendiants et aveugles.
            </div>
            <div className="bg-stone-50 p-2.5 rounded border">
              <strong className="block text-stone-900 mb-1">Période Rose (1904-1906)</strong>
              Amour avec Fernande Olivier à Montmartre. Teintes chaudes (rose, ocre, pêche), univers du cirque, acrobates et arlequins.
            </div>
            <div className="bg-stone-50 p-2.5 rounded border">
              <strong className="block text-stone-900 mb-1">Le Cubisme (1907-1919)</strong>
              Inventé avec Georges Braque. Rejet de la perspective classique, découpage géométrique en facettes, visions simultanées.
            </div>
          </div>
        </section>

        {/* Section 3 : Les Œuvres emblématiques */}
        <section className="border border-stone-300 p-4 rounded-lg">
          <h2 className="text-lg font-bold text-stone-900 font-serif mb-2 border-b pb-1">
            3. Chefs-d'Œuvre Incontournables
          </h2>
          <div className="space-y-2 text-xs text-stone-700">
            <div>
              <strong>« Guernica » (1937) :</strong> Monumentale fresque en noir et blanc dénonçant le bombardement de la ville basque de Guernica par les forces fascistes. Cri universel contre la guerre (cheval blessé, mère en pleurs).
            </div>
            <div>
              <strong>« Les Demoiselles d'Avignon » (1907) :</strong> Acte fondateur du cubisme. Cinq figures féminines aux formes géométriques inspirées des masques africains et de l'art ibérique antique.
            </div>
            <div>
              <strong>« Le Vieux Guitariste aveugle » (1903) :</strong> Symbole de la période bleue, montrant l'empathie de Picasso envers les personnes démunies.
            </div>
          </div>
        </section>

        {/* Section 4 : Techniques & Matériaux */}
        <section className="border border-stone-300 p-4 rounded-lg">
          <h2 className="text-lg font-bold text-stone-900 font-serif mb-2 border-b pb-1">
            4. Diversité des Techniques Artistiques
          </h2>
          <p className="text-xs text-stone-700 leading-relaxed">
            Picasso ne s'est jamais limité à la peinture. Il a exploré le <strong>dessin</strong> (maîtrise du trait continu), la <strong>sculpture</strong> (assemblage d'objets du quotidien comme la <em>Tête de taureau</em> faite d'une selle et d'un guidon), l'invention du <strong>papier collé</strong> dès 1912 (avec de vrais morceaux de journaux et toiles cirées), ainsi que la <strong>gravure</strong> et plus de 4 000 pièces de <strong>céramique</strong> à Vallauris.
          </p>
        </section>

        {/* Section 5 : Corrigé du Quiz */}
        <section className="border border-stone-300 p-4 rounded-lg">
          <h2 className="text-lg font-bold text-stone-900 font-serif mb-2 border-b pb-1">
            5. Corrigé du Quiz de la Classe (5 Questions)
          </h2>
          <ol className="text-xs text-stone-700 space-y-1.5 list-decimal pl-4">
            {QUIZ_QUESTIONS.map((q) => {
              const correct = q.options.find((o) => o.isCorrect);
              return (
                <li key={q.id}>
                  <strong>{q.question.replace(/^\d+\.\s*/, '')}</strong> → Réponse :{' '}
                  <span className="font-semibold text-stone-900">
                    {correct?.letter}) {correct?.text}
                  </span>{' '}
                  ({q.explanation})
                </li>
              );
            })}
          </ol>
        </section>
      </div>

      <div className="mt-8 pt-4 border-t text-[11px] text-stone-500 text-center">
        Document d'accompagnement scolaire pour l'exposé d'Histoire des Arts · Pablo Picasso (1881-1973)
      </div>
    </div>
  );
};
