'use client';

import React from 'react';
import { Property } from '@/types/property';
import { VerificationBadge } from './VerificationBadge';
import {
  Maximize2,
  Bed,
  Bath,
  Car,
  MapPin,
  FileSearch,
  Droplets,
} from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  onOpenDossier: (property: Property) => void;
}

/**
 * Tarjeta individual de inmueble en Arraigo.
 * Diseño estandarizado según la caja del formulario inteligente:
 * Contenedor rounded-3xl con border-[#D8CFBE]/90, bg-[#FBF8F2]/90 y sombra calibrada.
 * Ficha interior rounded-2xl en bg-white/75 con micro-sombra.
 */
export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onOpenDossier,
}) => {
  const { verification } = property;

  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#D8CFBE]/90 bg-[#FBF8F2]/90 shadow-[0_20px_60px_-42px_rgba(22,32,28,0.55)] transition-all duration-300 hover:border-[#1F4A3A]/50 hover:shadow-[0_25px_70px_-35px_rgba(22,32,28,0.6)]">
      {/* Contenedor de imagen y tag de servicios caraqueños */}
      <div className="relative aspect-[16/10] w-full bg-[#16201C]/5 overflow-hidden">
        <img
          src={property.images[0]?.url}
          alt={property.images[0]?.alt || property.title}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300 ease-out"
          loading="lazy"
        />

        {/* Gradiente sutil para legibilidad del tag superior */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25 pointer-events-none" />

        {/* Tag de servicios clave específicos de Caracas (Pozo / Planta) */}
        <div className="absolute top-3.5 left-3.5 z-10 flex flex-wrap gap-1.5">
          <span className="inline-flex items-center gap-1.5 bg-[#1F4A3A]/90 backdrop-blur-sm text-[#FBF8F2] text-[11px] font-sans font-medium px-3 py-1 rounded-full shadow-sm border border-white/10">
            <Droplets className="w-3 h-3 text-[#D8CFBE] stroke-[1.5]" aria-hidden="true" />
            <span>{property.keyServicesTag}</span>
          </span>
        </div>

        {/* Indicador de operación (Alquiler o Venta) */}
        <div className="absolute top-3.5 right-3.5 z-10">
          <span className="inline-block bg-[#FBF8F2]/95 backdrop-blur-sm text-[#16201C] text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border border-[#D8CFBE] shadow-sm">
            {property.operation === 'alquiler' ? 'Alquiler' : 'Venta'}
          </span>
        </div>

        {/* Zona geográfica en Caracas */}
        <div className="absolute bottom-3 left-3.5 z-10 text-white text-xs font-sans flex items-center gap-1.5 drop-shadow-md font-medium">
          <MapPin className="w-3.5 h-3.5 stroke-[1.5] text-[#D8CFBE]" aria-hidden="true" />
          <span>{property.zone}</span>
        </div>
      </div>

      {/* Contenido descriptivo */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Título descriptivo directo */}
          <h3 className="font-serif text-lg text-[#16201C] font-normal leading-snug mb-2 group-hover:text-[#1F4A3A] transition-colors duration-200">
            {property.title}
          </h3>

          {/* Metros cuadrados y distribución */}
          <div className="flex items-center gap-3 text-xs text-[#5C655F] font-sans mb-4 pb-3 border-b border-[#D8CFBE]/70">
            <span className="flex items-center gap-1 text-[#16201C] font-semibold">
              <Maximize2 className="w-3.5 h-3.5 stroke-[1.5] text-[#5C655F]" aria-hidden="true" />
              <span>{property.areaM2} m²</span>
            </span>
            <span className="text-[#D8CFBE]">•</span>
            <span className="flex items-center gap-1">
              <Bed className="w-3.5 h-3.5 stroke-[1.5]" aria-hidden="true" />
              <span>{property.bedrooms} hab</span>
            </span>
            <span className="text-[#D8CFBE]">•</span>
            <span className="flex items-center gap-1">
              <Bath className="w-3.5 h-3.5 stroke-[1.5]" aria-hidden="true" />
              <span>{property.bathrooms} bñ</span>
            </span>
            <span className="text-[#D8CFBE]">•</span>
            <span className="flex items-center gap-1">
              <Car className="w-3.5 h-3.5 stroke-[1.5]" aria-hidden="true" />
              <span>{property.parkingSpots} est</span>
            </span>
          </div>

          {/* FICHA DEL SELLO ARRAIGO (Estandarizada como subcaja rounded-2xl) */}
          <div className="mb-4 space-y-2 rounded-2xl border border-[#D8CFBE]/75 bg-white/75 p-3.5 shadow-[0_5px_18px_-16px_rgba(22,32,28,0.55)]">
            <div className="text-[10px] uppercase font-sans tracking-wider text-[#5C655F] font-semibold flex items-center justify-between pb-1 border-b border-[#D8CFBE]/40">
              <span className="flex items-center gap-1 text-[#1F4A3A]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1F4A3A]" aria-hidden="true" />
                Sello Arraigo
              </span>
              <span className="tabular-numbers opacity-80">Ref: {property.code}</span>
            </div>

            <div className="space-y-1.5 text-xs font-sans pt-0.5">
              {/* Pilar 1: Documentos */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-[#5C655F] text-[11px] flex-shrink-0">Documentos:</span>
                <VerificationBadge
                  category="documentos"
                  status={verification.documentos.overallStatus}
                  dateOrDetail={verification.documentos.verifiedDate}
                  size="compact"
                />
              </div>

              {/* Pilar 2: Estructura */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-[#5C655F] text-[11px] flex-shrink-0">Estructura:</span>
                <VerificationBadge
                  category="estructura"
                  status={verification.estructura.overallStatus}
                  dateOrDetail={
                    verification.estructura.overallStatus === 'verificado'
                      ? 'Sin daños'
                      : 'Observaciones'
                  }
                  size="compact"
                />
              </div>

              {/* Pilar 3: Servicios */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-[#5C655F] text-[11px] flex-shrink-0">Servicios:</span>
                <VerificationBadge
                  category="servicios"
                  status={verification.servicios.overallStatus}
                  dateOrDetail={
                    verification.servicios.waterSystem.type === 'Pozo profundo'
                      ? 'Pozo activo'
                      : 'Tanque verificado'
                  }
                  size="compact"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Precio destacado y botón de acción (Pie estandarizado) */}
      <div className="flex items-center justify-between gap-3 border-t border-[#D8CFBE]/70 bg-[#F3EBDD]/45 px-5 py-3.5 sm:px-6">
        <div>
          <div className="text-[10px] uppercase tracking-wider text-[#5C655F] font-sans font-medium">
            {property.operation === 'alquiler' ? 'Canon mensual' : 'Precio venta'}
          </div>
          <div className="text-lg font-sans font-bold text-[#1F4A3A] tabular-numbers leading-tight">
            {property.operation === 'alquiler' ? (
              <>
                {property.priceUsd.toLocaleString('es-VE')} <span className="text-xs font-normal text-[#16201C]">USD/mes</span>
              </>
            ) : (
              <>
                {property.priceUsd.toLocaleString('es-VE')} <span className="text-xs font-normal text-[#16201C]">USD</span>
              </>
            )}
          </div>
          {property.pricePerM2 && (
            <div className="text-[10px] text-[#5C655F] tabular-numbers">
              {property.pricePerM2.toLocaleString('es-VE')} USD/m²
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={() => onOpenDossier(property)}
          className="inline-flex items-center gap-1.5 rounded-xl border border-[#1F4A3A] px-3.5 py-2 text-xs font-sans font-semibold text-[#1F4A3A] transition-all duration-200 hover:bg-[#1F4A3A] hover:text-[#FBF8F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4A3A]"
        >
          <FileSearch className="w-3.5 h-3.5 stroke-[1.5]" aria-hidden="true" />
          <span>Ver ficha y documentos</span>
        </button>
      </div>
    </article>
  );
};
