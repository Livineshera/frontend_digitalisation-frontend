'use client';

export default function WhyCompareSection() {
  return (
    <section className="bg-white py-20 px-6 sm:px-10 lg:px-20 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-6">
          Pourquoi comparer les agences ?
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Comparer les agences vous permet de choisir l’option la plus adaptée à votre budget, votre délai et votre destination.
          Avec notre comparateur, vous gagnez du temps et économisez de l’argent tout en expédiant votre colis en toute confiance.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="p-6 rounded-xl shadow hover:shadow-lg transition border">
            <h3 className="text-xl font-semibold mb-2 text-orange-500">Meilleurs tarifs</h3>
            <p className="text-gray-600">
              Trouvez l’offre la plus avantageuse pour expédier vos colis au meilleur prix.
            </p>
          </div>
          <div className="p-6 rounded-xl shadow hover:shadow-lg transition border">
            <h3 className="text-xl font-semibold mb-2 text-orange-500">Gain de temps</h3>
            <p className="text-gray-600">
              Plus besoin de visiter plusieurs agences : toutes les infos sont disponibles en un seul endroit.
            </p>
          </div>
          <div className="p-6 rounded-xl shadow hover:shadow-lg transition border">
            <h3 className="text-xl font-semibold mb-2 text-orange-500">Expédition sereine</h3>
            <p className="text-gray-600">
              Comparez et choisissez l’agence la plus fiable pour expédier votre colis en toute tranquillité.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
