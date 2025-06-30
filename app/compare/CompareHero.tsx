'use client';

import Image from 'next/image';

export default function CompareHero() {
  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center text-center overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/compare-hero.jpg" // Remplace par ton image dans /public
          alt="Comparer les agences de livraison"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay sombre pour lisibilité */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Contenu texte */}
      <div className="relative z-10 px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Comparez nos agences partenaires
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          Trouvez en quelques clics l’agence la plus adaptée à vos besoins en comparant prix, délais et options d’expédition.
        </p>
      </div>
    </section>
  );
}
