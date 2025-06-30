export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/3.jpg')" }} // Assure-toi que l'image est bien placée dans /public/bg.jpg
    >
      {/* Overlay sombre pour la lisibilité */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Contenu centré */}
      <div className="relative z-10 text-center max-w-3xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Reste sur place, contacte, expédie et contrôle.
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Grâce à notre réseau d’agences partenaires, vous pouvez envoyer vos colis partout au Cameroun, en toute simplicité.
        </p>
        <button className="bg-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-400 transition">
          En savoir plus
        </button>
      </div>
    </section>
  );
}
