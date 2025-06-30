'use client';

export default function NewsletterSection() {
  return (
    <section className="bg-gradient-to-br from-orange-400 via-oange-200 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Restez informé
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          Inscrivez-vous à notre newsletter pour recevoir les dernières actualités, offres et mises à jour sur nos services d'expédition.
        </p>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Votre adresse e-mail"
            className="w-full sm:w-auto flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition"
          >
            S’inscrire
          </button>
        </form>
      </div>
    </section>
  );
}
