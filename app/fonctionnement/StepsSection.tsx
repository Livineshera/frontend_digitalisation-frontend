'use client';

import { Package, Home, Truck, CheckCircle } from 'lucide-react';

export default function StepsSection() {
  return (
    <section className="bg-white py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-orange-600 mb-12">
          Étapes simples pour expédier votre colis
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Étape 1 */}
          <div className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex flex-col items-center text-orange-600 mb-4">
              <Package size={40} />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-gray-800">1. Créez votre demande</h4>
            <p className="text-gray-600 text-sm">
              Remplissez un formulaire rapide avec les détails du colis et du destinataire.
            </p>
          </div>

          {/* Étape 2 */}
          <div className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex flex-col items-center text-orange-600 mb-4">
              <Home size={40} />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-gray-800">2. Récupération à domicile</h4>
            <p className="text-gray-600 text-sm">
              Un agent partenaire passe récupérer le colis à votre adresse, sans déplacement.
            </p>
          </div>

          {/* Étape 3 */}
          <div className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex flex-col items-center text-orange-600 mb-4">
              <Truck size={40} />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-gray-800">3. Acheminement sécurisé</h4>
            <p className="text-gray-600 text-sm">
              Le colis est transporté rapidement via notre réseau d’agences partenaires.
            </p>
          </div>

          {/* Étape 4 */}
          <div className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex flex-col items-center text-orange-600 mb-4">
              <CheckCircle size={40} />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-gray-800">4. Livraison confirmée</h4>
            <p className="text-gray-600 text-sm">
              Le destinataire reçoit le colis à temps, avec notification de confirmation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
