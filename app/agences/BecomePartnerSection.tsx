'use client';

import Link from 'next/link';

export default function BecomePartnerSection() {
  return (
    <section className="bg-orange-50 py-16 px-6 sm:px-12 lg:px-20 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Vous êtes une agence ?
        </h2>
        <p className="text-gray-600 mb-6 text-lg">
          Rejoignez notre réseau de partenaires et offrez à vos clients un service d’expédition moderne, rapide et connecté.
        </p>
        <Link
          href="/partenaire"
          className="inline-block bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-700 transition"
        >
          Devenir partenaire
        </Link>
      </div>
    </section>
  );
}
