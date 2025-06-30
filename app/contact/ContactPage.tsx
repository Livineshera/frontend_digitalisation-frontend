'use client';

import { Mail, MapPin, Phone, Facebook, Instagram } from 'lucide-react';

export default function ContactPage() {
  return (
    <section className="bg-white py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-orange-600 mb-4">Contactez-nous</h2>
        <p className="text-lg text-gray-700 mb-12">
          Une question ? Un besoin spécifique ? Remplissez le formulaire ou utilisez nos coordonnées ci-dessous. Nous reviendrons vers vous rapidement.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Coordonnées */}
          <div className="space-y-6">
            
            <div className="flex items-center space-x-4">
              <Phone className="text-orange-600" size={24} />
              <span>+237 6 99 91 32 62</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-orange-600" size={24} />
              <span>contact@easydelivery.cm</span>
            </div>

            <div className="flex space-x-6 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="text-blue-500 hover:scale-110 transition" size={32} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="text-pink-500 hover:scale-110 transition" size={32} />
              </a>
            </div>
          </div>

          {/* Formulaire */}
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Nom</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Votre nom"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Votre email"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows={5}
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Votre message..."
                required
              />
            </div>
            <button
              type="submit"
              className="bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700 transition shadow-md"
            >
              Envoyer
            </button>
          </form>
        </div>

        
      </div>
    </section>
  );
}
