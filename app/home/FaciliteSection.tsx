export default function FaciliteSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Dégradé circulaire */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500 via-orange-200 to-white"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-orange-600 mb-12">
          Faisons en sorte que l'expédition soit plus facile
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Colonne gauche */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">1. Planifiez depuis chez vous</h3>
              <p className="text-gray-600">
                Réservez votre expédition directement en ligne. Plus besoin de vous déplacer à l’agence.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-orange-600 mb-2">2. Nous venons chercher le colis</h3>
              <p className="text-gray-600">
                Un agent passe à votre domicile pour récupérer le colis selon votre disponibilité.
              </p>
            </div>
          </div>

          {/* Colonne droite */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-orange-600 mb-2">3. Acheminement sécurisé</h3>
              <p className="text-gray-600">
                Votre colis est remis à l’agence partenaire pour un transport rapide et fiable vers la destination.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-orange-600 mb-2">4. Livraison et suivi</h3>
              <p className="text-gray-600">
                Suivez l’acheminement en ligne et soyez notifié dès que votre colis est livré.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
