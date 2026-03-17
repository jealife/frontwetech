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