"use client";

import Image from "next/image";
import React from "react";

export default function FonctionnementPlateforme() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
        
        {/* Image à gauche */}
        <div className="w-full md:w-1/2">
          <Image
            src="/1.jpg" 
            alt=""
            width={600}
            height={400}
            className="rounded-xl shadow-md object-cover"
          />
        </div>

        {/* Texte à droite */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Comment fonctionne notre plateforme ?
          </h2>
          <ul className="space-y-4 text-gray-700 text-lg">
            <li>✅ Sélectionnez votre ville de départ et d’arrivée</li>
            <li>✅ Choisissez une agence de voyage partenaire</li>
            <li>✅ Remplissez les informations sur votre colis</li>
            <li>✅ Suivez votre expédition en temps réel</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
