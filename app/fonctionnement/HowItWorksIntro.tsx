'use client';

import Image from 'next/image';

export default function HowItWorksIntro() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Image de fond */}
      <Image
        src="/4.jpg"
        alt="Comment ça marche"
        fill
        className="object-cover object-center z-0"
        priority
      />

      {/* Overlay sombre pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Contenu texte fortement aligné à droite */}
      <div className="relative z-20 flex items-center justify-end h-full px-4 sm:px-8 lg:pr-36 xl:pr-48 2xl:pr-64">
        <div className="text-right text-orange-400 max-w-xl space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Comment fonctionne notre service ?
          </h2>
          <p className="text-lg sm:text-xl text-gray-100">
            Créez votre demande d’expédition en quelques clics.
            Un agent vient récupérer le colis directement chez vous,
            sans que vous ayez à vous déplacer.
          </p>
        </div>
      </div>
    </section>
  );
}
