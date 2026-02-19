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
import WhyHDConnect from "@/components/WhyHDConnect";
import ExpertiseSection from "@/components/ExpertiseSection";
import QuoteFunnelSimple from "@/components/QuoteFunnelSimple";
import InterventionProcess from "@/components/InterventionProcess";
import {
  MapPin, Phone, Clock, Shield, ArrowRight, Camera, ShieldAlert, Lock,
  Home, Wifi, Wrench, Users, Building2, CheckCircle, Star, BadgeCheck,
  TrendingUp, Sparkles, Briefcase, Server, CreditCard,
} from "lucide-react";
import { parisArrondissements } from "@/data/parisArrondissements";
import { usePhoneCall } from "@/hooks/usePhoneCall";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const Paris2eBourse = () => {
  const { phoneNumber, callUrl } = usePhoneCall();
  const { scrollToSection } = useSmoothScroll();

  useSEO({
    title: "Sécurité Paris 2e Bourse – Vidéosurveillance Bureaux & Alarme | HD Connect",
    description: "Expert sécurité Paris 2e : vidéosurveillance bureaux quartier de la Bourse, alarmes Sentier, contrôle d'accès Grands Boulevards. Protection sièges sociaux et startups 75002. Devis gratuit.",
    keywords: "sécurité Paris 2e, vidéosurveillance Bourse, alarme Sentier, caméra Montorgueil, contrôle accès bureaux 75002, HD Connect Paris 2",
    canonicalUrl: "https://hdconnect.fr/paris/paris-2e-bourse",
  });

  const breadcrumbItems = [
    { name: "Zones d'intervention", url: "/zones-intervention" },
    { name: "Île-de-France", url: "/zones-intervention/ile-de-france" },
    { name: "Paris", url: "/villes/paris" },
    { name: "2e arrondissement", url: "/paris/paris-2e-bourse" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "HD Connect - Expert Sécurité Paris 2e Bourse",
    "image": "https://hdconnect.fr/logo.png",
    "url": "https://hdconnect.fr/paris/paris-2e-bourse",
    "telephone": "+33 6 27 13 53 04",
    "email": "contact@hdconnect.fr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2e arrondissement",
      "addressLocality": "Paris",
      "postalCode": "75002",
      "addressRegion": "Île-de-France",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.8688,
      "longitude": 2.3411
    },
    "areaServed": { "@type": "AdministrativeArea", "name": "Paris 2e arrondissement - Bourse" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "bestRating": "5", "reviewCount": "67" },
    "priceRange": "€€€",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00", "closes": "19:00"
    },
    "serviceType": ["Vidéosurveillance bureaux", "Contrôle d'accès sièges sociaux", "Alarme commerces Sentier", "Cybersécurité entreprises", "Réseau fibre optique"]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question", "name": "Comment sécuriser un open space dans le quartier de la Bourse ?",
        "acceptedAnswer": { "@type": "Answer", "text": "HD Connect installe des systèmes de contrôle d'accès par badge et biométrie aux entrées, des caméras discrètes aux points stratégiques, et des alarmes périmétrique. Pour les open spaces, nous recommandons des caméras dôme 360° avec détection de présence hors horaires." }
      }
    ]
  };

  const services = [
    {
      icon: Camera, title: "Vidéosurveillance Sièges Sociaux",
      description: "Caméras professionnelles pour bureaux et sièges sociaux du quartier Bourse. Surveillance 24/7 des accès, parkings et espaces communs avec analyse IA.",
      link: "/services/videosurveillance", features: ["Dôme 360° PTZ", "IA détection intrusion", "Cloud sécurisé"], color: "from-blue-500 to-cyan-500",
    },
    {
      icon: ShieldAlert, title: "Alarmes Commerces du Sentier",
      description: "Systèmes NF&A2P pour les centaines de commerces textile du Sentier et les boutiques de la rue Montorgueil. Protection anti-intrusion et anti-incendie.",
      link: "/services/alarme", features: ["NF&A2P détection double", "Anti-incendie", "Télésurveillance 24/7"], color: "from-red-500 to-orange-500",
    },
    {
      icon: Lock, title: "Contrôle d'Accès Entreprises",
      description: "Solutions multi-sites pour sièges sociaux : badges RFID, biométrie, gestion des visiteurs, intégration RH. Adapté aux espaces de coworking et incubateurs.",
      link: "/services/controle-acces", features: ["Multi-sites centralisé", "Gestion visiteurs", "API intégration RH"], color: "from-green-500 to-emerald-500",
    },
    {
      icon: Server, title: "Réseau & Infrastructure IT",
      description: "Câblage structuré, fibre optique, WiFi 6E pour les immeubles de bureaux du 2e. Firewall UTM et VPN sécurisé pour les données sensibles.",
      link: "/services/reseau", features: ["Fibre dédiée", "WiFi 6E enterprise", "Firewall UTM"], color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Home, title: "Domotique Résidentielle",
      description: "Automatisation pour les appartements du quartier Montorgueil et Grands Boulevards. Éclairage, volets, thermostat connectés à la sécurité.",
      link: "/services/domotique", features: ["Scénarios absence", "Détection fuite eau", "Pilotage vocal"], color: "from-purple-500 to-pink-500",
    },
    {
      icon: Wrench, title: "Maintenance Contrats Pro",
      description: "Contrats de maintenance adaptés aux entreprises : intervention sous 4h, maintenance préventive trimestrielle, rapport d'état annuel.",
      link: "/services/maintenance", features: ["SLA 4h garanti", "Préventif trimestriel", "Rapport annuel"], color: "from-amber-500 to-yellow-500",
    },
  ];

  const localStats = [
    { value: "22 000", label: "Habitants", icon: Users, suffix: "" },
    { value: "52.1", label: "Délinquance/1000", icon: Shield, suffix: "" },
    { value: "3 200+", label: "Entreprises", icon: Briefcase, suffix: "" },
    { value: "4h", label: "Intervention max", icon: Clock, suffix: "" },
  ];

  const advantages = [
    {
      icon: Briefcase, title: "Expert Sécurité Tertiaire",
      description: "Plus de 200 bureaux et sièges sociaux équipés dans le quartier Bourse-Sentier. Expertise spécifique open spaces, salles serveurs et espaces de coworking.",
    },
    {
      icon: CreditCard, title: "Protection Commerces Sentier",
      description: "Le Sentier concentre des centaines de grossistes textile et showrooms. Nous connaissons les risques spécifiques : vol de marchandises, effraction nocturne, accès non autorisé.",
    },
    {
      icon: TrendingUp, title: "Adaptation Startup Nation",
      description: "Le 2e accueille incubateurs et fintechs. Nos solutions s'adaptent aux croissances rapides : systèmes modulaires, licences évolutives, intégration cloud native.",
    },
    {
      icon: CheckCircle, title: "Connaissance du Tissu Local",
      description: "Des Grands Boulevards à Montorgueil, de la Bourse aux Passages couverts : nous connaissons chaque immeuble, chaque contrainte d'accès, chaque syndic.",
    },
  ];

  const faqItems = [
    {
      question: "Comment sécuriser un plateau de bureaux dans le quartier Bourse ?",
      answer: "HD Connect installe des systèmes intégrés pour plateaux de bureaux : contrôle d'accès badge/biométrie aux entrées principales et zones sensibles (salle serveurs, direction), caméras dôme 360° dans les couloirs et accès, alarme périmétrique désactivée automatiquement aux heures de bureau. Nous proposons aussi la gestion centralisée multi-étages pour les grands sièges sociaux."
    },
    {
      question: "Le quartier du Sentier est-il particulièrement exposé aux cambriolages ?",
      answer: "Oui, le Sentier a historiquement un taux de cambriolage élevé lié à la concentration de stocks textiles de valeur. Avec 52,1 délits/1000 habitants, le 2e arrondissement dépasse la moyenne parisienne. Nous recommandons un système combiné : alarme NF&A2P avec détection volumétrique, vidéosurveillance extérieure avec vision nocturne, et rideau métallique connecté avec capteur d'arrachement."
    },
    {
      question: "Proposez-vous des solutions pour les espaces de coworking du 2e ?",
      answer: "Absolument. Les espaces de coworking ont des besoins spécifiques : accès par QR code temporaire pour les membres, vidéosurveillance des espaces communs sans enregistrement des postes de travail (RGPD), alarme avec désactivation automatique par planning. Nous équipons plusieurs espaces de coworking entre Bourse et Grands Boulevards."
    },
    {
      question: "Comment protéger la salle serveurs d'une fintech du 2e arrondissement ?",
      answer: "Protection multi-couches : contrôle d'accès biométrique (empreinte + badge), détection d'intrusion par rideau infrarouge, vidéosurveillance avec alerte en temps réel, capteurs température/humidité/fumée, onduleur avec alerte panne électrique. Nous assurons aussi la conformité avec les normes PCI-DSS pour les entreprises traitant des données financières."
    },
    {
      question: "Quel budget pour sécuriser un commerce rue Montorgueil ?",
      answer: "Pour un commerce de 30 à 80 m² sur la rue Montorgueil, comptez entre 2 800 € et 7 500 € HT selon le niveau de protection. Une configuration standard inclut 3-5 caméras, une alarme NF&A2P avec sirène intérieure, et un détecteur d'ouverture vitrine. Le devis est gratuit et sans engagement."
    },
    {
      question: "Intervenez-vous dans les Passages couverts (Panoramas, Jouffroy) ?",
      answer: "Oui, nous avons l'habitude de travailler dans les Passages couverts du 2e — structures protégées nécessitant des installations discrètes. Nous utilisons des mini-caméras et des chemins de câbles invisibles adaptés aux verrières et boiseries d'époque. Chaque installation est validée par le gestionnaire du Passage."
    },
  ];

  const testimonials = [
    {
      name: "Thomas B.", role: "DSI, Fintech quartier Bourse",
      rating: 5, text: "HD Connect a sécurisé nos 3 étages de bureaux et notre salle serveurs. Le contrôle d'accès biométrique et la vidéosurveillance IA fonctionnent parfaitement. L'intégration avec notre système RH a été fluide."
    },
    {
      name: "Fatima K.", role: "Gérante textile, rue du Sentier",
      rating: 5, text: "Après deux cambriolages en un an, j'ai fait appel à HD Connect. L'alarme NF&A2P et les caméras ont totalement dissuadé les tentatives. Zéro incident en 14 mois. Service client réactif et pro."
    },
    {
      name: "Pierre-Antoine M.", role: "Gérant restaurant, rue Montorgueil",
      rating: 5, text: "Installation de 4 caméras et d'une alarme pour notre restaurant. L'équipe a travaillé le lundi (jour de fermeture) sans perturber notre activité. Application mobile très pratique pour surveiller le soir."
    },
  ];

  const otherArr = parisArrondissements.filter(a => a.slug !== "paris-2e-bourse").slice(0, 6);

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-accent/5 relative overflow-hidden">
        <motion.div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 5, repeat: Infinity }} />
        <motion.div className="absolute bottom-10 left-10 w-56 h-56 bg-accent/10 rounded-full blur-3xl" animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 7, repeat: Infinity }} />

        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs items={breadcrumbItems} />
          <motion.div className="max-w-4xl mx-auto text-center mt-8" initial="hidden" animate="visible" variants={containerVariants}>
            <motion.div className="flex flex-wrap justify-center gap-2 mb-6" variants={itemVariants}>
              <motion.span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium border border-primary/20" whileHover={{ scale: 1.05 }}>
                <MapPin className="w-4 h-4" /> Paris 2e (75002)
              </motion.span>
              <motion.span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 font-medium border border-blue-500/20" whileHover={{ scale: 1.05 }}>
                <Briefcase className="w-4 h-4" /> Quartier d'affaires & Sentier
              </motion.span>
              <motion.span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 font-medium border border-amber-500/20" whileHover={{ scale: 1.05 }}>
                <Star className="w-4 h-4 fill-amber-500" /> 4.8/5 – 67 avis
              </motion.span>
            </motion.div>

            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight" variants={itemVariants}>
              Expert Sécurité <span className="text-gradient-animated">Paris 2e – Bourse</span>
            </motion.h1>

            <motion.p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto" variants={itemVariants}>
              Du Palais Brongniart aux ateliers du Sentier, de la rue Montorgueil aux Grands Boulevards : 
              HD Connect sécurise le quartier financier et commerçant de Paris. Solutions sur mesure pour 
              sièges sociaux, commerces textile, restaurants et fintechs du 75002.
            </motion.p>

            <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10" variants={containerVariants}>
              {localStats.map((stat, i) => (
                <motion.div key={i} className="p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/30 transition-all group" variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }}>
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8 shadow-xl" onClick={() => scrollToSection("quote", { mode: "quote" })}>
                  <Sparkles className="mr-2 w-5 h-5" /> Devis gratuit Paris 2e <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="text-lg px-8 bg-primary/20 backdrop-blur-sm border-2 border-primary/50 hover:bg-primary/30 text-primary" asChild>
                  <a href={callUrl} target="_blank" rel="noopener noreferrer"><Phone className="mr-2 w-5 h-5 animate-pulse" />{phoneNumber}</a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CONTENU LOCAL UNIQUE */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Le 2e arrondissement : un concentré d'enjeux sécuritaires
              </h2>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Plus petit arrondissement de Paris avec seulement <strong>22 000 habitants</strong>, le 2e compense 
                  sa taille par une densité économique exceptionnelle. Le <strong>quartier de la Bourse</strong> — même 
                  si le Palais Brongniart n'accueille plus la Bourse de Paris — reste un pôle financier majeur avec 
                  des dizaines de sièges sociaux de fintechs, cabinets de conseil et sociétés de gestion.
                </p>
                <p>
                  Le <strong>Sentier</strong>, ancien cœur du textile parisien, vit une double réalité : d'un côté, 
                  les grossistes historiques avec leurs stocks de valeur exposés aux cambriolages nocturnes ; de l'autre, 
                  les startups et incubateurs de la <strong>"Silicon Sentier"</strong> qui ont besoin de protéger 
                  leurs données et leurs équipements informatiques.
                </p>
                <p>
                  La <strong>rue Montorgueil</strong>, artère piétonne animée, concentre restaurants, fromageries et 
                  commerces de bouche dont la fréquentation intense nécessite une vidéoprotection adaptée. 
                  Les <strong>Grands Boulevards</strong> et les <strong>Passages couverts</strong> (Panoramas, Jouffroy) 
                  complètent un paysage urbain où patrimoine architectural et modernité cohabitent — avec des contraintes 
                  d'installation spécifiques que HD Connect maîtrise parfaitement.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* QUARTIERS */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4"><MapPin className="w-4 h-4" /> Zone de couverture</div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Les 4 Quartiers du 2e Arrondissement</h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Bourse", desc: "Pôle financier, sièges sociaux, cabinets d'avocats et de conseil. Sécurité périmétrique bureaux, salles serveurs et archives.", risk: "Moyen" },
              { name: "Sentier", desc: "Grossistes textile et startups tech cohabitent. Risque cambriolage élevé pour les stocks. Protection anti-intrusion renforcée.", risk: "Élevé" },
              { name: "Montorgueil", desc: "Rue piétonne commerçante, restaurants gastronomiques, forte affluence. Vidéoprotection extérieure et alarmes anti-vol.", risk: "Moyen" },
              { name: "Grands Boulevards", desc: "Théâtres, cinémas, commerces et flux piétons importants. Passages couverts classés nécessitant des installations discrètes.", risk: "Moyen" },
            ].map((q, i) => (
              <AnimatedSection key={i} animation="scale-in" delay={i * 100}>
                <Card className="h-full border-border hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-foreground">{q.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${q.risk === "Élevé" ? "bg-red-500/10 text-red-600" : "bg-amber-500/10 text-amber-600"}`}>Risque {q.risk}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{q.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground mb-4">Lieux remarquables :</p>
              <div className="flex flex-wrap justify-center gap-2">
                {["Palais Brongniart", "Passage des Panoramas", "Bibliothèque Nationale", "Rue Montorgueil", "Passage Jouffroy", "Théâtre des Variétés"].map((l, i) => (
                  <motion.span key={i} className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20" whileHover={{ scale: 1.05 }}>{l}</motion.span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* AVANTAGES */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600 font-medium mb-4"><CheckCircle className="w-4 h-4" /> Nos atouts dans le 2e</div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Pourquoi les entreprises du 2e nous choisissent</h2>
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

      {/* SERVICES */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4"><BadgeCheck className="w-4 h-4" /> Solutions 75002</div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nos services adaptés au 2e arrondissement</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Solutions pensées pour les bureaux, commerces textile et restaurants du quartier Bourse-Sentier-Montorgueil.</p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((s, i) => (
              <AnimatedSection key={i} animation="scale-in" delay={i * 75}>
                <Link to={s.link}>
                  <motion.div whileHover={{ y: -10 }}>
                    <Card className="h-full border-border group cursor-pointer transition-all hover:border-primary/50 hover:shadow-xl overflow-hidden">
                      <CardContent className="p-6 relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                        <motion.div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4 shadow-lg`} whileHover={{ rotate: 5, scale: 1.1 }}>
                          <s.icon className="w-7 h-7 text-white" />
                        </motion.div>
                        <h3 className="font-bold text-foreground text-xl mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{s.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {s.features.map((f, j) => <span key={j} className="text-xs px-2 py-1 bg-secondary rounded-full text-muted-foreground">{f}</span>)}
                        </div>
                        <div className="flex items-center text-primary font-medium text-sm"><span>En savoir plus</span><ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" /></div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nos clients dans le 2e arrondissement</h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} animation="scale-in" delay={i * 100}>
                <Card className="h-full border-border">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-3">{[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}</div>
                    <p className="text-muted-foreground text-sm mb-4 italic">"{t.text}"</p>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ExpertiseSection location="Paris 2e – Bourse" />
      <InterventionProcess />
      <WhyHDConnect cityName="Paris 2e" />

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4"><TrendingUp className="w-4 h-4" /> Questions fréquentes</div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">FAQ Sécurité – Paris 2e Arrondissement</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Questions spécifiques aux bureaux, commerces du Sentier, fintechs et restaurants Montorgueil.</p>
            </div>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto"><FAQAccordion items={faqItems} /></div>
        </div>
      </section>

      <QuoteFunnelSimple />

      {/* MAILLAGE */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Arrondissements voisins du 2e</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {otherArr.map((arr, i) => (
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
          <AnimatedSection animation="fade-up"><div className="text-center mt-10"><Button asChild variant="outline" size="lg" className="group"><Link to="/villes/paris"><MapPin className="mr-2 w-5 h-5" /> Voir tous les arrondissements <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link></Button></div></AnimatedSection>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
        <motion.div className="absolute top-10 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl" animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity }} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection animation="scale-in">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Sécurisez vos bureaux et commerces du 2e</h2>
            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">Devis gratuit sous 24h. Intervention rapide dans tout le 75002.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }}><Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-2xl text-lg px-10 py-6" onClick={() => scrollToSection("quote", { mode: "quote" })}><Sparkles className="mr-2 w-5 h-5" /> Devis gratuit Paris 2e <ArrowRight className="ml-2 w-5 h-5" /></Button></motion.div>
              <motion.div whileHover={{ scale: 1.05 }}><Button size="lg" className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 hover:bg-white hover:text-primary text-lg px-10 py-6" asChild><a href={callUrl} target="_blank" rel="noopener noreferrer"><Phone className="mr-2 w-5 h-5" />{phoneNumber}</a></Button></motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Paris2eBourse;
