/**
 * Tipos de datos para el ecosistema de Arraigo (Bienes Raíces en Caracas).
 * Sistema de verificación en 3 pilares: Documental, Estructural y Servicios Clave.
 */

export type VerificationStatus = 'verificado' | 'observaciones' | 'sin_evaluar';

export interface AuditItem {
  label: string;
  status: VerificationStatus;
  date?: string;
  notes?: string;
}

export interface DocumentAudit {
  overallStatus: VerificationStatus;
  verifiedDate: string; // Ej: "3 de oct 2025"
  tituloPropiedad: AuditItem;
  certificadoGravamenes: AuditItem;
  solvenciaMunicipal: AuditItem;
  fichaCatastral: AuditItem;
  solvenciaCondominio: AuditItem;
}

export interface StructuralAudit {
  overallStatus: VerificationStatus;
  verifiedDate: string;
  engineerName?: string;
  engineerCiv?: string; // Número de Colegio de Ingenieros de Venezuela
  observationsSummary: string;
  evaluatedElements: {
    losasVigas: AuditItem;
    sistemaElectrico: AuditItem;
    plomeriaMatriz: AuditItem;
    impermeabilizacion: AuditItem;
  };
}

export interface ServicesAudit {
  overallStatus: VerificationStatus;
  waterSystem: {
    type: 'Pozo profundo' | 'Tanque subterráneo' | 'Tanque privado compensado';
    capacityLitres?: number;
    description: string;
    status: VerificationStatus;
  };
  powerBackup: {
    scope: 'Apartamento completo' | 'Áreas comunes y ascensores' | 'Áreas comunes' | 'Sin planta';
    description: string;
    status: VerificationStatus;
  };
  connectivity: {
    fiberProviders: string[];
    description: string;
    status: VerificationStatus;
  };
  buildingSecurity: {
    security24_7: boolean;
    elevatorsOperational: string;
    status: VerificationStatus;
  };
}

export interface Property {
  id: string;
  code: string; // Ej: "ARR-LPG-104"
  title: string;
  zone: 'Los Palos Grandes' | 'Altamira' | 'La Castellana' | 'Colinas de Bello Monte' | 'Sebucán' | 'Chacao';
  addressShort: string;
  operation: 'venta' | 'alquiler';
  priceUsd: number;
  pricePerM2?: number;
  bedrooms: number;
  bathrooms: number;
  parkingSpots: number;
  areaM2: number;
  yearBuilt: number;
  condoFeeUsdMonthly: number;
  keyServicesTag: string; // Ej: "Pozo profundo + Planta áreas comunes"
  description: string;
  images: {
    url: string;
    alt: string;
    caption: string;
  }[];
  verification: {
    documentos: DocumentAudit;
    estructura: StructuralAudit;
    servicios: ServicesAudit;
  };
}
