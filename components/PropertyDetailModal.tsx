'use client';

import React, { useEffect, useState } from 'react';
import { Property, VerificationStatus } from '@/types/property';
import { VerificationBadge } from './VerificationBadge';
import { createWhatsAppUrl } from '@/lib/whatsapp';
import {
  X,
  FileText,
  Building2,
  Zap,
  Droplets,
  Wifi,
  Shield,
  Calendar,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowUpRight,
  UserCheck,
  MapPin,
  Maximize2,
  Bed,
  Bath,
  Car,
} from 'lucide-react';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
}

/**
 * Ficha Técnica y Expediente de Verificación Arraigo.
 * Diseño estandarizado con la caja del formulario inteligente:
 * Contenedor principal rounded-3xl con border-[#D8CFBE]/90, bg-[#FBF8F2] y sombra profunda.
 * Subcajas y paneles rounded-2xl en bg-white/75 o bg-[#F3EBDD]/60.
 */
export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'documentos' | 'estructura' | 'servicios'>('documentos');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  // Cierre por tecla Escape y bloqueo de scroll de fondo
  useEffect(() => {
    if (!property) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [property, onClose]);

  if (!property) return null;

  const { verification } = property;

  const renderStatusIcon = (status: VerificationStatus) => {
    switch (status) {
      case 'verificado':
        return <CheckCircle2 className="w-4 h-4 text-[#1F4A3A] stroke-[1.5] flex-shrink-0" />;
      case 'observaciones':
        return <AlertCircle className="w-4 h-4 text-[#C9962B] stroke-[1.5] flex-shrink-0" />;
      case 'sin_evaluar':
        return <HelpCircle className="w-4 h-4 text-[#5C655F] stroke-[1.5] flex-shrink-0" />;
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#16201C]/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-hidden rounded-3xl border border-[#D8CFBE]/90 bg-[#FBF8F2] shadow-[0_25px_70px_-30px_rgba(22,32,28,0.65)] flex flex-col text-[#16201C]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera del modal */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D8CFBE]/70 bg-[#F3EBDD]/60">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono uppercase bg-[#1F4A3A]/10 text-[#1F4A3A] px-2.5 py-0.5 rounded-full font-semibold border border-[#1F4A3A]/20">
              {property.code}
            </span>
            <span className="text-xs text-[#5C655F] font-sans">
              Expediente de Verificación Previa
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl text-[#5C655F] hover:text-[#16201C] hover:bg-[#D8CFBE]/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4A3A]"
            aria-label="Cerrar ficha técnica"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Cuerpo scrolleable */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Resumen principal del inmueble */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-[#D8CFBE]/70">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#5C655F] mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#1F4A3A] stroke-[1.5]" />
                <span>{property.zone} · {property.addressShort}</span>
              </div>
              <h2 id="modal-title" className="font-serif text-2xl text-[#16201C] font-normal leading-snug">
                {property.title}
              </h2>

              <div className="flex flex-wrap items-center gap-4 text-xs text-[#5C655F] mt-3 font-sans">
                <span className="flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5 stroke-[1.5]" />
                  <strong className="text-[#16201C] font-semibold">{property.areaM2} m²</strong>
                </span>
                <span className="flex items-center gap-1.5">
                  <Bed className="w-3.5 h-3.5 stroke-[1.5]" />
                  <span>{property.bedrooms} hab</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Bath className="w-3.5 h-3.5 stroke-[1.5]" />
                  <span>{property.bathrooms} baños</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 stroke-[1.5]" />
                  <span>{property.parkingSpots} puesto{property.parkingSpots > 1 ? 's' : ''}</span>
                </span>
                <span className="text-[11px] text-[#5C655F]">
                  Año: <span className="tabular-numbers">{property.yearBuilt}</span>
                </span>
              </div>
            </div>

            {/* Cuadro de precio y canon (Subcaja rounded-2xl) */}
            <div className="rounded-2xl border border-[#D8CFBE]/75 bg-[#F3EBDD]/60 p-4 min-w-[210px] text-right flex flex-col justify-center shadow-[0_5px_18px_-16px_rgba(22,32,28,0.55)]">
              <span className="text-[11px] uppercase tracking-wider text-[#5C655F] font-sans font-medium">
                {property.operation === 'alquiler' ? 'Canon mensual acordado' : 'Precio de venta fijado'}
              </span>
              <div className="text-2xl font-sans font-bold text-[#1F4A3A] tabular-numbers my-0.5">
                {property.priceUsd.toLocaleString('es-VE')} USD
                {property.operation === 'alquiler' && <span className="text-sm font-normal text-[#5C655F]"> / mes</span>}
              </div>
              {property.pricePerM2 && (
                <div className="text-xs text-[#5C655F] tabular-numbers">
                  {property.pricePerM2.toLocaleString('es-VE')} USD / m²
                </div>
              )}
              <div className="text-[11px] text-[#5C655F] border-t border-[#D8CFBE]/60 pt-1.5 mt-1.5 tabular-numbers">
                Condominio estimado: {property.condoFeeUsdMonthly} USD / mes
              </div>
            </div>
          </div>

          {/* Galería fotográfica con fotos técnicas (Subcaja rounded-2xl) */}
          <div className="space-y-2.5">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#D8CFBE]/80 bg-[#16201C]/5 shadow-sm">
              <img
                src={property.images[selectedPhotoIndex]?.url}
                alt={property.images[selectedPhotoIndex]?.alt}
                className="w-full h-full object-cover transition-opacity duration-200"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3.5 text-white text-xs flex items-center justify-between">
                <span>{property.images[selectedPhotoIndex]?.caption}</span>
                <span className="text-[10px] opacity-80 tabular-numbers">
                  Foto {selectedPhotoIndex + 1} de {property.images.length}
                </span>
              </div>
            </div>

            {/* Miniaturas de selección */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              {property.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedPhotoIndex(idx)}
                  className={`relative flex-shrink-0 w-20 h-14 rounded-xl border overflow-hidden transition-all duration-200 ${
                    selectedPhotoIndex === idx
                      ? 'border-[#1F4A3A] ring-2 ring-[#1F4A3A]/40 shadow-sm'
                      : 'border-[#D8CFBE]/80 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Selector de pestañas del Sello Arraigo (3 Pilares) */}
          <div className="rounded-2xl border border-[#D8CFBE]/75 bg-[#F3EBDD]/50 p-1.5 shadow-[0_5px_18px_-16px_rgba(22,32,28,0.55)]">
            <div className="grid grid-cols-3 gap-1.5">
              <button
                type="button"
                onClick={() => setActiveTab('documentos')}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-sans font-medium transition-all duration-200 ${
                  activeTab === 'documentos'
                    ? 'bg-[#1F4A3A] text-[#FBF8F2] shadow-sm'
                    : 'text-[#16201C] hover:bg-[#D8CFBE]/40'
                }`}
              >
                <FileText className="w-3.5 h-3.5 stroke-[1.5]" />
                <span className="hidden sm:inline">Pilar 1:</span> Documentos
                <span className="ml-1 text-[10px] opacity-80">({verification.documentos.overallStatus})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('estructura')}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-sans font-medium transition-all duration-200 ${
                  activeTab === 'estructura'
                    ? 'bg-[#1F4A3A] text-[#FBF8F2] shadow-sm'
                    : 'text-[#16201C] hover:bg-[#D8CFBE]/40'
                }`}
              >
                <Building2 className="w-3.5 h-3.5 stroke-[1.5]" />
                <span className="hidden sm:inline">Pilar 2:</span> Estructura
                <span className="ml-1 text-[10px] opacity-80">({verification.estructura.overallStatus})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('servicios')}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-sans font-medium transition-all duration-200 ${
                  activeTab === 'servicios'
                    ? 'bg-[#1F4A3A] text-[#FBF8F2] shadow-sm'
                    : 'text-[#16201C] hover:bg-[#D8CFBE]/40'
                }`}
              >
                <Zap className="w-3.5 h-3.5 stroke-[1.5]" />
                <span className="hidden sm:inline">Pilar 3:</span> Servicios Caracas
                <span className="ml-1 text-[10px] opacity-80">({verification.servicios.overallStatus})</span>
              </button>
            </div>
          </div>

          {/* CONTENIDO TAB 1: DOCUMENTOS */}
          {activeTab === 'documentos' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between rounded-2xl border border-[#D8CFBE]/75 bg-white/75 p-3.5 shadow-[0_5px_18px_-16px_rgba(22,32,28,0.55)]">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#1F4A3A] stroke-[1.5]" />
                  <span className="text-xs font-sans text-[#5C655F]">
                    Auditoría documental protocolizada el{' '}
                    <strong className="text-[#16201C] font-semibold">{verification.documentos.verifiedDate}</strong>
                  </span>
                </div>
                <VerificationBadge
                  category="documentos"
                  status={verification.documentos.overallStatus}
                  size="compact"
                />
              </div>

              {/* Lista detallada de recaudos comprobados */}
              <div className="divide-y divide-[#D8CFBE]/70 rounded-2xl border border-[#D8CFBE]/75 bg-white/75 shadow-[0_5px_18px_-16px_rgba(22,32,28,0.55)] overflow-hidden">
                {[
                  verification.documentos.tituloPropiedad,
                  verification.documentos.certificadoGravamenes,
                  verification.documentos.solvenciaMunicipal,
                  verification.documentos.fichaCatastral,
                  verification.documentos.solvenciaCondominio,
                ].map((item, i) => (
                  <div key={i} className="p-4 flex flex-col sm:flex-row sm:items-start justify-between gap-3 text-xs">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        {renderStatusIcon(item.status)}
                        <span className="font-semibold text-[#16201C] text-sm">{item.label}</span>
                        {item.date && (
                          <span className="text-[10px] text-[#5C655F] tabular-numbers bg-[#F3EBDD] px-2 py-0.5 rounded-full border border-[#D8CFBE]">
                            Fecha: {item.date}
                          </span>
                        )}
                      </div>
                      {item.notes && (
                        <p className="text-[#5C655F] pl-6 text-xs leading-relaxed">
                          {item.notes}
                        </p>
                      )}
                    </div>
                    <div className="pl-6 sm:pl-0 flex-shrink-0">
                      <VerificationBadge
                        category="documentos"
                        status={item.status}
                        size="compact"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CONTENIDO TAB 2: ESTRUCTURA */}
          {activeTab === 'estructura' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="rounded-2xl border border-[#D8CFBE]/75 bg-[#F3EBDD]/60 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-[0_5px_18px_-16px_rgba(22,32,28,0.55)]">
                <div className="flex items-center gap-3">
                  <UserCheck className="w-5 h-5 text-[#1F4A3A] stroke-[1.5]" />
                  <div>
                    <div className="font-semibold text-[#16201C]">
                      Evaluado por: {verification.estructura.engineerName || 'Ingeniero Colegiado'}
                    </div>
                    <div className="text-[11px] text-[#5C655F]">
                      Registro CIV: {verification.estructura.engineerCiv || 'Colegiatura verificada'} · Inspección: {verification.estructura.verifiedDate}
                    </div>
                  </div>
                </div>
                <VerificationBadge
                  category="estructura"
                  status={verification.estructura.overallStatus}
                  size="compact"
                />
              </div>

              <div className="p-4 rounded-2xl border border-[#D8CFBE]/75 bg-white/75 shadow-[0_5px_18px_-16px_rgba(22,32,28,0.55)]">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#16201C] mb-1.5">
                  Dictamen técnico resumido
                </h4>
                <p className="text-xs text-[#5C655F] leading-relaxed">
                  {verification.estructura.observationsSummary}
                </p>
              </div>

              {/* Elementos evaluados */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                {Object.values(verification.estructura.evaluatedElements).map((el, i) => (
                  <div key={i} className="p-4 rounded-2xl border border-[#D8CFBE]/75 bg-white/75 space-y-1.5 shadow-[0_5px_18px_-16px_rgba(22,32,28,0.55)]">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[#16201C]">{el.label}</span>
                      <VerificationBadge category="estructura" status={el.status} size="compact" />
                    </div>
                    <p className="text-[#5C655F] text-[11px] leading-relaxed">
                      {el.notes}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CONTENIDO TAB 3: SERVICIOS CARACAS */}
          {activeTab === 'servicios' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="p-3.5 rounded-2xl border border-[#D8CFBE]/75 bg-white/75 text-xs text-[#5C655F] shadow-[0_5px_18px_-16px_rgba(22,32,28,0.55)]">
                Inspección de contingencias de agua, energía eléctrica continua y telecomunicaciones específicas para el valle de Caracas.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* Agua / Pozo */}
                <div className="p-4 rounded-2xl border border-[#D8CFBE]/75 bg-white/75 space-y-2 shadow-[0_5px_18px_-16px_rgba(22,32,28,0.55)]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-[#1F4A3A] stroke-[1.5]" />
                      <span className="font-semibold text-[#16201C]">
                        {verification.servicios.waterSystem.type}
                      </span>
                    </div>
                    <VerificationBadge
                      category="servicios"
                      status={verification.servicios.waterSystem.status}
                      size="compact"
                    />
                  </div>
                  {verification.servicios.waterSystem.capacityLitres && (
                    <div className="text-[11px] text-[#1F4A3A] font-medium tabular-numbers">
                      Capacidad registrada: {verification.servicios.waterSystem.capacityLitres.toLocaleString('es-VE')} litros
                    </div>
                  )}
                  <p className="text-[#5C655F] text-[11px] leading-relaxed">
                    {verification.servicios.waterSystem.description}
                  </p>
                </div>

                {/* Planta Eléctrica */}
                <div className="p-4 rounded-2xl border border-[#D8CFBE]/75 bg-white/75 space-y-2 shadow-[0_5px_18px_-16px_rgba(22,32,28,0.55)]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-[#1F4A3A] stroke-[1.5]" />
                      <span className="font-semibold text-[#16201C]">
                        Planta Eléctrica
                      </span>
                    </div>
                    <VerificationBadge
                      category="servicios"
                      status={verification.servicios.powerBackup.status}
                      size="compact"
                    />
                  </div>
                  <div className="text-[11px] text-[#16201C] font-medium">
                    Alcance: {verification.servicios.powerBackup.scope}
                  </div>
                  <p className="text-[#5C655F] text-[11px] leading-relaxed">
                    {verification.servicios.powerBackup.description}
                  </p>
                </div>

                {/* Conectividad / Fibra Óptica */}
                <div className="p-4 rounded-2xl border border-[#D8CFBE]/75 bg-white/75 space-y-2 shadow-[0_5px_18px_-16px_rgba(22,32,28,0.55)]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Wifi className="w-4 h-4 text-[#1F4A3A] stroke-[1.5]" />
                      <span className="font-semibold text-[#16201C]">Fibra Óptica</span>
                    </div>
                    <VerificationBadge
                      category="servicios"
                      status={verification.servicios.connectivity.status}
                      size="compact"
                    />
                  </div>
                  <div className="text-[11px] text-[#5C655F]">
                    Proveedores comprobados: {verification.servicios.connectivity.fiberProviders.join(', ')}
                  </div>
                  <p className="text-[#5C655F] text-[11px] leading-relaxed">
                    {verification.servicios.connectivity.description}
                  </p>
                </div>

                {/* Vigilancia y Ascensores */}
                <div className="p-4 rounded-2xl border border-[#D8CFBE]/75 bg-white/75 space-y-2 shadow-[0_5px_18px_-16px_rgba(22,32,28,0.55)]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[#1F4A3A] stroke-[1.5]" />
                      <span className="font-semibold text-[#16201C]">Seguridad y Ascensores</span>
                    </div>
                    <VerificationBadge
                      category="servicios"
                      status={verification.servicios.buildingSecurity.status}
                      size="compact"
                    />
                  </div>
                  <div className="text-[11px] text-[#5C655F]">
                    Vigilancia presencial: {verification.servicios.buildingSecurity.security24_7 ? '24 horas / 7 días' : 'Horario diurno / Sin garita fija'}
                  </div>
                  <p className="text-[#5C655F] text-[11px] leading-relaxed">
                    {verification.servicios.buildingSecurity.elevatorsOperational}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Pie de modal con acciones claras */}
        <div className="px-6 py-4 border-t border-[#D8CFBE]/70 bg-[#F3EBDD]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="text-[11px] text-[#5C655F]">
            Todo documento físico original se presenta al momento de la firma en notaría o registro.
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-[#D8CFBE] text-xs font-semibold text-[#16201C] hover:bg-[#D8CFBE]/40 transition-colors"
            >
              Cerrar ficha
            </button>
            <a
              href={createWhatsAppUrl(
                `Hola, Arraigo. Quisiera coordinar una visita para el inmueble ${property.code} en ${property.zone}. ¿Qué disponibilidad tienen?`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#A8582D] hover:bg-[#934c26] text-white text-xs font-semibold transition-colors shadow-sm"
            >
              <span>Coordinar visita presencial</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.5]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
