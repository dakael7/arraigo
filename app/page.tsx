import { LandingPageClient } from '@/components/LandingPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Arraigo · Bienes Raíces en Caracas | Que nadie firme un papel que no entiende',
  description:
    'Inmuebles en Caracas con documentos, estructura y servicios verificados antes de publicar. Echar raíces con certeza.',
};

/**
 * Página principal (Landing Page) de Arraigo.
 * React Server Component que delega la interactividad del buscador y filtros al cliente.
 */
export default function HomePage() {
  return <LandingPageClient />;
}
