import { attachReveal } from "../ui/reveal";
import { SectionHeader } from "../components/SectionHeader";
import { FeatureCard } from "../components/FeatureCard";
import { CTASection } from "../components/CTASection";
import { Ticker } from "../components/Ticker";

export function renderCatalogue(root: HTMLElement) {
  const ICONS: Record<string, string> = {
    layers: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.1 6.27a2 2 0 0 0 0 3.46l9.07 4.09a2 2 0 0 0 1.66 0l9.07-4.09a2 2 0 0 0 0-3.46l-9.07-4.09z"/><path d="m2.1 14.73 9.07 4.09a2 2 0 0 0 1.66 0l9.07-4.09"/><path d="m2.1 10.73 9.07 4.09a2 2 0 0 0 1.66 0l9.07-4.09"/></svg>`,
    route: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/></svg>`,
    chart: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>`,
    cpu: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>`,
    grid: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>`,
    phone: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`,
    shield: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    database: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
    briefcase: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
    check: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
  };

  const categories = [
    {
      title: "Digitalisation documentaire & GED",
      icon: "layers",
      items: [
        { name: "GED Institutionnelle", desc: "Centralisation et archivage structuré des dossiers." },
        { name: "Numérisation", desc: "Transformation intelligente du papier en données." },
        { name: "Traçabilité", desc: "Suivi complet des consultations et modifications." }
      ]
    },
    {
      title: "Workflows & automatisation métier",
      icon: "route",
      items: [
        { name: "Circuits de validation", desc: "Validation multi-niveaux automatisée." },
        { name: "Relances automatiques", desc: "Éliminez les oublis et les retards de traitement." },
        { name: "Processus métier", desc: "Modélisation précise de votre exécution." }
      ]
    },
    {
      title: "Tableaux de bord décisionnels",
      icon: "chart",
      items: [
        { name: "Cockpit Direction", desc: "Vision stratégique consolidée en temps réel." },
        { name: "Reporting KPI", desc: "Indicateurs de performance opérationnelle." },
        { name: "Dashboards", desc: "Visualisation avancée pour le pilotage." }
      ]
    },
    {
      title: "IA métier & assistants de travail",
      icon: "cpu",
      items: [
        { name: "Synthèse assistée", desc: "Analyse et résumé automatique de dossiers longs." },
        { name: "Extraction de données", desc: "Lecture automatique de documents structurés." },
        { name: "Productivité IA", desc: "Accélération des tâches de rédaction." }
      ]
    },
    {
      title: "Portails web & espaces de services",
      icon: "grid",
      items: [
        { name: "Portails métiers", desc: "Espaces dédiés pour vos processus internes." },
        { name: "Services en ligne", desc: "Interfaces de consultation et de suivi." },
        { name: "Suivi client", desc: "Visibilité partagée sur l'état d'avancement." }
      ]
    },
    {
      title: "Applications mobiles & terrain",
      icon: "phone",
      items: [
        { name: "Saisie mobile", desc: "Collecte de données sur le terrain sans friction." },
        { name: "Continuité de service", desc: "Accès à vos outils partout en mobilité." },
        { name: "Suivi opérationnel", desc: "Reporting direct depuis le terrain." }
      ]
    },
    {
      title: "Sécurité & contrôle interne",
      icon: "shield",
      items: [
        { name: "Conformité", desc: "Mise en place de registres et d'audit trails." },
        { name: "Gestion des rôles", desc: "Contrôle strict des accès et privilèges." },
        { name: "Journalisation", desc: "Historique complet des actions sensibles." }
      ]
    },
    {
      title: "Data operations & structuration",
      icon: "database",
      items: [
        { name: "Nettoyage de données", desc: "Uniformisation de vos bases d'information." },
        { name: "Structuration", desc: "Organisation logique pour une meilleure lecture." },
        { name: "Indicateurs", desc: "Préparation des métriques utiles au métier." }
      ]
    },
    {
      title: "Applications internes d’exécution",
      icon: "briefcase",
      items: [
        { name: "Coordination", desc: "Outils de communication entre départements." },
        { name: "Efficacité administrative", desc: "Fluidification des tâches de support." },
        { name: "Modernisation financière", desc: "Digitalisation des circuits de paiement." }
      ]
    }
  ];

  const keyServices = [
    "Digitalisation GED", "Validation Workflow", "KPI Cockpit", "IA Synthèse", "Mobile Field App",
    "Data Structuration", "Audit Trail", "Portails Métiers", "Operational Dashboard", "Process Automation"
  ];

  root.innerHTML = `
    <div class="catalogue">
      <section class="bg-soft">
        <div class="shell">
          <div class="section-header reveal">
            <div class="eyebrow">Catalogue</div>
            <h1 class="text-6xl" style="margin-bottom: 24px;">L'ensemble de nos <span>pôles d'expertise</span></h1>
            <p class="text-xl" style="color: var(--ink-muted); max-width: 800px;">Explorez une architecture complète de services conçus pour transformer votre organisation en un système fluide, structuré et performant.</p>
          </div>

          ${Ticker(keyServices)}
        </div>
      </section>

      <section>
        <div class="shell">
          <div style="display: grid; gap: 80px;">
            ${categories.map((cat, i) => `
              <div class="reveal">
                <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 32px;">
                  <div style="width: 48px; height: 48px; background: var(--primary); color: white; display: grid; place-items: center; border-radius: 12px;">
                    ${ICONS[cat.icon]}
                  </div>
                  <h2 class="text-3xl">${cat.title}</h2>
                </div>
                
                <div class="grid-3" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">
                  ${cat.items.map(item => FeatureCard(ICONS.check, item.name, item.desc)).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      ${CTASection(
    "Besoin d'une solution sur mesure ?",
    "Nos services s'adaptent à vos besoins spécifiques et à votre infrastructure.",
    "Demander un devis"
  )}
    </div>
  `;

  attachReveal();
}