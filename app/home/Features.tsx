export default function Features() {
  const features = [
    { title: "Suivi en temps réel", desc: "Suivez votre colis à chaque étape", icon: "🚚" },
    { title: "Livraison express", desc: "Recevez vos colis en 24h", icon: "⚡" },
    { title: "Emballage sécurisé", desc: "Protection maximale pour vos articles", icon: "📦" },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-orange-600 font-bold text-center mb-12">Nos services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}