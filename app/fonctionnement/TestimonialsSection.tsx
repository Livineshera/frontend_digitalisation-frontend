'use client';

import Image from 'next/image';

const testimonials = [
  {
    name: 'Amina N.',
    image: '/users/amina.jpg', // Place cette image dans /public/users/
    title: 'Cliente à Yaoundé',
    text: 'Service impeccable ! Mon colis a été récupéré à domicile et livré le même jour. Je recommande vivement EasyDelivery.',
  },
  {
    name: 'Brice T.',
    image: '/users/brice.jpg',
    title: 'Expéditeur régulier',
    text: 'Facile à utiliser, rapide et fiable. C’est vraiment le service qu’il nous fallait au Cameroun.',
  },
  {
    name: 'Julie M.',
    image: '/users/julie.jpg',
    title: 'Entrepreneure',
    text: 'Je gagne un temps fou pour envoyer mes colis à mes clients. Bravo à toute l’équipe !',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-orange-100 py-20 px-6 sm:px-10 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-orange-600 mb-14">
          Ils parlent de nous
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-orange-400">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <p className="text-gray-700 italic mb-4">"{t.text}"</p>
              <h4 className="text-orange-600 font-semibold">{t.name}</h4>
              <span className="text-sm text-gray-500">{t.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
