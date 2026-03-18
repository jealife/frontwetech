import { attachReveal } from "../ui/reveal";
import { SectionHeader } from "../components/SectionHeader";
import { FeatureCard } from "../components/FeatureCard";
import { CTASection } from "../components/CTASection";

export function renderSolutions(root: HTMLElement) {
  const ICONS: Record<string, string> = {
    briefcase: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-1.5-2h-4.5a2 2 0 0 0-2 2v16"/></svg>`,
    shield: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    database: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
    layers: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.1 6.27a2 2 0 0 0 0 3.46l9.07 4.09a2 2 0 0 0 1.66 0l9.07-4.09a2 2 0 0 0 0-3.46l-9.07-4.09z"/><path d="m2.1 14.73 9.07 4.09a2 2 0 0 0 1.66 0l9.07-4.09"/><path d="m2.1 10.73 9.07 4.09a2 2 0 0 0 1.66 0l9.07-4.09"/></svg>`,
  };

  const sectors = [
    {
      title: "Banques & institutions financières",
      icon: "shield",
      desc: "Pour les structures qui exigent rigueur, traçabilité, visibilité opérationnelle et maîtrise des traitements sensibles."
    },
    {
      title: "Entreprises & groupes privés",
      icon: "briefcase",
      desc: "Pour améliorer la coordination interne, accélérer l’exécution métier et renforcer la qualité du pilotage."
    },
    {
      title: "Administrations & services publics",
      icon: "database",
      desc: "Pour mieux structurer les dossiers, fluidifier les circuits et professionnaliser la circulation de l’information."
    },
    {
      title: "Organisations multi-sites",
      icon: "layers",
      desc: "Pour harmoniser les processus, consolider la donnée et garder une vision cohérente de l’activité sur plusieurs entités."
    }
  ];

  const caseStudies = [
    {
      title: "Système de transport & Billetterie RFID",
      desc: "Mise en place d'une solution de gestion opérationnelle complète incluant tickets, cartes RFID et supervision temps réel.",
      image: "/working-table-with-office-tools.jpg",
      tags: ["Digitalisation", "RFID", "Logistique"]
    },
    {
      title: "Parcours de transfert d'argent sécurisé",
      desc: "Développement d'un environnement applicatif structuré autour de la sécurité, de la traçabilité et du contrôle des transactions.",
      image: "/images/backgrounds/financial-advisor-expert-highlighting-important-terms-retirement-plan.jpg",
      tags: ["Banque", "Sécurité", "Conformité"]
    },
    {
      title: "Portail institutionnel digitalisé",
      desc: "Pilotage et coordination d'un projet de présence web institutionnelle jusqu'à sa mise en production sécurisée.",
      image: "/images/backgrounds/thinking-promising-project.jpg",
      tags: ["GED", "Web", "Institutions"]
    }
  ];

  root.innerHTML = `
    <div class="solutions">
      <section class="bg-soft">
        <div class="shell">
          <div class="section-header reveal">
            <div class="eyebrow">Solutions</div>
            <h1 class="text-6xl" style="margin-bottom: 24px;">Une expertise qui s'adapte à <span>vos défis</span></h1>
            <p class="text-xl" style="color: var(--ink-muted); max-width: 800px;">Nous accompagnons les organisations les plus exigeantes avec des solutions pensées pour l'efficacité réelle, la sécurité et le pilotage de haut niveau.</p>
          </div>
        </div>
      </section>

      <section>
        <div class="shell">
          <div class="grid-4">
            ${sectors.map(s => FeatureCard(ICONS[s.icon], s.title, s.desc)).join('')}
          </div>
        </div>
      </section>

      <section class="bg-muted">
        <div class="shell">
          ${SectionHeader(
    "Nos grandes réalisations",
    "Des exemples concrets de transformation opérationnelle menés avec succès.",
    "Des exemples concrets de transformation opérationnelle menés avec succès."
  )}

          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px;">
            ${caseStudies.map(cs => `
              <article class="reveal" style="background: white; border-radius: 20px; overflow: hidden; box-shadow: var(--shadow-md); transition: transform 0.3s ease;">
                <div style="height: 240px; overflow: hidden;">
                  <img src="${cs.image}" alt="${cs.title}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease;" />
                </div>
                <div style="padding: 32px;">
                  <div style="display: flex; gap: 8px; margin-bottom: 16px;">
                    ${cs.tags.map(t => `<span style="font-size: 0.75rem; font-weight: 700; color: var(--primary); background: rgba(var(--primary-rgb), 0.08); padding: 4px 12px; border-radius: 999px;">${t}</span>`).join('')}
                  </div>
                  <h3 style="margin-bottom: 16px; font-size: 1.5rem;">${cs.title}</h3>
                  <p style="color: var(--ink-muted);">${cs.desc}</p>
                </div>
              </article>
            `).join('')}
          </div>
        </div>
      </section>

      ${CTASection(
    "Prêt à rejoindre l'innovation ?",
    "Parlons de votre prochain projet de transformation digitale ou de formation IA.",
    "Contactez-nous",
    "mailto:services@dbtech-innovation.com"
  )}
    </div>
  `;

  attachReveal();
}