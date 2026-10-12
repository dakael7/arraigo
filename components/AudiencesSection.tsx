import React from 'react';
import { KeyRound, Shield, Globe2, CheckCircle, ArrowRight } from 'lucide-react';

/**
 * Propuesta de Valor segmentada por Audiencias.
 * Tarjetas estandarizadas con el diseño del formulario inteligente:
 * Contenedor rounded-3xl con border-[#D8CFBE]/90, bg-[#FBF8F2]/90 y sombra suave.
 * Caja interior de beneficios en rounded-2xl bg-white/70.
 */
export const AudiencesSection: React.FC = () => {
  return (
    <section id="audiencias" className="py-16 md:py-24 bg-[#F3EBDD] border-b border-[#D8CFBE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#1F4A3A]">
            Echar raíces con certeza
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#16201C] mt-2 mb-4 font-normal">
            Tres formas de participar en el mercado inmobiliario caraqueño sin incertidumbres.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#5C655F] leading-relaxed">
            Revisamos la documentación de origen, la condición física real del edificio y los acuerdos contractuales antes de cualquier firma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Tarjeta Propietarios */}
          <div className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#D8CFBE]/90 bg-[#FBF8F2]/90 p-6 sm:p-7 shadow-[0_20px_60px_-42px_rgba(22,32,28,0.55)] transition-all duration-300 hover:border-[#1F4A3A]/50 hover:shadow-[0_25px_70px_-35px_rgba(22,32,28,0.6)]">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-[#1F4A3A]/10 border border-[#1F4A3A]/20 flex items-center justify-center text-[#1F4A3A] mb-5 shadow-[0_4px_12px_-6px_rgba(31,74,58,0.4)]">
                <KeyRound className="w-5 h-5 stroke-[1.5]" aria-hidden="true" />
              </div>
              <span className="text-[11px] font-sans uppercase tracking-wider text-[#5C655F] font-semibold">
                Para propietarios
              </span>
              <h3 className="font-serif text-xl text-[#16201C] mt-1 mb-3 font-medium leading-snug">
                Tu inmueble vacío puede trabajar con respaldo legal.
              </h3>
              <p className="font-sans text-sm text-[#5C655F] leading-relaxed mb-6">
                Filtramos postulantes con solvencia comprobable y redactamos contratos con cláusulas precisas de mantenimiento, inventario y rescisión ajustadas al marco vigente.
              </p>

              {/* Subcaja interior estandarizada */}
              <div className="rounded-2xl border border-[#D8CFBE]/70 bg-white/70 p-4 shadow-[0_5px_18px_-16px_rgba(22,32,28,0.55)]">
                <ul className="space-y-2.5 text-xs text-[#16201C] font-sans">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#1F4A3A] stroke-[1.5] flex-shrink-0 mt-0.5" />
                    <span>Auditoría de solvencias municipales y condominio antes de publicar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#1F4A3A] stroke-[1.5] flex-shrink-0 mt-0.5" />
                    <span>Inventario fotográfico detallado de servicios y equipos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#1F4A3A] stroke-[1.5] flex-shrink-0 mt-0.5" />
                    <span>Sin comisiones ocultas ni sobreprecios sobre el canon acordado</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#D8CFBE]/70">
              <a
                href="#contacto"
                className="text-xs font-semibold text-[#1F4A3A] hover:text-[#16201C] inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Consignar inmueble para revisión</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[1.5] transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Tarjeta Inquilinos */}
          <div className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#D8CFBE]/90 bg-[#FBF8F2]/90 p-6 sm:p-7 shadow-[0_20px_60px_-42px_rgba(22,32,28,0.55)] transition-all duration-300 hover:border-[#1F4A3A]/50 hover:shadow-[0_25px_70px_-35px_rgba(22,32,28,0.6)]">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-[#1F4A3A]/10 border border-[#1F4A3A]/20 flex items-center justify-center text-[#1F4A3A] mb-5 shadow-[0_4px_12px_-6px_rgba(31,74,58,0.4)]">
                <Shield className="w-5 h-5 stroke-[1.5]" aria-hidden="true" />
              </div>
              <span className="text-[11px] font-sans uppercase tracking-wider text-[#5C655F] font-semibold">
                Para inquilinos
              </span>
              <h3 className="font-serif text-xl text-[#16201C] mt-1 mb-3 font-medium leading-snug">
                Transparencia en garantías, canon claro y condiciones a la vista.
              </h3>
              <p className="font-sans text-sm text-[#5C655F] leading-relaxed mb-6">
                Conoce el estado exacto del agua, la cobertura real de la planta eléctrica y los gastos mensuales de condominio antes de realizar cualquier depósito de reserva.
              </p>

              {/* Subcaja interior estandarizada */}
              <div className="rounded-2xl border border-[#D8CFBE]/70 bg-white/70 p-4 shadow-[0_5px_18px_-16px_rgba(22,32,28,0.55)]">
                <ul className="space-y-2.5 text-xs text-[#16201C] font-sans">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#1F4A3A] stroke-[1.5] flex-shrink-0 mt-0.5" />
                    <span>Cánones expresados en USD sin cobros imprevistos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#1F4A3A] stroke-[1.5] flex-shrink-0 mt-0.5" />
                    <span>Verificación previa de funcionamiento de bombas y calentadores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#1F4A3A] stroke-[1.5] flex-shrink-0 mt-0.5" />
                    <span>Contratos equilibrados revisados por abogados inmobiliarios</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#D8CFBE]/70">
              <a
                href="#catalogo"
                className="text-xs font-semibold text-[#1F4A3A] hover:text-[#16201C] inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Ver inmuebles en alquiler evaluados</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[1.5] transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Tarjeta Compradores en el exterior */}
          <div className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#D8CFBE]/90 bg-[#FBF8F2]/90 p-6 sm:p-7 shadow-[0_20px_60px_-42px_rgba(22,32,28,0.55)] transition-all duration-300 hover:border-[#1F4A3A]/50 hover:shadow-[0_25px_70px_-35px_rgba(22,32,28,0.6)]">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-[#1F4A3A]/10 border border-[#1F4A3A]/20 flex items-center justify-center text-[#1F4A3A] mb-5 shadow-[0_4px_12px_-6px_rgba(31,74,58,0.4)]">
                <Globe2 className="w-5 h-5 stroke-[1.5]" aria-hidden="true" />
              </div>
              <span className="text-[11px] font-sans uppercase tracking-wider text-[#5C655F] font-semibold">
                Compradores en el exterior
              </span>
              <h3 className="font-serif text-xl text-[#16201C] mt-1 mb-3 font-medium leading-snug">
                Acompañamiento y verificación de títulos antes de transferir un dólar.
              </h3>
              <p className="font-sans text-sm text-[#5C655F] leading-relaxed mb-6">
                Inspeccionamos en físico la propiedad con ingenieros colegiados y validamos la cadena registral ante el registro público inmobiliario correspondiente.
              </p>

              {/* Subcaja interior estandarizada */}
              <div className="rounded-2xl border border-[#D8CFBE]/70 bg-white/70 p-4 shadow-[0_5px_18px_-16px_rgba(22,32,28,0.55)]">
                <ul className="space-y-2.5 text-xs text-[#16201C] font-sans">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#1F4A3A] stroke-[1.5] flex-shrink-0 mt-0.5" />
                    <span>Certificación de no gravamen y titularidad viva</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#1F4A3A] stroke-[1.5] flex-shrink-0 mt-0.5" />
                    <span>Informe técnico de estructura y servicios con video en alta definición</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#1F4A3A] stroke-[1.5] flex-shrink-0 mt-0.5" />
                    <span>Coordinación con apoderados legales y notaría pública</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#D8CFBE]/70">
              <a
                href="#contacto"
                className="text-xs font-semibold text-[#1F4A3A] hover:text-[#16201C] inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Solicitar protocolo para compradores remotos</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[1.5] transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
