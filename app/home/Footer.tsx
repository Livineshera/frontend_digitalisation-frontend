export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo / nom */}
        <div>
          <h2 className="text-xl font-bold mb-4">Easydelirevy</h2>
          <p className="text-sm text-gray-300">
            Plateforme d’expédition de colis à travers le Cameroun via les agences de voyage partenaires.
          </p>
        </div>

        {/* Liens */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Liens utiles</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-white">Accueil</a></li>
            <li><a href="/agences" className="hover:text-white">Agences</a></li>
            <li><a href="/Comparer" className="hover:text-white">Comparer</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact + réseaux sociaux */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm text-gray-300">Email : support@Easydelirevy.com</p>
          <p className="text-sm text-gray-300">Téléphone : +237 6 99 91 32 62</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <svg className="h-5 w-5 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12.1C22 6.5 17.5 2 11.9 2S2 6.5 2 12.1c0 5 3.7 9.1 8.5 9.9v-7h-2.6v-2.9h2.6v-2.2c0-2.6 1.5-4 3.8-4 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6v1.9h2.9l-.5 2.9h-2.4v7C18.3 21.2 22 17 22 12.1z"/>
              </svg>
            </a>
            <a href="https://wa.me/237600000000" target="_blank" rel="noopener noreferrer">
              <svg className="h-5 w-5 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4.5A10 10 0 0 0 4 17.1L2 22l5.2-1.9A10 10 0 1 0 20 4.5zm-9.9 14c-1.5 0-2.9-.4-4.1-1.2l-.3-.2-3.1 1.1 1.1-3 .2-.3a8 8 0 1 1 6.2 3.6zm4.4-5.5c-.2-.1-1.1-.5-1.3-.6-.3-.1-.6-.1-.9.2l-.2.2c-.2.3-.4.6-.6.7-.2.1-.4.1-.6 0a6.5 6.5 0 0 1-1.7-1.2 6.2 6.2 0 0 1-1.1-1.7c-.1-.2 0-.4.1-.6.1-.1.2-.3.3-.4.1-.1.1-.2.2-.3.1-.1.1-.3 0-.5-.1-.1-.9-2.1-1.2-2.9-.3-.7-.5-.6-.7-.6H7c-.2 0-.5 0-.7.3-.2.3-.8.8-.8 2 0 1.1.8 2.2.9 2.4l.1.2c.2.4.4.8.7 1.2a9.6 9.6 0 0 0 3.3 3c1.3.5 2.3.6 3.1.4.5-.1 1-.6 1.1-1.2l.2-.4c.1-.3 0-.4 0-.5-.1-.1-1-.4-1.3-.5z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Easydelirevy. Tous droits réservés.
      </div>
    </footer>
  );
}
