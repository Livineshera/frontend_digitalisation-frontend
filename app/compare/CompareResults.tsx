'use client';

export default function CompareResults() {
  // Exemple de données (à remplacer par tes données dynamiques)
  const results = [
    {
      agency: 'Express Voyage',
      from: 'Douala',
      to: 'Garoua',
      price: 4500,
      estimatedTime: '24h',
    },
    {
      agency: 'Rapide Colis',
      from: 'Douala',
      to: 'Garoua',
      price: 5000,
      estimatedTime: '30h',
    },
    {
      agency: 'Voyage Plus',
      from: 'Douala',
      to: 'Garoua',
      price: 4200,
      estimatedTime: '28h',
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-orange-600 mb-6 text-center">
          Résultats de la comparaison
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-orange-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Agence</th>
                <th className="px-4 py-3 text-left">Départ</th>
                <th className="px-4 py-3 text-left">Destination</th>
                <th className="px-4 py-3 text-left">Prix (FCFA)</th>
                <th className="px-4 py-3 text-left">Délai estimé</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3">{result.agency}</td>
                  <td className="px-4 py-3">{result.from}</td>
                  <td className="px-4 py-3">{result.to}</td>
                  <td className="px-4 py-3">{result.price} FCFA</td>
                  <td className="px-4 py-3">{result.estimatedTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
