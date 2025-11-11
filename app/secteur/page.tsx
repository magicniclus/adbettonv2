import { Metadata } from 'next';
import SecteurIndexClient from './SecteurIndexClient';

export const metadata: Metadata = {
  title: 'Nos secteurs d\'intervention - Adbetton Maçonnerie | 50km autour de Saint-Malo',
  description: 'Découvrez tous nos secteurs d\'intervention en Bretagne et Normandie. Maçonnerie générale, joints de pierres, extensions dans 21 communes autour de Saint-Malo.',
  keywords: 'maçonnerie Bretagne, secteurs intervention Saint-Malo, maçon Côte d\'Émeraude, entreprise maçonnerie Ille-et-Vilaine, travaux maçonnerie baie Mont-Saint-Michel',
  openGraph: {
    title: 'Nos secteurs d\'intervention - Adbetton Maçonnerie',
    description: 'Découvrez tous nos secteurs d\'intervention en Bretagne et Normandie. Maçonnerie générale, joints de pierres, extensions dans 21 communes autour de Saint-Malo.',
    type: 'website',
  },
};

export default function SecteurPage() {
  return <SecteurIndexClient />;
}
