'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Home,
  HelpCircle,
  MapPin,
  Search,
  Phone,
  Menu,
  X,
} from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-orange-600 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-1 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[64px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-[230px] h-[50px]">
              <Image
                src="/logo.png"
                alt="Logo ExpressColis"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </Link>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="flex items-center space-x-1 hover:text-yellow-500 transition">
              <Home size={18} />
              <span>Accueil</span>
            </Link>
            <Link href="/fonctionnement" className="flex items-center space-x-1 hover:text-yellow-500 transition">
              <HelpCircle size={18} />
              <span>Comment ça marche</span>
            </Link>
            <Link href="/agences" className="flex items-center space-x-1 hover:text-yellow-500 transition">
              <MapPin size={18} />
              <span>Agences</span>
            </Link>
            <Link href="/compare" className="flex items-center space-x-1 hover:text-yellow-500 transition">
              <Search size={18} />
              <span>Comparer</span>
            </Link>
            <Link href="/contact" className="flex items-center space-x-1 hover:text-yellow-500 transition">
              <Phone size={18} />
              <span>Contact</span>
            </Link>
          </div>

          {/* Burger icon mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-4 text-sm font-medium">
          <Link
            href="/"
            className="flex items-center space-x-2 hover:text-yellow-500 transition"
            onClick={() => setIsOpen(false)}
          >
            <Home size={18} />
            <span>Accueil</span>
          </Link>
          <Link
            href="/fonctionnement"
            className="flex items-center space-x-2 hover:text-yellow-500 transition"
            onClick={() => setIsOpen(false)}
          >
            <HelpCircle size={18} />
            <span>Comment ça marche</span>
          </Link>
          <Link
            href="/agences"
            className="flex items-center space-x-2 hover:text-yellow-500 transition"
            onClick={() => setIsOpen(false)}
          >
            <MapPin size={18} />
            <span>Agences</span>
          </Link>
          <Link
            href="/compare"
            className="flex items-center space-x-2 hover:text-yellow-500 transition"
            onClick={() => setIsOpen(false)}
          >
            <Search size={18} />
            <span>Comparer</span>
          </Link>
          <Link
            href="/contact"
            className="flex items-center space-x-2 hover:text-yellow-500 transition"
            onClick={() => setIsOpen(false)}
          >
            <Phone size={18} />
            <span>Contact</span>
          </Link>
        </div>
      )}
    </nav>
  );
}
