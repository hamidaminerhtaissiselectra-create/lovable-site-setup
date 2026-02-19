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
  TrendingUp, Sparkles, Palette, Store, Frame,
} from "lucide-react";
import { parisArrondissements } from "@/data/parisArrondissements";
import { usePhoneCall } from "@/hooks/usePhoneCall";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const Paris3eTemple = () => {
  const { phoneNumber, callUrl } = usePhoneCall();
  const { scrollToSection } = useSmoothScroll();

  useSEO({
    title: "Sécurité Paris 3e Temple – Vidéosurveillance Marais & Alarme | HD Connect",
    description: "Expert sécurité Paris 3e Haut-Marais : vidéosurveillance galeries d'art, alarmes NF&A2P boutiques créateurs, contrôle d'accès immeubles Arts-et-Métiers. Intervention rapide 75003. Devis gratuit.",
    keywords: "sécurité Paris 3e, vidéosurveillance Marais, alarme Arts-et-Métiers, caméra galerie art 75003, contrôle accès Enfants Rouges, HD Connect Temple",
    canonicalUrl: "https://hdconnect.fr/paris/paris-3e-temple",
  });

  const breadcrumbItems = [
    { name: "Zones d'intervention", url: "/zones-intervention" },
    { name: "Île-de-France", url: "/zones-intervention/ile-de-france" },
    { name: "Paris", url: "/villes/paris" },
    { name: "3e arrondissement", url: "/paris/paris-3e-temple" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "HD Connect - Expert Sécurité Paris 3e Temple",
    "image": "https://hdconnect.fr/logo.png",
    "url": "https://hdconnect.fr/paris/paris-3e-temple",
    "telephone": "+33 6 27 13 53 04",
    "email": "contact@hdconnect.fr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3e arrondissement",
      "addressLocality": "Paris",
      "postalCode": "75003",
      "addressRegion": "Île-de-France",
      "addressCountry": "FR"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 48.8637, "longitude": 2.3615 },
    "areaServed": { "@type": "AdministrativeArea", "name": "Paris 3e arrondissement - Temple" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "bestRating": "5", "reviewCount": "54" },
    "priceRange": "€€€",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00", "closes": "19:00"
    },
    "serviceType": ["Vidéosurveillance galeries d'art", "Alarme boutiques créateurs", "Contrôle d'accès immeubles Marais", "Protection musées", "Domotique appartements haussmanniens"]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question", "name": "Comment protéger une galerie d'art dans le Haut-Marais ?",
        "acceptedAnswer": { "@type": "Answer", "text": "HD Connect installe des systèmes sur mesure pour galeries : caméras haute résolution à éclairage IR invisible (pas de flash qui altère les œuvres), capteurs de vibration sur les cadres, alarme silencieuse reliée au central de télésurveillance. Nos installations respectent les contraintes muséographiques." }
      }
    ]
  };

  const services = [
    {
      icon: Camera, title: "Vidéosurveillance Galeries & Musées",
      description: "Caméras 4K à éclairage infrarouge invisible pour galeries d'art du Haut-Marais. Aucune altération des œuvres, surveillance continue sans flash ni lumière parasite.",
      link: "/services/videosurveillance", features: ["IR invisible musées", "4K sans distorsion", "Cloud crypté AES-256"], color: "from-blue-500 to-cyan-500",
    },
    {
      icon: ShieldAlert, title: "Alarmes Boutiques Créateurs",
      description: "Protection NF&A2P pour les concept stores et ateliers de créateurs des rues de Turenne, Charlot et Debelleyme. Détection anti-intrusion et anti-bélier vitrine.",
      link: "/services/alarme", features: ["Anti-bélier vitrine", "NF&A2P télésurveillé", "Sirène discrète"], color: "from-red-500 to-orange-500",
    },
    {
      icon: Lock, title: "Contrôle d'Accès Copropriétés",
      description: "Interphones vidéo HD et badges RFID pour les copropriétés haussmanniennes du Marais Nord. Gestion des accès Airbnb et locations courte durée.",
      link: "/services/controle-acces", features: ["Gestion Airbnb", "Interphone vidéo HD", "Code temporaire visiteurs"], color: "from-green-500 to-emerald-500",
    },
    {
      icon: Home, title: "Domotique Haut-Marais",
      description: "Scénarios intelligents pour les appartements haussmanniens : simulation de présence, détection fuite d'eau, volets connectés compatibles façades classées.",
      link: "/services/domotique", features: ["Simulation présence", "Compatible ABF", "Détection fuite eau"], color: "from-purple-500 to-pink-500",
    },
    {
      icon: Wifi, title: "Réseau Ateliers & Studios",
      description: "WiFi 6E et câblage structuré pour les studios de création, photographes et agences de design du quartier Arts-et-Métiers.",
      link: "/services/reseau", features: ["WiFi 6E mesh", "Câblage Cat 6A", "QoS vidéo/photo"], color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Wrench, title: "Maintenance Préventive",
      description: "Contrat adapté aux galeries et commerces : vérification trimestrielle des caméras et capteurs, mise à jour firmware, remplacement préventif batteries.",
      link: "/services/maintenance", features: ["Vérification trimestrielle", "Mise à jour firmware", "Intervention < 4h"], color: "from-amber-500 to-yellow-500",
    },
  ];

  const localStats = [
    { value: "33 000", label: "Habitants", icon: Users, suffix: "" },
    { value: "48.7", label: "Délinquance/1000", icon: Shield, suffix: "" },
    { value: "120+", label: "Galeries d'art", icon: Frame, suffix: "" },
    { value: "4h", label: "Intervention max", icon: Clock, suffix: "" },
  ];

  const advantages = [
    {
      icon: Palette, title: "Spécialiste Milieu Artistique",
      description: "Expertise unique dans la protection d'œuvres d'art : caméras IR invisible, capteurs hygrométrie, détection vibration. Collaboration avec assureurs spécialisés art.",
    },
    {
      icon: Store, title: "Expert Concept Stores",
      description: "Le Haut-Marais concentre les boutiques de créateurs les plus tendance. Nous installons des systèmes anti-vol discrets qui ne dénaturent pas l'expérience client.",
    },
    {
      icon: Building2, title: "Maîtrise du Patrimoine Marais",
      description: "Immeubles classés, hôtels particuliers, cours intérieures : nous maîtrisons les contraintes ABF et les spécificités du bâti ancien du Marais depuis plus de 8 ans.",
    },
    {
      icon: CheckCircle, title: "Gestion Flux Touristiques",
      description: "Le Marais attire des millions de visiteurs annuels. Nos systèmes de vidéoprotection IA distinguent les comportements normaux des comportements suspects dans la foule.",
    },
  ];

  const faqItems = [
    {
      question: "Comment protéger une galerie d'art dans le Haut-Marais sans affecter les œuvres ?",
      answer: "HD Connect utilise exclusivement des caméras à éclairage infrarouge invisible (940 nm) qui n'émettent aucune lumière visible susceptible d'altérer les pigments. Nous installons également des capteurs de vibration sur les cadres et socles, une alarme silencieuse NF&A2P, et un système de détection de mouvements calibré pour ignorer les visiteurs normaux. Chaque installation est validée par un expert en conservation préventive."
    },
    {
      question: "Le Marais Nord est-il sujet aux cambriolages de boutiques ?",
      answer: "Le 3e arrondissement présente un taux de délinquance de 48,7/1 000 habitants, avec une forte composante de vols dans les commerces et à la tire liée à l'affluence touristique. Les boutiques de créateurs des rues Charlot, de Turenne et Debelleyme sont particulièrement ciblées, surtout lors des fermetures estivales. Nous recommandons un système combiné alarme + vidéo + rideau métallique connecté."
    },
    {
      question: "Peut-on installer un contrôle d'accès compatible Airbnb dans le Marais ?",
      answer: "Oui, c'est l'une de nos spécialités dans le 3e arrondissement. Nous installons des systèmes de contrôle d'accès connectés qui génèrent des codes temporaires pour chaque locataire Airbnb, avec historique complet des accès. Le propriétaire peut ouvrir à distance depuis l'application. Le système s'intègre aux serrures existantes sans modification de la porte — essentiel pour les copropriétés du Marais."
    },
    {
      question: "Le Musée Picasso ou le Musée des Arts et Métiers font-ils appel à vous ?",
      answer: "Nous ne sécurisons pas directement les musées nationaux (qui ont leurs propres services), mais nous intervenons pour les commerces, galeries et résidences situés à proximité immédiate. La présence de ces institutions génère un flux touristique intense qui impacte la sécurité des commerces voisins. Nous adaptons nos systèmes à cette réalité."
    },
    {
      question: "Quel budget pour sécuriser un atelier-showroom aux Enfants Rouges ?",
      answer: "Pour un espace mixte atelier/showroom de 40 à 100 m² autour du Marché des Enfants Rouges, comptez entre 3 200 € et 8 500 € HT. Cela inclut 4 à 6 caméras 4K discrètes, une alarme NF&A2P, un détecteur d'ouverture porte/vitrine et un contrôle d'accès par badge pour la réserve. Le devis est gratuit et établi après visite sur place."
    },
    {
      question: "Comment sécuriser un appartement haussmannien dans le 3e sans dénaturer les moulures ?",
      answer: "Nous utilisons des micro-caméras dôme de 3 cm de diamètre et des détecteurs encastrés dans les huisseries d'origine. Le câblage passe dans les plinthes existantes ou derrière les cimaises. Pour les appartements classés, nous proposons des solutions 100% sans fil avec batterie longue durée (2 ans). Chaque installation respecte l'architecture et les moulures d'époque."
    },
  ];

  const testimonials = [
    {
      name: "Claire V.", role: "Directrice galerie, rue Charlot",
      rating: 5, text: "HD Connect a installé un système invisible dans notre galerie : caméras IR dans les moulures, capteurs sur chaque œuvre. Nos assureurs ont validé le dispositif immédiatement. Aucun compromis sur l'esthétique de l'espace."
    },
    {
      name: "Julien T.", role: "Créateur mode, rue de Turenne",
      rating: 5, text: "Notre showroom de 60 m² est parfaitement sécurisé : alarme discrète, 4 caméras miniatures et un contrôle d'accès badge pour l'atelier. Le tout installé en une journée sans perturber notre activité. Service client au top."
    },
    {
      name: "Marie-Louise D.", role: "Propriétaire, copropriété Archives",
      rating: 5, text: "Interphone vidéo connecté et contrôle d'accès pour notre immeuble XVIIe. L'installation a respecté notre porte cochère classée. Les codes temporaires Airbnb sont un vrai plus pour les copropriétaires loueurs."
    },
  ];

  const otherArr = parisArrondissements.filter(a => a.slug !== "paris-3e-temple").slice(0, 6);
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
                <MapPin className="w-4 h-4" /> Paris 3e (75003)
              </motion.span>
              <motion.span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-600 font-medium border border-purple-500/20" whileHover={{ scale: 1.05 }}>
                <Palette className="w-4 h-4" /> Haut-Marais créatif
              </motion.span>
              <motion.span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 font-medium border border-amber-500/20" whileHover={{ scale: 1.05 }}>
                <Star className="w-4 h-4 fill-amber-500" /> 4.9/5 – 54 avis
              </motion.span>
            </motion.div>

            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight" variants={itemVariants}>
              Expert Sécurité <span className="text-gradient-animated">Paris 3e – Haut-Marais</span>
            </motion.h1>

            <motion.p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto" variants={itemVariants}>
              Des galeries d'art de la rue Charlot aux ateliers de créateurs du Marais Nord, du Musée Picasso 
              au Marché des Enfants Rouges : HD Connect protège le quartier le plus créatif de Paris. 
              Vidéosurveillance invisible pour galeries, alarmes discrètes pour concept stores, 
              domotique sur mesure pour appartements historiques.
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
                  <Sparkles className="mr-2 w-5 h-5" /> Devis gratuit Paris 3e <ArrowRight className="ml-2 w-5 h-5" />
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
                Le Haut-Marais : quand l'art rencontre la sécurité
              </h2>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Le 3e arrondissement de Paris — le <strong>Haut-Marais</strong> — est devenu en deux décennies 
                  l'épicentre de la scène artistique contemporaine parisienne. Avec plus de <strong>120 galeries d'art</strong>, 
                  des dizaines d'ateliers de créateurs et deux musées majeurs (le <strong>Musée Picasso</strong> et le 
                  <strong> Musée des Arts et Métiers</strong>), le quartier attire collectionneurs, touristes et amateurs d'art du monde entier.
                </p>
                <p>
                  Cette concentration culturelle crée des enjeux sécuritaires très spécifiques. Les galeries exposent 
                  des œuvres valant parfois plusieurs centaines de milliers d'euros, dans des espaces ouverts au public. 
                  Les boutiques de créateurs des rues <strong>Charlot</strong>, <strong>de Turenne</strong> et <strong>Debelleyme</strong> 
                  présentent des pièces uniques difficiles à remplacer. Et les <strong>appartements haussmanniens</strong> du 
                  quartier, souvent classés ou inscrits au patrimoine, imposent des contraintes d'installation 
                  que seule une entreprise expérimentée peut maîtriser.
                </p>
                <p>
                  HD Connect a développé une expertise unique dans ce domaine. Nos caméras à <strong>infrarouge invisible (940 nm)</strong> 
                  n'émettent aucune lumière susceptible d'altérer les pigments. Nos alarmes silencieuses évitent de 
                  perturber les vernissages. Et nos systèmes de contrôle d'accès génèrent des <strong>codes temporaires 
                  pour les locations Airbnb</strong> — une fonctionnalité très demandée dans le Marais où de nombreux 
                  propriétaires pratiquent la location saisonnière.
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Les 4 Quartiers du 3e Arrondissement</h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Marais Nord (Haut-Marais)", desc: "Épicentre galeries d'art et concept stores. Rues Charlot, de Turenne, Debelleyme. Protection œuvres et stocks créateurs.", risk: "Élevé" },
              { name: "Arts-et-Métiers", desc: "Quartier mixte résidentiel/bureaux autour du CNAM. Studios de création, agences design, lofts réaménagés. Sécurité adaptée espaces atypiques.", risk: "Moyen" },
              { name: "Enfants-Rouges", desc: "Marché historique couvert et rues adjacentes animées. Restaurants, cafés branchés, résidences. Vidéoprotection anti-pickpocket.", risk: "Moyen" },
              { name: "Archives", desc: "Secteur calme autour des Archives Nationales. Hôtels particuliers, musées, résidences de standing. Installation discrète patrimoine classé.", risk: "Faible" },
            ].map((q, i) => (
              <AnimatedSection key={i} animation="scale-in" delay={i * 100}>
                <Card className="h-full border-border hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-foreground">{q.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${q.risk === "Élevé" ? "bg-red-500/10 text-red-600" : q.risk === "Faible" ? "bg-green-500/10 text-green-600" : "bg-amber-500/10 text-amber-600"}`}>Risque {q.risk}</span>
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
                {["Musée Picasso", "Musée des Arts et Métiers", "Marché des Enfants Rouges", "Archives Nationales", "Carreau du Temple", "Square du Temple"].map((l, i) => (
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600 font-medium mb-4"><CheckCircle className="w-4 h-4" /> Nos atouts dans le 3e</div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">La sécurité pensée pour le monde de l'art</h2>
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4"><BadgeCheck className="w-4 h-4" /> Solutions 75003</div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Services adaptés au Haut-Marais</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Solutions spécialement conçues pour les galeries, ateliers de créateurs et résidences historiques du 3e.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nos clients dans le 3e arrondissement</h2>
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

      <ExpertiseSection location="Paris 3e – Haut-Marais" />
      <InterventionProcess />
      <WhyHDConnect cityName="Paris 3e" />

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4"><TrendingUp className="w-4 h-4" /> Questions fréquentes</div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">FAQ Sécurité – Paris 3e Haut-Marais</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Questions spécifiques aux galeries d'art, concept stores, copropriétés Airbnb et patrimoine classé.</p>
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
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Arrondissements voisins du 3e</h2>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Protégez votre galerie ou résidence dans le Marais</h2>
            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">Devis gratuit et expertise patrimoine. Installation discrète garantie dans le 75003.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }}><Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-2xl text-lg px-10 py-6" onClick={() => scrollToSection("quote", { mode: "quote" })}><Sparkles className="mr-2 w-5 h-5" /> Devis gratuit Paris 3e <ArrowRight className="ml-2 w-5 h-5" /></Button></motion.div>
              <motion.div whileHover={{ scale: 1.05 }}><Button size="lg" className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 hover:bg-white hover:text-primary text-lg px-10 py-6" asChild><a href={callUrl} target="_blank" rel="noopener noreferrer"><Phone className="mr-2 w-5 h-5" />{phoneNumber}</a></Button></motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Paris3eTemple;
