import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const maconnerieSaintMaloConfig = {
  // SEO et métadonnées
  title: "Maçonnerie Saint-Malo – Adbetton Maçonnerie",
  description: "Entreprise de maçonnerie à Saint-Malo. Maçonnerie générale, joints de pierres, extensions, assainissement. Devis gratuit.",
  keywords: [
    "maçonnerie Saint-Malo",
    "maçon Saint-Malo",
    "entreprise maçonnerie Saint-Malo",
    "joints pierres Saint-Malo",
    "extension maison Saint-Malo",
    "devis maçonnerie Saint-Malo",
    "entrepreneur bâtiment Saint-Malo",
    "assainissement Saint-Malo",
    "travaux maçonnerie Saint-Malo"
  ],
  
  // Contenu principal
  sectorName: "Saint-Malo",
  heroImage: "/macon.png",
  heroTitle: "Entreprise de maçonnerie à Saint-Malo",
  heroSubtitle: "Spécialiste maçonnerie générale à Saint-Malo. Joints de pierres, extensions, assainissement avec excellence familiale.",
  
  // Localisation
  location: "Saint-Malo",
  
  // Description détaillée
  mainDescription: "Adbetton Maçonnerie est votre spécialiste maçonnerie à Saint-Malo. Notre excellence familiale depuis 2 générations nous permet d'intervenir sur tous vos projets de maçonnerie avec un travail soigné et durable. Notre expertise locale nous permet d'adapter nos interventions aux spécificités architecturales de Saint-Malo, cité corsaire au riche patrimoine historique.",
  
  // Prestations principales
  mainServices: [
    {
      title: "Maçonnerie générale",
      description: "Construction neuve, extensions, fondations et dalles béton avec garantie décennale pour maisons de caractère."
    },
    {
      title: "Joints de pierres à l'ancienne",
      description: "Restauration de maisons en pierre et bâtiments historiques avec respect du patrimoine malouin."
    },
    {
      title: "Ouvertures et extensions",
      description: "Création d'ouvertures et extensions pour optimiser vos espaces de vie dans la cité corsaire."
    },
    {
      title: "Enduits de façade",
      description: "Application d'enduits de qualité adaptés au climat marin et aux exigences architecturales locales."
    },
    {
      title: "Assainissement",
      description: "Installation de systèmes d'assainissement conformes aux normes de cette ville portuaire."
    },
    {
      title: "Rénovation patrimoine",
      description: "Restauration de bâtiments anciens et maisons de caractère avec techniques traditionnelles."
    }
  ],
  
  // Avantages
  advantages: [
    "Entrepreneur du bâtiment avec garantie décennale",
    "Devis gratuit et personnalisé",
    "Excellence familiale depuis 2 générations",
    "Expertise en rénovation de patrimoine",
    "Respect des techniques traditionnelles",
    "Travail soigné, durable et de qualité",
    "Tarification transparente",
    "Intervention rapide Saint-Malo et environs",
    "Conseil architectural spécialisé",
    "Matériaux nobles et durables"
  ],
  
  // Exemples de chantiers
  projectExamples: [
    {
      title: "Restauration maison de maître Saint-Malo",
      type: "Maison 18ème siècle - 180m²",
      description: "Rénovation complète façade, joints pierre, enduits traditionnels et création d'ouvertures."
    },
    {
      title: "Extension contemporaine Saint-Malo",
      type: "Extension 45m² + terrasse",
      description: "Agrandissement moderne en harmonie avec l'architecture malouine existante."
    },
    {
      title: "Rénovation maison intra-muros",
      type: "Maison de ville - Rénovation",
      description: "Restauration complète d'une maison dans les remparts avec respect du cachet historique."
    }
  ],
  
  // Informations de contact
  contactInfo: {
    phone: "06 48 81 25 78",
    email: "adbetton32@gmail.com",
    address: "8 avenue de moka, 35400 Saint-Malo"
  },
  
  // Secteurs proches
  nearbyAreas: [
    "Dinard",
    "Saint-Lunaire",
    "Saint-Coulomb",
    "Cancale",
    "La Gouesnière",
    "Saint-Benoit-des-Ondes",
    "Châteauneuf-d'Ille-et-Vilaine",
    "Saint-Père-Marc-en-Poulet",
    "Le Tronchet",
    "Dol-de-Bretagne"
  ]
};

// Métadonnées SEO automatiques
export const metadata: Metadata = generateSectorMetadata(
  "Maçonnerie " + maconnerieSaintMaloConfig.sectorName,
  maconnerieSaintMaloConfig.location,
  maconnerieSaintMaloConfig.description,
  maconnerieSaintMaloConfig.keywords
);

export default function MaconnerieSaintMaloPage() {
  return <SectorPage {...maconnerieSaintMaloConfig} />;
}
