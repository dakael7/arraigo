'use client';

import React, { useState } from 'react';
import {
  ArrowRight,
  Building,
  Check,
  ChevronLeft,
  Compass,
  Droplets,
  X,
  Zap,
} from 'lucide-react';

interface HeroProps {
  operationFilter: 'todos' | 'venta' | 'alquiler';
  onOperationChange: (op: 'todos' | 'venta' | 'alquiler') => void;
  zoneFilter: string;
  onZoneChange: (zone: string) => void;
  bedroomsFilter: number | 'todos';
  onBedroomsChange: (beds: number | 'todos') => void;
  onSearchSubmit: () => void;
}

/**
 * Hero Section: Entrada principal y buscador sobrio de Arraigo.
 * El formulario inteligente se encuentra replegado por defecto y se despliega como
 * una burbuja elegante y fluida mediante el botón CTA principal.
 */
export const Hero: React.FC<HeroProps> = ({
  operationFilter,
  onOperationChange,
  zoneFilter,
  onZoneChange,
  bedroomsFilter,
  onBedroomsChange,
  onSearchSubmit,
}) => {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [searchStep, setSearchStep] = useState(0);

  const operationOptions = [
    { value: 'todos', label: 'Explorar todo', detail: 'Venta y alquiler' },
    { value: 'alquiler', label: 'Alquilar', detail: 'Para vivir ahora' },
    { value: 'venta', label: 'Comprar', detail: 'Una inversión propia' },
  ] as const;

  const zoneOptions = [
    'todas',
    'Los Palos Grandes',
    'Altamira',
    'La Castellana',
    'Colinas de Bello Monte',
    'Sebucán',
    'Chacao',
  ];

  const bedroomOptions = [
    { value: 'todos', label: 'Cualquiera', detail: 'Sin preferencia' },
    { value: '1', label: '1 habitación', detail: 'Un espacio íntimo' },
    { value: '2', label: '2 habitaciones', detail: 'Un poco más de espacio' },
    { value: '3', label: '3 o más', detail: 'Para crecer en familia' },
  ] as const;

  const operationLabel =
    operationOptions.find((option) => option.value === operationFilter)?.label ?? 'Explorar todo';
  const zoneLabel = zoneFilter === 'todas' ? 'Toda Caracas' : zoneFilter;
  const bedroomLabel =
    bedroomOptions.find((option) => option.value === String(bedroomsFilter))?.label ??
    'Cualquiera';

  const assistantPrompt = [
    {
      question: '¿Qué estás buscando?',
      helper: 'Cuéntame si quieres alquilar, comprar o simplemente explorar.',
    },
    {
      question: '¿En qué zona te gustaría echar raíces?',
      helper: 'Elige una zona o mira todo el inventario evaluado.',
    },
    {
      question: '¿Cuántas habitaciones necesitas?',
      helper: 'Una última preferencia. También puedes ver todas las opciones.',
    },
  ][searchStep];

  const toggleAssistant = () => {
    const nextState = !isAssistantOpen;
    setIsAssistantOpen(nextState);
    if (nextState) {
      setTimeout(() => {
        document.getElementById('asistente-burbuja')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 80);
    }
  };

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-[#D8CFBE] overflow-hidden bg-[#F3EBDD]">
      {/* Detalle visual sutil de fondo que evoca planos y curvas de nivel del valle caraqueño */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#1F4A3A_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-4">
          <div className="relative z-10 max-w-3xl">
            {/* Manifiesto y propósito */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1F4A3A]/10 border border-[#1F4A3A]/20 text-[#1F4A3A] text-xs font-sans font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1F4A3A]" aria-hidden="true" />
              <span>Que nadie firme un papel que no entiende.</span>
            </div>

            {/* Titular principal en Fraunces */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.35rem] text-[#16201C] font-normal tracking-tight leading-[1.12] mb-6">
              Inmuebles en Caracas con documentos, estructura y servicios verificados antes de publicar.
            </h1>

            {/* Subtítulo riguroso en Inter */}
            <p className="font-sans text-base sm:text-lg text-[#5C655F] leading-relaxed max-w-2xl mb-8">
              Sin títulos engañosos ni sorpresas en el contrato. Sabes qué firmas, cuánto pagas y en qué edificio vives.
            </p>

            {/* CTA principal para desplegar el formulario inteligente y enlace directo al catálogo */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <button
                type="button"
                onClick={toggleAssistant}
                aria-expanded={isAssistantOpen}
                aria-controls="asistente-burbuja"
                className={`group inline-flex items-center gap-2.5 rounded-2xl px-6 py-3.5 text-sm font-semibold font-sans transition-all duration-300 shadow-[0_12px_32px_-12px_rgba(168,88,45,0.6)] hover:shadow-[0_16px_40px_-10px_rgba(168,88,45,0.7)] hover:scale-[1.01] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8582D] focus-visible:ring-offset-2 ${
                  isAssistantOpen
                    ? 'bg-[#1F4A3A] hover:bg-[#16201C] text-[#FBF8F2]'
                    : 'bg-[#A8582D] hover:bg-[#934c26] text-white'
                }`}
              >
                <Compass className="w-4 h-4 stroke-[1.8] transition-transform duration-300 group-hover:rotate-45" aria-hidden="true" />
                <span>{isAssistantOpen ? 'Ocultar asistente de búsqueda' : 'Descubre más · Asistente guiado'}</span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-xs font-bold leading-none">
                  {isAssistantOpen ? '✕' : '↓'}
                </span>
              </button>

              <a
                href="#catalogo"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#D8CFBE] bg-white/70 hover:bg-white text-[#16201C] px-5 py-3.5 text-sm font-medium transition-all duration-200 hover:border-[#1F4A3A]/40 shadow-sm"
              >
                <span>Ver inventario directo</span>
                <ArrowRight className="w-4 h-4 stroke-[1.5] text-[#1F4A3A]" aria-hidden="true" />
              </a>
            </div>

            {/* Micro-credenciales serenas */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#5C655F]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1F4A3A]" aria-hidden="true" />
                <span>3 preguntas concisas</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1F4A3A]" aria-hidden="true" />
                <span>Filtro de contingencias en Caracas</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1F4A3A]" aria-hidden="true" />
                <span>Sin datos obligatorios ni llamadas</span>
              </span>
            </div>
          </div>

          {/* Ilustración arquitectónica caraqueña */}
          <div className="hero-illustration pointer-events-none absolute right-[-2rem] top-28 z-0 w-[75%] lg:relative lg:right-auto lg:top-auto lg:z-auto lg:w-auto" aria-hidden="true">
            <svg
              viewBox="0 0 560 390"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-auto w-full overflow-visible"
            >
              <circle cx="337" cy="165" r="142" fill="#D8CFBE" fillOpacity=".18" />
              <circle cx="337" cy="165" r="113" stroke="#1F4A3A" strokeOpacity=".14" strokeDasharray="2 8" />
              <path
                className="hero-illustration-orbit"
                d="M227 182C249 90 347 43 430 86"
                pathLength={1}
                stroke="#A8582D"
                strokeOpacity=".52"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="430" cy="86" r="4" fill="#A8582D" />
              <path d="M35 332H526" stroke="#1F4A3A" strokeOpacity=".24" strokeWidth="1.5" />

              <g className="hero-building hero-building-back">
                <path d="M83 332V191L133 164L184 191V332" fill="#E8DECC" stroke="#1F4A3A" strokeOpacity=".58" strokeWidth="1.5" />
                <path d="M83 191L133 218L184 191M133 218V332" stroke="#1F4A3A" strokeOpacity=".42" strokeWidth="1.2" />
                <path d="M98 202L119 213V231L98 220V202ZM147 227L168 216V234L147 245V227ZM98 244L119 255V273L98 262V244ZM147 269L168 258V276L147 287V269Z" fill="#1F4A3A" fillOpacity=".62" />
                <path d="M98 286L119 297V315L98 304V286ZM147 311L168 300V318L147 329V311Z" fill="#A8582D" fillOpacity=".64" />
              </g>

              <g className="hero-building hero-building-main">
                <path d="M198 332V111L259 77L320 111V332" fill="#FBF8F2" stroke="#1F4A3A" strokeOpacity=".72" strokeWidth="1.6" />
                <path d="M198 111L259 145L320 111M259 145V332" stroke="#1F4A3A" strokeOpacity=".48" strokeWidth="1.2" />
                <path d="M215 126L245 143V163L215 146V126ZM273 159L303 142V162L273 179V159ZM215 174L245 191V211L215 194V174ZM273 207L303 190V210L273 227V207ZM215 222L245 239V259L215 242V222ZM273 255L303 238V258L273 275V255Z" fill="#1F4A3A" fillOpacity=".7" />
                <path d="M215 270L245 287V307L215 290V270ZM273 303L303 286V306L273 323V303Z" fill="#A8582D" fillOpacity=".68" />
                <path d="M259 78V56M252 56H266" stroke="#1F4A3A" strokeOpacity=".54" strokeWidth="1.4" strokeLinecap="round" />
              </g>

              <g className="hero-building hero-building-front">
                <path d="M347 332V173L391 147L435 173V332" fill="#E8DECC" stroke="#1F4A3A" strokeOpacity=".62" strokeWidth="1.5" />
                <path d="M347 173L391 199L435 173M391 199V332" stroke="#1F4A3A" strokeOpacity=".4" strokeWidth="1.2" />
                <path d="M361 184L380 195V214L361 203V184ZM402 219L421 208V227L402 238V219ZM361 226L380 237V256L361 245V226ZM402 261L421 250V269L402 280V261ZM361 268L380 279V298L361 287V268ZM402 303L421 292V311L402 322V303Z" fill="#1F4A3A" fillOpacity=".64" />
              </g>

              <path d="M55 332C105 315 140 316 190 332M435 332C469 320 492 319 526 332" stroke="#1F4A3A" strokeOpacity=".2" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="467" cy="150" r="2" fill="#A8582D" fillOpacity=".7" />
              <circle cx="482" cy="173" r="1.5" fill="#1F4A3A" fillOpacity=".5" />
              <circle cx="457" cy="190" r="1.5" fill="#1F4A3A" fillOpacity=".42" />
            </svg>
          </div>
        </div>

        {/* Formulario inteligente: desplegable suavemente como burbuja */}
        {isAssistantOpen && (
          <div
            id="asistente-burbuja"
            className="bubble-island mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl border border-[#D8CFBE]/90 bg-[#FBF8F2]/95 shadow-[0_25px_70px_-35px_rgba(22,32,28,0.55)] backdrop-blur-md"
          >
            {/* Cabecera de la burbuja */}
            <div className="flex items-center justify-between gap-4 border-b border-[#D8CFBE]/70 px-4 py-3.5 sm:px-6 bg-[#F3EBDD]/40">
              <div className="flex min-w-0 items-center gap-3">
                <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1F4A3A] text-[#FBF8F2]">
                  <Building className="h-4 w-4" aria-hidden="true" />
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[#FBF8F2] bg-[#7E9B70]" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-[#16201C]">
                    Arraigo <span className="font-normal text-[#5C655F]">· Asistente inmobiliario</span>
                  </p>
                  <p className="truncate text-xs text-[#5C655F]">
                    {searchStep < 3 ? `Te ayudo a encontrar tu próximo hogar · ${searchStep + 1} de 3` : 'Tu búsqueda está lista'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex shrink-0 items-center gap-1.5" aria-label={`Paso ${Math.min(searchStep + 1, 3)} de 3`}>
                  {[0, 1, 2].map((step) => (
                    <span
                      key={step}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        step <= searchStep ? 'w-6 bg-[#1F4A3A]' : 'w-1.5 bg-[#D8CFBE]'
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setIsAssistantOpen(false)}
                  className="p-1 rounded-xl text-[#5C655F] hover:text-[#16201C] hover:bg-[#D8CFBE]/40 transition-colors"
                  aria-label="Cerrar asistente de búsqueda"
                >
                  <X className="w-4 h-4 stroke-[1.5]" />
                </button>
              </div>
            </div>

            {/* Contenido interactivo */}
            <div className="px-4 py-5 sm:px-6 sm:py-6" aria-live="polite">
              <div className="mb-4 space-y-2.5">
                {searchStep >= 1 && (
                  <div className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl rounded-tr-md bg-[#1F4A3A] px-4 py-2.5 text-sm text-[#FBF8F2] shadow-sm">
                      <span className="mb-0.5 block text-[10px] font-medium uppercase tracking-wide text-[#FBF8F2]/65">Tú</span>
                      {operationLabel}
                    </div>
                  </div>
                )}
                {searchStep >= 2 && (
                  <div className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl rounded-tr-md bg-[#1F4A3A] px-4 py-2.5 text-sm text-[#FBF8F2] shadow-sm">
                      <span className="mb-0.5 block text-[10px] font-medium uppercase tracking-wide text-[#FBF8F2]/65">Tú</span>
                      {zoneLabel}
                    </div>
                  </div>
                )}
                {searchStep >= 3 && (
                  <div className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl rounded-tr-md bg-[#1F4A3A] px-4 py-2.5 text-sm text-[#FBF8F2] shadow-sm">
                      <span className="mb-0.5 block text-[10px] font-medium uppercase tracking-wide text-[#FBF8F2]/65">Tú</span>
                      {bedroomLabel}
                    </div>
                  </div>
                )}
                {searchStep < 3 && assistantPrompt && (
                  <div className="flex items-end gap-2.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1F4A3A]/10 text-[#1F4A3A]">
                      <Building className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <div className="max-w-[92%] rounded-2xl rounded-bl-md border border-[#D8CFBE]/75 bg-white/75 px-4 py-3 shadow-[0_5px_18px_-16px_rgba(22,32,28,0.55)]">
                      <h2 className="font-serif text-lg leading-snug text-[#16201C] sm:text-xl">
                        {assistantPrompt.question}
                      </h2>
                      <p className="mt-1 text-sm leading-relaxed text-[#5C655F]">
                        {assistantPrompt.helper}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div key={searchStep} className="search-step-content">
                {searchStep === 0 && (
                  <div>
                    <div className="ml-9 mt-3 grid gap-2 sm:grid-cols-3">
                      {operationOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          aria-pressed={operationFilter === option.value}
                          onClick={() => {
                            onOperationChange(option.value);
                            setSearchStep(1);
                          }}
                          className="search-choice group flex min-h-16 items-center justify-between gap-3 rounded-xl border border-[#D8CFBE]/80 px-4 py-3 text-left hover:border-[#1F4A3A]/55 hover:bg-[#1F4A3A]/[0.035] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4A3A]"
                        >
                          <span>
                            <span className="block text-sm font-semibold text-[#16201C]">{option.label}</span>
                            <span className="mt-0.5 block text-xs text-[#5C655F]">{option.detail}</span>
                          </span>
                          <ArrowRight className="h-4 w-4 shrink-0 text-[#1F4A3A] opacity-60 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {searchStep === 1 && (
                  <div>
                    <div className="ml-9 mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {zoneOptions.map((zone) => (
                        <button
                          key={zone}
                          type="button"
                          aria-pressed={zoneFilter === zone}
                          onClick={() => {
                            onZoneChange(zone);
                            setSearchStep(2);
                          }}
                          className="search-choice min-h-11 rounded-xl border border-[#D8CFBE]/80 px-3 py-2 text-left text-xs font-medium text-[#16201C] hover:border-[#1F4A3A]/55 hover:bg-[#1F4A3A]/[0.035] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4A3A] sm:text-sm"
                        >
                          {zone === 'todas' ? 'Toda Caracas' : zone}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {searchStep === 2 && (
                  <div>
                    <div className="ml-9 mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {bedroomOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          aria-pressed={String(bedroomsFilter) === option.value}
                          onClick={() => {
                            onBedroomsChange(option.value === 'todos' ? 'todos' : Number(option.value));
                            setSearchStep(3);
                          }}
                          className="search-choice min-h-16 rounded-xl border border-[#D8CFBE]/80 px-3 py-3 text-left hover:border-[#1F4A3A]/55 hover:bg-[#1F4A3A]/[0.035] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4A3A]"
                        >
                          <span className="block text-sm font-semibold text-[#16201C]">{option.label}</span>
                          <span className="mt-0.5 block text-[11px] text-[#5C655F]">{option.detail}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {searchStep === 3 && (
                  <div className="flex flex-col gap-5 rounded-2xl border border-[#D8CFBE]/70 bg-white/65 p-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-sm font-medium text-[#1F4A3A]">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1F4A3A] text-white">
                          <Check className="h-3 w-3" aria-hidden="true" />
                        </span>
                        Búsqueda preparada
                      </div>
                      <p className="mt-2 font-serif text-xl text-[#16201C] sm:text-2xl">
                        Opciones que se sienten como hogar.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {[
                          { label: operationLabel, step: 0 },
                          { label: zoneLabel, step: 1 },
                          { label: bedroomLabel, step: 2 },
                        ].map((item) => (
                          <button
                            key={item.step}
                            type="button"
                            onClick={() => setSearchStep(item.step)}
                            className="rounded-full border border-[#D8CFBE]/80 px-3 py-1.5 text-xs text-[#5C655F] hover:border-[#1F4A3A]/50 hover:text-[#1F4A3A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4A3A]"
                            aria-label={`Cambiar ${item.label}`}
                          >
                            {item.label} · Cambiar
                          </button>
                        ))}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setIsAssistantOpen(false);
                        onSearchSubmit();
                      }}
                      className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#A8582D] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#934c26] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8582D] focus-visible:ring-offset-2"
                    >
                      Ver propiedades
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                )}
              </div>

              {searchStep > 0 && searchStep < 3 && (
                <button
                  type="button"
                  onClick={() => setSearchStep((step) => step - 1)}
                  className="mt-5 inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold text-[#5C655F] hover:text-[#1F4A3A] hover:bg-[#D8CFBE]/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4A3A]"
                >
                  <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
                  Volver
                </button>
              )}
            </div>

            {/* Micro-datos de certeza caraqueña */}
            <div className="border-t border-[#D8CFBE]/70 bg-[#F3EBDD]/45 px-4 py-3 sm:px-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-[11px] text-[#5C655F]">
              <span className="flex items-center gap-1.5">
                <Droplets className="w-3.5 h-3.5 text-[#1F4A3A] stroke-[1.5]" aria-hidden="true" />
                <span>Verificación de autonomía de pozo o tanque</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#1F4A3A] stroke-[1.5]" aria-hidden="true" />
                <span>Detalle de planta eléctrica (común o total)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-[#1F4A3A] stroke-[1.5]" aria-hidden="true" />
                <span>Revisión de solvencias y tradición legal</span>
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
