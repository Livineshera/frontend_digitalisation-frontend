'use client';

import { useState } from 'react';

export default function ExpeditionRequestForm() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici tu connectes à ton API ou service (ex: Formspree, Resend, ou ton backend)
    setSuccess(true);
  };

  return (
    <section className="bg-white py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-4">
          Demande d’expédition de colis
        </h2>
        <p className="text-lg text-black mb-8">
          Remplissez ce formulaire pour planifier la collecte de votre colis à domicile.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Expéditeur */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-medium">Votre nom complet</label>
              <input required type="text" className="w-full border rounded px-4 py-3" placeholder="Ex: Jean Dupont" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Téléphone</label>
              <input required type="tel" className="w-full border rounded px-4 py-3" placeholder="+237 6 XX XX XX XX" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email (facultatif)</label>
              <input type="email" className="w-full border rounded px-4 py-3" placeholder="email@example.com" />
            </div>
          </div>

          {/* Adresse de prise en charge */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Adresse de prise en charge</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 font-medium">Ville de départ</label>
                <input required type="text" className="w-full border rounded px-4 py-3" placeholder="Ville de départ" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Adresse complète</label>
                <input required type="text" className="w-full border rounded px-4 py-3" placeholder="Rue, quartier..." />
              </div>
              <div>
                <label className="block mb-1 font-medium">Date de collecte</label>
                <input required type="date" className="w-full border rounded px-4 py-3" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Créneau horaire</label>
                <input required type="text" className="w-full border rounded px-4 py-3" placeholder="Ex: 9h - 12h" />
              </div>
            </div>
          </div>

          {/* Destinataire */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Informations destinataire</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 font-medium">Nom du destinataire</label>
                <input required type="text" className="w-full border rounded px-4 py-3" placeholder="Nom complet" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Téléphone du destinataire</label>
                <input required type="tel" className="w-full border rounded px-4 py-3" placeholder="Téléphone" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Ville de destination</label>
                <input required type="text" className="w-full border rounded px-4 py-3" placeholder="Ville de destination" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Adresse de livraison</label>
                <input required type="text" className="w-full border rounded px-4 py-3" placeholder="Rue, quartier..." />
              </div>
            </div>
          </div>

          {/* Colis */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Informations sur le colis</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block mb-1 font-medium">Type de colis</label>
                <input required type="text" className="w-full border rounded px-4 py-3" placeholder="Ex: Document, fragile..." />
              </div>
              <div>
                <label className="block mb-1 font-medium">Poids estimé (kg)</label>
                <input required type="number" className="w-full border rounded px-4 py-3" placeholder="Ex: 2" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Dimensions (facultatif)</label>
                <input type="text" className="w-full border rounded px-4 py-3" placeholder="L x l x h" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block mb-1 font-medium">Instructions spéciales</label>
              <textarea className="w-full border rounded px-4 py-3" rows={4} placeholder="Détails spécifiques, fragile, etc." />
            </div>
          </div>

          {/* Validation */}
          <div className="flex items-center space-x-2">
            <input required type="checkbox" className="w-5 h-5" />
            <span className="text-black">J’accepte les conditions générales d’utilisation</span>
          </div>

          <button type="submit" className="bg-orange-600 text-white px-8 py-4 rounded-xl hover:bg-orange-700 transition shadow-md">
            Envoyer ma demande
          </button>

          {success && (
            <p className="text-green-600 mt-4">
              ✅ Votre demande a été envoyée ! Nous vous contacterons rapidement.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
