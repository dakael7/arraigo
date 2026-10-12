'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { MessageCircle, Menu, X, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onSelectAudience?: (tab: string) => void;
}

/**
 * Encabezado principal con la identidad sobria de Arraigo.
 */
export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#F3EBDD]/95 backdrop-blur-md border-b border-[#D8CFBE] transition-all duration-200">
      {/* Contenedor principal de navegación */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo oficial */}
          <Link
            href="/"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4A3A] rounded py-1"
          >
            <Logo size="md" />
          </Link>

          {/* Menú de escritorio */}
          <nav className="hidden md:flex items-center gap-8 font-sans text-sm text-[#16201C] font-normal" aria-label="Navegación principal">
            <a
              href="#catalogo"
              className="text-[#16201C] hover:text-[#1F4A3A] transition-colors duration-200"
            >
              Inmuebles
            </a>
            <a
              href="#audiencias"
              className="text-[#16201C] hover:text-[#1F4A3A] transition-colors duration-200"
            >
              Propietarios
            </a>
            <a
              href="#metodo-verificacion"
              className="text-[#16201C] hover:text-[#1F4A3A] transition-colors duration-200 flex items-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4 stroke-[1.5] text-[#1F4A3A]" aria-hidden="true" />
              <span>Nos sobrepasa la transparencia</span>
            </a>
            <a
              href="#contacto"
              className="text-[#5C655F] hover:text-[#16201C] transition-colors duration-200"
            >
              Contacto
            </a>
          </nav>

          {/* Acción rápida (CTA Cobre #A8582D) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#A8582D] hover:bg-[#934c26] text-white text-xs font-semibold font-sans tracking-wide transition-colors duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A8582D] focus-visible:ring-offset-2"
            >
              <MessageCircle className="w-3.5 h-3.5 stroke-[1.5]" aria-hidden="true" />
              <span>Cuéntanos qué necesitas</span>
            </a>
          </div>

          {/* Botón menú móvil */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#16201C] rounded-xl hover:bg-[#D8CFBE]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4A3A]"
              aria-expanded={mobileMenuOpen}
              aria-label="Alternar menú de navegación"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[1.5]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[1.5]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#D8CFBE] bg-[#FBF8F2] px-4 pt-3 pb-6 space-y-3 font-sans animate-in slide-in-from-top-2 duration-200">
          <a
            href="#catalogo"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#16201C] hover:text-[#1F4A3A]"
          >
            Inmuebles
          </a>
          <a
            href="#audiencias"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#16201C] hover:text-[#1F4A3A]"
          >
            Propietarios
          </a>
          <a
            href="#metodo-verificacion"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#16201C] hover:text-[#1F4A3A]"
          >
            Nos sobrepasa la transparencia
          </a>
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#5C655F]"
          >
            Contacto
          </a>

          <div className="pt-3 border-t border-[#D8CFBE]">
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex justify-center items-center gap-2 px-4 py-3 rounded-xl bg-[#A8582D] hover:bg-[#934c26] text-white text-sm font-semibold"
            >
              <MessageCircle className="w-4 h-4 stroke-[1.5]" />
              <span>Cuéntanos qué necesitas</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
