import "./catalogue.css";
import { attachReveal } from "../ui/reveal";

export function renderCatalogue(root: HTMLElement) {
  const MAIN_BACKGROUNDS = [
    "/images/backgrounds/freepik__3d-white-squares-of-various-sizes-arranged-in-a-ca__32632.jpeg",
    "/images/backgrounds/freepik__talk__32633.jpeg",
    "/images/backgrounds/freepik__talk__32634.jpeg",
    "/images/backgrounds/freepik__talk__32635.jpeg",
  ];

  const HERO_PANEL_BACKGROUNDS = [
    "/abstract-geometric-background-with-hexagons-shape-pattern-banner-website-header-template.jpg",
    "/3d-background-light-honeycomb-different-height-can-be-used-cover-design-book-design-website-background-cd-cover-advertising-3d-rendering.jpg",
    "/top-view-white-stripes-waves-deformed-bands-surface-with-soft-light-modern-bright-background.jpg",
  ];

  const BRAND_STRIP_BACKGROUNDS = [
    "/blue-grey-abstract-technology-geometrical-background.jpg",
    "/globe-glowing-atmosphere-png-global-corporate.jpg",
    "/futuristic-technological-hexagonal-background-3d-rendering.jpg",
  ];

  const SECTION_PANEL_BACKGROUNDS = [
    "/low-poly-plexus-network-complexity-abstract-banner.jpg",
    "/abstract-geometric-pattern-background-orange-pink-hexagonal-honeycombs.jpg",
    "/blue-grey-abstract-technology-geometrical-background.jpg",
  ];

  const ICONS: Record<string, string> = {
    shield: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2l8 4v6c0 5-3.4 9.7-8 10-4.6-.3-8-5-8-10V6l8-4z"/></svg>`,
    sparkle: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2l1.4 4.6L18 8l-4.6 1.4L12 14l-1.4-4.6L6 8l4.6-1.4L12 2zm6 10 .7 2.3L21 15l-2.3.7L18 18l-.7-2.3L15 15l2.3-.7L18 12zM6 14l.7 2.3L9 17l-2.3.7L6 20l-.7-2.3L3 17l2.3-.7L6 14z"/></svg>`,
    layers: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2l10 6-10 6L2 8l10-6zm0 10 10-6v4l-10 6L2 10V6l10 6zm0 6 10-6v4l-10 6L2 16v-4l10 6z"/></svg>`,
    grid: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z"/></svg>`,
    route: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm10 12a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM7 9c6 0 4 6 10 6v2c-7 0-5-8-10-8V9z"/></svg>`,
    bolt: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13 2L3 14h7l-1 8 12-14h-7l-1-6z"/></svg>`,
    check: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 16.2l-3.5-3.5L4 14.2 9 19l11-11-1.4-1.4z"/></svg>`,
    arrow: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 18l6-6-6-6"/></svg>`,
    rocket: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14 3c-3.4 1-6.4 4-7.5 7.4L4 12l2.5.5C7.6 16 10.7 19 14 20l.6-2.4L17 16c3.3-1 6-3.7 6-7 0-3.3-2.7-6-6-6h-3z"/></svg>`,
    phone: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8c1.4 2.7 3.9 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.4.6 3.7.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.7 22 2 13.3 2 2c0-.6.4-1 1-1h3.2c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.7.1.4 0 .8-.3 1.1l-1.9 2z"/></svg>`,
    mail: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 3-8 5-8-5V6l8 5 8-5v1z"/></svg>`,
    map: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/></svg>`,
    star: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2l2.8 6.6 7.2.6-5.5 4.7 1.7 7.1L12 17.9 5.8 21l1.7-7.1L2 9.2l7.2-.6L12 2z"/></svg>`,
    compass: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 1 0 .01 20A10 10 0 0 0 12 2zm3.5 6.5-2.1 7-7 2.1 2.1-7 7-2.1z"/></svg>`,
    lock: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 1a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-1V6a5 5 0 0 0-5-5zm-3 8V6a3 3 0 0 1 6 0v3H9z"/></svg>`,
    database: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C7 2 3 3.8 3 6v12c0 2.2 4 4 9 4s9-1.8 9-4V6c0-2.2-4-4-9-4zm0 2c4.4 0 7 .9 7 2s-2.6 2-7 2-7-.9-7-2 2.6-2 7-2zm0 14c-4.4 0-7-.9-7-2v-2c1.5 1.1 4.3 1.7 7 1.7s5.5-.6 7-1.7v2c0 1.1-2.6 2-7 2zm0-5c-4.4 0-7-.9-7-2V9c1.5 1.1 4.3 1.7 7 1.7S17.5 10.1 19 9v2c0 1.1-2.6 2-7 2z"/></svg>`,
    chart: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 19h16v2H2V3h2v16zm3-2H5v-6h2v6zm4 0H9V7h2v10zm4 0h-2V4h2v13zm4 0h-2v-9h2v9z"/></svg>`,
    cpu: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 2h6v2h2.5A1.5 1.5 0 0 1 19 5.5V8h2v2h-2v4h2v2h-2v2.5A1.5 1.5 0 0 1 17.5 20H15v2H9v-2H6.5A1.5 1.5 0 0 1 5 18.5V16H3v-2h2v-4H3V8h2V5.5A1.5 1.5 0 0 1 6.5 4H9V2zm-2 4v12h10V6H7zm2 2h6v8H9V8z"/></svg>`,
    briefcase: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 3h6a2 2 0 0 1 2 2v2h3a2 2 0 0 1 2 2v3h-9v2h-2v-2H2V9a2 2 0 0 1 2-2h3V5a2 2 0 0 1 2-2zm6 4V5H9v2h6zm7 7v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5h9v2h2v-2h9z"/></svg>`,
  };

  const photoCards = [
    "linear-gradient(180deg, rgba(7,11,18,.18), rgba(7,11,18,.74)), url('/images/backgrounds/young-black-man-taping-his-laptop-s-webcam.jpg')",
    "linear-gradient(180deg, rgba(7,11,18,.18), rgba(7,11,18,.74)), url('/customer-service-faqs-illustration.jpg')",
    "linear-gradient(180deg, rgba(7,11,18,.18), rgba(7,11,18,.74)), url('/real-estate-broker-client-negotiating-leasing-contract-high-class-office.jpg')",
    "linear-gradient(180deg, rgba(7,11,18,.18), rgba(7,11,18,.74)), url('/working-table-with-office-tools.jpg')",
    "linear-gradient(180deg, rgba(7,11,18,.18), rgba(7,11,18,.74)), url('/images/backgrounds/thinking-promising-project.jpg')",
    "linear-gradient(180deg, rgba(7,11,18,.18), rgba(7,11,18,.74)), url('/images/backgrounds/aerial-view-doctor-writing-patient-daily-report-checklist.jpg')",
    "linear-gradient(180deg, rgba(7,11,18,.18), rgba(7,11,18,.74)), url('/images/backgrounds/it-professional-updating-ai-systems.jpg')",
    "linear-gradient(180deg, rgba(7,11,18,.18), rgba(7,11,18,.74)), url('/images/backgrounds/investor-analyzing-forex-market-trends.jpg')",
    "linear-gradient(180deg, rgba(7,11,18,.18), rgba(7,11,18,.74)), url('/images/backgrounds/sales-manager-examining-success-efficiency-metrics-within-firm.jpg')",
    "linear-gradient(180deg, rgba(7,11,18,.18), rgba(7,11,18,.74)), url('/images/backgrounds/financial-advisor-expert-highlighting-important-terms-retirement-plan.jpg')",
  ];

  const fallbackImageCards = [
    "linear-gradient(180deg, rgba(7,11,18,.18), rgba(7,11,18,.74)), url('/images/backgrounds/freepik__3d-white-squares-of-various-sizes-arranged-in-a-ca__32632.jpeg')",
    "linear-gradient(180deg, rgba(7,11,18,.18), rgba(7,11,18,.74)), url('/images/backgrounds/freepik__talk__32633.jpeg')",
    "linear-gradient(180deg, rgba(7,11,18,.18), rgba(7,11,18,.74)), url('/images/backgrounds/freepik__talk__32634.jpeg')",
    "linear-gradient(180deg, rgba(7,11,18,.18), rgba(7,11,18,.74)), url('/images/backgrounds/freepik__talk__32635.jpeg')",
    "linear-gradient(180deg, rgba(7,11,18,.18), rgba(7,11,18,.74)), url('/abstract-geometric-background-with-hexagons-shape-pattern-banner-website-header-template.jpg')",
    "linear-gradient(180deg, rgba(7,11,18,.18), rgba(7,11,18,.74)), url('/3d-background-light-honeycomb-different-height-can-be-used-cover-design-book-design-website-background-cd-cover-advertising-3d-rendering.jpg')",
    "linear-gradient(180deg, rgba(7,11,18,.18), rgba(7,11,18,.74)), url('/top-view-white-stripes-waves-deformed-bands-surface-with-soft-light-modern-bright-background.jpg')",
    "linear-gradient(180deg, rgba(7,11,18,.18), rgba(7,11,18,.74)), url('/blue-grey-abstract-technology-geometrical-background.jpg')",
    "linear-gradient(180deg, rgba(7,11,18,.18), rgba(7,11,18,.74)), url('/futuristic-technological-hexagonal-background-3d-rendering.jpg')",
    "linear-gradient(180deg, rgba(7,11,18,.18), rgba(7,11,18,.74)), url('/globe-glowing-atmosphere-png-global-corporate.jpg')",
    "linear-gradient(180deg, rgba(7,11,18,.18), rgba(7,11,18,.74)), url('/low-poly-plexus-network-complexity-abstract-banner.jpg')",
    "linear-gradient(180deg, rgba(7,11,18,.18), rgba(7,11,18,.74)), url('/abstract-geometric-pattern-background-orange-pink-hexagonal-honeycombs.jpg')",
  ];

  const allCardImages = [...photoCards, ...fallbackImageCards];
  let cardVisualIndex = 0;
  const nextCardVisual = () => allCardImages[cardVisualIndex++];

  const rawGroups = [
    {
      title: "Digitalisation documentaire & GED",
      lead:
        "Structurez les dossiers, éliminez la dispersion documentaire et rendez chaque pièce retrouvable, traçable et exploitable.",
      services: [
        { icon: "layers", title: "GED institutionnelle", desc: "Centralisation documentaire, classement intelligent, moteur de recherche et accès par profils utilisateurs.", bullets: ["Recherche rapide", "Indexation", "Archivage structuré"] },
        { icon: "database", title: "Numérisation & indexation", desc: "Transformation des archives papier en dossiers numériques organisés, exploitables et sécurisés.", bullets: ["OCR métier", "Classement", "Référentiel documentaire"] },
        { icon: "shield", title: "Archivage probant & traçabilité", desc: "Historique des actions, preuves de dépôt, journalisation et suivi des consultations.", bullets: ["Audit trail", "Horodatage", "Traçabilité complète"] },
        { icon: "route", title: "Circulation documentaire", desc: "Distribution fluide des pièces entre services, directions et validateurs, sans rupture d’information.", bullets: ["Suivi des étapes", "Visibilité", "Réduction des pertes"] },
      ],
    },
    {
      title: "Workflows & automatisation métier",
      lead:
        "Transformez les tâches répétitives et les validations manuelles en parcours propres, lisibles et beaucoup plus rapides.",
      services: [
        { icon: "route", title: "Workflows de validation", desc: "Circuits multi-niveaux pour demandes, approbations, rejets, relances et contrôles.", bullets: ["Validation multi-niveaux", "Relances", "Contrôle des étapes"] },
        { icon: "bolt", title: "Automatisation des processus", desc: "Réduction des tâches manuelles grâce à des règles métiers, des déclencheurs et des scénarios automatiques.", bullets: ["Règles métier", "Scénarios", "Gain de temps"] },
        { icon: "lock", title: "Maker-checker & conformité", desc: "Sécurisez les décisions sensibles avec séparation des rôles, validation hiérarchique et contrôle des actions.", bullets: ["Séparation des rôles", "Contrôle", "Conformité"] },
        { icon: "briefcase", title: "Workflow RH, finance, opérations", desc: "Automatisation des demandes internes, traitements administratifs, paiements, dossiers RH et opérations métier.", bullets: ["RH", "Finance", "Administration"] },
      ],
    },
    {
      title: "Data, pilotage & tableaux de bord",
      lead:
        "Donnez aux directions une lecture claire des volumes, délais, performances et anomalies, sans opacité opérationnelle.",
      services: [
        { icon: "chart", title: "Cockpit directionnel", desc: "Vue consolidée de la performance opérationnelle avec lecture rapide pour la direction générale.", bullets: ["Vue de synthèse", "Lecture rapide", "Décision"] },
        { icon: "grid", title: "Tableaux de bord KPI", desc: "Suivi des indicateurs métier, SLA, délais de traitement, volumes, conformité et performance par service.", bullets: ["KPI", "SLA", "Performance"] },
        { icon: "compass", title: "Dashboards décisionnels", desc: "Visualisation avancée des données pour arbitrage, analyse et priorisation managériale.", bullets: ["Analyse", "Tendances", "Décision plus rapide"] },
        { icon: "sparkle", title: "Reporting automatisé", desc: "Génération de rapports lisibles, exploitables et distribuables automatiquement aux décideurs.", bullets: ["Rapports", "Automatisation", "Distribution"] },
      ],
    },
    {
      title: "IA métier & intelligence documentaire",
      lead:
        "Ajoutez une couche d’intelligence à vos opérations : synthèse, extraction, analyse, assistance et accélération documentaire.",
      services: [
        { icon: "cpu", title: "Assistants IA métier", desc: "Outils intelligents pour assister les équipes dans la compréhension, la préparation et le traitement de l’information.", bullets: ["Assistance", "Synthèse", "Productivité"] },
        { icon: "sparkle", title: "Extraction intelligente", desc: "Repérage automatique de données clés dans les documents, formulaires, contrats ou pièces justificatives.", bullets: ["Extraction", "Contrôle", "Pré-remplissage"] },
        { icon: "layers", title: "Résumé documentaire & analyse", desc: "Synthèse rapide de dossiers longs, préparation de notes internes et aide à la lecture décisionnelle.", bullets: ["Résumé", "Analyse", "Lecture accélérée"] },
        { icon: "shield", title: "IA contrôlée & gouvernée", desc: "Intégration d’IA avec règles de validation humaine, supervision, limites de rôle et cadre de conformité.", bullets: ["Gouvernance", "Validation humaine", "Maîtrise"] },
      ],
    },
    {
      title: "Applications web, mobile & portails",
      lead:
        "Déployez des interfaces modernes, utiles et crédibles pour les utilisateurs internes, partenaires, clients et directions.",
      services: [
        { icon: "grid", title: "Portails web métier", desc: "Interfaces administratives, espaces de suivi, dashboards et portails de services accessibles en ligne.", bullets: ["Portail métier", "Suivi", "Interface moderne"] },
        { icon: "phone", title: "Applications mobiles terrain", desc: "Applications pour agents, équipes terrain, commerciaux, contrôleurs, managers et services décentralisés.", bullets: ["Mobile", "Terrain", "Productivité"] },
        { icon: "database", title: "Portails de dépôt & consultation", desc: "Systèmes de dépôt de documents, consultation de statuts, téléchargement de pièces et suivi d’avancement.", bullets: ["Dépôt", "Consultation", "Suivi"] },
        { icon: "briefcase", title: "Applications internes de gestion", desc: "Solutions métiers pour centraliser l’activité, améliorer l’exécution et fluidifier les processus internes.", bullets: ["Interne", "Coordination", "Exécution"] },
      ],
    },
    {
      title: "Banque, finance, conformité & opérations sensibles",
      lead:
        "Concevez des systèmes robustes pour les environnements qui exigent confiance, contrôle, traçabilité et rapidité d’exécution.",
      services: [
        { icon: "shield", title: "Dossiers clients & conformité", desc: "Gestion structurée des pièces, contrôles de dossier, suivi de validation et traçabilité des décisions.", bullets: ["KYC", "Conformité", "Validation"] },
        { icon: "lock", title: "Contrôle interne & audit", desc: "Outils de suivi des actions, preuves d’exécution, contrôles hiérarchiques et piste d’audit.", bullets: ["Contrôle", "Audit", "Traçabilité"] },
        { icon: "chart", title: "Pilotage financier", desc: "Reporting, suivi de performance, consolidation et lecture décisionnelle pour structures financières.", bullets: ["Finance", "Dashboards", "Décision"] },
        { icon: "route", title: "Parcours de traitement client", desc: "Structuration du traitement des dossiers, demandes, réclamations et validations sur des parcours fluides.", bullets: ["Parcours client", "Suivi", "Maîtrise des délais"] },
      ],
    },
  ];

  const serviceGroups = rawGroups.map((group) => ({
    ...group,
    services: group.services.map((service) => ({
      ...service,
      image: nextCardVisual(),
    })),
  }));

  const tickerBackgrounds = [
    "/images/backgrounds/freepik__3d-white-squares-of-various-sizes-arranged-in-a-ca__32632.jpeg",
    "/images/backgrounds/freepik__talk__32633.jpeg",
    "/images/backgrounds/freepik__talk__32634.jpeg",
    "/images/backgrounds/freepik__talk__32635.jpeg",
    "/abstract-geometric-background-with-hexagons-shape-pattern-banner-website-header-template.jpg",
    "/3d-background-light-honeycomb-different-height-can-be-used-cover-design-book-design-website-background-cd-cover-advertising-3d-rendering.jpg",
    "/top-view-white-stripes-waves-deformed-bands-surface-with-soft-light-modern-bright-background.jpg",
    "/blue-grey-abstract-technology-geometrical-background.jpg",
    "/futuristic-technological-hexagonal-background-3d-rendering.jpg",
    "/globe-glowing-atmosphere-png-global-corporate.jpg",
    "/low-poly-plexus-network-complexity-abstract-banner.jpg",
    "/abstract-geometric-pattern-background-orange-pink-hexagonal-honeycombs.jpg",
  ];

  const tickerItems = serviceGroups.flatMap((group, groupIndex) =>
    group.services.map((service, serviceIndex) => ({
      icon: service.icon,
      title: service.title,
      desc: service.desc,
      visual: `linear-gradient(180deg, rgba(7,11,18,.18), rgba(7,11,18,.74)), url('${tickerBackgrounds[(groupIndex * 4 + serviceIndex) % tickerBackgrounds.length]}')`,
    }))
  );

  const renderSlides = (group: string, images: string[]) =>
    images
      .map(
        (src, index) => `
          <div
            class="bgDeck__slide ${index === 0 ? "is-active" : ""}"
            data-bg-slide
            data-bg-group="${group}"
            style="background-image:url('${src}')"
          ></div>
        `
      )
      .join("");

  root.innerHTML = `
    <div class="homePage cataloguePage">
      <div class="homeBgSlider" aria-hidden="true">
        ${renderSlides("main", MAIN_BACKGROUNDS)}
        <div class="homeBgOverlay"></div>
        <div class="homeBgMesh"></div>
        <div class="homeBgGlow homeBgGlow--cyan"></div>
        <div class="homeBgGlow homeBgGlow--violet"></div>
        <div class="homeBgNoise"></div>
      </div>

      <section class="homeHero catalogueHero">
        <div class="shell shell--hero">
          <div class="heroSurface reveal gather">
            <div class="heroSurfaceDeck bgDeck" aria-hidden="true">
              ${renderSlides("catalogue-hero-surface", HERO_PANEL_BACKGROUNDS)}
              <div class="bgDeck__veil bgDeck__veil--hero-surface"></div>
            </div>

            <div class="heroTopbar">
              <div class="heroBrand">
                <span class="heroBrandMark">${ICONS.sparkle}</span>

                <div class="heroBrandText">
                  <div class="heroBrandName">DB Tech Innovation</div>

                  <div class="heroBrandMetaWrap">
                    <div class="heroBrandMetaDeck bgDeck" aria-hidden="true">
                      ${renderSlides("catalogue-brand-strip", BRAND_STRIP_BACKGROUNDS)}
                      <div class="bgDeck__veil bgDeck__veil--brand-strip"></div>
                    </div>

                    <div class="heroBrandMeta">
                      <span>Catalogue</span>
                      <span>•</span>
                      <span>Digitalisation</span>
                      <span>•</span>
                      <span>Data</span>
                      <span>•</span>
                      <span>IA</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="heroMicroNav">
                <a href="#catalogue-groups"><span>Services</span></a>
                <a href="#catalogue-highlight"><span>Expertises</span></a>
                <a href="#/solutions"><span>Secteurs</span></a>
              </div>
            </div>

            <div class="heroBody">
              <div class="heroContent">
                <div class="heroEyebrow">
                  ${ICONS.layers}
                  <span>Catalogue premium de solutions de digitalisation, d’automatisation et de pilotage</span>
                </div>

                <div class="heroTitleWrap">
                  <div class="heroTitleDeck bgDeck" aria-hidden="true">
                    ${renderSlides("catalogue-hero-title", MAIN_BACKGROUNDS)}
                    <div class="bgDeck__veil bgDeck__veil--hero-title-main"></div>
                  </div>

                  <h1 class="heroTitle">
                    <span class="heroTitleLine heroTitleLine--dark">Un catalogue structuré</span>
                    <span class="heroTitleLine heroTitleLine--accent">pour tous vos services de digitalisation, de workflow, de data, d’IA et d’exécution métier</span>
                  </h1>
                </div>

                <p class="heroLead">
                  Cette page présente une architecture complète de services pour institutions, banques,
                  entreprises, administrations et organisations qui veulent moderniser leurs opérations
                  avec un niveau d’exécution plus lisible, plus crédible et beaucoup plus professionnel.
                </p>

                <div class="heroActions">
                  <a class="heroBtn heroBtn--primary" href="#catalogue-groups">
                    ${ICONS.layers}
                    <span>Explorer le catalogue</span>
                  </a>

                  <a class="heroBtn heroBtn--secondary" href="#/solutions">
                    ${ICONS.grid}
                    <span>Voir les solutions par secteur</span>
                  </a>
                </div>

                <div class="heroKeywords">
                  <span class="heroKeyword">${ICONS.check}<span>GED</span></span>
                  <span class="heroKeyword">${ICONS.check}<span>Workflow</span></span>
                  <span class="heroKeyword">${ICONS.check}<span>Tableaux de bord</span></span>
                  <span class="heroKeyword">${ICONS.check}<span>IA métier</span></span>
                  <span class="heroKeyword">${ICONS.check}<span>Portails web</span></span>
                  <span class="heroKeyword">${ICONS.check}<span>Applications mobiles</span></span>
                  <span class="heroKeyword">${ICONS.check}<span>Conformité</span></span>
                  <span class="heroKeyword">${ICONS.check}<span>Pilotage</span></span>
                </div>
              </div>

              <div class="heroRail">
                <article class="heroRailCard heroRailCard--primary">
                  <div class="heroRailDeck bgDeck" aria-hidden="true">
                    ${renderSlides("catalogue-rail-primary", SECTION_PANEL_BACKGROUNDS)}
                    <div class="bgDeck__veil bgDeck__veil--rail-primary"></div>
                  </div>

                  <div class="heroRailInner">
                    <div class="heroRailLabel">${ICONS.chart}<span>Catalogue structuré</span></div>

                    <h3>
                      <span class="splitTone splitTone--dark">Tous les services essentiels</span>
                      <span class="splitTone splitTone--accent">de la digitalisation moderne réunis dans une seule vitrine</span>
                    </h3>

                    <p>
                      GED, workflows, dashboards, IA, conformité, portails, applications métier,
                      pilotage et exécution : chaque bloc répond à une logique concrète.
                    </p>
                  </div>
                </article>

                <article class="heroRailCard heroRailCard--secondary">
                  <div class="heroRailDeck bgDeck" aria-hidden="true">
                    ${renderSlides("catalogue-rail-secondary", SECTION_PANEL_BACKGROUNDS)}
                    <div class="bgDeck__veil bgDeck__veil--rail-secondary"></div>
                  </div>

                  <div class="heroRailInner">
                    <div class="heroRailMetric">
                      <strong>${serviceGroups.length}</strong>
                      <span>pôles</span>
                    </div>

                    <div class="heroRailList">
                      <span>${ICONS.layers}<span>Digitalisation documentaire</span></span>
                      <span>${ICONS.route}<span>Workflow & automatisation</span></span>
                      <span>${ICONS.chart}<span>Pilotage & dashboards</span></span>
                      <span>${ICONS.cpu}<span>IA métier & productivité</span></span>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <div class="heroBottomBandWrap">
              <div class="heroBottomBandDeck bgDeck" aria-hidden="true">
                ${renderSlides("catalogue-bottom-band", BRAND_STRIP_BACKGROUNDS)}
                <div class="bgDeck__veil bgDeck__veil--bottom-band"></div>
              </div>

              <div class="heroBottomBand">
                <div class="heroBottomItem">${ICONS.lock}<span>Catalogue lisible</span></div>
                <div class="heroBottomItem">${ICONS.sparkle}<span>Structure premium</span></div>
                <div class="heroBottomItem">${ICONS.route}<span>Services concrets</span></div>
                <div class="heroBottomItem">${ICONS.chart}<span>Valeur métier visible</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="homeSection" id="catalogue-highlight">
        <div class="shell">
          <div class="sectionHeading reveal gather">
            <div class="sectionEyebrow">
              ${ICONS.sparkle}
              <span>Positionnement</span>
            </div>

            <h2 class="sectionTitle">
              <span class="sectionTitleLine sectionTitleLine--dark">Une page catalogue qui présente</span>
              <span class="sectionTitleLine sectionTitleLine--accent">la digitalisation comme une vraie architecture de transformation</span>
            </h2>

            <p class="sectionLead">
              Ici, le catalogue n’est pas une simple liste technique. Il sert à montrer la profondeur
              de vos capacités, la richesse de votre offre et votre maîtrise des réalités opérationnelles.
            </p>
          </div>
        </div>
      </section>

      <section class="homeSection" id="catalogue-groups">
        <div class="shell">
          ${serviceGroups
            .map(
              (group, groupIndex) => `
            <div class="catalogueGroup reveal gather">
              <div class="catalogueGroupHeader">
                <div class="sectionEyebrow">
                  ${ICONS.layers}
                  <span>Pôle ${groupIndex + 1}</span>
                </div>

                <h2 class="sectionTitle catalogueGroupTitle">
                  <span class="sectionTitleLine sectionTitleLine--dark">${group.title}</span>
                </h2>

                <p class="sectionLead">${group.lead}</p>
              </div>

              <div class="capabilityGrid">
                ${group.services
                  .map(
                    (item, index) => `
                  <article class="capabilityCard reveal gather capabilityCard--${(index % 4) + 1}" style="--card-img:${item.image}">
                    <div class="capabilityMedia"></div>
                    <div class="capabilityVeil"></div>
                    <div class="capabilityGlow"></div>

                    <div class="capabilityContent">
                      <div class="capabilityLabel">
                        ${ICONS[item.icon]}
                        <span>${group.title}</span>
                      </div>

                      <h3 class="capabilityTitle">${item.title}</h3>
                      <p class="capabilityDesc">${item.desc}</p>

                      <div class="capabilityBullets">
                        ${item.bullets
                          .map(
                            (bullet) => `
                          <span class="capabilityBullet">${ICONS.check}<span>${bullet}</span></span>
                        `
                          )
                          .join("")}
                      </div>
                    </div>
                  </article>
                `
                  )
                  .join("")}
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </section>

      <section class="homeSection homeSection--solutionsTicker">
        <div class="shell">
          <div class="solutionsTickerShell reveal gather">
            <div class="sectionHeading sectionHeading--ticker">
              <div class="sectionEyebrow">
                ${ICONS.grid}
                <span>Services clés</span>
              </div>

              <h2 class="sectionTitle">
                <span class="sectionTitleLine sectionTitleLine--dark">Les services les </span>
                <span class="sectionTitleLine sectionTitleLine--accent">plus demandés</span>
              </h2>
            </div>

            <div class="solutionsTicker">
              <div class="solutionsTickerTrack">
                ${[...tickerItems, ...tickerItems]
                  .map(
                    (item) => `
                  <article class="solutionTickerCard" style="--solution-img:${item.visual}">
                    <div class="solutionTickerCardMedia"></div>
                    <div class="solutionTickerCardVeil"></div>

                    <div class="solutionTickerCardBody">
                      <div class="solutionTickerCardIcon">${ICONS[item.icon]}</div>
                      <h3>${item.title}</h3>
                      <p>${item.desc}</p>
                    </div>
                  </article>
                `
                  )
                  .join("")}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;

  const groupedSlides = new Map<string, HTMLElement[]>();

  Array.from(root.querySelectorAll<HTMLElement>("[data-bg-slide]")).forEach((slide) => {
    const group = slide.dataset.bgGroup;
    if (!group) return;
    if (!groupedSlides.has(group)) groupedSlides.set(group, []);
    groupedSlides.get(group)!.push(slide);
  });

  const timers: number[] = [];
  const activeIndexes = new Map<string, number>();

  const durations: Record<string, number> = {
    main: 5400,
    "catalogue-hero-surface": 6200,
    "catalogue-brand-strip": 4800,
    "catalogue-rail-primary": 5600,
    "catalogue-rail-secondary": 5800,
    "catalogue-bottom-band": 5200,
  };

  const showGroupSlide = (group: string, index: number) => {
    const slides = groupedSlides.get(group);
    if (!slides?.length) return;

    slides.forEach((slide, i) => {
      slide.classList.toggle("is-active", i === index);
      slide.classList.toggle("is-prev", i !== index);
    });

    activeIndexes.set(group, index);
  };

  const startGroupSlider = (group: string) => {
    const slides = groupedSlides.get(group);
    if (!slides || slides.length <= 1) return;

    const timer = window.setInterval(() => {
      const currentIndex = activeIndexes.get(group) ?? 0;
      const nextIndex = (currentIndex + 1) % slides.length;
      showGroupSlide(group, nextIndex);
    }, durations[group] ?? 5600);

    timers.push(timer);
  };

  const stopAllSliders = () => {
    timers.forEach((timer) => window.clearInterval(timer));
    timers.length = 0;
  };

  groupedSlides.forEach((slides, group) => {
    if (!slides.length) return;
    activeIndexes.set(group, 0);
    showGroupSlide(group, 0);
  });

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!prefersReducedMotion.matches) {
    groupedSlides.forEach((_slides, group) => startGroupSlider(group));
  }

  const tickerTrack = root.querySelector<HTMLElement>(".solutionsTickerTrack");
  if (tickerTrack) {
    tickerTrack.style.animationDuration = "110s";
  }

  const onVisibilityChange = () => {
    if (document.hidden) {
      stopAllSliders();
    } else if (!prefersReducedMotion.matches && timers.length === 0) {
      groupedSlides.forEach((_slides, group) => startGroupSlider(group));
    }
  };

  document.addEventListener("visibilitychange", onVisibilityChange);

  const cleanupKey = "__catalogueCleanup__";
  const previousCleanup = (root as HTMLElement & {
    [cleanupKey]?: () => void;
  })[cleanupKey];

  if (previousCleanup) previousCleanup();

  (root as HTMLElement & { [cleanupKey]?: () => void })[cleanupKey] = () => {
    stopAllSliders();
    document.removeEventListener("visibilitychange", onVisibilityChange);
  };

  attachReveal();
}