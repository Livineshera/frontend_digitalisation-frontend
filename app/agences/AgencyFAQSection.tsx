'use client';

export default function AgencyFAQSection() {
  return (
    <section className="bg-gray-100 py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Questions fréquentes
        </h2>

        <div className="space-y-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-orange-600 mb-2">
              Comment choisir mon agence de départ ?
            </h3>
            <p className="text-gray-700">
              Lors de la création de votre demande, vous pouvez sélectionner l’agence de départ la plus proche
              ou celle qui offre les horaires les plus pratiques.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-orange-600 mb-2">
              Puis-je changer d’agence après avoir réservé ?
            </h3>
            <p className="text-gray-700">
              Oui, tant que le colis n’a pas été récupéré. Contactez notre support pour effectuer la modification.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-orange-600 mb-2">
              Les agences ont-elles toutes les mêmes destinations ?
            </h3>
            <p className="text-gray-700">
              Non, chaque agence opère sur des axes spécifiques. Consultez la liste des agences pour plus de détails.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-orange-600 mb-2">
              Puis-je déposer mon colis directement à l'agence ?
            </h3>
            <p className="text-gray-700">
              Oui, mais nous recommandons notre service de collecte à domicile pour plus de confort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
