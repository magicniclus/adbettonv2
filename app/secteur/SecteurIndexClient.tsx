'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, ChevronRight, Star, Building2, Phone } from 'lucide-react';

const sectors = [
  { name: 'Saint-Malo', slug: 'maconnerie-saint-malo' },
  { name: 'Saint-Suliac', slug: 'maconnerie-saint-suliac' },
  { name: 'Cancale', slug: 'maconnerie-cancale' },
  { name: 'Saint-Briac-sur-Mer', slug: 'maconnerie-saint-briac-sur-mer' },
  { name: 'Saint-Lunaire', slug: 'maconnerie-saint-lunaire' },
  { name: 'Dinard', slug: 'maconnerie-dinard' },
  { name: 'La Richardais', slug: 'maconnerie-la-richardais' },
  { name: 'Pleurtuit', slug: 'maconnerie-pleurtuit' },
  { name: 'Saint-Coulomb', slug: 'maconnerie-saint-coulomb' },
  { name: 'Dinan', slug: 'maconnerie-dinan' },
  { name: 'Dol-de-Bretagne', slug: 'maconnerie-dol-de-bretagne' },
  { name: 'Le Mont-Dol', slug: 'maconnerie-le-mont-dol' },
  { name: 'Combourg', slug: 'maconnerie-combourg' },
  { name: 'Saint-Benoît-des-Ondes', slug: 'maconnerie-saint-benoit-des-ondes' },
  { name: 'Lancieux', slug: 'maconnerie-lancieux' },
  { name: 'Plouer-sur-Rance', slug: 'maconnerie-plouer-sur-rance' },
  { name: 'Miniac-Morvan', slug: 'maconnerie-miniac-morvan' },
  { name: 'Plerguer', slug: 'maconnerie-plerguer' },
  { name: 'Châteauneuf-d\'Ille-et-Vilaine', slug: 'maconnerie-chateauneuf-ille-et-vilaine' },
  { name: 'La Gouesnière', slug: 'maconnerie-la-gouesniere' },
  { name: 'Baguer-Morvan', slug: 'maconnerie-baguer-morvan' },
  { name: 'La Fresnais', slug: 'maconnerie-la-fresnais' }
];

export default function SecteurIndexClient() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 py-16 md:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center space-x-2 text-sm mb-6 opacity-80">
              <Link href="/" className="hover:text-orange-300 transition-colors">Accueil</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-orange-300">Secteurs</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nos secteurs d'intervention
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Découvrez nos prestations de maçonnerie générale dans 21 communes 
              de Bretagne et Normandie, dans un rayon de 50km autour de Saint-Malo.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <MapPin className="h-5 w-5 text-orange-300" />
                <span className="text-sm font-medium">Bretagne & Normandie</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Star className="h-5 w-5 text-yellow-300" />
                <span className="text-sm font-medium">21 secteurs couverts</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Building2 className="h-5 w-5 text-green-300" />
                <span className="text-sm font-medium">Savoir-faire familial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secteurs Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choisissez votre secteur
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cliquez sur votre commune pour découvrir nos prestations de maçonnerie spécialisées dans votre secteur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Link
                  href={`/secteur/${sector.slug}`}
                  className="block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {sector.name}
                    </h3>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Maçonnerie générale, joints de pierres, extensions
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Votre secteur n'est pas listé ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Nous intervenons dans un rayon de 50km autour de Saint-Malo. 
            Contactez-nous pour connaître nos possibilités d'intervention dans votre commune.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200"
            >
              Nous contacter
            </Link>
            <Link
              href="tel:0648812578"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
            >
              <Phone className="h-4 w-4 mr-2" />
              06 48 81 25 78
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
