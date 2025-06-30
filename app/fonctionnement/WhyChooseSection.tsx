'use client';

import { ShieldCheck, Clock4, MapPin, ThumbsUp } from 'lucide-react';

export default function WhyChooseSection() {
  return (
    <section className="bg-white py-20 px-6 sm:px-10 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-orange-600 mb-10">
          Pourquoi choisir EasyDelivery ?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-700">
          {/* Fiabilité */}
          <div className="flex flex-col items-center text-center">
            <ShieldCheck size={48} className="text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sécurité garantie</h3>
            <p>
              Vos colis sont traités avec soin et livrés en toute sécurité grâce à notre réseau fiable.
            </p>
          </div>

          {/* Rapidité */}
          <div className="flex flex-col items-center text-center">
            <Clock4 size={48} className="text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Livraison rapide</h3>
            <p>
              Nous assurons des départs quotidiens dans tout le pays pour une expédition express.
            </p>
          </div>

          {/* Couverture nationale */}
          <div className="flex flex-col items-center text-center">
            <MapPin size={48} className="text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Présence nationale</h3>
            <p>
              Une couverture étendue grâce à nos agences partenaires dans toutes les régions.
            </p>
          </div>

          {/* Satisfaction client */}
          <div className="flex flex-col items-center text-center">
            <ThumbsUp size={48} className="text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Satisfaction client</h3>
            <p>
              Un service pensé pour vous, avec une assistance réactive et des clients satisfaits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
