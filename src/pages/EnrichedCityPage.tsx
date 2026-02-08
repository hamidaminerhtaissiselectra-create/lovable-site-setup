import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import {{ Button }} from '@/components/ui/button';
import {{ Card }} from '@/components/ui/card';
import {{ MapPin, Phone, Clock, CheckCircle, Star, MessageSquare }} from 'lucide-react';

interface CityPageProps {{
  city: any;
}}

export const EnrichedCityPage: React.FC<CityPageProps> = ({{ city }}) => {{
  const [activeTab, setActiveTab] = useState('overview');
  const [mapLoaded, setMapLoaded] = useState(false);

  // SEO Schema
  const schemaData = {{
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `HD Connect - Sécurité à ${{city.name}}`,
    "description": city.seo?.metaDescription,
    "url": `https://hdconnect.fr/villes/${{city.slug}}`,
    "telephone": "+33 1 XX XX XX XX",
    "address": {{
      "@type": "PostalAddress",
      "streetAddress": `Adresse à ${{city.name}}`,
      "addressLocality": city.name,
      "postalCode": city.geo?.postalCode,
      "addressCountry": "FR"
    }},
    "areaServed": city.name,
    "priceRange": "€€€",
    "image": "https://hdconnect.fr/logo.png",
    "aggregateRating": {{
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }}
  }};

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{{city.seo?.h1}} | HD Connect</title>
        <meta name="description" content={{city.seo?.metaDescription}} />
        <meta name="keywords" content={{city.seo?.keywords}} />
        <meta property="og:title" content={{city.seo?.h1}} />
        <meta property="og:description" content={{city.seo?.metaDescription}} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://hdconnect.fr/villes/${{city.slug}}`} />
        <script type="application/ld+json">
          {{JSON.stringify(schemaData)}}
        </script>
      </Helmet>

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 md:px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{{city.seo?.h1}}</h1>
            <p className="text-xl mb-8 opacity-90">Protection complète pour votre sécurité à {{city.name}}</p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                Demander un devis gratuit
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-blue-700">
                <Phone className="w-4 h-4 mr-2" />
                Appeler maintenant
              </Button>
            </div>
          </div>
        </section>

        {/* Localisation */}
        <section className="py-12 px-4 md:px-8 bg-blue-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <MapPin className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold">Localisation à {{city.name}}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4">
                  <strong>Région :</strong> {{city.geo?.region}}
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Code postal :</strong> {{city.geo?.postalCode}}
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Population :</strong> {{city.population}} habitants
                </p>
              </div>
              <div id="map" className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-600">Carte interactive à {{city.name}}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Nos Services à {{city.name}}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {{['Vidéosurveillance 4K', 'Alarmes certifiées NF&A2P', 'Contrôle d\'accès biométrique', 'Domotique sécurisée', 'Maintenance 24/7', 'Dépannage d\'urgence'].map((service) => (
                <Card key={{service}} className="p-6 hover:shadow-lg transition">
                  <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{{service}}</h3>
                  <p className="text-gray-600">
                    Service professionnel et fiable à {{city.name}}
                  </p>
                </Card>
              ))}}
            </div>
          </div>
        </section>

        {/* Zones d'intervention */}
        <section className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Zones d'Intervention à {{city.name}}</h2>
            <p className="text-gray-700 mb-6">
              Nous intervenons à {{city.name}} et dans les communes limitrophes suivantes :
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {{city.nearbyTowns?.map((town) => (
                <div key={{town}} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-200">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>{{town}}</span>
                </div>
              ))}}
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Témoignages Clients à {{city.name}}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {{[1, 2, 3, 4, 5].map((i) => (
                <Card key={{i}} className="p-6">
                  <div className="flex gap-1 mb-4">
                    {{[...Array(5)].map((_, j) => (
                      <Star key={{j}} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}}
                  </div>
                  <p className="text-gray-700 mb-4">
                    "Service excellent et professionnel à {{city.name}}. Très satisfait de la qualité du travail."
                  </p>
                  <p className="font-semibold">Client {{i}} - {{city.name}}</p>
                </Card>
              ))}}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Questions Fréquentes - {{city.name}}</h2>
            <div className="space-y-4">
              {{[
                {{
                  q: `Intervenez-vous rapidement à ${{city.name}} ?`,
                  a: `Oui, nous garantissons une intervention en 4 heures pour les urgences à ${{city.name}} et ses environs.`
                }},
                {{
                  q: `Couvrez-vous les communes limitrophes de ${{city.name}} ?`,
                  a: `Oui, nous couvrons {{city.name}} et toutes les communes alentours de plus de 3000 habitants.`
                }},
                {{
                  q: `Vos alarmes sont-elles certifiées ?`,
                  a: `Oui, toutes nos alarmes sont certifiées NF&A2P, la norme française de référence.`
                }},
                {{
                  q: `Comment obtenir un devis à ${{city.name}} ?`,
                  a: `Contactez-nous par téléphone ou via notre formulaire pour un devis gratuit et sans engagement.`
                }}
              ].map((item, i) => (
                <Card key={{i}} className="p-6">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-blue-600" />
                    {{item.q}}
                  </h3>
                  <p className="text-gray-700">{{item.a}}</p>
                </Card>
              ))}}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Sécurisez votre {{city.name}}</h2>
            <p className="text-xl mb-8 opacity-90">
              Contactez nos experts pour une consultation gratuite
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                Demander un devis
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-blue-700 px-8 py-3">
                <Phone className="w-4 h-4 mr-2" />
                +33 1 XX XX XX XX
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}};

export default EnrichedCityPage;
