// Générateur de contenu ultra-personnalisé par ville
// Utilise les données spécifiques de chaque ville (nom, population, quartiers, villes voisines)
// pour créer du contenu unique évitant la duplication inter-villes

import { CityData } from "@/data/citiesData";

// Hash déterministe pour générer des variations uniques par ville
const hashCity = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
};

// Catégorisation de la ville selon sa population
const getCityCategory = (population: string): "metropole" | "grande" | "moyenne" | "petite" => {
  const pop = parseInt(population.replace(/\s/g, "").replace(/,/g, ""));
  if (pop > 200000) return "metropole";
  if (pop > 80000) return "grande";
  if (pop > 30000) return "moyenne";
  return "petite";
};

// Génère un H1 unique par ville
export const getCityH1 = (city: CityData): string => {
  const hash = hashCity(city.slug);
  const category = getCityCategory(city.population);
  
  const templates: Record<string, string[]> = {
    metropole: [
      `Sécurisez votre ${city.name} avec HD Connect`,
      `Expert Sécurité & Vidéosurveillance à ${city.name}`,
      `Protection Professionnelle à ${city.name}`,
      `Solutions de Sécurité à ${city.name}`,
    ],
    grande: [
      `Votre Sécurité à ${city.name}, Notre Priorité`,
      `HD Connect Sécurise ${city.name}`,
      `Expert Alarme & Vidéosurveillance à ${city.name}`,
      `Sécurité Sur-Mesure à ${city.name}`,
    ],
    moyenne: [
      `Sécurité à ${city.name} et Environs`,
      `Protection & Vidéosurveillance à ${city.name}`,
      `Expert Sécurité à ${city.name} (${city.departmentCode})`,
      `HD Connect à ${city.name} – Sécurité & Domotique`,
    ],
    petite: [
      `Sécurité à ${city.name} et ses Communes`,
      `Vidéosurveillance & Alarme à ${city.name}`,
      `HD Connect Protège ${city.name}`,
      `Votre Expert Sécurité à ${city.name}`,
    ],
  };

  const options = templates[category];
  return options[hash % options.length];
};

// Génère une description hero unique
export const getCityHeroDescription = (city: CityData): string => {
  const hash = hashCity(city.slug);
  const category = getCityCategory(city.population);
  const nearbyCount = city.nearbyTowns?.length || 0;
  const neighborhoodsList = city.neighborhoods?.slice(0, 3).join(", ") || "";
  const nearbyList = city.nearbyTowns?.slice(0, 3).join(", ") || "";

  const templates = [
    `Installation professionnelle de vidéosurveillance, alarmes certifiées et contrôle d'accès à ${city.name}${neighborhoodsList ? ` et ses quartiers (${neighborhoodsList})` : ""}. Intervention rapide dans le ${city.department}, devis gratuit.`,
    
    `HD Connect, votre expert sécurité à ${city.name} (${city.departmentCode}). Caméras IA 4K, alarmes NF&A2P et domotique intelligente. ${nearbyCount > 0 ? `Nous couvrons également ${nearbyList} et ${nearbyCount - 3 > 0 ? `${nearbyCount - 3} autres communes.` : "les communes voisines."}` : `Intervention dans tout le ${city.department}.`}`,
    
    `Protégez votre ${category === "metropole" || category === "grande" ? "entreprise ou résidence" : "habitation et commerce"} à ${city.name} avec des solutions de sécurité sur-mesure. ${city.population} habitants nous font confiance en ${city.region}.`,
    
    `Spécialiste de la sécurité électronique à ${city.name}, HD Connect installe vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Couverture complète du ${city.department} (${city.departmentCode}).`,
  ];

  return templates[hash % templates.length];
};

// Génère des stats hero uniques par ville
export const getCityHeroStats = (city: CityData) => {
  const hash = hashCity(city.slug);
  const pop = parseInt(city.population.replace(/\s/g, "").replace(/,/g, ""));
  
  const installCount = 50 + (hash % 200);
  const responseTime = pop > 100000 ? "< 2h" : pop > 50000 ? "< 4h" : "< 6h";
  const satisfaction = 95 + (hash % 4);
  
  return [
    { value: `${installCount}+`, label: "Installations" },
    { value: `${satisfaction}%`, label: "Satisfaction" },
    { value: responseTime, label: "Intervention" },
  ];
};

// Génère un témoignage ultra-personnalisé par ville
export const getCityTestimonial = (city: CityData) => {
  const hash = hashCity(city.slug);
  const category = getCityCategory(city.population);
  const neighborhood = city.neighborhoods?.[hash % (city.neighborhoods?.length || 1)] || "";
  
  const names = [
    "M. Laurent", "Mme Petit", "M. Garcia", "Mme Moreau", "M. André",
    "Mme Leroy", "M. Simon", "Mme Lambert", "M. Bonnet", "Mme Fournier",
    "M. Girard", "Mme Dupont", "M. Rousseau", "Mme Blanc", "M. Henry",
  ];
  
  const roles = [
    "propriétaire", "commerçant", "directeur de PME", "gérante",
    "responsable sécurité", "syndic copropriété", "chef d'entreprise",
    "restaurateur", "pharmacien", "directrice d'agence",
  ];

  const quotes: Record<string, string[]> = {
    metropole: [
      `HD Connect a sécurisé nos 3 points de vente à ${city.name}${neighborhood ? ` dont notre boutique ${neighborhood}` : ""}. Vidéosurveillance centralisée, on gère tout depuis notre smartphone.`,
      `Après un cambriolage dans notre immeuble${neighborhood ? ` à ${neighborhood}` : ""}, HD Connect a installé un système d'alarme connecté et un contrôle d'accès par badge. Plus aucun incident depuis 2 ans.`,
      `Notre entreprise à ${city.name} nécessitait une mise aux normes sécurité. HD Connect a été réactif : diagnostic en 48h, installation en une semaine. Tout est conforme.`,
    ],
    grande: [
      `L'équipe HD Connect a installé 8 caméras et une alarme NF&A2P dans notre commerce à ${city.name}. Le système est fiable et le SAV toujours disponible.`,
      `Installation soignée et rapide à ${city.name}. Nos locaux sont enfin sécurisés. L'application mobile est un vrai plus pour surveiller à distance.`,
      `Nous avons choisi HD Connect pour sécuriser notre copropriété à ${city.name}${neighborhood ? ` (quartier ${neighborhood})` : ""}. Interphone vidéo + badges : les résidents sont ravis.`,
    ],
    moyenne: [
      `Intervention rapide à ${city.name}. Le technicien a été ponctuel et a tout expliqué clairement. Notre maison est maintenant bien protégée avec l'alarme et les caméras.`,
      `HD Connect nous a installé un système complet à ${city.name} : alarme, 4 caméras et détecteurs de mouvement. Rapport qualité-prix imbattable.`,
      `Très satisfait de HD Connect à ${city.name}. Le devis était clair, pas de surprise, et l'installation impeccable. Je recommande à tous mes voisins.`,
    ],
    petite: [
      `Même à ${city.name}, HD Connect assure un service de qualité. Installation propre, matériel fiable et suivi client sérieux. Notre maison est bien protégée.`,
      `Nous pensions que les services de sécurité professionnels n'étaient pas accessibles à ${city.name}. HD Connect nous a prouvé le contraire avec une installation rapide et abordable.`,
      `HD Connect intervient rapidement même à ${city.name}. Notre alarme NF&A2P et nos 3 caméras fonctionnent parfaitement depuis l'installation.`,
    ],
  };

  const cityQuotes = quotes[category];
  
  return {
    name: names[hash % names.length],
    role: roles[hash % roles.length],
    quote: cityQuotes[hash % cityQuotes.length],
    rating: 4 + (hash % 2),
    neighborhood,
  };
};

// Génère une FAQ ultra-personnalisée par ville
export const getCityFAQ = (city: CityData) => {
  const nearbyList = city.nearbyTowns?.slice(0, 4).join(", ") || "les communes environnantes";
  const neighborhoodList = city.neighborhoods?.slice(0, 6).join(", ") || "";
  const category = getCityCategory(city.population);
  
  const faqItems = [
    {
      question: `Quels services de sécurité HD Connect propose-t-il à ${city.name} ?`,
      answer: `À ${city.name} (${city.departmentCode}), HD Connect propose une gamme complète : vidéosurveillance HD/4K avec intelligence artificielle, alarmes certifiées NF&A2P avec télésurveillance, contrôle d'accès (badges RFID, biométrie, interphones vidéo), domotique intelligente, câblage réseau, maintenance préventive 24/7, antennes et satellites, motorisation de portails et barrières de parking.`
    },
    {
      question: `Quel est le délai d'intervention de HD Connect à ${city.name} ?`,
      answer: `HD Connect intervient ${category === "metropole" || category === "grande" ? "en moins de 2 heures pour les urgences" : "sous 4 à 6 heures pour les urgences"} à ${city.name} et dans le ${city.department}. Pour les installations programmées, nous proposons des rendez-vous sous 24 à 48 heures avec un créneau horaire précis. Un diagnostic gratuit est réalisé à domicile avant tout devis.`
    },
    {
      question: `Les frais de déplacement sont-ils inclus pour ${city.name} ?`,
      answer: `Oui, les frais de déplacement à ${city.name} et dans les communes du ${city.department} sont inclus dans nos devis. Cela concerne aussi les villes voisines comme ${nearbyList}. Nous vous communiquons un devis détaillé et transparent avant toute intervention, sans mauvaise surprise.`
    },
    {
      question: `Quels quartiers et communes couvrez-vous autour de ${city.name} ?`,
      answer: `Nous intervenons dans tous les quartiers de ${city.name}${neighborhoodList ? ` : ${neighborhoodList}` : ""}${city.nearbyTowns && city.nearbyTowns.length > 0 ? `, ainsi que dans les communes environnantes : ${city.nearbyTowns.join(", ")}.` : "."} Notre couverture s'étend à l'ensemble du ${city.department} en ${city.region}.`
    },
    {
      question: `Proposez-vous des contrats de maintenance à ${city.name} ?`,
      answer: `Oui, HD Connect propose des contrats de maintenance annuels adaptés aux clients de ${city.name}. Chaque contrat inclut des visites préventives (1 à 4 par an selon la formule), un support technique prioritaire, le remplacement des pièces défectueuses et des tarifs préférentiels sur les interventions complémentaires. Cela garantit le bon fonctionnement continu de vos équipements.`
    },
    {
      question: `Comment obtenir un devis gratuit pour ${city.name} ?`,
      answer: `Pour obtenir un devis gratuit à ${city.name}, vous pouvez : nous appeler directement au 01 84 80 86 52, remplir le formulaire de devis en ligne sur notre site, ou nous envoyer un email. Un technicien certifié se déplacera gratuitement pour réaliser un diagnostic de sécurité personnalisé de votre habitation ou local professionnel à ${city.name}.`
    },
  ];

  return faqItems;
};

// Génère le badge hero personnalisé
export const getCityBadge = (city: CityData): string => {
  const hash = hashCity(city.slug);
  const category = getCityCategory(city.population);
  const neighborhoodCount = city.neighborhoods?.length || 0;
  
  const badges: Record<string, string[]> = {
    metropole: [
      `Expert Sécurité ${city.name} - ${neighborhoodCount > 0 ? `${neighborhoodCount} Quartiers` : city.departmentCode}`,
      `Sécurité ${city.name} - ${city.department}`,
      `N°1 Sécurité à ${city.name} (${city.departmentCode})`,
    ],
    grande: [
      `Expert Sécurité ${city.name} (${city.departmentCode})`,
      `Sécurité & Domotique ${city.name}`,
      `${city.name} - ${city.department}`,
    ],
    moyenne: [
      `${city.name} (${city.departmentCode}) • ${city.region}`,
      `Sécurité ${city.name} et environs`,
      `Expert local ${city.name}`,
    ],
    petite: [
      `${city.department} (${city.departmentCode}) • ${city.region}`,
      `${city.name} et communes voisines`,
      `Expert sécurité ${city.departmentCode}`,
    ],
  };

  const options = badges[category];
  return options[hash % options.length];
};
