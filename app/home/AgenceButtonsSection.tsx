"use client";

import React from "react";

type Agence = {
  id: number;
  nom: string;
};

const agences: Agence[] = [
  { id: 1, nom: "Finexs Voyages" },
  { id: 2, nom: "Buca Voyages" },
  { id: 3, nom: "Garanti Express" },
  { id: 4, nom: "Amour Mezam" },
  { id: 5, nom: "General Express" },
  { id: 6, nom: "Binam Express" },
];

export default function AgenceButtonsSection() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Nos agences partenaires</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {agences.map((agence) => (
            <button
              key={agence.id}
              className="bg-orange-100 text-orange-600 font-semibold px-4 py-2 rounded-full hover:bg-orange-200 transition"
            >
              {agence.nom}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
