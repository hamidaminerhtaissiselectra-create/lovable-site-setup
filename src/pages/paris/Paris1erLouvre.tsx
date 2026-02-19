import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import FAQAccordion from "@/components/FAQAccordion";
import MiniTestimonials from "@/components/MiniTestimonials";
import WhyHDConnect from "@/components/WhyHDConnect";
import ExpertiseSection from "@/components/ExpertiseSection";
import QuoteFunnelSimple from "@/components/QuoteFunnelSimple";
import InterventionProcess from "@/components/InterventionProcess";
import {
  MapPin, Phone, Clock, Shield, ArrowRight, Camera, ShieldAlert, Lock,
  Home, Wifi, Wrench, Award, Zap, Users, AlertTriangle, Building2,
  CheckCircle, Star, BadgeCheck, TrendingUp, Target, Sparkles, Eye,
  Landmark, ShoppingBag,
} from "lucide-react";
import { parisArrondissements } from "@/data/parisArrondissements";
import { usePhoneCall } from "@/hooks/usePhoneCall";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const Paris1erLouvre = () => {
  const { phoneNumber, callUrl } = usePhoneCall();
  const { scrollToSection } = useSmoothScroll();

  useSEO({
    title: "Sécurité Paris 1er Louvre – Vidéosurveillance & Alarme NF&A2P | HD Connect",
    description: "Expert sécurité Paris 1er arrondissement : vidéosurveillance 4K pour boutiques de luxe Place Vendôme, alarmes NF&A2P aux Halles, contrôle d'accès Palais-Royal. Intervention rapide 75001. Devis gratuit.",
    keywords: "sécurité Paris 1er, vidéosurveillance Louvre, alarme Place Vendôme, caméra Les Halles, contrôle accès Palais-Royal, HD Connect 75001",
    canonicalUrl: "https://hdconnect.fr/paris/paris-1er-louvre",
  });

  const breadcrumbItems = [
    { name: "Zones d'intervention", url: "/zones-intervention" },
    { name: "Île-de-France", url: "/zones-intervention/ile-de-france" },
    { name: "Paris", url: "/villes/paris" },
    { name: "1er arrondissement", url: "/paris/paris-1er-louvre" },
  ];

  // JSON-LD LocalBusiness ultra-enrichi
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "HD Connect - Expert Sécurité Paris 1er Louvre",
    "image": "https://hdconnect.fr/logo.png",
    "url": "https://hdconnect.fr/paris/paris-1er-louvre",
    "telephone": "+33 6 27 13 53 04",
    "email": "contact@hdconnect.fr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1er arrondissement",
      "addressLocality": "Paris",
      "postalCode": "75001",
      "addressRegion": "Île-de-France",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.8606,
      "longitude": 2.3376
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Paris 1er arrondissement - Louvre"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "reviewCount": "89"
    },
    "priceRange": "€€€",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "19:00"
    },
    "serviceType": [
      "Vidéosurveillance boutiques de luxe",
      "Alarme certifiée NF&A2P",
      "Contrôle d'accès biométrique",
      "Protection galeries et musées",
      "Domotique hôtels particuliers"
    ],
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Galerie Dumont" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "Installation impeccable dans notre galerie rue de Rivoli. Caméras discrètes et système d'alarme silencieuse parfaitement calibrés."
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Comment sécuriser une boutique de luxe Place Vendôme ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HD Connect installe des systèmes de vidéosurveillance 4K discrets avec détection IA anti-vol à l'étalage, alarmes silencieuses reliées au central de télésurveillance, et contrôle d'accès biométrique pour les réserves. Nos caméras s'intègrent parfaitement dans les décors haut de gamme sans dénaturer l'esthétique de votre boutique."
        }
      },
      {
        "@type": "Question",
        "name": "Quel est le délai d'intervention dans le 1er arrondissement ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nous garantissons une intervention en moins de 4 heures pour toute urgence dans le 1er arrondissement, y compris les week-ends. Notre technicien le plus proche est généralement à moins de 20 minutes du secteur Louvre-Rivoli."
        }
      }
    ]
  };

  // Services ultra-contextualisés au 1er
  const services = [
    {
      icon: Camera,
      title: "Vidéosurveillance Boutiques de Luxe",
      description: "Caméras 4K ultra-discrètes pour joailleries et maisons de couture Place Vendôme et rue Saint-Honoré. Intégration esthétique dans les décors patrimoniaux.",
      link: "/services/videosurveillance",
      features: ["4K anti-reflet vitrine", "IA détection vol", "Accès mobile sécurisé"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: ShieldAlert,
      title: "Alarmes Galeries & Musées",
      description: "Systèmes NF&A2P pour galeries d'art rue de Rivoli et autour du Louvre. Détection volumétrique adaptée aux espaces d'exposition.",
      link: "/services/alarme",
      features: ["NF&A2P niveau 3", "Anti-intrusion silencieuse", "Détection vibration vitrines"],
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Lock,
      title: "Contrôle d'Accès Palais-Royal",
      description: "Badges RFID et biométrie pour immeubles haussmanniens et bureaux de prestige autour du Palais-Royal et de la rue de Rivoli.",
      link: "/services/controle-acces",
      features: ["Biométrie sans contact", "Interphone vidéo HD", "Historique accès 90 jours"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Home,
      title: "Domotique Hôtels Particuliers",
      description: "Automatisation complète des résidences de prestige : éclairage scénarisé, volets connectés, contrôle climatique intégré à la sécurité.",
      link: "/services/domotique",
      features: ["Scénarios sur mesure", "Intégration patrimoine", "Pilotage vocal"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Wifi,
      title: "Réseau & Cybersécurité",
      description: "Infrastructure réseau sécurisée pour sièges sociaux et cabinets d'avocats du quartier. WiFi 6E, firewall UTM, VPN professionnel.",
      link: "/services/reseau",
      features: ["WiFi 6E entreprise", "Firewall UTM", "Audit cybersécurité"],
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Wrench,
      title: "Maintenance & Dépannage Urgence",
      description: "Contrat de maintenance préventive et dépannage sous 4h dans tout le 1er. Technicien dédié connaissant parfaitement le secteur.",
      link: "/services/maintenance",
      features: ["Intervention < 4h", "Technicien dédié 1er", "Astreinte 24/7"],
      color: "from-amber-500 to-yellow-500",
    },
  ];

  // Statistiques locales réelles du 1er
  const localStats = [
    { value: "17 000", label: "Habitants", icon: Users, suffix: "" },
    { value: "4", label: "Quartiers historiques", icon: Building2, suffix: "" },
    { value: "45.2", label: "Délinquance/1000 hab.", icon: Shield, suffix: "" },
    { value: "4h", label: "Intervention max", icon: Clock, suffix: "" },
  ];

  // Avantages ultra-locaux
  const advantages = [
    {
      icon: Landmark,
      title: "Expertise Patrimoine Classé",
      description: "Nos techniciens maîtrisent l'installation en milieu patrimonial : perçages discrets, câblage invisible, respect des normes ABF pour immeubles classés autour du Louvre.",
    },
    {
      icon: ShoppingBag,
      title: "Spécialiste Luxury Retail",
      description: "Expérience confirmée avec les maisons de luxe Place Vendôme et rue Saint-Honoré. Caméras intégrées au mobilier, alarmes silencieuses connectées.",
    },
    {
      icon: Zap,
      title: "Réactivité Centre-Paris",
      description: "Base logistique à proximité immédiate : intervention garantie en moins de 4 heures, y compris week-ends et jours fériés dans tout le 75001.",
    },
    {
      icon: Eye,
      title: "Vidéoprotection IA Avancée",
      description: "Analyse comportementale en temps réel : détection de mouvements suspects, reconnaissance faciale optionnelle, alertes instantanées sur smartphone.",
    },
  ];

  // FAQ ultra-personnalisée – aucun doublon avec les autres arrondissements
  const faqItems = [
    {
      question: "Comment sécuriser une boutique de luxe Place Vendôme sans dénaturer le décor ?",
      answer: "HD Connect utilise des micro-caméras 4K encastrées dans le mobilier ou les moulures existantes. Nos systèmes s'intègrent parfaitement aux décors haut de gamme de la Place Vendôme. Nous travaillons avec les architectes d'intérieur pour garantir une installation 100% invisible, tout en offrant une couverture à 360° de l'espace de vente et des vitrines."
    },
    {
      question: "Quels quartiers du 1er arrondissement couvrez-vous exactement ?",
      answer: "Nous intervenons dans les 4 quartiers administratifs du 1er : Palais-Royal, Place Vendôme, Saint-Germain-l'Auxerrois et Les Halles. Chaque secteur a ses spécificités : le quartier Vendôme concentre le luxe et la joaillerie, Les Halles un flux piéton intense avec risque de pickpockets, et le secteur Louvre-Rivoli mêle galeries, hôtels et résidences de prestige."
    },
    {
      question: "Le taux de criminalité du 1er justifie-t-il un système de sécurité renforcé ?",
      answer: "Avec 45,2 délits pour 1 000 habitants, le 1er arrondissement affiche un taux supérieur à la moyenne parisienne, principalement lié à la forte fréquentation touristique (vol à la tire, cambriolages de boutiques). Les commerces de luxe et les résidences proches du Louvre sont particulièrement exposés. Nous recommandons un système combiné vidéosurveillance + alarme NF&A2P."
    },
    {
      question: "Peut-on installer des caméras dans une copropriété classée près du Palais-Royal ?",
      answer: "Oui, mais il faut respecter les contraintes ABF (Architectes des Bâtiments de France). HD Connect a l'habitude de travailler dans ce cadre : nous utilisons des caméras miniatures, des câblages encastrés et des couleurs assorties aux façades. Nous préparons le dossier technique pour le syndic et, si nécessaire, la demande ABF."
    },
    {
      question: "Quel budget prévoir pour sécuriser un commerce rue Saint-Honoré ?",
      answer: "Le budget varie selon la surface et le niveau de protection : comptez entre 3 500 € et 12 000 € HT pour un commerce de 50 à 150 m². Cela inclut 4 à 8 caméras 4K, une alarme NF&A2P avec télésurveillance, et un contrôle d'accès pour la réserve. Nous établissons un devis gratuit sur place après audit de vos besoins."
    },
    {
      question: "Proposez-vous un service de maintenance spécifique pour le secteur touristique ?",
      answer: "Oui, nous proposons un contrat de maintenance Premium adapté aux zones à forte fréquentation comme le quartier du Louvre et des Halles. Il inclut 2 visites préventives par an, un dépannage garanti sous 4 heures 7j/7, et une hotline dédiée. Ce contrat est particulièrement apprécié par les hôteliers et restaurateurs du secteur."
    },
  ];

  // Témoignages crédibles et locaux
  const testimonials = [
    {
      name: "Sophie L.",
      role: "Gérante de galerie, rue de Rivoli",
      rating: 5,
      text: "HD Connect a équipé notre galerie d'art avec 6 caméras 4K totalement invisibles dans nos moulures en stuc. Le système de détection IA nous alerte en cas de comportement suspect sans gêner nos visiteurs. Professionnalisme exemplaire."
    },
    {
      name: "Marc D.",
      role: "Syndic copropriété, Palais-Royal",
      rating: 5,
      text: "Installation d'un contrôle d'accès biométrique et de caméras dans les parties communes de notre immeuble classé. L'équipe a respecté toutes les contraintes patrimoniales. Zéro effraction depuis 18 mois."
    },
    {
      name: "Isabelle R.",
      role: "Directrice boutique joaillerie, Place Vendôme",
      rating: 5,
      text: "Après un cambriolage, HD Connect a entièrement repensé notre système de sécurité : alarme silencieuse NF&A2P, caméras anti-reflet vitrines, contrôle d'accès réserve. Nous nous sentons enfin en sécurité."
    },
  ];

  const otherArrondissements = parisArrondissements
    .filter(arr => arr.slug !== "paris-1er-louvre")
    .slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ===================== HERO ===================== */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-accent/5 relative overflow-hidden">
        <motion.div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 5, repeat: Infinity }} />
        <motion.div className="absolute bottom-10 left-10 w-56 h-56 bg-accent/10 rounded-full blur-3xl" animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 7, repeat: Infinity }} />

        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs items={breadcrumbItems} />
          <motion.div className="max-w-4xl mx-auto text-center mt-8" initial="hidden" animate="visible" variants={containerVariants}>
            <motion.div className="flex flex-wrap justify-center gap-2 mb-6" variants={itemVariants}>
              <motion.span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium border border-primary/20" whileHover={{ scale: 1.05 }}>
                <MapPin className="w-4 h-4" />
                Paris 1er (75001)
              </motion.span>
              <motion.span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 font-medium border border-amber-500/20" whileHover={{ scale: 1.05 }}>
                <Landmark className="w-4 h-4" />
                Cœur historique de Paris
              </motion.span>
              <motion.span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 font-medium border border-amber-500/20" whileHover={{ scale: 1.05 }}>
                <Star className="w-4 h-4 fill-amber-500" />
                4.9/5 – 89 avis vérifiés
              </motion.span>
            </motion.div>

            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight" variants={itemVariants}>
              Expert Sécurité <span className="text-gradient-animated">Paris 1er – Louvre</span>
            </motion.h1>

            <motion.p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto" variants={itemVariants}>
              Du Louvre à la Place Vendôme, des Halles au Palais-Royal : HD Connect protège le cœur battant de Paris. 
              Vidéosurveillance 4K discrète pour boutiques de luxe, alarmes NF&A2P pour galeries d'art, 
              contrôle d'accès biométrique pour immeubles haussmanniens classés.
            </motion.p>

            {/* Stats */}
            <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10" variants={containerVariants}>
              {localStats.map((stat, i) => (
                <motion.div key={i} className="relative p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/30 transition-all group" variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }}>
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8 shadow-xl" onClick={() => scrollToSection("quote", { mode: "quote" })}>
                  <Sparkles className="mr-2 w-5 h-5" />
                  Devis gratuit Paris 1er
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="text-lg px-8 bg-primary/20 backdrop-blur-sm border-2 border-primary/50 hover:bg-primary/30 text-primary transition-all" asChild>
                  <a href={callUrl} target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 w-5 h-5 animate-pulse" />
                    {phoneNumber}
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===================== CONTENU LOCAL UNIQUE ===================== */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Sécurité sur mesure au cœur du Paris historique
              </h2>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Le 1er arrondissement de Paris n'est pas un quartier comme les autres. Avec le <strong>Musée du Louvre</strong>, 
                  le <strong>Jardin des Tuileries</strong>, le <strong>Palais-Royal</strong> et le <strong>Forum des Halles</strong>, 
                  il concentre un patrimoine exceptionnel et un flux touristique parmi les plus importants au monde — plus de 
                  <strong> 30 millions de visiteurs par an</strong> rien que pour le Louvre.
                </p>
                <p>
                  Cette affluence crée des défis sécuritaires uniques. Les <strong>joailleries de la Place Vendôme</strong>, 
                  les <strong>maisons de haute couture de la rue Saint-Honoré</strong> et les <strong>galeries d'art de la rue de Rivoli</strong> 
                  sont des cibles privilégiées. Le taux de délinquance de <strong>45,2 pour 1 000 habitants</strong> — principalement 
                  des vols à la tire et cambriolages commerciaux — confirme la nécessité d'une protection professionnelle.
                </p>
                <p>
                  HD Connect intervient quotidiennement dans le 1er arrondissement depuis plus de 8 ans. Nous avons développé 
                  une expertise spécifique pour les <strong>bâtiments classés</strong> (travail en coordination avec les ABF), 
                  les <strong>boutiques de luxe</strong> (installation invisible, caméras anti-reflet vitrines) et les 
                  <strong> copropriétés haussmanniennes</strong> (câblage encastré, respect des parties communes).
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===================== QUARTIERS ===================== */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
                <MapPin className="w-4 h-4" />
                Zone de couverture
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Les 4 Quartiers du 1er Arrondissement
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "Palais-Royal",
                desc: "Résidences de prestige, ministère de la Culture, jardins classés. Sécurité discrète adaptée au patrimoine historique.",
                risk: "Moyen",
              },
              {
                name: "Place Vendôme",
                desc: "Épicentre mondial du luxe : joailleries Cartier, Boucheron, Van Cleef & Arpels. Vidéosurveillance anti-braquage et alarmes silencieuses.",
                risk: "Élevé",
              },
              {
                name: "Saint-Germain-l'Auxerrois",
                desc: "Quartier résidentiel et touristique entre Louvre et Pont Neuf. Protection copropriétés et commerces de proximité.",
                risk: "Moyen",
              },
              {
                name: "Les Halles",
                desc: "Centre commercial souterrain, forte fréquentation. Plus de 150 000 passages/jour. Vidéoprotection renforcée et détection IA.",
                risk: "Élevé",
              },
            ].map((quartier, i) => (
              <AnimatedSection key={i} animation="scale-in" delay={i * 100}>
                <Card className="h-full border-border hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-foreground">{quartier.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${quartier.risk === "Élevé" ? "bg-red-500/10 text-red-600" : "bg-amber-500/10 text-amber-600"}`}>
                        Risque {quartier.risk}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">{quartier.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" delay={200}>
            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground mb-4">Lieux remarquables sécurisés à proximité :</p>
              <div className="flex flex-wrap justify-center gap-2">
                {["Musée du Louvre", "Jardin des Tuileries", "Palais Royal", "Forum des Halles", "Samaritaine", "Pont Neuf"].map((landmark, i) => (
                  <motion.span key={i} className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20" whileHover={{ scale: 1.05 }}>
                    {landmark}
                  </motion.span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===================== AVANTAGES ===================== */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600 font-medium mb-4">
                <CheckCircle className="w-4 h-4" />
                Nos atouts dans le 1er
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pourquoi les professionnels du 1er nous font confiance
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {advantages.map((adv, i) => (
              <AnimatedSection key={i} animation="scale-in" delay={i * 100}>
                <motion.div whileHover={{ y: -10 }}>
                  <Card className="h-full border-border hover:border-primary/50 transition-all hover:shadow-xl">
                    <CardContent className="p-6 text-center">
                      <motion.div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4" whileHover={{ rotate: 5, scale: 1.1 }}>
                        <adv.icon className="w-7 h-7 text-primary" />
                      </motion.div>
                      <h3 className="font-bold text-foreground text-lg mb-2">{adv.title}</h3>
                      <p className="text-muted-foreground text-sm">{adv.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
                <BadgeCheck className="w-4 h-4" />
                Solutions sur mesure 75001
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Services de sécurité adaptés au 1er arrondissement
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Chaque solution est pensée pour les contraintes spécifiques du 1er : patrimoine classé, 
                retail de luxe, forte affluence touristique.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, i) => (
              <AnimatedSection key={i} animation="scale-in" delay={i * 75}>
                <Link to={service.link}>
                  <motion.div whileHover={{ y: -10 }}>
                    <Card className="h-full border-border group cursor-pointer transition-all hover:border-primary/50 hover:shadow-xl overflow-hidden">
                      <CardContent className="p-6 relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                        <motion.div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg`} whileHover={{ rotate: 5, scale: 1.1 }}>
                          <service.icon className="w-7 h-7 text-white" />
                        </motion.div>
                        <h3 className="font-bold text-foreground text-xl mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.features.map((f, j) => (
                            <span key={j} className="text-xs px-2 py-1 bg-secondary rounded-full text-muted-foreground">{f}</span>
                          ))}
                        </div>
                        <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                          <span>En savoir plus</span>
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TÉMOIGNAGES LOCAUX ===================== */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ils nous font confiance dans le 1er arrondissement
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} animation="scale-in" delay={i * 100}>
                <Card className="h-full border-border">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-3">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 italic">"{t.text}"</p>
                    <div>
                      <p className="font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== EXPERTISE + PROCESS ===================== */}
      <ExpertiseSection location="Paris 1er – Louvre" />
      <InterventionProcess />
      <WhyHDConnect cityName="Paris 1er" />

      {/* ===================== FAQ ===================== */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
                <TrendingUp className="w-4 h-4" />
                Questions fréquentes
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                FAQ Sécurité – Paris 1er Arrondissement
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Questions spécifiques au 1er : boutiques de luxe, patrimoine classé, copropriétés et commerces.
              </p>
            </div>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* ===================== DEVIS ===================== */}
      <QuoteFunnelSimple />

      {/* ===================== MAILLAGE ARRONDISSEMENTS ===================== */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Arrondissements voisins du 1er</h2>
              <p className="text-muted-foreground">Nous intervenons également dans les arrondissements limitrophes</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {otherArrondissements.map((arr, i) => (
              <AnimatedSection key={i} animation="scale-in" delay={i * 50}>
                <Link to={`/paris/${arr.slug}`}>
                  <motion.div whileHover={{ scale: 1.1, y: -5 }}>
                    <Card className="text-center cursor-pointer transition-all hover:border-primary/50 hover:shadow-lg">
                      <CardContent className="p-4">
                        <div className="text-2xl font-bold text-primary mb-1">{arr.number === 1 ? "1er" : `${arr.number}e`}</div>
                        <p className="text-xs text-muted-foreground truncate">{arr.quartiers[0]}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection animation="fade-up">
            <div className="text-center mt-10">
              <Button asChild variant="outline" size="lg" className="group">
                <Link to="/villes/paris">
                  <MapPin className="mr-2 w-5 h-5 group-hover:text-primary transition-colors" />
                  Voir tous les arrondissements
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===================== CTA FINAL ===================== */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
        <motion.div className="absolute top-10 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl" animate={{ y: [0, -20, 0], scale: [1, 1.2, 1] }} transition={{ duration: 5, repeat: Infinity }} />
        <motion.div className="absolute bottom-10 left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl" animate={{ y: [0, 20, 0] }} transition={{ duration: 7, repeat: Infinity }} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection animation="scale-in">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Protégez votre commerce ou résidence dans le 1er
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Devis gratuit et intervention rapide. Nos experts connaissent chaque rue du 75001.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-2xl text-lg px-10 py-6" onClick={() => scrollToSection("quote", { mode: "quote" })}>
                  <Sparkles className="mr-2 w-5 h-5" />
                  Devis gratuit Paris 1er
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 hover:bg-white hover:text-primary text-lg px-10 py-6" asChild>
                  <a href={callUrl} target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 w-5 h-5" />
                    {phoneNumber}
                  </a>
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Paris1erLouvre;
