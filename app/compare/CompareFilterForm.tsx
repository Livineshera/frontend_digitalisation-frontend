'use client';

export default function CompareFilterForm() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-orange-600 mb-6 text-center">
          Filtrez pour trouver la meilleure option
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Ville de départ */}
          <div>
            <label htmlFor="from" className="block text-sm font-medium text-gray-700 mb-1">
              Ville de départ
            </label>
            <select
              id="from"
              name="from"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="">Sélectionnez</option>
              <option value="Douala">Douala</option>
              <option value="Yaoundé">Yaoundé</option>
              <option value="Bafoussam">Bafoussam</option>
            </select>
          </div>

          {/* Ville de destination */}
          <div>
            <label htmlFor="to" className="block text-sm font-medium text-gray-700 mb-1">
              Ville de destination
            </label>
            <select
              id="to"
              name="to"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="">Sélectionnez</option>
              <option value="Garoua">Garoua</option>
              <option value="Maroua">Maroua</option>
              <option value="Ngaoundéré">Ngaoundéré</option>
            </select>
          </div>

          {/* Poids estimé */}
          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
              Poids estimé (kg)
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              placeholder="Ex: 5"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          {/* Prix max (optionnel) */}
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
              Prix max (FCFA)
            </label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Ex: 5000"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          {/* Bouton Rechercher */}
          <div className="md:col-span-3 flex justify-center">
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white font-medium px-8 py-3 rounded-md shadow-md transition"
            >
              Rechercher
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
