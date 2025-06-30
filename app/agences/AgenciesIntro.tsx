'use client';

export default function AgenciesIntro() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center text-center text-white">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/agences-bg.jpg" // Image illustrative (dans /public)
          alt="Agences partenaires"
          className="w-full h-full object-cover"
        />
        {/* Dégradé pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
      </div>

      {/* Texte de présentation */}
      <div className="relative z-10 px-6 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Nos agences partenaires
        </h1>
        <p className="text-lg sm:text-xl text-gray-200">
          Grâce à un réseau solide d’agences partenaires réparties dans tout le Cameroun,
          nous vous garantissons un service de livraison fiable, rapide et proche de vous.
          Découvrez les agences qui rendent cela possible.
        </p>
      </div>
    </section>
  );
}
