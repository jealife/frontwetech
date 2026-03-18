import { attachReveal } from "../ui/reveal";
import { Hero } from "../components/Hero";
import { FeatureCard } from "../components/FeatureCard";
import { SectionHeader } from "../components/SectionHeader";
import { CTASection } from "../components/CTASection";
import { HighlightStrip } from "../components/HighlightStrip";

export function renderHome(root: HTMLElement) {
  const ICONS: Record<string, string> = {
    spark: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="i"><path d="m12 3 1.912 5.886L20 10.8l-5.088 1.914L13 18.6l-1.912-5.886L6 10.8l5.088-1.914L12 3z"/></svg>`,
    arrow: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="i"><path d="m9 18 6-6-6-6"/></svg>`,
    check: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="i"><path d="M20 6 9 17l-5-5"/></svg>`,
    layers: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="i"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.1 6.27a2 2 0 0 0 0 3.46l9.07 4.09a2 2 0 0 0 1.66 0l9.07-4.09a2 2 0 0 0 0-3.46l-9.07-4.09z"/><path d="m2.1 14.73 9.07 4.09a2 2 0 0 0 1.66 0l9.07-4.09"/><path d="m2.1 10.73 9.07 4.09a2 2 0 0 0 1.66 0l9.07-4.09"/></svg>`,
    route: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="i"><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/></svg>`,
    chart: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="i"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>`,
    cpu: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="i"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>`,
    star: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="i"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
    shield: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="i"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  };

  const HERO_IMAGE = "/images/backgrounds/sales-manager-examining-success-efficiency-metrics-within-firm.jpg";

  const pillars = [
    {
      icon: "layers",
      title: "Digitalisation documentaire & GED",
      desc: "Transformation des dossiers papier en flux numériques clairs, centralisés et traçables."
    },
    {
      icon: "route",
      title: "Workflow & exécution métier",
      desc: "Structuration des traitements internes, validations et circuits opérationnels."
    },
    {
      icon: "chart",
      title: "Tableaux de bord décisionnels",
      desc: "KPI, reporting et lecture visuelle des performances et anomalies."
    },
    {
      icon: "cpu",
      title: "IA métier & assistants",
      desc: "Assistants intelligents pour synthèse, rédaction et accélération documentaire."
    }
  ];

  const categories = [
    { name: "Digitalisation structurée", icon: "layers" },
    { name: "Workflow intelligence", icon: "route" },
    { name: "Document orchestration", icon: "layers" },
    { name: "Decision support", icon: "chart" },
    { name: "Architecture métier", icon: "shield" },
    { name: "Operational dashboards", icon: "chart" },
    { name: "Data visibility", icon: "cpu" },
    { name: "IA pragmatique", icon: "star" }
  ];

  const sectors = [
    "Banques", "Assurances", "Institutions", "Santé", "Éducation", "Administrations", "Services Publics", "Groupes privés"
  ];

  root.innerHTML = `
    <div class="home">
      ${Hero(
    "Innovation Digitale",
    "Transformez vos opérations avec une architecture <span>digitale premium</span>",
    "Nous concevons des solutions sur mesure pour structurer l’information, fluidifier les circuits et donner à vos équipes une meilleure capacité d’exécution.",
    HERO_IMAGE,
    ICONS
  )}

      ${HighlightStrip("Pensé pour", sectors)}

      <!-- PILLARS -->
      <section id="solutions">
        <div class="shell">
          ${SectionHeader(
    "Notre Offre",
    "Des solutions conçues pour la performance opérationnelle",
    "Nous mettons la technologie au service de votre efficacité réelle avec une approche orientée résultats."
  )}
          
          <div class="grid-4">
            ${pillars.map(p => FeatureCard(ICONS[p.icon], p.title, p.desc)).join('')}
          </div>
        </div>
      </section>

      <!-- SHOWCASE: ORGANISATION -->
      <section class="bg-soft">
        <div class="shell">
          <div class="grid-2" style="align-items: center;">
            <div class="reveal">
              <div class="eyebrow">Organisation</div>
              <h2 class="text-4xl" style="margin-bottom: 24px;">Classez, retrouvez et exploitez vos documents sans perte de temps</h2>
              <p class="text-lg" style="color: var(--ink-muted); margin-bottom: 32px;">Nous structurons les flux documentaires pour réduire les frictions et rendre l'information stratégique immédiatement disponible pour les décideurs.</p>
              <ul style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
                <li style="display: flex; align-items: center; gap: 8px; font-weight: 600; font-size: 0.9375rem;"><span style="color: var(--primary);">${ICONS.check}</span>Classement intelligent</li>
                <li style="display: flex; align-items: center; gap: 8px; font-weight: 600; font-size: 0.9375rem;"><span style="color: var(--primary);">${ICONS.check}</span>Recherche avancée</li>
                <li style="display: flex; align-items: center; gap: 8px; font-weight: 600; font-size: 0.9375rem;"><span style="color: var(--primary);">${ICONS.check}</span>Traçabilité</li>
                <li style="display: flex; align-items: center; gap: 8px; font-weight: 600; font-size: 0.9375rem;"><span style="color: var(--primary);">${ICONS.check}</span>Sécurité</li>
              </ul>
            </div>
            <div class="reveal slide-right">
              <div style="border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-lg);">
                <img src="/images/backgrounds/thinking-promising-project.jpg" alt="Organisation" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ARCHITECTURE SECTION (RESTORED) -->
      <section>
        <div class="shell">
          <div class="reveal" style="background: var(--bg-soft); border-radius: 40px; padding: 100px 60px; text-align: center;">
            <div class="eyebrow" style="margin-inline: auto;">Méthodologie</div>
            <h2 class="text-5xl" style="margin-bottom: 40px; max-width: 800px; margin-inline: auto;">Une architecture pensée pour <span>l'exécution</span></h2>
            
            <div class="grid-4" style="margin-top: 60px; text-align: left;">
              <div class="reveal scale-in">
                <div class="text-6xl font-black" style="color: var(--primary); opacity: 0.1; margin-bottom: -30px;">01</div>
                <h3 class="text-xl">Structurer</h3>
                <p>Organisation des données et centralisation des flux.</p>
              </div>
              <div class="reveal scale-in" style="transition-delay: 0.1s;">
                <div class="text-6xl font-black" style="color: var(--primary); opacity: 0.1; margin-bottom: -30px;">02</div>
                <h3 class="text-xl">Fluidifier</h3>
                <p>Optimisation des circuits et réduction des délais.</p>
              </div>
              <div class="reveal scale-in" style="transition-delay: 0.2s;">
                <div class="text-6xl font-black" style="color: var(--primary); opacity: 0.1; margin-bottom: -30px;">03</div>
                <h3 class="text-xl">Piloter</h3>
                <p>Tableaux de bord et indicateurs de performance.</p>
              </div>
              <div class="reveal scale-in" style="transition-delay: 0.3s;">
                <div class="text-6xl font-black" style="color: var(--primary); opacity: 0.1; margin-bottom: -30px;">04</div>
                <h3 class="text-xl">Accélérer</h3>
                <p>Automatisation et aide à la décision par l'IA.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SHOWCASE: PERFORMANCE -->
      <section class="bg-soft">
        <div class="shell">
          <div class="grid-2" style="align-items: center; direction: rtl;">
            <div class="reveal" style="direction: ltr;">
              <div class="eyebrow">Performance</div>
              <h2 class="text-4xl" style="margin-bottom: 24px;">Réduisez les lenteurs de traitement avec des circuits optimisés</h2>
              <p class="text-lg" style="color: var(--ink-muted); margin-bottom: 32px;">Nous modélisons vos processus pour diminuer les points de friction, clarifier les rôles et accélérer l’exécution des opérations critiques.</p>
              <div style="display: flex; gap: 24px;">
                <div style="text-align: center;">
                  <div class="text-3xl font-bold" style="color: var(--primary);">-50%</div>
                  <div class="text-xs text-muted uppercase">Détails de traitement</div>
                </div>
                <div style="text-align: center;">
                  <div class="text-3xl font-bold" style="color: var(--primary);">100%</div>
                  <div class="text-xs text-muted uppercase">Traçabilité</div>
                </div>
              </div>
            </div>
            <div class="reveal slide-left" style="direction: ltr;">
              <div style="border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-lg);">
                <img src="/images/backgrounds/sales-manager-examining-success-efficiency-metrics-within-firm.jpg" alt="Performance" />
              </div>
            </div>
          </div>
        </div>
      </section>

      ${HighlightStrip("Domaines d'accompagnement", sectors)}

      ${CTASection(
    "Prêt à moderniser votre organisation ?",
    "Échangeons sur vos besoins pour concevoir une architecture digitale parfaitement adaptée à votre réalité métier."
  )}

      <!-- EXPERTISE CLOUD -->
      <section>
        <div class="shell">
          <div class="reveal" style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; opacity: 0.6; padding: 40px 0;">
            ${categories.map(c => `
              <div style="display: flex; align-items: center; gap: 8px; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; color: var(--ink-muted); background: var(--bg-soft); padding: 8px 16px; border-radius: 999px;">
                ${ICONS[c.icon]}
                ${c.name}
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    </div>
  `;

  attachReveal();
}