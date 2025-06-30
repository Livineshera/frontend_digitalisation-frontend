'use client';

import Link from 'next/link';
import Image from 'next/image';

const agences = [
  {
    id: 1,
    name: 'Express Nord',
    location: 'Douala – Akwa, face Boulangerie Le Pain Doré',
    cities: ['Yaoundé', 'Bafoussam', 'Garoua'],
    horaires: {
      Yaoundé: '8h00, 13h00, 18h00',
      Bafoussam: '9h00, 15h30',
      Garoua: '6h00 uniquement',
    },
    logo: '/logos/agence1.png',
  },
  {
    id: 2,
    name: 'Voyages Le Leader',
    location: 'Yaoundé – Mvan, en face station Total',
    cities: ['Douala', 'Ngaoundéré'],
    horaires: {
      Douala: '7h30, 12h00, 17h30',
      Ngaoundéré: '6h00, 14h00',
    },
    logo: '/logos/agence2.png',
  },
  {
    id: 3,
    name: 'TransCameroun',
    location: 'Bafoussam – Carrefour Total Marché A',
    cities: ['Yaoundé', 'Bamenda'],
    horaires: {
      Yaoundé: '9h00, 16h00',
      Bamenda: '8h00, 13h00, 19h00',
    },
    logo: '/logos/agence3.png',
  },
  {
    id: 4,
    name: 'Alliance Express',
    location: 'Garoua – Terminus agence principale',
    cities: ['Maroua', 'Ngaoundéré', 'Yaoundé'],
    horaires: {
      Maroua: '7h00, 12h00',
      Ngaoundéré: '9h00, 17h00',
      Yaoundé: '5h00 uniquement',
    },
    logo: '/logos/agence4.png',
  },
];

export default function AgenciesGrid() {
  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-10 lg:px-20">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Nos agences partenaires
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {agences.map((agence) => (
          <div
            key={agence.id}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-16 h-16">
                <Image
                  src={agence.logo}
                  alt={agence.name}
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">{agence.name}</h3>
            </div>

            <p className="text-gray-600 mb-3"><strong>Localisation :</strong> {agence.location}</p>

            <p className="text-gray-600 mb-2">
              <strong>Villes desservies :</strong> {agence.cities.join(', ')}
            </p>

            <div className="text-gray-700 text-sm space-y-1">
              <strong>Horaires de départ :</strong>
              <ul className="list-disc list-inside mt-1">
                {Object.entries(agence.horaires).map(([ville, horaire]) => (
                  <li key={ville}>
                    <strong>{ville} :</strong> {horaire}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={`/agences/${agence.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="mt-6 inline-block text-orange-600 font-semibold hover:underline"
            >
              Voir plus
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
