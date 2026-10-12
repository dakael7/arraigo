import React from 'react';
import { Logo } from './Logo';
import {
  ArrowUpRight,
  Clock,
  FileCheck2,
  Home,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  KeyRound,
} from 'lucide-react';
import { createWhatsAppUrl } from '@/lib/whatsapp';

/**
 * Pie de página institucional de Arraigo.
 * Contiene la micro-nota legal obligatoria, el descargo de honorarios y la información de contacto caraqueña.
 */
export const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-[#16201C] text-[#FBF8F2] pt-16 pb-12 font-sans border-t border-[#D8CFBE]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mb-14 overflow-hidden rounded-3xl border border-[#FBF8F2]/15 bg-gradient-to-br from-[#203d32] via-[#1F4A3A] to-[#18372c] p-6 sm:p-9 lg:p-10" aria-labelledby="contact-prompt">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FBF8F2]/20 bg-[#FBF8F2]/[0.07] px-3 py-1.5 text-[11px] font-medium text-[#E7D8B8]">
                <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Una conversación clara, desde el primer hola</span>
              </div>
              <h2 id="contact-prompt" className="max-w-md font-serif text-3xl font-normal leading-tight text-[#FBF8F2] sm:text-4xl">
                ¿Qué te gustaría resolver hoy?
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#FBF8F2]/75">
                Elige por dónde empezamos. Abriremos WhatsApp con el contexto listo para que no tengas que redactar desde cero.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                {
                  icon: Home,
                  eyebrow: 'BUSCO HOGAR',
                  title: 'Encontrar un lugar para mí',
                  message: 'Hola, Arraigo. Estoy buscando un inmueble verificado en Caracas. ¿Me ayudan a encontrar opciones según lo que necesito?',
                },
                {
                  icon: KeyRound,
                  eyebrow: 'SOY PROPIETARIO',
                  title: 'Publicar mi inmueble',
                  message: 'Hola, Arraigo. Tengo un inmueble en Caracas y quiero conocer cómo funciona la revisión y publicación. ¿Me orientan?',
                },
                {
                  icon: FileCheck2,
                  eyebrow: 'QUIERO ENTENDER',
                  title: 'Consultar una verificación',
                  message: 'Hola, Arraigo. Quiero entender mejor qué documentos, estructura o servicios se revisan antes de publicar un inmueble.',
                },
              ].map((intent) => {
                const IntentIcon = intent.icon;

                return (
                  <a
                    key={intent.eyebrow}
                    href={createWhatsAppUrl(intent.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-40 flex-col rounded-2xl border border-[#FBF8F2]/20 bg-[#FBF8F2]/[0.06] p-4 transition-colors hover:border-[#D8CFBE]/70 hover:bg-[#FBF8F2]/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E7D8B8] sm:min-h-48 sm:p-5"
                  >
                    <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-[#FBF8F2]/10 text-[#E7D8B8]">
                      <IntentIcon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="text-[10px] font-semibold tracking-[0.14em] text-[#D8CFBE]">{intent.eyebrow}</span>
                    <span className="mt-1.5 flex-1 font-serif text-lg leading-snug text-[#FBF8F2]">{intent.title}</span>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#E7D8B8]">
                      Abrir conversación
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bloque superior del footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#D8CFBE]/20">
          {/* Columna de identidad */}
          <div className="md:col-span-1 space-y-4">
            <Logo variant="light" size="md" />
            <p className="text-xs text-[#D8CFBE]/80 leading-relaxed font-sans">
              Echar raíces con certeza. Verificación documental, estructural y de servicios para operaciones inmobiliarias en Caracas.
            </p>
            {/* Micro-nota obligatoria */}
            <div className="inline-block px-3 py-1 rounded-full bg-[#FBF8F2]/10 border border-[#FBF8F2]/15 text-[11px] text-[#D8CFBE]">
              Concepto de diseño · Empresa ficticia
            </div>
          </div>

          {/* Columna Zonas de Cobertura */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D8CFBE]">
              Zonas evaluadas
            </h4>
            <ul className="space-y-2 text-xs text-[#FBF8F2]/75">
              <li>Los Palos Grandes</li>
              <li>Altamira y La Castellana</li>
              <li>Chacao Tradicional</li>
              <li>Colinas de Bello Monte</li>
              <li>Sebucán y Los Chorros</li>
            </ul>
          </div>

          {/* Columna Pilares de Inspección */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D8CFBE]">
              Pilares de verificación
            </h4>
            <ul className="space-y-2 text-xs text-[#FBF8F2]/75">
              <li>1. Título y certificado de gravámenes</li>
              <li>2. Solvencia municipal y catastral</li>
              <li>3. Inspección por ingeniero CIV</li>
              <li>4. Autonomía de pozo y tanque</li>
              <li>5. Cobertura de planta eléctrica</li>
            </ul>
          </div>

          {/* Columna Contacto y Horarios */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D8CFBE]">
              Atención directa
            </h4>
            <div className="space-y-2 text-xs text-[#FBF8F2]/75">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D8CFBE] stroke-[1.5] flex-shrink-0 mt-0.5" />
                <span>Municipio Chacao, Caracas, Venezuela</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D8CFBE] stroke-[1.5] flex-shrink-0" />
                <span className="tabular-numbers">Lunes a Viernes: 8:30 a 17:00</span>
              </div>
              <a
                href={createWhatsAppUrl('Hola, Arraigo. Quisiera hacer una consulta.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-[#FBF8F2]"
              >
                <Phone className="w-4 h-4 text-[#D8CFBE] stroke-[1.5] flex-shrink-0" />
                <span className="tabular-numbers">+58 412 390 7028 · WhatsApp</span>
              </a>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D8CFBE] stroke-[1.5] flex-shrink-0" />
                <span>contacto@arraigo.ve (simulación)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer específico obligatorio */}
        <div className="pt-8 pb-4 border-b border-[#D8CFBE]/15 text-xs text-[#D8CFBE]/70 leading-relaxed">
          <p className="mb-2">
            <strong className="text-[#FBF8F2] font-medium">Transparencia arancelaria:</strong> No publicamos porcentajes de honorarios en web. Revisamos título, gravámenes y solvencias antes de la publicación. Cada acuerdo de intermediación se estipula de forma individual con el propietario conforme a la ley.
          </p>
        </div>

        {/* Barra inferior de créditos */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#D8CFBE]/60">
          <div>
            Arraigo Bienes Raíces — Caracas, Venezuela.
          </div>
          <div className="flex items-center gap-4">
            <span>Concepto de diseño · Empresa ficticia</span>
            <span>·</span>
            <span>Arraigo es una web ficticia, propiedad de Gravity Labs</span>
            <span>·</span>
            <span>© 2026 Gravity Labs</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
