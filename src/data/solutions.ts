export type SectorSolution = {
  sector: string;
  title: string;
  desc: string;
  bullets: string[];
  img: string;
  icon: "dash" | "flow" | "shield" | "docs" | "edu" | "ai" | "pay";
};

export const sectorSolutions: SectorSolution[] = [
  {
    icon: "dash",
    sector: "Banques & Finance",
    title: "Pilotage, conformité, cartes & paiements",
    desc:
      "Cockpit direction/agences, drill-down, suivi opérationnel, workflows maker-checker et traçabilité.",
    bullets: ["Cockpit & drill-down", "Maker-checker", "Cartes & paiements"],
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=2400&q=80",
  },
  {
    icon: "flow",
    sector: "Administration & Institutions",
    title: "Dématérialisation des demandes & dossiers",
    desc:
      "Portails, dépôts, suivi, validations, délais et reporting hiérarchique clair.",
    bullets: ["Portails & suivi", "Validations", "Historique complet"],
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=80",
  },
  {
    icon: "shield",
    sector: "Sécurité & Conformité",
    title: "Traçabilité, accès, auditabilité",
    desc:
      "Journalisation, contrôle d’accès, responsabilités claires et preuves à chaque étape.",
    bullets: ["Accès par rôles", "Logs & preuves", "Audit simple"],
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=2400&q=80",
  },
];

export const SERVICE_IMAGES = {
  docs: "/images/backgrounds/thinking-promising-project.jpg",
  dashboard:
    "/images/backgrounds/sales-manager-examining-success-efficiency-metrics-within-firm.jpg",
  finance:
    "/images/backgrounds/financial-advisor-expert-highlighting-important-terms-retirement-plan.jpg",
  ai: "/images/backgrounds/it-professional-updating-ai-systems.jpg",
  health:
    "/images/backgrounds/aerial-view-doctor-writing-patient-daily-report-checklist.jpg",
  market: "/images/backgrounds/investor-analyzing-forex-market-trends.jpg",
  office: "/working-table-with-office-tools.jpg",
  contract:
    "/real-estate-broker-client-negotiating-leasing-contract-high-class-office.jpg",
  support: "/customer-service-faqs-illustration.jpg",
  privacy: "/images/backgrounds/young-black-man-taping-his-laptop-s-webcam.jpg",
};

export const mainServices = [
  {
    icon: "layers",
    image: SERVICE_IMAGES.docs,
    title: "Digitalisation documentaire & GED",
    desc: "Transformation des dossiers papier en flux numériques clairs, centralisés et traçables.",
    bullets: ["GED", "Numérisation", "Archivage", "Recherche rapide"],
  },
  {
    icon: "route",
    image: SERVICE_IMAGES.office,
    title: "Workflow & automatisation métier",
    desc: "Structuration des traitements internes, validations et circuits opérationnels.",
    bullets: ["Workflow", "Validation", "Relances", "Processus métier"],
  },
  {
    icon: "chart",
    image: SERVICE_IMAGES.dashboard,
    title: "Tableaux de bord décisionnels",
    desc: "KPI, reporting et lecture visuelle des volumes, délais, performances et anomalies.",
    bullets: ["Cockpit", "KPI", "Reporting", "Pilotage"],
  },
  {
    icon: "cpu",
    image: SERVICE_IMAGES.ai,
    title: "IA métier & assistants de travail",
    desc: "Assistants intelligents pour synthèse, rédaction, analyse documentaire et productivité.",
    bullets: ["Synthèse", "Extraction", "Rédaction", "Accélération"],
  },
  {
    icon: "grid",
    image: SERVICE_IMAGES.support,
    title: "Portails web & espaces de services",
    desc: "Portails institutionnels, espaces métiers, interfaces de suivi et plateformes de consultation.",
    bullets: ["Portails", "Espaces métiers", "Suivi", "Services en ligne"],
  },
  {
    icon: "phone",
    image: SERVICE_IMAGES.health,
    title: "Applications mobiles & terrain",
    desc: "Solutions mobiles pour agents, équipes opérationnelles, terrain et contrôle.",
    bullets: ["Mobile", "Terrain", "Continuité", "Exécution"],
  },
  {
    icon: "shield",
    image: SERVICE_IMAGES.privacy,
    title: "Sécurité, conformité & contrôle interne",
    desc: "Mise en place de contrôles, traçabilité, rôles, journalisation et logique de conformité.",
    bullets: ["Conformité", "Audit trail", "Contrôles", "Sécurité"],
  },
  {
    icon: "database",
    image: SERVICE_IMAGES.market,
    title: "Data operations & structuration d’information",
    desc: "Organisation des données, visibilité métier et préparation d’indicateurs utiles.",
    bullets: ["Data", "Structuration", "Indicateurs", "Lecture métier"],
  },
  {
    icon: "briefcase",
    image: SERVICE_IMAGES.contract,
    title: "Applications internes d’exécution",
    desc: "Outils internes pour moderniser les traitements administratifs, financiers et opérationnels.",
    bullets: ["Interne", "Coordination", "Traitement", "Efficacité"],
  },
];

export const achievements = [
  {
    icon: "cpu",
    image: SERVICE_IMAGES.ai,
    title: "Digitalisation assistée par IA pour services et organisations",
    desc: "Conception d’approches permettant de transformer des procédures manuelles en workflows numériques assistés par IA.",
  },
  {
    icon: "sparkle",
    image: SERVICE_IMAGES.support,
    title: "Programmes de formation professionnelle à l’IA",
    desc: "Formation de publics métiers à l’usage concret de l’IA, à la productivité et à l’intégration dans le travail quotidien.",
  },
  {
    icon: "route",
    image: SERVICE_IMAGES.office,
    title: "Système de transport, billetterie et abonnements RFID",
    desc: "Mise en place d’une solution de gestion opérationnelle pour un écosystème de transport avec tickets, cartes et supervision.",
  },
  {
    icon: "shield",
    image: SERVICE_IMAGES.finance,
    title: "Système sécurisé de transfert d’argent",
    desc: "Développement d’un environnement applicatif structuré autour de la sécurité, de la traçabilité et du contrôle des transactions.",
  },
  {
    icon: "grid",
    image: SERVICE_IMAGES.contract,
    title: "Création et digitalisation de site web institutionnel",
    desc: "Pilotage et coordination d’un projet de présence web institutionnelle jusqu’à sa mise en production.",
  },
  {
    icon: "database",
    image: SERVICE_IMAGES.health,
    title: "Modernisation d’infrastructure numérique et réseau",
    desc: "Amélioration de la connectivité, de la stabilité des services numériques et de l’organisation technique de plusieurs environnements.",
  },
  {
    icon: "chart",
    image: SERVICE_IMAGES.market,
    title: "Pilotage opérationnel, supervision et tableaux de bord",
    desc: "Mise en place d’une lecture consolidée des opérations, transactions, trajets, activités et indicateurs.",
  },
  {
    icon: "layers",
    image: SERVICE_IMAGES.docs,
    title: "Optimisation documentaire, dossiers et traçabilité",
    desc: "Structuration de la circulation d’information, centralisation des dossiers et réduction des zones floues dans les traitements.",
  },
  {
    icon: "briefcase",
    image: SERVICE_IMAGES.dashboard,
    title: "Interventions sur environnements SAP, serveurs et bases de données",
    desc: "Contribution à des environnements d’entreprise avec dimension système d’information, administration technique et continuité de service.",
  },
];