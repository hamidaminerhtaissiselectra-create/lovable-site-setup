import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import FAQAccordion from "@/components/FAQAccordion";
import LocalServiceLinks from "@/components/LocalServiceLinks";
import MiniTestimonials from "@/components/MiniTestimonials";
import WhyHDConnect from "@/components/WhyHDConnect";
import CityHeroParallax from "@/components/city/CityHeroParallax";
import CityLocalContent from "@/components/city/CityLocalContent";
import CityServicesGrid from "@/components/city/CityServicesGrid";
import CityCoverageSection from "@/components/city/CityCoverageSection";
import {
  Phone,
  ArrowRight,
  Building2,
  Package,
  Settings,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { CityData } from "@/data/citiesData";
import { getCityGeo } from "@/data/cityGeoData";
import { getCityFAQ } from "@/data/cityContentGenerator";
import { usePhoneCall } from "@/hooks/usePhoneCall";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";


interface CityServicePageProps {
  city: CityData;
}

const CityServicePage = ({ city }: CityServicePageProps) => {
  const { phoneNumber, callUrl } = usePhoneCall();
  const { scrollToSection } = useSmoothScroll();

  const cityGeo = getCityGeo(city.slug, city.departmentCode);

  useSEO({
    title: `Services de sécurité à ${city.name} (${city.departmentCode}) – Vidéosurveillance, Alarme & Domotique | HD Connect`,
    description: `Installation de vidéosurveillance et alarmes à ${city.name} par HD Connect. Caméras IA 4K, alarmes NF&A2P, contrôle d'accès biométrique. Intervention rapide en ${city.department} (${city.region}). Devis gratuit.`,
    keywords: `sécurité ${city.name}, vidéosurveillance ${city.name}, alarme ${city.name}, domotique ${city.name}, contrôle accès ${city.name}, installation caméra ${city.departmentCode}, HD Connect ${city.region}`,
    canonicalUrl: `https://hdconnect.fr/villes/${city.slug}`,
  });

  const breadcrumbItems = [
    { name: "Zones d'intervention", url: "/zones-intervention" },
    { name: city.region, url: `/zones-intervention/${city.regionSlug}` },
    { name: city.name, url: `/villes/${city.slug}` },
  ];

  // Prestations transversales
  const prestations = [
    {
      icon: Package,
      title: "Installation",
      description: `Installation professionnelle de tous vos équipements de sécurité à ${city.name}.`,
      link: "/services/installation"
    },
    {
      icon: Settings,
      title: "Dépannage",
      description: `Intervention rapide pour dépannage et réparation à ${city.name}.`,
      link: "/services/depannage"
    },
    {
      icon: Truck,
      title: "Location",
      description: `Location de matériel de sécurité pour événements et chantiers à ${city.name}.`,
      link: "/services/location"
    }
  ];

  // FAQ ultra-personnalisée par ville
  const faqItems = getCityFAQ(city);

  // JSON-LD enrichi avec Place + GeoCoordinates (conforme au document d'optimisation SEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `HD Connect - Sécurité ${city.name}`,
    "image": "https://hdconnect.fr/logo.png",
    "url": `https://hdconnect.fr/villes/${city.slug}`,
    "telephone": "+33 6 27 13 53 04",
    "email": "contact@hdconnect.fr",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "postalCode": cityGeo.postalCode,
      "addressRegion": city.region,
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": cityGeo.latitude,
      "longitude": cityGeo.longitude
    },
    "areaServed": {
      "@type": "City",
      "name": city.name
    },
    "priceRange": "€€",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "19:00"
    },
    "serviceType": [
      "Installation vidéosurveillance",
      "Installation alarme",
      "Contrôle d'accès",
      "Domotique",
      "Réseau et câblage",
      "Maintenance sécurité",
      "Antenne satellite",
      "Portails et parking"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero Section avec Parallax */}
      <CityHeroParallax city={city} breadcrumbItems={breadcrumbItems} />

      {/* Grille des Services avec animations */}
      <CityServicesGrid city={city} />

      {/* Contenu local ciblé par ville/département */}
      <CityLocalContent city={city} />

      {/* Prestations Transversales */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Nos Prestations à {city.name}
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {prestations.map((prestation, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                <Link to={prestation.link}>
                  <Card className="hover-lift h-full border-border group cursor-pointer transition-all hover:border-primary/50">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                        <prestation.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">{prestation.title}</h3>
                      <p className="text-muted-foreground text-sm">{prestation.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi HD Connect - orienté problèmes */}
      <WhyHDConnect cityName={city.name} />

      {/* Mini Témoignages */}
      <MiniTestimonials location={city.name} />

      {/* Zone Coverage avec Parallax + Villes voisines */}
      <CityCoverageSection city={city} />

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Questions Fréquentes - {city.name}
              </h2>
            </div>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Prêt à Sécuriser Votre Propriété à {city.name} ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Contactez-nous dès maintenant pour une étude personnalisée et un devis gratuit. 
              Nos experts sont à votre disposition pour répondre à toutes vos questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                onClick={() => scrollToSection("quote", { mode: "quote" })}
              >
                Demander un devis gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                className="text-lg px-8 bg-primary/20 backdrop-blur-sm border-2 border-primary/50 hover:bg-primary/30 text-primary transition-all hover:scale-105"
                asChild
              >
                <a href={callUrl} target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 w-5 h-5" />
                  {phoneNumber}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Maillage interne local */}
      <LocalServiceLinks 
        cityName={city.name} 
        regionName={city.region} 
        regionSlug={city.regionSlug} 
      />
      <Footer />
    </div>
  );
};

export default CityServicePage;
