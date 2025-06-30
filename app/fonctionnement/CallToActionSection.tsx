'use client';

import Link from 'next/link';
import { Send } from 'lucide-react';

export default function CallToActionSection() {
  return (
    <section className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 py-20 px-6 sm:px-10 lg:px-20 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Prêt à expédier votre colis ?
        </h2>
        <p className="text-lg sm:text-xl mb-8">
          En quelques clics, planifiez l’enlèvement à domicile et suivez votre colis jusqu’à sa destination.
        </p>

        <Link
          href="/formulaire_expedition"
          className="inline-flex items-center bg-white text-orange-600 font-semibold px-6 py-4 rounded-full shadow-lg hover:bg-orange-100 transition"
        >
          <Send className="mr-2" size={20} />
          Créer une demande maintenant
        </Link>
      </div>
    </section>
  );
}
