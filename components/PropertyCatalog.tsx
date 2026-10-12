'use client';

import React, { useState, useMemo } from 'react';
import { Property } from '@/types/property';
import { PropertyCard } from './PropertyCard';
import { PropertyDetailModal } from './PropertyDetailModal';
import { SlidersHorizontal, Droplets, Zap, RotateCcw } from 'lucide-react';

interface PropertyCatalogProps {
  properties: Property[];
  operationFilter: 'todos' | 'venta' | 'alquiler';
  onOperationChange: (op: 'todos' | 'venta' | 'alquiler') => void;
  zoneFilter: string;
  onZoneChange: (zone: string) => void;
  bedroomsFilter: number | 'todos';
  onBedroomsChange: (beds: number | 'todos') => void;
}

/**
 * Catálogo general de inmuebles inspeccionados.
 * Estandarizado con el diseño de cajas del formulario inteligente:
 * Contenedores rounded-3xl con bordes border-[#D8CFBE]/90, fondos bg-[#FBF8F2]/90 y sombra coherente.
 */
export const PropertyCatalog: React.FC<PropertyCatalogProps> = ({
  properties,
  operationFilter,
  onOperationChange,
  zoneFilter,
  onZoneChange,
  bedroomsFilter,
  onBedroomsChange,
}) => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [onlyWithWell, setOnlyWithWell] = useState(false);
  const [onlyWithPower, setOnlyWithPower] = useState(false);

  // Filtrado reactivo de propiedades
  const filteredProperties = useMemo(() => {
    return properties.filter((item) => {
      // Filtro de operación
      if (operationFilter !== 'todos' && item.operation !== operationFilter) {
        return false;
      }
      // Filtro de zona
      if (zoneFilter !== 'todas' && item.zone !== zoneFilter) {
        return false;
      }
      // Filtro de habitaciones
      if (bedroomsFilter !== 'todos' && item.bedrooms < bedroomsFilter) {
        return false;
      }
      // Filtro específico caraqueño: Pozo de agua
      if (onlyWithWell && item.verification.servicios.waterSystem.type !== 'Pozo profundo') {
        return false;
      }
      // Filtro específico caraqueño: Planta eléctrica
      if (
        onlyWithPower &&
        (item.verification.servicios.powerBackup.scope === 'Sin planta')
      ) {
        return false;
      }
      return true;
    });
  }, [
    properties,
    operationFilter,
    zoneFilter,
    bedroomsFilter,
    onlyWithWell,
    onlyWithPower,
  ]);

  const resetFilters = () => {
    onOperationChange('todos');
    onZoneChange('todas');
    onBedroomsChange('todos');
    setOnlyWithWell(false);
    setOnlyWithPower(false);
  };

  const hasActiveFilters =
    operationFilter !== 'todos' ||
    zoneFilter !== 'todas' ||
    bedroomsFilter !== 'todos' ||
    onlyWithWell ||
    onlyWithPower;

  return (
    <section id="catalogo" className="py-16 md:py-24 bg-[#F3EBDD] border-b border-[#D8CFBE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera del catálogo */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#D8CFBE]">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#1F4A3A]">
              Inventario Auditado
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#16201C] mt-2 mb-2 font-normal">
              Inmuebles en oferta con expediente abierto.
            </h2>
            <p className="font-sans text-sm text-[#5C655F]">
              Cada inmueble cuenta con revisión registral, inspección estructural y verificación de servicios en sitio.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-[#5C655F] font-sans">
              Mostrando <strong className="text-[#16201C] font-semibold tabular-numbers">{filteredProperties.length}</strong> de <span className="tabular-numbers">{properties.length}</span> inmuebles
            </span>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 text-xs text-[#A8582D] hover:underline font-semibold"
              >
                <RotateCcw className="w-3.5 h-3.5 stroke-[1.5]" />
                <span>Restablecer</span>
              </button>
            )}
          </div>
        </div>

        {/* Barra de filtros secundarios rápidos (Estandarizada como caja rounded-3xl) */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3.5 overflow-hidden rounded-3xl border border-[#D8CFBE]/90 bg-[#FBF8F2]/90 p-4 sm:p-5 shadow-[0_20px_60px_-42px_rgba(22,32,28,0.55)]">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-xs font-semibold text-[#16201C] mr-1 flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#1F4A3A] stroke-[1.5]" />
              <span>Filtro de contingencias:</span>
            </span>

            <button
              type="button"
              onClick={() => setOnlyWithWell(!onlyWithWell)}
              className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-sans font-medium transition-all duration-200 border ${
                onlyWithWell
                  ? 'bg-[#1F4A3A] text-[#FBF8F2] border-[#1F4A3A] shadow-sm'
                  : 'bg-white/70 text-[#5C655F] border-[#D8CFBE]/80 hover:text-[#16201C] hover:border-[#1F4A3A]/50'
              }`}
            >
              <Droplets className="w-3.5 h-3.5 stroke-[1.5]" />
              <span>Solo con pozo profundo</span>
            </button>

            <button
              type="button"
              onClick={() => setOnlyWithPower(!onlyWithPower)}
              className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-sans font-medium transition-all duration-200 border ${
                onlyWithPower
                  ? 'bg-[#1F4A3A] text-[#FBF8F2] border-[#1F4A3A] shadow-sm'
                  : 'bg-white/70 text-[#5C655F] border-[#D8CFBE]/80 hover:text-[#16201C] hover:border-[#1F4A3A]/50'
              }`}
            >
              <Zap className="w-3.5 h-3.5 stroke-[1.5]" />
              <span>Solo con planta eléctrica</span>
            </button>
          </div>

          <div className="text-[11px] text-[#5C655F] font-sans">
            Precios en USD · Metraje verificado en catastro
          </div>
        </div>

        {/* Grid de Inmuebles */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProperties.map((prop) => (
              <PropertyCard
                key={prop.id}
                property={prop}
                onOpenDossier={(p) => setSelectedProperty(p)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 rounded-3xl border border-[#D8CFBE]/90 bg-[#FBF8F2]/90 shadow-[0_20px_60px_-42px_rgba(22,32,28,0.55)]">
            <h3 className="font-serif text-xl text-[#16201C] mb-2 font-normal">
              No hay inmuebles que coincidan con estos parámetros.
            </h3>
            <p className="font-sans text-xs text-[#5C655F] max-w-md mx-auto mb-6">
              Prueba cambiando la zona o ampliando el criterio de servicios para ver otras propiedades evaluadas.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="px-5 py-2.5 bg-[#1F4A3A] text-[#FBF8F2] rounded-xl text-xs font-semibold hover:bg-[#16201C] transition-colors"
            >
              Mostrar todos los inmuebles
            </button>
          </div>
        )}
      </div>

      {/* Modal interactivo de verificación */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </section>
  );
};
