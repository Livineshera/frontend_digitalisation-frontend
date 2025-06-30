'use client';

export default function DeliveryProcessSection() {
  return (
    <section className="bg-white py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
         {/* Vidéo démonstrative */}
        <div className="w-full h-auto">
          <video
            src="/videos/delivery-process.mp4" // Remplace par le bon fichier
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            className="w-full rounded-xl shadow-xl"
          />
        </div>
        
        {/* Texte explicatif */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-700 mb-6">
            Comment fonctionne notre service ?
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Commander une expédition de colis n’a jamais été aussi simple :
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-3">
            <li>
              <strong>Étape 1 :</strong> Créez votre demande via notre plateforme en quelques clics.
            </li>
            <li>
              <strong>Étape 2 :</strong> Un agent d'agence vient récupérer le colis directement chez vous.
            </li>
            <li>
              <strong>Étape 3 :</strong> Votre colis est acheminé par notre réseau partenaire vers sa destination.
            </li>
            <li>
              <strong>Étape 4 :</strong> Suivez votre livraison en temps réel jusqu’à la réception.
            </li>
          </ul>
        </div>

       
      </div>
    </section>
  );
}
