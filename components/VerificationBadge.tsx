'use client';

import React from 'react';
import { VerificationStatus } from '@/types/property';
import { CheckCircle2, AlertCircle, HelpCircle, FileText, Building2, Zap } from 'lucide-react';

interface VerificationBadgeProps {
  category: 'documentos' | 'estructura' | 'servicios';
  status: VerificationStatus;
  labelOverride?: string;
  dateOrDetail?: string;
  size?: 'compact' | 'regular';
  showPillarIcon?: boolean;
}

/**
 * SISTEMA DE SELLOS "INMUEBLE VERIFICADO" - ARRAIGO
 *
 * REGLA DE ACCESIBILIDAD Y SEGURIDAD:
 * Para evitar confusiones con sellos o semáforos gubernamentales,
 * no se utiliza una codificación semafórica primaria (rojo/verde chillón).
 * Cada estado combina obligatoriamente:
 * 1. Ícono vectorial con trazo de 1.5px.
 * 2. Texto descriptivo explícito (nunca solo color).
 * 3. Para "Con observaciones", se utiliza Ámbar (#C9962B) siempre acompañado de texto en Tinta (#16201C).
 */
export const VerificationBadge: React.FC<VerificationBadgeProps> = ({
  category,
  status,
  labelOverride,
  dateOrDetail,
  size = 'regular',
  showPillarIcon = false,
}) => {
  const pillarTitles = {
    documentos: 'Documentos',
    estructura: 'Estructura',
    servicios: 'Servicios',
  };

  const pillarIcons = {
    documentos: <FileText className="w-3.5 h-3.5 stroke-[1.5]" aria-hidden="true" />,
    estructura: <Building2 className="w-3.5 h-3.5 stroke-[1.5]" aria-hidden="true" />,
    servicios: <Zap className="w-3.5 h-3.5 stroke-[1.5]" aria-hidden="true" />,
  };

  // Configuración de estado accesible con ícono + etiqueta explícita
  const statusConfig = {
    verificado: {
      label: 'Verificado',
      icon: <CheckCircle2 className="w-3.5 h-3.5 stroke-[1.5] text-[#1F4A3A] flex-shrink-0" aria-hidden="true" />,
      ariaLabel: 'Estado: Verificado con respaldo documental o técnico',
      bg: 'bg-[#1F4A3A]/8',
      border: 'border-[#1F4A3A]/30',
      text: 'text-[#1F4A3A]',
      dot: 'bg-[#1F4A3A]',
    },
    observaciones: {
      label: 'Con observaciones',
      icon: <AlertCircle className="w-3.5 h-3.5 stroke-[1.5] text-[#C9962B] flex-shrink-0" aria-hidden="true" />,
      ariaLabel: 'Estado: Con observaciones técnicas o documentales detalladas',
      // Regla de marca: Ámbar (#C9962B) se usa con texto en color Tinta (#16201C)
      bg: 'bg-[#C9962B]/15',
      border: 'border-[#C9962B]/40',
      text: 'text-[#16201C]',
      dot: 'bg-[#C9962B]',
    },
    sin_evaluar: {
      label: 'Sin evaluar',
      icon: <HelpCircle className="w-3.5 h-3.5 stroke-[1.5] text-[#5C655F] flex-shrink-0" aria-hidden="true" />,
      ariaLabel: 'Estado: Sin evaluar por nuestro equipo a la fecha',
      bg: 'bg-[#5C655F]/10',
      border: 'border-[#5C655F]/30',
      text: 'text-[#5C655F]',
      dot: 'bg-[#5C655F]',
    },
  };

  const config = statusConfig[status];
  const isCompact = size === 'compact';

  return (
    <div
      role="status"
      aria-label={`${pillarTitles[category]}: ${config.ariaLabel}`}
      className={`inline-flex items-center gap-1.5 rounded-lg border font-sans font-medium transition-colors duration-200 ${
        config.bg
      } ${config.border} ${config.text} ${
        isCompact ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs'
      }`}
    >
      {showPillarIcon && (
        <span className="opacity-70 flex-shrink-0" title={pillarTitles[category]}>
          {pillarIcons[category]}
        </span>
      )}
      {config.icon}
      <span className="whitespace-nowrap font-medium">
        {labelOverride ? labelOverride : config.label}
      </span>
      {dateOrDetail && (
        <span className="text-[10px] text-[#5C655F] font-normal border-l border-[#D8CFBE] pl-1.5 ml-0.5 tabular-numbers">
          {dateOrDetail}
        </span>
      )}
    </div>
  );
};
