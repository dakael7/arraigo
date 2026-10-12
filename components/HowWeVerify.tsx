import React from 'react';
import { ShieldCheck, Scale, Eye, Clock, ArrowRight } from 'lucide-react';

/**
 * Sección "Cómo verificamos" / Principios Fundamentales.
 * Cajas estandarizadas con el diseño del formulario inteligente:
 * Contenedores rounded-3xl con border-[#D8CFBE]/90, bg-[#FBF8F2]/90 y sombra coherente.
 */
export const HowWeVerify: React.FC = () => {
  const values = [
    {
      title: 'Certeza',
      icon: <ShieldCheck className="w-5 h-5 text-[#1F4A3A] stroke-[1.5]" />,
      description:
        'Revisamos el tracto sucesivo registral, certificado de gravámenes y solvencias antes de emitir cualquier compromiso de publicación.',
    },
    {
      title: 'Franqueza',
      icon: <Eye className="w-5 h-5 text-[#1F4A3A] stroke-[1.5]" />,
      description:
        'Si un edificio no cuenta con planta eléctrica, o el pozo de agua presenta horarios restringidos, lo indicamos de forma abierta en la ficha.',
    },
    {
      title: 'Cuidado',
      icon: <Scale className="w-5 h-5 text-[#1F4A3A] stroke-[1.5]" />,
      description:
        'Evaluaciones en sitio por ingenieros colegiados. Revisamos tableros de breakers, presión de bombeo y losas estructurales.',
    },
    {
      title: 'Rapidez',
      icon: <Clock className="w-5 h-5 text-[#1F4A3A] stroke-[1.5]" />,
      description:
        'Expedientes digitales consolidados para que compradores, arrendatarios y apoderados tomen decisiones sin dilaciones burocráticas.',
    },
  ];

  return (
    <section id="metodo-verificacion" className="py-16 md:py-24 bg-[#FBF8F2] border-b border-[#D8CFBE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#1F4A3A]">
            Metodología de Campo
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#16201C] mt-2 mb-4 font-normal">
            Cómo evaluamos cada inmueble antes de que aparezca en el mapa.
          </h2>
          <p className="font-sans text-base text-[#5C655F] leading-relaxed">
            El mercado inmobiliario en Caracas exige comprobación directa en sitio. No nos basamos en declaraciones verbales ni fotografías retocadas.
          </p>
        </div>

        {/* Los 4 Valores con cajas estandarizadas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#D8CFBE]/90 bg-[#FBF8F2]/90 p-6 shadow-[0_20px_60px_-42px_rgba(22,32,28,0.55)] transition-all duration-300 hover:border-[#1F4A3A]/50 hover:shadow-[0_25px_70px_-35px_rgba(22,32,28,0.6)]"
            >
              <div>
                <div className="w-11 h-11 rounded-2xl bg-[#1F4A3A]/10 border border-[#1F4A3A]/20 flex items-center justify-center mb-5 text-[#1F4A3A] shadow-[0_4px_12px_-6px_rgba(31,74,58,0.4)]">
                  {val.icon}
                </div>
                <h3 className="font-serif text-lg text-[#16201C] font-medium mb-2">
                  {val.title}
                </h3>
                <p className="font-sans text-xs text-[#5C655F] leading-relaxed">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Declaración de Franqueza: "Si algo no está evaluado, lo decimos." */}
        <div className="overflow-hidden rounded-3xl border border-[#1F4A3A]/40 bg-[#1F4A3A] p-6 sm:p-8 text-[#FBF8F2] shadow-[0_20px_60px_-42px_rgba(22,32,28,0.55)] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#D8CFBE] font-medium font-sans">
              Compromiso de Integridad
            </span>
            <h3 className="font-serif text-2xl text-[#FBF8F2] font-normal mt-1 mb-2">
              Si algo no está evaluado, lo decimos.
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#FBF8F2]/80 leading-relaxed">
              No emitimos sellos de conveniencia. Cuando un documento está en trámite o un componente técnico no ha sido inspeccionado por nuestros ingenieros, la ficha lo declara explícitamente en estado de observación o sin evaluar.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href="#catalogo"
              className="inline-flex items-center gap-2 rounded-xl bg-[#A8582D] hover:bg-[#934c26] px-5 py-3 text-white text-xs font-sans font-semibold transition-colors duration-200 shadow-sm"
            >
              <span>Examinar sellos en el catálogo</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[1.5]" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
