'use client';

import Link from 'next/link';
import { FilePlus2 } from 'lucide-react';

export default function CreateRequestSection() {
  return (
    <section className="bg-gradient-to-br from-orange-300 via-white to-orange-300 py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Texte */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-700 mb-4">
            Créez votre demande d'expédition
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            En quelques clics, remplissez le formulaire pour planifier la récupération de votre colis à domicile. 
            Plus besoin de vous déplacer : notre partenaire se charge de venir jusqu'à vous !
          </p>

          <Link
            href="/formulaire_expedition"
            className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700 transition shadow-md"
          >
            <FilePlus2 className="mr-2" size={20} />
            Commencer maintenant
          </Link>
        </div>

        {/* Icône illustrative */}
        <div className="flex justify-center items-center w-full h-72 sm:h-96">
          <FilePlus2 size={160} className="text-orange-600 drop-shadow-lg" />
        </div>
      </div>
    </section>
  );
}
