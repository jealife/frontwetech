export type CatalogueIcon =
  | "scan"
  | "docs"
  | "flow"
  | "dash"
  | "ai"
  | "shield"
  | "pay"
  | "edu";

export type CatalogueItem = {
  group: string;
  title: string;
  desc: string;
  icon: CatalogueIcon;
  /** optionnel: petite image de fond unique par card (évite la répétition) */
  img?: string;
  /** optionnel: mots-clés pour recherche plus “intelligente” */
  keywords?: string[];
  /** optionnel: tags courts affichables */
  tags?: string[];
};

export const catalogueGroups = [
  "Digitalisation & GED",
  "Workflows & Automatisation",
  "Tableaux de bord & Data",
  "Applications Web & Mobile",
  "Banque & Finance",
  "Paiements & Mobile Money",
  "Sécurité & Conformité",
  "IA & Productivité",
  "RH, Paie & Administration",
  "Santé",
  "Éducation",
  "Justice & Institutions",
  "Transport & Mobilité",
  "Énergie, Mines & Pétrole",
  "Commerce & Distribution",
  "Télécoms",
  "Infrastructure & Déploiement",
  "Formations",
] as const;

export const catalogueItems: CatalogueItem[] = [
  // =========================
  // DIGITALISATION & GED
  // =========================
  {
    group: "Digitalisation & GED",
    icon: "docs",
    title: "Numérisation & classement intelligent",
    desc: "Passez du papier au dossier numérique : scan, indexation, recherche rapide, droits d’accès et historique complet.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2400&q=80",
    keywords: ["GED", "archives", "scan", "indexation", "dossiers"],
    tags: ["Archives", "Recherche", "Droits"],
  },
  {
    group: "Digitalisation & GED",
    icon: "docs",
    title: "GED “audit-ready” (preuves & traçabilité)",
    desc: "Chaque action laisse une trace : qui a vu, modifié, validé, exporté. Parfait pour inspection, contrôle interne et audits.",
    img: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=2400&q=80",
    keywords: ["audit", "traçabilité", "conformité", "GED"],
    tags: ["Audit", "Historique", "Conformité"],
  },
  {
    group: "Digitalisation & GED",
    icon: "shield",
    title: "Dossiers sensibles (accès par rôles & confidentialité)",
    desc: "Sécurisez les dossiers RH, juridiques, bancaires : rôles, permissions, journal d’accès, verrouillage, durée de conservation.",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=2400&q=80",
    keywords: ["confidentiel", "rôles", "permissions", "données sensibles"],
    tags: ["Rôles", "Sécurité", "Confidentiel"],
  },
  {
    group: "Digitalisation & GED",
    icon: "scan",
    title: "Portail dépôt de documents (clients/usagers)",
    desc: "Un portail simple où l’usager dépose ses pièces, suit l’avancement, reçoit des retours, sans se déplacer.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=2400&q=80",
    keywords: ["portail", "dépôt", "pièces", "suivi"],
    tags: ["Portail", "Suivi", "Réduction files"],
  },
  {
    group: "Digitalisation & GED",
    icon: "docs",
    title: "Archivage légal & conservation",
    desc: "Règles de conservation, versions, scellés, exports. Les documents restent exploitables, propres, et défendables.",
    img: "https://images.unsplash.com/photo-1587613865764-0ea5b0c3c403?auto=format&fit=crop&w=2400&q=80",
    keywords: ["archivage", "versions", "conservation", "preuve"],
    tags: ["Archivage", "Versions", "Export"],
  },

  // =========================
  // WORKFLOWS & AUTOMATISATION
  // =========================
  {
    group: "Workflows & Automatisation",
    icon: "flow",
    title: "Validation multi-niveaux (maker-checker)",
    desc: "Deux niveaux (ou plus) pour valider : demandes, dépenses, comptes, dossiers. Réduit erreurs et fraudes internes.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=80",
    keywords: ["maker-checker", "validation", "process", "fraude"],
    tags: ["Contrôle", "Validation", "Traçabilité"],
  },
  {
    group: "Workflows & Automatisation",
    icon: "flow",
    title: "Circuits de demandes (RH, achats, congés, missions)",
    desc: "Un circuit clair : dépôt → validation → exécution → preuve. Notifications, délais, relances, statut en temps réel.",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=2400&q=80",
    keywords: ["congés", "achats", "missions", "workflow"],
    tags: ["Demandes", "Notifications", "Délais"],
  },
  {
    group: "Workflows & Automatisation",
    icon: "flow",
    title: "Gestion de courriers (entrant/sortant) & parapheur",
    desc: "Courriers tracés : réception, attribution, traitement, signature, sortie. Une lecture directionnelle immédiate.",
    img: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=2400&q=80",
    keywords: ["courrier", "parapheur", "signature", "direction"],
    tags: ["Courriers", "Signature", "Pilotage"],
  },
  {
    group: "Workflows & Automatisation",
    icon: "flow",
    title: "Automatisation de relances & SLA",
    desc: "Relances automatiques, délais maîtrisés, escalades. On évite les dossiers “oubliés” et on stabilise l’exécution.",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=2400&q=80",
    keywords: ["SLA", "relance", "escalade", "délais"],
    tags: ["SLA", "Relances", "Escalade"],
  },

  // =========================
  // TABLEAUX DE BORD & DATA
  // =========================
  {
    group: "Tableaux de bord & Data",
    icon: "dash",
    title: "Cockpit Direction (KPI lisibles)",
    desc: "KPIs clairs : volumes, délais, performance, anomalies. Drill-down par agence, département, période.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2400&q=80",
    keywords: ["KPI", "cockpit", "direction", "reporting"],
    tags: ["KPI", "Direction", "Drill-down"],
  },
  {
    group: "Tableaux de bord & Data",
    icon: "dash",
    title: "Suivi d’activité (équipes & production)",
    desc: "Qui traite quoi, où ça bloque, ce qui progresse. Une lecture simple pour gérer au quotidien sans friction.",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2400&q=80",
    keywords: ["activité", "production", "suivi", "performance"],
    tags: ["Suivi", "Charge", "Blocages"],
  },
  {
    group: "Tableaux de bord & Data",
    icon: "shield",
    title: "Détection d’anomalies & alertes",
    desc: "Signaux d’alerte : doublons, incohérences, pics anormaux. Notifications et rapports exploitables.",
    img: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=2400&q=80",
    keywords: ["anomalies", "alertes", "risques", "contrôle"],
    tags: ["Alertes", "Contrôle", "Rapports"],
  },

  // =========================
  // APPS WEB & MOBILE
  // =========================
  {
    group: "Applications Web & Mobile",
    icon: "scan",
    title: "Portails clients (suivi dossiers, rendez-vous, pièces)",
    desc: "Un espace client : dépôt de pièces, rendez-vous, suivi, notifications, messages. Simple, moderne, rassurant.",
    img: "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=2400&q=80",
    keywords: ["portail", "client", "suivi", "rendez-vous"],
    tags: ["Portail", "Notifications", "Self-service"],
  },
  {
    group: "Applications Web & Mobile",
    icon: "scan",
    title: "Applications terrain (agents, contrôles, inspections)",
    desc: "Mobile offline/online : formulaires, photos, scan, géolocalisation, synchronisation, rapport final.",
    img: "https://images.unsplash.com/photo-1520697222865-7d76f3d31f7c?auto=format&fit=crop&w=2400&q=80",
    keywords: ["terrain", "inspection", "offline", "mobile"],
    tags: ["Terrain", "Offline", "Rapports"],
  },
  {
    group: "Applications Web & Mobile",
    icon: "docs",
    title: "Gestion de contenus (site + admin + publications)",
    desc: "Un site institutionnel + espace admin : pages, actualités, médias, formulaires, rendez-vous, statistiques.",
    img: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=2400&q=80",
    keywords: ["site", "admin", "contenu", "publications"],
    tags: ["Admin", "Contenu", "Formulaires"],
  },

  // =========================
  // BANQUE & FINANCE (GABON)
  // =========================
  {
    group: "Banque & Finance",
    icon: "shield",
    title: "KYC & dossiers clients (banque / microfinance)",
    desc: "Collecte pièces, validations, conformité, historique. Réduit les risques et accélère l’ouverture de compte.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2400&q=80",
    keywords: ["KYC", "banque", "client", "conformité"],
    tags: ["KYC", "Dossiers", "Conformité"],
  },
  {
    group: "Banque & Finance",
    icon: "shield",
    title: "Crédit & suivi (dossiers, échéances, relances)",
    desc: "Montage dossier, comité, décisions, échéancier, relances, preuves. Lecture claire pour direction et recouvrement.",
    img: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?auto=format&fit=crop&w=2400&q=80",
    keywords: ["crédit", "échéances", "relances", "comité"],
    tags: ["Crédit", "Relances", "Comité"],
  },
  {
    group: "Banque & Finance",
    icon: "dash",
    title: "Cockpit agence (volumes, caisses, performance)",
    desc: "Vision agence : ouverture/fermeture, volumes, délais, top opérations, alertes. Décision rapide.",
    img: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=2400&q=80",
    keywords: ["agence", "cockpit", "performance", "volumes"],
    tags: ["Agence", "KPI", "Alertes"],
  },
  {
    group: "Banque & Finance",
    icon: "docs",
    title: "Gestion documentaire bancaire (contrats, pièces, avenants)",
    desc: "Contrats propres, versions, recherche, exports : moins de pertes, plus de rapidité, plus de confiance.",
    img: "https://images.unsplash.com/photo-1523285367489-d38aec03b6bb?auto=format&fit=crop&w=2400&q=80",
    keywords: ["contrats", "versions", "GED", "banque"],
    tags: ["Contrats", "Versions", "GED"],
  },

  // =========================
  // PAIEMENTS & MOBILE MONEY
  // =========================
  {
    group: "Paiements & Mobile Money",
    icon: "pay",
    title: "Intégration Mobile Money (Moov / Airtel) – parcours paiement",
    desc: "Paiement simple : initiation, confirmation, reçu, preuve. Idéal pour services publics, écoles, abonnements.",
    img: "https://images.unsplash.com/photo-1556741533-f6acd647d2fb?auto=format&fit=crop&w=2400&q=80",
    keywords: ["mobile money", "paiement", "abonnement", "reçu"],
    tags: ["Paiement", "Reçu", "Parcours"],
  },
  {
    group: "Paiements & Mobile Money",
    icon: "pay",
    title: "Facturation & encaissement (web + mobile + reçus)",
    desc: "Factures, statuts, paiements, relances. Reçus automatiques, exports, rapprochement basique.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2400&q=80",
    keywords: ["facturation", "encaissement", "reçus", "relances"],
    tags: ["Factures", "Reçus", "Exports"],
  },
  {
    group: "Paiements & Mobile Money",
    icon: "shield",
    title: "Rapprochement & preuves de paiement",
    desc: "Chaque paiement a sa preuve : référence, horodatage, statut, export. On évite les conflits et les zones grises.",
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=2400&q=80",
    keywords: ["rapprochement", "preuve", "paiement", "audit"],
    tags: ["Preuves", "Audit", "Rapprochement"],
  },

  // =========================
  // SECURITE & CONFORMITE
  // =========================
  {
    group: "Sécurité & Conformité",
    icon: "shield",
    title: "Gestion des accès (rôles, permissions, journaux)",
    desc: "Qui voit quoi, qui fait quoi, et quand. Journaux d’audit, permissions propres, responsabilisation.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2400&q=80",
    keywords: ["accès", "rôles", "permissions", "audit"],
    tags: ["Rôles", "Logs", "Contrôle"],
  },
  {
    group: "Sécurité & Conformité",
    icon: "shield",
    title: "Protection données sensibles (masquage, règles, rétention)",
    desc: "Masquage des champs, règles d’accès, conservation. Les données restent utiles sans devenir dangereuses.",
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=2400&q=80",
    keywords: ["données", "masquage", "rétention", "confidentiel"],
    tags: ["Données", "Rétention", "Masquage"],
  },
  {
    group: "Sécurité & Conformité",
    icon: "flow",
    title: "Conformité par processus (preuves à chaque étape)",
    desc: "On intègre la conformité dans le parcours : validations, justificatifs, historique et exports prêts.",
    img: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=2400&q=80",
    keywords: ["conformité", "process", "preuves", "audit"],
    tags: ["Process", "Preuves", "Audit-ready"],
  },

  // =========================
  // IA & PRODUCTIVITE
  // =========================
  {
    group: "IA & Productivité",
    icon: "ai",
    title: "Assistant IA métier (synthèse, tri, rédaction)",
    desc: "L’IA prépare (résume, classe, propose), l’humain valide. Gain de temps sans perdre le contrôle.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2400&q=80",
    keywords: ["IA", "assistant", "synthèse", "rédaction"],
    tags: ["Synthèse", "Tri", "Rédaction"],
  },
  {
    group: "IA & Productivité",
    icon: "ai",
    title: "Extraction intelligente (PDF, formulaires, pièces)",
    desc: "Extraction de champs clés (noms, dates, références) pour accélérer le traitement des dossiers.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2400&q=80",
    keywords: ["extraction", "PDF", "documents", "automatisation"],
    tags: ["Extraction", "Dossiers", "Gain temps"],
  },
  {
    group: "IA & Productivité",
    icon: "dash",
    title: "Analyse & recommandations (tendances, alertes, décisions)",
    desc: "Lecture simple : tendances, variations, alertes. Aide à décider avec des indicateurs propres.",
    img: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=2400&q=80",
    keywords: ["analyse", "tendances", "alertes", "KPI"],
    tags: ["Tendances", "Alertes", "Décision"],
  },

  // =========================
  // RH, PAIE & ADMIN (GABON)
  // =========================
  {
    group: "RH, Paie & Administration",
    icon: "edu",
    title: "Dossiers RH (contrats, congés, sanctions, attestations)",
    desc: "Dossiers propres, traçables, accessibles selon rôles. Congés, attestations, documents RH centralisés.",
    img: "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=2400&q=80",
    keywords: ["RH", "contrats", "congés", "attestations"],
    tags: ["RH", "Traçabilité", "Centralisation"],
  },
  {
    group: "RH, Paie & Administration",
    icon: "pay",
    title: "Bulletins de paie & coffre-fort salarié",
    desc: "Génération, distribution, archivage. Chaque salarié retrouve ses documents dans un espace sécurisé.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2400&q=80",
    keywords: ["paie", "bulletins", "coffre-fort", "RH"],
    tags: ["Paie", "Coffre-fort", "Sécurisé"],
  },
  {
    group: "RH, Paie & Administration",
    icon: "flow",
    title: "Workflows RH (validation, signature, preuves)",
    desc: "Demandes RH tracées : dépôt, validation, signature, preuve. Moins de tensions, plus de clarté.",
    img: "https://images.unsplash.com/photo-1551836022-8a1a1e5c5f5d?auto=format&fit=crop&w=2400&q=80",
    keywords: ["workflow", "RH", "signature", "preuves"],
    tags: ["Workflow", "Signature", "Preuves"],
  },

  // =========================
  // SANTE
  // =========================
  {
    group: "Santé",
    icon: "docs",
    title: "Dossiers patients (structure & accès sécurisé)",
    desc: "Centraliser les dossiers, réduire les pertes, sécuriser l’accès. Historique et documents exploitables.",
    img: "https://images.unsplash.com/photo-1580281657527-47f249e8f9c8?auto=format&fit=crop&w=2400&q=80",
    keywords: ["santé", "patients", "dossiers", "sécurité"],
    tags: ["Dossiers", "Accès", "Traçabilité"],
  },
  {
    group: "Santé",
    icon: "flow",
    title: "Parcours patient (admission → consultation → documents)",
    desc: "Un parcours simple, suivi clair, documents disponibles. Moins d’attente et meilleure organisation.",
    img: "https://images.unsplash.com/photo-1579154203451-0b3c61c3f5a7?auto=format&fit=crop&w=2400&q=80",
    keywords: ["parcours", "admission", "consultation", "suivi"],
    tags: ["Parcours", "Suivi", "Organisation"],
  },

  // =========================
  // EDUCATION
  // =========================
  {
    group: "Éducation",
    icon: "edu",
    title: "Portail scolarité (inscriptions, pièces, paiements, résultats)",
    desc: "Inscriptions, dépôt pièces, paiements, résultats. Les parents/étudiants suivent sans se déplacer.",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2400&q=80",
    keywords: ["éducation", "portail", "inscriptions", "résultats"],
    tags: ["Portail", "Paiements", "Résultats"],
  },
  {
    group: "Éducation",
    icon: "shield",
    title: "Attestations & diplômes sécurisés (anti-fraude)",
    desc: "Génération et vérification : QR/validation, traçabilité, contrôle. Réduit fortement la fraude documentaire.",
    img: "https://images.unsplash.com/photo-1554774853-b414d54b08f6?auto=format&fit=crop&w=2400&q=80",
    keywords: ["diplômes", "attestations", "anti-fraude", "QR"],
    tags: ["Anti-fraude", "Vérification", "Traçabilité"],
  },

  // =========================
  // JUSTICE & INSTITUTIONS
  // =========================
  {
    group: "Justice & Institutions",
    icon: "docs",
    title: "Gestion des dossiers (classement, recherches, pièces)",
    desc: "Dossiers clairs, pièces rattachées, recherche rapide, suivi des actions. Un socle pour moderniser proprement.",
    img: "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=2400&q=80",
    keywords: ["justice", "dossiers", "pièces", "recherche"],
    tags: ["Dossiers", "GED", "Suivi"],
  },
  {
    group: "Justice & Institutions",
    icon: "flow",
    title: "Circuits administratifs (demandes, validations, décisions)",
    desc: "Demande → instruction → décision → preuve. Chaque étape devient contrôlable, lisible et mesurable.",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=2400&q=80",
    keywords: ["administration", "validation", "décision", "preuves"],
    tags: ["Process", "Décision", "Preuves"],
  },

  // =========================
  // TRANSPORT & MOBILITE
  // =========================
  {
    group: "Transport & Mobilité",
    icon: "pay",
    title: "Billetterie & paiements (urbain / interurbain)",
    desc: "Tickets, contrôles, preuves, états de vente. Fonctionne en terrain réel, avec une lecture simple côté management.",
    img: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=2400&q=80",
    keywords: ["billetterie", "tickets", "transport", "paiements"],
    tags: ["Tickets", "Contrôle", "Reporting"],
  },
  {
    group: "Transport & Mobilité",
    icon: "dash",
    title: "Suivi flotte & activité (tableau de bord)",
    desc: "Suivi trajets, incidents, volumes, performance. Un cockpit lisible pour décider plus vite.",
    img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=2400&q=80",
    keywords: ["flotte", "suivi", "cockpit", "trajets"],
    tags: ["Flotte", "KPI", "Cockpit"],
  },

  // =========================
  // ENERGIE, MINES & PETROLE
  // =========================
  {
    group: "Énergie, Mines & Pétrole",
    icon: "shield",
    title: "Inspections terrain (HSE) + rapports traçables",
    desc: "Formulaires terrain, photos, géoloc, rapports. Historique, preuves, suivi des actions correctives.",
    img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=2400&q=80",
    keywords: ["HSE", "inspection", "terrain", "rapports"],
    tags: ["HSE", "Terrain", "Preuves"],
  },
  {
    group: "Énergie, Mines & Pétrole",
    icon: "docs",
    title: "Dossiers techniques (plans, documents, versions)",
    desc: "Plans, documents techniques, versions, accès par rôle. Recherche rapide et maîtrise documentaire.",
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=2400&q=80",
    keywords: ["plans", "versions", "technique", "GED"],
    tags: ["Plans", "Versions", "Accès"],
  },

  // =========================
  // COMMERCE & DISTRIBUTION
  // =========================
  {
    group: "Commerce & Distribution",
    icon: "dash",
    title: "Stock & inventaire (lecture simple)",
    desc: "Stocks, entrées/sorties, alertes rupture, historiques. Une base propre pour réduire pertes et improvisation.",
    img: "https://images.unsplash.com/photo-1515165562835-c4c6b1c7b8a8?auto=format&fit=crop&w=2400&q=80",
    keywords: ["stock", "inventaire", "rupture", "alertes"],
    tags: ["Stock", "Alertes", "Historique"],
  },
  {
    group: "Commerce & Distribution",
    icon: "pay",
    title: "Commandes & paiements (clients, livreurs, reçus)",
    desc: "Commandes, statuts, paiements, reçus, suivi. Une expérience moderne et claire, côté client et côté équipe.",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=2400&q=80",
    keywords: ["commandes", "paiements", "livraison", "reçus"],
    tags: ["Commandes", "Suivi", "Reçus"],
  },

  // =========================
  // TELECOMS
  // =========================
  {
    group: "Télécoms",
    icon: "dash",
    title: "Suivi incidents & interventions (tableau + terrain)",
    desc: "Tickets incidents, affectations, interventions terrain, rapports. Suivi clair et preuves à chaque étape.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2400&q=80",
    keywords: ["incidents", "interventions", "terrain", "tickets"],
    tags: ["Tickets", "Terrain", "Rapports"],
  },
  {
    group: "Télécoms",
    icon: "flow",
    title: "Workflow “demande → traitement → clôture”",
    desc: "Une chaîne lisible qui évite les dossiers bloqués. SLA, relances, escalades, statut public si besoin.",
    img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=2400&q=80",
    keywords: ["workflow", "SLA", "escalade", "clôture"],
    tags: ["SLA", "Relances", "Clôture"],
  },

  // =========================
  // INFRA & DEPLOIEMENT
  // =========================
  {
    group: "Infrastructure & Déploiement",
    icon: "shield",
    title: "Déploiement serveur + supervision (stabilité)",
    desc: "Déploiement propre, logs, supervision, alertes. Une base stable pour éviter les “pannes surprises”.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2400&q=80",
    keywords: ["déploiement", "supervision", "logs", "stabilité"],
    tags: ["Stabilité", "Supervision", "Logs"],
  },
  {
    group: "Infrastructure & Déploiement",
    icon: "shield",
    title: "Sauvegardes & restauration (plan de reprise)",
    desc: "Sauvegardes, tests de restauration, procédures. Quand il y a un incident, on redémarre vite et proprement.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2400&q=80",
    keywords: ["backup", "restauration", "reprise", "incident"],
    tags: ["Backups", "Reprise", "Procédures"],
  },

  // =========================
  // FORMATIONS
  // =========================
  {
    group: "Formations",
    icon: "edu",
    title: "Formation GED / Digitalisation (équipes & managers)",
    desc: "Adoption terrain : bonnes pratiques, process, responsabilités. Objectif : que ça marche vraiment au quotidien.",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2400&q=80",
    keywords: ["formation", "GED", "adoption", "process"],
    tags: ["Adoption", "Pratique", "Terrain"],
  },
  {
    group: "Formations",
    icon: "ai",
    title: "Formation IA pour les métiers (productivité & contrôle)",
    desc: "IA utile : synthèses, rédaction, tri, extraction. On garde le contrôle, on gagne du temps, on réduit le chaos.",
    img: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=2400&q=80",
    keywords: ["formation", "IA", "productivité", "métiers"],
    tags: ["IA", "Productivité", "Métiers"],
  },

  // =========================
  // AJOUTS “GABON REALITE” (bonus)
  // =========================
  {
    group: "Applications Web & Mobile",
    icon: "scan",
    title: "Mode offline / faible connexion (terrain Gabon)",
    desc: "L’app continue même avec réseau instable : stockage local, synchronisation contrôlée, reprise après coupure.",
    img: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=2400&q=80",
    keywords: ["offline", "faible connexion", "sync", "terrain"],
    tags: ["Offline", "Sync", "Résilience"],
  },
  {
    group: "Sécurité & Conformité",
    icon: "shield",
    title: "Prévention fraude interne (contrôles + preuves)",
    desc: "On réduit les “zones floues” : validations, traces, justificatifs, alertes. C’est visible, donc ça change tout.",
    img: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=2400&q=80",
    keywords: ["fraude", "contrôle interne", "preuves", "alertes"],
    tags: ["Contrôle", "Alertes", "Preuves"],
  },
];