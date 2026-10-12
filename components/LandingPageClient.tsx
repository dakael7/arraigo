'use client';

import React, { useState } from 'react';
import { Header } from './Header';
import { Hero } from './Hero';
import { AudiencesSection } from './AudiencesSection';
import { PropertyCatalog } from './PropertyCatalog';
import { HowWeVerify } from './HowWeVerify';
import { Footer } from './Footer';
import { PROPERTIES_DATA } from '@/data/properties';

/**
 * Componente principal interactivo de la Landing Page de Arraigo.
 * Sincroniza el estado del buscador rápido del Hero con el Catálogo de Inmuebles.
 */
export const LandingPageClient: React.FC = () => {
  const [operationFilter, setOperationFilter] = useState<'todos' | 'venta' | 'alquiler'>('todos');
  const [zoneFilter, setZoneFilter] = useState<string>('todas');
  const [bedroomsFilter, setBedroomsFilter] = useState<number | 'todos'>('todos');

  const handleSearchSubmit = () => {
    // Desplazamiento suave al catálogo tras consultar en el buscador del Hero
    const catalogElement = document.getElementById('catalogo');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F3EBDD] text-[#16201C] font-sans antialiased selection:bg-[#1F4A3A] selection:text-[#FBF8F2]">
      {/* Encabezado con monograma y micro-nota */}
      <Header />

      <main className="flex-grow">
        {/* Sección Hero con buscador integrado */}
        <Hero
          operationFilter={operationFilter}
          onOperationChange={setOperationFilter}
          zoneFilter={zoneFilter}
          onZoneChange={setZoneFilter}
          bedroomsFilter={bedroomsFilter}
          onBedroomsChange={setBedroomsFilter}
          onSearchSubmit={handleSearchSubmit}
        />

        {/* Propuesta de Valor segmentada por Audiencias */}
        <AudiencesSection />

        {/* Catálogo de Inmuebles con Sello Arraigo y expediente abierto */}
        <PropertyCatalog
          properties={PROPERTIES_DATA}
          operationFilter={operationFilter}
          onOperationChange={setOperationFilter}
          zoneFilter={zoneFilter}
          onZoneChange={setZoneFilter}
          bedroomsFilter={bedroomsFilter}
          onBedroomsChange={setBedroomsFilter}
        />

        {/* Sección "Cómo verificamos" y Principios */}
        <HowWeVerify />
      </main>

      {/* Pie de página con aviso legal y descargo de honorarios */}
      <Footer />
    </div>
  );
};
