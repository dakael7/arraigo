import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Logotipo oficial de Arraigo (Bienes Raíces en Caracas).
 * Presenta el monograma geométrico 'A' compuesto por la cumbrera superior y la línea de terreno inferior,
 * simbolizando la protección de techo y la certeza de raíces firmes en el suelo.
 */
export const Logo: React.FC<LogoProps> = ({ variant = 'dark', size = 'md' }) => {
  const isLight = variant === 'light';
  const textColor = isLight ? 'text-[#FBF8F2]' : 'text-[#16201C]';
  const subtextColor = isLight ? 'text-[#D8CFBE]' : 'text-[#5C655F]';
  const strokeColor = isLight ? '#FBF8F2' : '#1F4A3A';
  const groundColor = isLight ? '#D8CFBE' : '#A8582D';

  const iconSizes = {
    sm: { w: 26, h: 26 },
    md: { w: 32, h: 32 },
    lg: { w: 42, h: 42 },
  };

  const { w, h } = iconSizes[size];

  return (
    <div className="inline-flex items-center gap-2.5 select-none" aria-label="Arraigo Bienes Raíces">
      {/* Monograma 'A' geométrico con cumbrera y línea de terreno */}
      <svg
        width={w}
        height={h}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        aria-hidden="true"
      >
        {/* Cumbrera del techo / Vértice superior de la A */}
        <path
          d="M20 5L34 29H6L20 5Z"
          stroke={strokeColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Travesaño de la 'A' que une las aguas */}
        <line
          x1="12"
          y1="21"
          x2="28"
          y2="21"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Línea de terreno que asienta la estructura (Arraigo en el suelo) */}
        <line
          x1="3"
          y1="35"
          x2="37"
          y2="35"
          stroke={groundColor}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      <div className="flex flex-col leading-none">
        <span
          className={`font-serif tracking-tight font-medium ${textColor} ${
            size === 'lg' ? 'text-2xl' : size === 'sm' ? 'text-lg' : 'text-xl'
          }`}
          style={{ letterSpacing: '-0.02em' }}
        >
          arraigo
        </span>
        <span
          className={`font-sans tracking-[0.22em] uppercase font-medium text-[9px] mt-1 ${subtextColor}`}
        >
          bienes raíces
        </span>
      </div>
    </div>
  );
};
