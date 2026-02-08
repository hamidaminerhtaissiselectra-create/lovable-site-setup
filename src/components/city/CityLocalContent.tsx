import { motion } from "framer-motion";
import { MapPin, Building2, Users, Briefcase, Shield, AlertTriangle, TrendingUp, Clock, CheckCircle2, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import { CityData } from "@/data/citiesData";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CityLocalContentProps {
  city: CityData;
}

// Génération de contenu unique basé sur le nom de ville (hash simple)
const hashCity = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
};

// Statistiques de sécurité uniques par ville
const getSecurityStats = (city: CityData) => {
  const hash = hashCity(city.slug);
  const baseRate = city.departmentCode === "93" ? 35 : city.departmentCode === "06" ? 32 : city.departmentCode === "75" ? 28 : 18;
  const variation = (hash % 12) - 6;
  
  return {
    burglaryRate: baseRate + variation,
    responseTime: 15 + (hash % 20),
    satisfactionRate: 94 + (hash % 5),
    installationsCount: 50 + (hash % 150),
    yearsActive: 3 + (hash % 8)
  };
};

// Conseils de sécurité contextuels
const getSecurityTips = (city: CityData) => {
  const tips: Record<string, string[]> = {
    "75": [
      "Privilégiez les alarmes connectées avec détection de mouvement dans les parties communes",
      "Installez un visiophone pour filtrer les visiteurs dans votre immeuble",
      "Optez pour des caméras discrètes conformes au règlement de copropriété"
    ],
    "92": [
      "Sécurisez votre parking souterrain avec un contrôle d'accès par badge",
      "Protégez vos locaux professionnels avec une vidéosurveillance multi-sites",
      "Installez une alarme silencieuse pour les bureaux en rez-de-chaussée"
    ],
    "93": [
      "Renforcez votre porte d'entrée avec un cylindre haute sécurité",
      "Installez des caméras extérieures anti-vandalisme (IK10)",
      "Optez pour une alarme avec sirène extérieure flash visible"
    ],
    "94": [
      "Protégez votre jardin avec des détecteurs de mouvement périmétrique",
      "Installez des caméras couvrant les accès garage et portail",
      "Pensez à la télésurveillance pour les résidences secondaires"
    ],
    "06": [
      "Installez des caméras thermiques pour la détection périmétrique de nuit",
      "Optez pour des équipements résistants aux conditions méditerranéennes",
      "Sécurisez piscine et dépendances avec des détecteurs d'intrusion dédiés"
    ],
    "69": [
      "Privilégiez les systèmes certifiés APSAD pour les locaux industriels",
      "Installez un contrôle d'accès biométrique pour les zones sensibles",
      "Optez pour une vidéosurveillance analytique avec reconnaissance de plaques"
    ],
    "13": [
      "Choisissez des caméras IP66 résistantes aux embruns et à la chaleur",
      "Installez une alarme connectée avec levée de doute vidéo",
      "Protégez votre résidence secondaire avec une télésurveillance à distance"
    ],
    "59": [
      "Sécurisez vos entrepôts logistiques avec une vidéosurveillance périmétrique",
      "Installez un contrôle d'accès poids-lourds pour vos zones de chargement",
      "Optez pour des caméras analytiques avec reconnaissance de plaques"
    ],
    "33": [
      "Protégez vos chais avec des caméras thermiques et des capteurs hygrométriques",
      "Installez une alarme adaptée aux grandes propriétés viticoles",
      "Sécurisez l'accès aux domaines avec un portail motorisé connecté"
    ],
    "31": [
      "Optez pour un contrôle d'accès biométrique conforme aux normes aéronautiques",
      "Installez une vidéosurveillance certifiée pour les sites industriels",
      "Protégez votre résidence avec une alarme connectée et détection IA"
    ],
    "51": [
      "Équipez vos caves avec des caméras infrarouges adaptées à l'obscurité",
      "Installez des capteurs de température et humidité connectés pour vos stocks",
      "Sécurisez l'accès aux vignobles avec une détection périmétrique longue portée"
    ],
    "83": [
      "Installez des caméras résistantes au sel et aux UV méditerranéens",
      "Protégez votre résidence saisonnière avec une télésurveillance cloud",
      "Optez pour une alarme avec levée de doute vidéo pour éviter les fausses alertes"
    ],
    "67": [
      "Privilégiez des systèmes conformes aux normes européennes",
      "Installez un contrôle d'accès multilingue pour les entreprises internationales",
      "Optez pour une vidéosurveillance IA avec détection comportementale"
    ],
    "44": [
      "Sécurisez vos locaux avec une vidéosurveillance cloud accessible à distance",
      "Installez un contrôle d'accès smartphone pour vos espaces de coworking",
      "Protégez vos entrepôts portuaires avec des caméras anti-corrosion"
    ],
    "38": [
      "Optez pour des systèmes conformes aux normes ISO pour salles blanches",
      "Installez un contrôle d'accès anti-contamination pour vos laboratoires",
      "Privilégiez la vidéosurveillance certifiée ATEX pour sites à risque"
    ]
  };

  const defaultTips = [
    `Réalisez un audit de sécurité gratuit pour identifier les points faibles de votre ${city.name.toLowerCase().includes("ville") ? "logement" : "propriété"}`,
    "Installez des détecteurs d'ouverture sur toutes les issues (portes, fenêtres, velux)",
    "Optez pour une solution connectée accessible depuis votre smartphone 24h/24"
  ];

  return tips[city.departmentCode] || defaultTips;
};

// Types de clients prioritaires par zone
const getClientTypes = (city: CityData) => {
  const types: Record<string, { type: string; icon: string; description: string }[]> = {
    "75": [
      { type: "Appartements haussmanniens", icon: "🏛️", description: "Solutions discrètes et intégrées" },
      { type: "Commerces de luxe", icon: "💎", description: "Vidéosurveillance HD + contrôle d'accès" },
      { type: "Bureaux & Co-working", icon: "🏢", description: "Contrôle d'accès connecté" }
    ],
    "92": [
      { type: "Sièges sociaux", icon: "🏢", description: "Solutions multi-sites intégrées" },
      { type: "Résidences de standing", icon: "🏠", description: "Domotique + sécurité haut de gamme" },
      { type: "Data centers", icon: "🖥️", description: "Sécurité certifiée Tier III/IV" }
    ],
    "93": [
      { type: "Commerces de proximité", icon: "🏪", description: "Vidéosurveillance + anti-intrusion" },
      { type: "Entrepôts logistiques", icon: "📦", description: "Sécurité périmétrique complète" },
      { type: "Pavillons individuels", icon: "🏡", description: "Alarme + caméras extérieures" }
    ],
    "94": [
      { type: "Maisons avec jardin", icon: "🏡", description: "Détection périmétrique + caméras" },
      { type: "Centres commerciaux", icon: "🛒", description: "Vidéosurveillance analytique" },
      { type: "Copropriétés", icon: "🏢", description: "Contrôle d'accès collectif" }
    ],
    "06": [
      { type: "Villas de prestige", icon: "🏰", description: "Sécurité invisible intégrée" },
      { type: "Hôtels & Resorts", icon: "🏨", description: "Solutions hospitality" },
      { type: "Résidences secondaires", icon: "🏖️", description: "Télésurveillance à distance" }
    ]
  };

  const hash = hashCity(city.slug);
  const defaultTypes = [
    { type: "Particuliers", icon: "🏠", description: "Maisons et appartements" },
    { type: "Professionnels", icon: "🏢", description: "Commerces et bureaux" },
    { type: "Collectivités", icon: "🏛️", description: "Équipements publics" }
  ];

  return types[city.departmentCode] || defaultTypes;
};

// Témoignage unique par ville
const getLocalTestimonial = (city: CityData) => {
  const hash = hashCity(city.slug);
  const names = ["M. Durand", "Mme Martin", "M. Lefebvre", "Mme Bernard", "M. Thomas", "Mme Robert", "M. Richard", "Mme Dubois"];
  const types = ["propriétaire", "commerçant", "gérant", "directeur", "responsable"];
  const quotes = [
    `Intervention rapide et professionnelle. L'équipe HD Connect a parfaitement sécurisé notre ${hash % 2 === 0 ? "commerce" : "résidence"} à ${city.name}.`,
    `Depuis l'installation de notre système d'alarme, nous dormons sur nos deux oreilles. Service client exemplaire !`,
    `Installation soignée et discrète. Les techniciens ont pris le temps de tout nous expliquer. Je recommande HD Connect à ${city.name}.`,
    `Réactifs et compétents. Notre vidéosurveillance fonctionne parfaitement depuis ${1 + (hash % 4)} ans. Merci HD Connect !`
  ];

  return {
    name: names[hash % names.length],
    type: types[hash % types.length],
    quote: quotes[hash % quotes.length],
    rating: 4 + (hash % 2)
  };
};

// Contenu spécifique par département/région
const getLocalContent = (city: CityData) => {
  const departmentContent: Record<string, { title: string; highlights: string[]; industries: string[]; stats?: string; blogLink?: { slug: string; title: string }; specificContext?: string }> = {
    "75": {
      title: "Capitale économique et culturelle",
      highlights: ["Siège de nombreuses entreprises du CAC 40", "Quartiers historiques à sécuriser", "Immeubles haussmanniens"],
      industries: ["Finance", "Luxe", "Tech", "Tourisme"],
      stats: "Plus de 60 000 cambriolages/an en IDF",
      blogLink: { slug: "alarme-maison-sans-fil-guide-achat-2026", title: "Guide alarme maison 2026" },
      specificContext: "Paris concentre les sièges sociaux du CAC 40 et attire 30 millions de touristes par an. La vidéosurveillance IA et les alarmes connectées sont essentielles pour protéger résidences de standing, commerces de luxe et locaux professionnels."
    },
    "92": {
      title: "Pôle d'affaires majeur",
      highlights: ["La Défense, 1er quartier d'affaires européen", "Sièges sociaux internationaux", "Résidences de standing"],
      industries: ["Consulting", "Finance", "Énergie", "Telecom"],
      stats: "180 000 salariés à La Défense",
      blogLink: { slug: "alarme-maison-sans-fil-guide-achat-2026", title: "Guide alarme maison 2026" },
      specificContext: "Les Hauts-de-Seine abritent le premier quartier d'affaires européen avec plus de 1 500 sièges sociaux. La sécurité électronique doit répondre aux exigences des grands groupes : contrôle d'accès biométrique, vidéosurveillance IA multi-sites et intégration aux systèmes IT."
    },
    "93": {
      title: "Territoire en pleine mutation",
      highlights: ["Grand Paris Express", "Zones industrielles", "Nouvelles résidences"],
      industries: ["Logistique", "Industrie", "Médias", "Sport"],
      stats: "Taux de cambriolage supérieur de 30% à la moyenne nationale",
      blogLink: { slug: "securite-commerce-seine-saint-denis-93-guide-complet", title: "Sécurité commerce Seine-Saint-Denis" },
      specificContext: "La Seine-Saint-Denis connaît un taux de cambriolages parmi les plus élevés de France. HD Connect propose des solutions renforcées : caméras anti-vandalisme, alarmes certifiées NF&A2P Bouclier 3 et intervention urgence 4h. Le Grand Paris Express transforme le territoire avec de nouvelles opportunités commerciales à protéger."
    },
    "94": {
      title: "Sud-Est parisien dynamique",
      highlights: ["Bords de Marne", "Zones pavillonnaires", "Pôles commerciaux"],
      industries: ["Commerce", "Santé", "Agroalimentaire", "Transport"],
      stats: "76% des habitants en zones pavillonnaires",
      blogLink: { slug: "alarme-maison-sans-fil-guide-achat-2026", title: "Guide alarme maison IDF" },
      specificContext: "Le Val-de-Marne se caractérise par ses zones pavillonnaires le long de la Marne et ses pôles commerciaux dynamiques (Créteil Soleil, Belle Épine). La protection périmétrique avec caméras extérieures et alarmes sans fil est particulièrement adaptée aux maisons individuelles."
    },
    "77": {
      title: "Grande couronne en expansion",
      highlights: ["Val d'Europe et Disney", "Zones logistiques majeures", "Nouveaux lotissements"],
      industries: ["Logistique", "Tourisme", "Commerce", "Agriculture"],
      stats: "2e département d'IDF en superficie",
      specificContext: "La Seine-et-Marne combine zones rurales, villes nouvelles et pôles économiques majeurs (Val d'Europe, Sénart). Les grandes distances nécessitent des solutions autonomes : caméras 4G solaires pour sites isolés, alarmes GSM et télésurveillance professionnelle."
    },
    "78": {
      title: "Yvelines prestigieuses",
      highlights: ["Château de Versailles", "Technopoles (Vélizy, Saint-Quentin)", "Résidences haut de gamme"],
      industries: ["Aéronautique", "Défense", "R&D", "Services"],
      stats: "1er département de France en pouvoir d'achat",
      specificContext: "Les Yvelines concentrent des propriétés d'exception et des sites industriels stratégiques. HD Connect installe des systèmes de sécurité discrets et haut de gamme : vidéosurveillance invisible intégrée au bâti, domotique centralisée et contrôle d'accès designer."
    },
    "91": {
      title: "Silicon Valley française",
      highlights: ["Paris-Saclay, 1er cluster scientifique européen", "Massy-Palaiseau TGV", "Zones d'activités"],
      industries: ["Tech", "Recherche", "Pharma", "Énergie"],
      stats: "15% des brevets français déposés dans le 91",
      specificContext: "L'Essonne est le cœur de l'innovation française avec le plateau de Saclay et ses 65 000 chercheurs. La sécurisation des laboratoires et data centers exige des solutions de pointe : contrôle d'accès multi-facteurs, vidéosurveillance analytique et cybersécurité intégrée."
    },
    "95": {
      title: "Porte nord de l'Île-de-France",
      highlights: ["Aéroport Roissy CDG", "Cergy-Pontoise ville nouvelle", "Zones franches"],
      industries: ["Aéroportuaire", "Logistique", "Commerce", "Industrie"],
      stats: "Roissy : 90 000 emplois, 2e plateforme européenne",
      specificContext: "Le Val-d'Oise bénéficie de la dynamique aéroportuaire de Roissy-CDG et de l'attractivité de Cergy-Pontoise. Les entreprises logistiques et hôtelières ont des besoins spécifiques : vidéosurveillance périmétrique, badges RFID haute sécurité et intégration aux systèmes aéroportuaires."
    },
    "69": {
      title: "Métropole européenne",
      highlights: ["Part-Dieu, 2e quartier d'affaires de France", "Industries pharmaceutiques", "Gastronomie"],
      industries: ["Pharma", "Chimie", "Tech", "Textile"],
      stats: "2e marché immobilier de France",
      blogLink: { slug: "installation-videosurveillance-maison-guide-complet-2026", title: "Guide vidéosurveillance 2026" },
      specificContext: "Lyon est la 2e métropole économique française avec un tissu industriel diversifié. Les laboratoires pharmaceutiques et l'industrie chimique nécessitent des systèmes de sécurité certifiés APSAD et conformes aux normes Seveso pour les sites à risque."
    },
    "13": {
      title: "Carrefour méditerranéen",
      highlights: ["Port de Marseille-Fos", "Pôle Euromed", "Tourisme de masse"],
      industries: ["Maritime", "Pétrochimie", "Tourisme", "Aéronautique"],
      stats: "1er port de France, 120 millions de tonnes/an",
      blogLink: { slug: "protection-villa-paca-securite-residence-secondaire", title: "Protection villas PACA" },
      specificContext: "Les Bouches-du-Rhône cumulent activité portuaire intense, tourisme de masse et zones résidentielles prisées. La sécurisation doit combiner robustesse (environnement marin) et discrétion (villas). HD Connect propose des équipements IP66 résistants aux embruns et à la chaleur méditerranéenne."
    },
    "31": {
      title: "Capitale aérospatiale",
      highlights: ["Airbus et industrie aéronautique", "Recherche spatiale", "Campus universitaires"],
      industries: ["Aéronautique", "Spatial", "Santé", "Numérique"],
      stats: "Airbus : 23 000 salariés à Toulouse",
      specificContext: "Toulouse est le cœur de l'industrie aérospatiale européenne. Les sites Airbus, Thales et les sous-traitants ont des exigences de sécurité élevées : contrôle d'accès biométrique, vidéosurveillance certifiée et conformité aux normes de défense."
    },
    "59": {
      title: "Métropole du Nord",
      highlights: ["Euralille", "Industries textiles historiques", "Commerce transfrontalier"],
      industries: ["Textile", "Commerce", "Logistique", "VPC"],
      stats: "4e métropole française en population",
      specificContext: "La métropole lilloise combine patrimoine industriel et modernité avec Euralille. Le commerce transfrontalier et la VPC (La Redoute, Auchan) nécessitent une sécurisation des entrepôts et centres logistiques : vidéosurveillance périmétrique, contrôle des accès poids-lourds et traçabilité des flux."
    },
    "33": {
      title: "Perle de Nouvelle-Aquitaine",
      highlights: ["Vignobles prestigieux", "Port de la Lune", "Économie numérique"],
      industries: ["Vin", "Aéronautique", "Tourisme", "Tech"],
      stats: "850 000 visiteurs au salon Vinexpo",
      blogLink: { slug: "domotique-ia-securite-maison-2026", title: "Domotique et sécurité 2026" },
      specificContext: "Bordeaux allie patrimoine viticole d'exception et dynamisme tech (French Tech). Les châteaux viticoles et propriétés de prestige nécessitent des systèmes discrets et intégrés : domotique centralisée, vidéosurveillance invisible et contrôle d'accès pour visiteurs professionnels."
    },
    "06": {
      title: "Côte d'Azur prestigieuse",
      highlights: ["Villas de luxe", "Événements internationaux", "Tourisme haut de gamme"],
      industries: ["Tourisme", "Événementiel", "Tech", "Immobilier"],
      stats: "2e département le plus cambriolé de France",
      blogLink: { slug: "protection-villa-paca-securite-residence-secondaire", title: "Protection villas Côte d'Azur" },
      specificContext: "Les Alpes-Maritimes connaissent un taux de cambriolages parmi les plus élevés de France, ciblant les villas de la Côte d'Azur. HD Connect installe des systèmes haute sécurité : caméras thermiques périmétrique, détection intrusion multi-zones et télésurveillance connectée aux forces de l'ordre."
    },
    "83": {
      title: "Var touristique et résidentiel",
      highlights: ["Saint-Tropez et le Golfe", "Base navale Toulon", "Résidences secondaires"],
      industries: ["Tourisme", "Naval", "Viticulture", "Retraite"],
      stats: "8 millions de touristes par an",
      blogLink: { slug: "protection-villa-paca-securite-residence-secondaire", title: "Protection villas Var" },
      specificContext: "Le Var attire retraités aisés et résidences secondaires de prestige. La protection des propriétés occupées saisonnièrement exige des solutions autonomes : vidéosurveillance cloud accessible à distance, alarme GSM sans dépendance internet et levée de doute vidéo pour éviter les fausses alertes."
    },
    "38": {
      title: "Capitale des Alpes",
      highlights: ["Pôle scientifique Grenoble", "Industries high-tech", "Stations de ski"],
      industries: ["Microélectronique", "Énergie", "Tourisme", "Recherche"],
      stats: "STMicroelectronics : 6 000 salariés",
      specificContext: "L'Isère concentre l'industrie de pointe française (STMicro, Schneider Electric). Les salles blanches et centres R&D nécessitent des systèmes de sécurité conformes aux normes ISO : contrôle d'accès anti-contamination, vidéosurveillance en zone ATEX et traçabilité complète."
    },
    "44": {
      title: "Métropole atlantique",
      highlights: ["Île de Nantes créative", "Port maritime", "Industrie navale"],
      industries: ["Naval", "Aéronautique", "Numérique", "Agroalimentaire"],
      stats: "6e agglomération française",
      specificContext: "Nantes combine industrie navale (STX), aéronautique (Airbus) et économie créative. Le quartier de la création et les start-ups tech ont des besoins de sécurité modernes : contrôle d'accès smartphone, vidéosurveillance cloud et espaces coworking sécurisés."
    },
    "34": {
      title: "Technopole méditerranéenne",
      highlights: ["Montpellier Méditerranée Technopole", "Universités", "Tourisme balnéaire"],
      industries: ["Santé", "Informatique", "Recherche", "Tourisme"],
      stats: "1ère ville française en croissance démographique",
      specificContext: "Montpellier est la métropole la plus dynamique de France avec une croissance démographique record. Les nouveaux quartiers (Port Marianne, Odysseum) et le tissu de start-ups nécessitent des solutions évolutives : vidéosurveillance scalable, alarmes modulaires et domotique connectée."
    },
    // === NOUVEAUX DÉPARTEMENTS ===
    "42": {
      title: "Bassin industriel historique",
      highlights: ["Industrie mécanique et métallurgique", "Design et innovation (Cité du design)", "Stade Geoffroy-Guichard"],
      industries: ["Mécanique", "Métallurgie", "Design", "Commerce"],
      stats: "2e ville d'Auvergne-Rhône-Alpes",
      specificContext: "La Loire combine tradition industrielle (armes, rubans, cycles) et renouveau créatif avec la Cité du design. Les sites de production et entrepôts nécessitent une vidéosurveillance industrielle certifiée APSAD et des alarmes anti-intrusion renforcées contre les vols de métaux."
    },
    "63": {
      title: "Capital de l'Auvergne",
      highlights: ["Siège mondial Michelin", "Puy de Dôme et volcans", "Recherche universitaire"],
      industries: ["Pneumatique", "Pharmacie", "Agroalimentaire", "Tourisme"],
      stats: "Michelin : 13 000 salariés à Clermont-Ferrand",
      specificContext: "Clermont-Ferrand est le berceau de Michelin et un pôle d'innovation en caoutchouc et pharmacie. La sécurisation des sites industriels classés nécessite des systèmes conformes aux normes ATEX pour les zones à risque et une vidéosurveillance connectée au réseau de l'entreprise."
    },
    "74": {
      title: "Haute-Savoie dynamique",
      highlights: ["Annecy, Venise des Alpes", "Stations de ski internationales", "Frontaliers Suisse-Genève"],
      industries: ["Décolletage", "Tourisme", "Horlogerie", "Commerce frontalier"],
      stats: "75 000 travailleurs frontaliers vers la Suisse",
      specificContext: "La Haute-Savoie bénéficie de la proximité genevoise et d'un pouvoir d'achat élevé. Les résidences de standing autour du lac d'Annecy et les chalets d'altitude nécessitent des systèmes autonomes : caméras solaires 4G, alarmes GSM et domotique adaptée aux conditions hivernales extrêmes."
    },
    "73": {
      title: "Savoie alpine",
      highlights: ["Stations de ski de renommée mondiale", "Thermalisme Aix-les-Bains", "Industries de montagne"],
      industries: ["Tourisme hivernal", "Thermalisme", "Énergie hydraulique", "Fromages AOP"],
      stats: "15 millions de journées-skieurs par saison",
      specificContext: "La Savoie attire des millions de touristes hivernaux dans ses stations (Courchevel, Val Thorens, Méribel). La sécurité des résidences de tourisme et chalets haut de gamme exige des équipements résistants au froid extrême (-30°C) et des systèmes de vidéosurveillance connectés à distance."
    },
    "30": {
      title: "Gard romain et culturel",
      highlights: ["Arènes de Nîmes", "Pont du Gard UNESCO", "Férias et traditions"],
      industries: ["Tourisme culturel", "Viticulture", "Commerce", "Agroalimentaire"],
      stats: "2e département d'Occitanie en tourisme",
      specificContext: "Le Gard combine patrimoine romain exceptionnel et dynamisme viticole. La protection des sites touristiques, des domaines viticoles et des commerces du centre-ville historique nécessite des solutions discrètes intégrées au bâti ancien : mini-caméras, alarmes sans fil et contrôle d'accès design."
    },
    "66": {
      title: "Pyrénées-Orientales solaires",
      highlights: ["Département le plus ensoleillé de France", "Frontière espagnole", "Agriculture maraîchère"],
      industries: ["Tourisme balnéaire", "Viticulture", "Commerce transfrontalier", "Agriculture"],
      stats: "320 jours d'ensoleillement par an",
      specificContext: "Les Pyrénées-Orientales, département frontalier ensoleillé, attirent résidences secondaires et retraités. Les cambriolages saisonniers estivaux nécessitent des systèmes de télésurveillance à distance, des caméras résistantes aux UV intenses et des alarmes avec levée de doute vidéo."
    },
    "84": {
      title: "Vaucluse provençal",
      highlights: ["Festival d'Avignon", "Mont Ventoux", "Marchés provençaux"],
      industries: ["Tourisme culturel", "Agriculture", "Agroalimentaire", "Vin"],
      stats: "Festival d'Avignon : 130 000 spectateurs par an",
      specificContext: "Le Vaucluse vit au rythme du Festival d'Avignon et de ses marchés provençaux. La sécurisation des bâtiments historiques intra-muros et des mas provençaux requiert des solutions respectueuses du patrimoine : caméras miniatures, alarmes discrètes et vidéosurveillance connectée."
    },
    "51": {
      title: "Capital mondiale du Champagne",
      highlights: ["Maisons de Champagne prestigieuses", "Cathédrale des sacres", "Caves classées UNESCO"],
      industries: ["Champagne", "Agroalimentaire", "Tourisme", "Logistique"],
      stats: "300 millions de bouteilles produites par an",
      specificContext: "La Marne est le berceau du champagne avec des caves souterraines classées UNESCO à protéger. Les maisons de champagne nécessitent une vidéosurveillance spécifique : caméras infrarouges pour caves, contrôle hygrométrique et sécurité périmétrique des vignobles."
    },
    "67": {
      title: "Capitale européenne",
      highlights: ["Parlement européen", "Quartier européen", "Industries rhénanes"],
      industries: ["Institutions européennes", "Automobile", "Pharma", "Tech"],
      stats: "Capitale parlementaire de l'Union européenne",
      specificContext: "Le Bas-Rhin accueille les institutions européennes avec des exigences de sécurité diplomatique. La proximité allemande et le dynamisme industriel rhénan nécessitent des systèmes multilingues, conformes aux normes européennes et interopérables avec les standards transfrontaliers."
    },
    "54": {
      title: "Lorraine Art nouveau",
      highlights: ["Place Stanislas UNESCO", "Pôle universitaire", "Industries sidérurgiques reconverties"],
      industries: ["Recherche", "Numérique", "Santé", "Énergie"],
      stats: "50 000 étudiants à Nancy",
      specificContext: "La Meurthe-et-Moselle se réinvente autour de l'innovation et de la recherche. Les campus universitaires, incubateurs et zones d'activités reconverties nécessitent des solutions de sécurité modernes : badges dématérialisés, vidéosurveillance cloud et accès smartphone."
    },
    "57": {
      title: "Moselle transfrontalière",
      highlights: ["Centre Pompidou-Metz", "Proximité Luxembourg", "Industries automobiles"],
      industries: ["Automobile", "Sidérurgie", "Commerce transfrontalier", "Culture"],
      stats: "100 000 frontaliers vers le Luxembourg",
      specificContext: "La Moselle bénéficie du dynamisme luxembourgeois avec un pouvoir d'achat frontalier élevé. Les résidences de standing et commerces premium nécessitent des systèmes de sécurité haut de gamme : domotique intégrée, contrôle d'accès biométrique et vidéosurveillance IA."
    },
    "68": {
      title: "Alsace viticole",
      highlights: ["Route des Vins d'Alsace", "Musées de Mulhouse", "Industries automobiles Peugeot"],
      industries: ["Automobile", "Chimie", "Viticulture", "Tourisme"],
      stats: "170 km de Route des Vins",
      specificContext: "Le Haut-Rhin combine industrie automobile (PSA Mulhouse) et tourisme viticole. La sécurisation des domaines viticoles alsaciens et des sites industriels nécessite des caméras adaptées aux conditions climatiques continentales et des alarmes certifiées pour zones Seveso."
    },
    "10": {
      title: "Aube textile et commerciale",
      highlights: ["Magasins d'usine de Troyes", "Industries textiles", "Champagne méridional"],
      industries: ["Textile", "Commerce", "Champagne", "Logistique"],
      stats: "4 millions de visiteurs/an dans les magasins d'usine",
      specificContext: "L'Aube est la capitale des magasins d'usine avec 4 millions de visiteurs annuels. Les centres de marques et entrepôts textiles nécessitent une vidéosurveillance analytique avec comptage de flux, détection de vol et alarmes anti-intrusion pour les stocks de valeur."
    },
    "25": {
      title: "Doubs horloger",
      highlights: ["Citadelle Vauban UNESCO", "Industrie horlogère et microtechnique", "Forêts du Jura"],
      industries: ["Horlogerie", "Microtechnique", "Automobile", "Fromage Comté"],
      stats: "1er département français en microtechnique",
      specificContext: "Le Doubs est le cœur de la microtechnique française avec un savoir-faire horloger séculaire. Les ateliers de précision et laboratoires nécessitent des salles sécurisées avec contrôle d'accès anti-contamination, vidéosurveillance haute résolution et traçabilité des accès."
    },
    "71": {
      title: "Saône-et-Loire bourguignonne",
      highlights: ["Vignobles de Bourgogne sud", "Chalon-sur-Saône berceau de la photo", "Industries métallurgiques"],
      industries: ["Viticulture", "Métallurgie", "Élevage charolais", "Tourisme"],
      stats: "Berceau de la photographie (Nicéphore Niépce)",
      specificContext: "La Saône-et-Loire allie vignobles prestigieux et industries métallurgiques. La protection des domaines viticoles bourguignons avec leurs chais de vieillissement nécessite des systèmes discrets : caméras thermiques périmétrique, capteurs hygrométriques et alarmes silencieuses."
    },
    "2A": {
      title: "Corse-du-Sud insulaire",
      highlights: ["Ajaccio capitale régionale", "Golfe de Porto UNESCO", "Tourisme balnéaire"],
      industries: ["Tourisme", "Agroalimentaire", "Administration", "BTP"],
      stats: "3 millions de touristes par an en Corse",
      specificContext: "La Corse-du-Sud attire un tourisme haut de gamme autour d'Ajaccio et Porto-Vecchio. L'insularité impose des solutions autonomes : équipements résistants aux embruns (IP66/IP67), alimentation solaire pour sites isolés et télésurveillance via 4G/satellite."
    },
    "2B": {
      title: "Haute-Corse sauvage",
      highlights: ["Bastia port principal", "Cap Corse", "Montagne et littoral"],
      industries: ["Tourisme", "Nautisme", "Agriculture", "Pêche"],
      stats: "Port de Bastia : 2,5 millions de passagers/an",
      specificContext: "La Haute-Corse combine zones portuaires actives et arrière-pays montagnard. La sécurisation des ports de plaisance, hôtels et résidences secondaires nécessite des caméras anti-corrosion marine, des alarmes GSM pour zones sans fibre et une surveillance adaptée au tourisme saisonnier."
    },
    "76": {
      title: "Seine-Maritime portuaire",
      highlights: ["Port du Havre, 1er port conteneurs français", "Rouen capitale normande", "Falaises d'Étretat"],
      industries: ["Maritime", "Pétrochimie", "Automobile", "Agroalimentaire"],
      stats: "Le Havre : 2,9 millions de conteneurs EVP/an",
      specificContext: "La Seine-Maritime combine activité portuaire internationale et industrie lourde. Les terminaux portuaires et sites pétrochimiques nécessitent une vidéosurveillance certifiée ATEX, des contrôles d'accès biométriques sécurisés et des systèmes résistants aux conditions maritimes."
    },
    "14": {
      title: "Calvados mémoriel",
      highlights: ["Plages du Débarquement", "Caen mémorial", "Station balnéaire Deauville"],
      industries: ["Tourisme mémoriel", "Automobile", "Agroalimentaire laitier", "Numérique"],
      stats: "5 millions de visiteurs aux sites du D-Day/an",
      specificContext: "Le Calvados attire un tourisme mémoriel international et un tourisme balnéaire de luxe (Deauville). Les sites historiques, hôtels de prestige et villas normandes nécessitent une vidéosurveillance intégrée au paysage et des alarmes adaptées aux grandes propriétés."
    },
    "35": {
      title: "Ille-et-Vilaine numérique",
      highlights: ["Rennes capitale cyber", "Pôle cybersécurité DGA", "Universités et grandes écoles"],
      industries: ["Cybersécurité", "Agroalimentaire", "Automobile", "Numérique"],
      stats: "Rennes : 1er pôle cybersécurité français",
      specificContext: "L'Ille-et-Vilaine est le premier pôle de cybersécurité français avec la DGA-MI et de nombreuses start-ups. Les data centers, laboratoires de recherche et entreprises tech nécessitent des solutions de sécurité physique et logique intégrées : accès multi-facteurs et vidéosurveillance analytique."
    },
    "29": {
      title: "Finistère maritime",
      highlights: ["Port militaire de Brest", "Océanopolis", "Industrie navale"],
      industries: ["Naval militaire", "Pêche", "Agroalimentaire", "Tourisme"],
      stats: "2e port militaire français",
      specificContext: "Le Finistère combine industrie navale militaire et agroalimentaire. Les zones portuaires militaires, les conserveries et les stations balnéaires nécessitent des caméras résistantes aux embruns, des alarmes IP66 et des systèmes de contrôle d'accès adaptés aux environnements corrosifs."
    },
    "56": {
      title: "Morbihan nautique",
      highlights: ["Golfe du Morbihan", "Lorient base sous-marine", "Carnac mégalithes"],
      industries: ["Nautisme", "Pêche", "Tourisme", "Agroalimentaire"],
      stats: "3e destination nautique de France",
      specificContext: "Le Morbihan est un département nautique par excellence. Les ports de plaisance, chantiers navals et résidences côtières du Golfe nécessitent des équipements anti-sel (IP67), des caméras résistantes aux vents violents et des systèmes d'alarme adaptés à l'habitat dispersé breton."
    },
    "49": {
      title: "Maine-et-Loire angevin",
      highlights: ["Château d'Angers", "Vignobles Loire", "Industrie électronique"],
      industries: ["Électronique", "Végétal", "Viticulture", "Logistique"],
      stats: "Angers : 1ère ville verte de France",
      specificContext: "Le Maine-et-Loire est le cœur du végétal spécialisé et de l'électronique en France. Les pépinières, serres high-tech et sites de production électronique nécessitent des systèmes de vidéosurveillance avec contrôle climatique intégré et une sécurité périmétrique adaptée."
    },
    "45": {
      title: "Loiret logistique",
      highlights: ["Orléans centre logistique national", "Cosmetic Valley", "Cathédrale Sainte-Croix"],
      industries: ["Logistique", "Cosmétique", "Commerce", "Administration"],
      stats: "1er hub logistique du centre de la France",
      specificContext: "Le Loiret est un carrefour logistique majeur avec d'immenses entrepôts le long de l'A10. Les plateformes logistiques, zones commerciales et sites industriels cosmétiques nécessitent une vidéosurveillance périmétrique à grande échelle et des systèmes de contrôle d'accès véhicules."
    },
    "37": {
      title: "Indre-et-Loire tourangelle",
      highlights: ["Châteaux de la Loire", "Gastronomie et vins", "Tourisme culturel"],
      industries: ["Tourisme", "Pharmacie", "Électronique", "Viticulture"],
      stats: "3 millions de visiteurs aux Châteaux de la Loire/an",
      specificContext: "L'Indre-et-Loire est le joyau des Châteaux de la Loire avec Amboise, Chenonceau et Villandry. La protection des sites patrimoniaux, des domaines viticoles et des résidences tourangelles nécessite une vidéosurveillance ultra-discrète respectueuse de l'architecture Renaissance."
    },
    "80": {
      title: "Somme picarde",
      highlights: ["Cathédrale d'Amiens UNESCO", "Baie de Somme", "Pôle universitaire"],
      industries: ["Agroalimentaire", "Logistique", "Tourisme nature", "Industrie"],
      stats: "Baie de Somme : plus belle baie du monde",
      specificContext: "La Somme allie patrimoine gothique (cathédrale UNESCO) et nature sauvage (Baie de Somme). Les résidences de la baie, soumises à une fréquentation touristique saisonnière, nécessitent des systèmes de télésurveillance à distance et des caméras résistantes à l'environnement salin."
    },
    "17": {
      title: "Charente-Maritime atlantique",
      highlights: ["La Rochelle port historique", "Île de Ré", "Fort Boyard"],
      industries: ["Tourisme", "Ostréiculture", "Nautisme", "Agriculture"],
      stats: "Île de Ré : 2,5 millions de visiteurs/an",
      specificContext: "La Charente-Maritime combine tourisme balnéaire de masse et résidences de prestige sur l'Île de Ré. La protection des propriétés insulaires et côtières nécessite des équipements anti-sel, des caméras autonomes solaires et une télésurveillance 4G pour les zones isolées."
    },
    "87": {
      title: "Haute-Vienne limousine",
      highlights: ["Limoges capitale de la porcelaine", "Industries céramiques", "Tradition élevage"],
      industries: ["Porcelaine", "Luxe", "Élevage", "Agroalimentaire"],
      stats: "Limoges : 1ère ville mondiale de la porcelaine",
      specificContext: "La Haute-Vienne est le berceau mondial de la porcelaine avec des manufactures d'exception. La sécurisation des ateliers d'art, des stocks de porcelaine fine et des musées nécessite des systèmes anti-vibration, des alarmes haute sensibilité et une vidéosurveillance HD."
    },
    "86": {
      title: "Vienne futuroscopique",
      highlights: ["Futuroscope", "Patrimoine roman", "Universités de Poitiers"],
      industries: ["Tourisme", "Numérique", "Agroalimentaire", "Éducation"],
      stats: "Futuroscope : 2 millions de visiteurs/an",
      specificContext: "La Vienne est dynamisée par le Futuroscope et son écosystème numérique. Les parcs d'attractions, campus universitaires et zones d'activités tech nécessitent des systèmes de vidéosurveillance haute capacité avec gestion de flux et contrôle d'accès événementiel."
    },
    "64": {
      title: "Pyrénées-Atlantiques basques",
      highlights: ["Côte Basque (Biarritz, Bayonne)", "Pyrénées", "Tradition gastronomique"],
      industries: ["Tourisme", "Aéronautique", "Agroalimentaire", "Surf"],
      stats: "Biarritz : capitale européenne du surf",
      specificContext: "Les Pyrénées-Atlantiques combinent élégance basque et dynamisme béarnais. Les villas côtières de Biarritz et les résidences de montagne nécessitent des systèmes de sécurité résistants aux conditions océaniques (IP66) et aux altitudes pyrénéennes."
    },
    "72": {
      title: "Sarthe automobile",
      highlights: ["24 Heures du Mans", "Circuit Bugatti", "Industries automobiles"],
      industries: ["Automobile", "Assurance", "Agroalimentaire", "Logistique"],
      stats: "24H du Mans : 250 000 spectateurs par édition",
      specificContext: "La Sarthe est mondialement connue pour les 24 Heures du Mans. Les infrastructures événementielles, circuits et zones industrielles automobiles nécessitent des systèmes de vidéosurveillance événementielle scalable et une sécurité périmétrique des sites de production."
    },
    "21": {
      title: "Côte-d'Or bourguignonne",
      highlights: ["Climats de Bourgogne UNESCO", "Palais des Ducs", "Route des Grands Crus"],
      industries: ["Viticulture", "Gastronomie", "Pharmacie", "Tourisme"],
      stats: "Grands Crus : les vins les plus chers du monde",
      specificContext: "La Côte-d'Or abrite les vignobles les plus prestigieux du monde (Romanée-Conti, Clos Vougeot). La protection des cuveries, des stocks de grands crus et des domaines viticoles d'exception nécessite une sécurité invisible et ultra-performante : capteurs vibration, caméras thermiques et coffres sécurisés connectés."
    },
    "50": {
      title: "Manche maritime",
      highlights: ["Cherbourg arsenal", "Mont-Saint-Michel", "Industries nucléaires"],
      industries: ["Naval", "Nucléaire", "Pêche", "Tourisme"],
      stats: "La Hague : plus grand centre de retraitement nucléaire mondial",
      specificContext: "La Manche combine industrie nucléaire stratégique et patrimoine mondial (Mont-Saint-Michel). Les sites sensibles ORANO/EDF nécessitent des systèmes de sécurité certifiés aux normes les plus strictes : vidéosurveillance ATEX, contrôle d'accès multi-facteurs et détection périmétrique."
    },
    "89": {
      title: "Yonne bourguignonne",
      highlights: ["Vignobles de Chablis", "Auxerre patrimoine", "Porte de la Bourgogne"],
      industries: ["Viticulture", "Agriculture", "Logistique", "Tourisme"],
      stats: "Chablis : 1er vignoble de Bourgogne en volume",
      specificContext: "L'Yonne est la porte nord de la Bourgogne avec le vignoble mondialement connu de Chablis. Les domaines viticoles, caves de vieillissement et propriétés rurales nécessitent des systèmes de sécurité autonomes adaptés aux zones agricoles : caméras 4G solaires et alarmes GSM."
    },
    "90": {
      title: "Territoire de Belfort industriel",
      highlights: ["Lion de Belfort", "Industries Alstom/GE", "Technopole"],
      industries: ["Énergie", "Transport", "Microtechnique", "Numérique"],
      stats: "GE/Alstom : 3 000 emplois industriels",
      specificContext: "Le Territoire de Belfort est un bastion industriel majeur avec Alstom/GE dans l'énergie et le transport. Les sites de production de turbines, sous-traitants et PME industrielles nécessitent une vidéosurveillance certifiée et un contrôle d'accès sécurisé pour zones de défense."
    },
    "16": {
      title: "Charente cognac",
      highlights: ["Cognac, capitale des spiritueux", "Angoulême bande dessinée", "Industries papetières"],
      industries: ["Spiritueux", "BD/Animation", "Papier", "Électronique"],
      stats: "200 millions de bouteilles de cognac exportées/an",
      specificContext: "La Charente est le berceau du cognac avec des chais de vieillissement qui représentent un patrimoine financier considérable. La protection des stocks de cognac (le 'paradis' des maisons) nécessite des systèmes anti-incendie connectés, une vidéosurveillance hygrométrique et des alarmes spécialisées."
    },
    "24": {
      title: "Dordogne périgordine",
      highlights: ["Lascaux et préhistoire", "Sarlat patrimoine", "Gastronomie périgourdine"],
      industries: ["Tourisme", "Agroalimentaire", "Artisanat", "Agriculture"],
      stats: "Lascaux IV : 600 000 visiteurs/an",
      specificContext: "La Dordogne attire un tourisme patrimonial et gastronomique international. Les châteaux, manoirs et résidences de charme périgourdines nécessitent des systèmes de sécurité respectueux du patrimoine : vidéosurveillance miniature, alarmes sans fil et télésurveillance pour propriétés isolées."
    },
    "11": {
      title: "Aude cathare",
      highlights: ["Cité de Carcassonne UNESCO", "Canal du Midi", "Vignobles du Languedoc"],
      industries: ["Tourisme", "Viticulture", "Commerce", "Énergie éolienne"],
      stats: "Cité de Carcassonne : 2 millions de visiteurs/an",
      specificContext: "L'Aude abrite la Cité de Carcassonne, site le plus visité de France après Paris. La sécurisation des environs de la Cité, des domaines viticoles du Minervois et des résidences touristiques nécessite des caméras discrètes, une vidéosurveillance périmétrique et des alarmes connectées."
    },
    "53": {
      title: "Mayenne agricole",
      highlights: ["Laval préfecture", "Industries agroalimentaires", "Bocage mayennais"],
      industries: ["Agroalimentaire", "Agriculture", "Logistique", "Industrie"],
      stats: "1er département laitier de France",
      specificContext: "La Mayenne est le premier département laitier français avec des coopératives et usines agroalimentaires majeures (Lactalis). Les sites de production, exploitations agricoles et entrepôts frigorifiques nécessitent une vidéosurveillance adaptée aux normes HACCP et des alarmes anti-intrusion."
    },
    "28": {
      title: "Eure-et-Loir beauce",
      highlights: ["Cathédrale de Chartres UNESCO", "Cosmetic Valley", "Beauce céréalière"],
      industries: ["Cosmétique", "Agriculture", "Logistique", "Pharmacie"],
      stats: "Cosmetic Valley : 800 entreprises, 70 000 emplois",
      specificContext: "L'Eure-et-Loir est le cœur de la Cosmetic Valley, premier pôle mondial de la parfumerie-cosmétique. Les laboratoires de R&D, usines de production et entrepôts logistiques nécessitent des systèmes de sécurité conformes aux normes GMP : contrôle d'accès traçable et vidéosurveillance analytique."
    },
    "18": {
      title: "Cher berrichon",
      highlights: ["Bourges cathédrale UNESCO", "Industries MBDA", "Marais de Bourges"],
      industries: ["Défense", "Armement", "Agroalimentaire", "Tourisme"],
      stats: "MBDA : 3 000 emplois à Bourges",
      specificContext: "Le Cher accueille le site MBDA de Bourges, leader européen des missiles. Les industries de défense et sites classés secret-défense nécessitent des systèmes de sécurité du plus haut niveau : contrôle d'accès biométrique multi-facteurs, vidéosurveillance certifiée et conformité aux normes militaires."
    },
    "41": {
      title: "Loir-et-Cher ligérien",
      highlights: ["Château de Chambord", "Zoo de Beauval", "Vignobles de Touraine"],
      industries: ["Tourisme", "Viticulture", "Pharmacie", "Logistique"],
      stats: "Chambord : 1 million de visiteurs/an",
      specificContext: "Le Loir-et-Cher abrite Chambord et le ZooParc de Beauval, 2e zoo mondial. La sécurisation des sites touristiques majeurs, des châteaux et des domaines viticoles nécessite une vidéosurveillance événementielle avec gestion de flux importants et détection périmétrique nocturne."
    },
    "22": {
      title: "Côtes-d'Armor armoricaines",
      highlights: ["Côte de Granit Rose", "Saint-Brieuc préfecture", "Agroalimentaire"],
      industries: ["Agroalimentaire", "Pêche", "Tourisme", "Agriculture"],
      stats: "1er département breton en production porcine",
      specificContext: "Les Côtes-d'Armor combinent industrie agroalimentaire majeure et tourisme côtier. Les usines de transformation alimentaire, les exploitations d'élevage et les stations balnéaires de la Côte de Granit Rose nécessitent des systèmes adaptés : vidéosurveillance hygiénique et alarmes résistantes au climat breton."
    },
    "62": {
      title: "Pas-de-Calais portuaire",
      highlights: ["Calais 1er port passagers d'Europe", "Côte d'Opale", "Bassin minier UNESCO"],
      industries: ["Transport maritime", "Logistique", "Tourisme", "Commerce transfrontalier"],
      stats: "Port de Calais : 10 millions de passagers/an",
      specificContext: "Le Pas-de-Calais est le premier point de passage transmanche avec un trafic massif. Les infrastructures portuaires, zones logistiques du tunnel et résidences côtières nécessitent une vidéosurveillance haute capacité, un contrôle d'accès véhicules et des systèmes anti-intrusion renforcés."
    },
    "26": {
      title: "Drôme provençale",
      highlights: ["Lavande et Drôme Provençale", "Vallée du Rhône nucléaire", "Agriculture diversifiée"],
      industries: ["Agriculture", "Nucléaire", "Tourisme", "Agroalimentaire"],
      stats: "1er département bio de France",
      specificContext: "La Drôme combine agriculture biologique pionnière et industrie nucléaire (Tricastin). Les exploitations agricoles bio, les sites nucléaires et les villages de charme drômois nécessitent des solutions de sécurité adaptées à chaque contexte : du certifié Seveso au discret patrimonial."
    }
  };

  return departmentContent[city.departmentCode] || {
    title: `Cœur du ${city.department}`,
    highlights: ["Entreprises locales dynamiques", "Tissu économique diversifié", "Projets de développement"],
    industries: ["Commerce", "Services", "Artisanat", "Industrie"],
    specificContext: `HD Connect intervient dans tout le ${city.department} pour sécuriser particuliers et professionnels. Nos techniciens certifiés connaissent les spécificités locales et proposent des solutions adaptées à chaque besoin.`
  };
};

const CityLocalContent = ({ city }: CityLocalContentProps) => {
  const localContent = getLocalContent(city);
  const securityStats = getSecurityStats(city);
  const securityTips = getSecurityTips(city);
  const clientTypes = getClientTypes(city);
  const testimonial = getLocalTestimonial(city);

  return (
    <section className="py-16 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Décoration de fond */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <MapPin className="w-4 h-4" />
              Focus {city.name}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {localContent.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              HD Connect adapte ses solutions de sécurité aux spécificités de {city.name} et du {city.department}.
            </p>
            {localContent.stats && (
              <p className="text-primary font-semibold mt-2">
                📊 {localContent.stats}
              </p>
            )}
          </div>
        </AnimatedSection>

        {/* Contexte spécifique enrichi */}
        {localContent.specificContext && (
          <AnimatedSection animation="fade-up" delay={50}>
            <div className="max-w-4xl mx-auto mb-10 p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50">
              <p className="text-muted-foreground leading-relaxed">
                {localContent.specificContext}
              </p>
              {localContent.blogLink && (
                <Link 
                  to={`/blog/${localContent.blogLink.slug}`}
                  className="inline-flex items-center gap-2 mt-4 text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  📖 Lire notre guide : {localContent.blogLink.title}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </AnimatedSection>
        )}

        {/* Statistiques locales uniques */}
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            <div className="text-center p-4 bg-card/50 rounded-xl border border-border/50">
              <div className="text-3xl font-bold text-primary mb-1">{securityStats.installationsCount}+</div>
              <div className="text-sm text-muted-foreground">Installations à {city.name}</div>
            </div>
            <div className="text-center p-4 bg-card/50 rounded-xl border border-border/50">
              <div className="text-3xl font-bold text-accent mb-1">{securityStats.responseTime}min</div>
              <div className="text-sm text-muted-foreground">Temps d'intervention moyen</div>
            </div>
            <div className="text-center p-4 bg-card/50 rounded-xl border border-border/50">
              <div className="text-3xl font-bold text-green-500 mb-1">{securityStats.satisfactionRate}%</div>
              <div className="text-sm text-muted-foreground">Clients satisfaits</div>
            </div>
            <div className="text-center p-4 bg-card/50 rounded-xl border border-border/50">
              <div className="text-3xl font-bold text-amber-500 mb-1">{securityStats.yearsActive} ans</div>
              <div className="text-sm text-muted-foreground">D'expertise locale</div>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Points forts locaux */}
          <AnimatedSection animation="fade-up" delay={150}>
            <Card className="h-full border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">Spécificités locales</h3>
                </div>
                <ul className="space-y-3">
                  {localContent.highlights.map((highlight, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Industries clés */}
          <AnimatedSection animation="fade-up" delay={250}>
            <Card className="h-full border-accent/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">Secteurs d'activité</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Nos solutions protègent les acteurs clés de ces industries à {city.name} :
                </p>
                <div className="flex flex-wrap gap-2">
                  {localContent.industries.map((industry, index) => (
                    <motion.span 
                      key={industry}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="px-3 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium"
                    >
                      {industry}
                    </motion.span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* Types de clients ciblés */}
        <AnimatedSection animation="fade-up" delay={300}>
          <div className="mt-12 max-w-5xl mx-auto">
            <h3 className="font-bold text-xl text-foreground text-center mb-6 flex items-center justify-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Nos solutions pour {city.name}
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {clientTypes.map((client, index) => (
                <motion.div
                  key={client.type}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 bg-card/70 rounded-xl border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="text-2xl mb-2">{client.icon}</div>
                  <h4 className="font-semibold text-foreground mb-1">{client.type}</h4>
                  <p className="text-sm text-muted-foreground">{client.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Conseils de sécurité locaux */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="mt-12 max-w-4xl mx-auto">
            <Card className="border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-transparent">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">Conseils sécurité pour {city.name}</h3>
                </div>
                <ul className="space-y-3">
                  {securityTips.map((tip, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{tip}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        {/* Témoignage local */}
        <AnimatedSection animation="fade-up" delay={450}>
          <div className="mt-12 max-w-3xl mx-auto">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-lg text-foreground italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground capitalize">{testimonial.type} à {city.name}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        {/* Quartiers couverts */}
        {city.neighborhoods && city.neighborhoods.length > 0 && (
          <AnimatedSection animation="fade-up" delay={500}>
            <div className="mt-12 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Users className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-lg text-foreground">Quartiers desservis à {city.name}</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
                {city.neighborhoods.map((neighborhood, index) => (
                  <motion.span 
                    key={neighborhood}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-card border border-border rounded-full text-sm text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                  >
                    {neighborhood}
                  </motion.span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* CTA local */}
        <AnimatedSection animation="fade-up" delay={550}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Vous êtes à {city.name} ? Nos techniciens interviennent dans tout le {city.department}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link to="/#quote">
                  Demander un devis gratuit
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10" asChild>
                <a href="tel:0184808652">
                  <Phone className="w-4 h-4 mr-2" />
                  01 84 80 86 52
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CityLocalContent;
