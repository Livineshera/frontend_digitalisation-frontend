'use client';

import Link from 'next/link';

export default function CompareCTA() {
  return (
    <section className="bg-gradient-to-br from-orange-500 to-yellow-400 py-16 px-6 sm:px-10 lg:px-20 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Prêt à expédier votre colis ?
        </h2>
        <p className="text-lg text-white mb-8">
          Choisissez l’agence qui vous convient et planifiez votre expédition en quelques clics. 
          Notre réseau vous garantit un envoi rapide et sécurisé partout au Cameroun.
        </p>

        <Link
          href="/creer-demande"
          className="inline-block bg-white text-orange-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-orange-50 transition"
        >
          Créer ma demande maintenant
        </Link>
      </div>
    </section>
  );
}
