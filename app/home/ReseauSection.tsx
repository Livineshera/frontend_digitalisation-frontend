'use client';

import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

export default function ReseauSection() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/reseau.json')
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Erreur lors du chargement Lottie:", err));
  }, []);

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Texte */}
        <div>
          <h2 className="text-3xl font-bold text-orange-600 mb-4">
            Le réseau qu’il vous faut
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Notre plateforme s’appuie sur un vaste réseau d’agences de voyage à travers tout le Cameroun.
            Grâce à cette structure solide, nous vous garantissons une expédition de colis rapide,
            fiable et accessible même dans les zones les plus reculées.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Des partenaires présents dans toutes les régions</li>
            <li>Des départs quotidiens assurés par les agences</li>
            <li>Un suivi fiable et des colis livrés en toute sécurité</li>
          </ul>
        </div>

        {/* Animation Lottie */}
        <div className="w-full h-64 md:h-96">
          {animationData && (
            <Lottie animationData={animationData} loop={true} />
          )}
        </div>
      </div>
    </section>
  );
}
