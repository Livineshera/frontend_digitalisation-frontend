import { Facebook, Instagram, Linkedin, Twitter, Youtube, Phone } from 'lucide-react';

export default function SocialSection() {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-white text-center"
      style={{
        backgroundImage: "url('/2.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.9, // diminue l'opacité générale
      }}
    >
      {/* Overlay dégradé avec plus de transparence */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800/50 via-black/40 to-green-800/50 z-0" />

      {/* Contenu */}
      <div className="relative z-10 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Restez connectés</h2>
        <p className="text-lg md:text-xl mb-10">Suivez-nous</p>

        <div className="flex justify-center flex-wrap gap-10">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition transform text-blue-400">
            <Facebook size={72} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition transform text-pink-400">
            <Instagram size={72} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition transform text-sky-400">
            <Twitter size={72} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition transform text-blue-500">
            <Linkedin size={72} />
          </a>
          
          <a href="https://wa.me/237XXXXXXXX" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition transform text-green-400">
            <Phone size={72} />
          </a>
        </div>
      </div>
    </section>
  );
}
