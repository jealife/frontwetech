import "./solutions.css";
import { attachReveal } from "../ui/reveal";

export function renderSolutions(root: HTMLElement) {
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
    "/abstract-geometric-background-with-hexagons-shape-pattern-banner-website-header-template.jpg",
    "/blue-grey-abstract-technology-geometrical-background.jpg",
    "/globe-glowing-atmosphere-png-global-corporate.jpg",
  ];

  const SERVICE_IMAGES = {
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

  const services = [
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

  const achievements = [
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
    <div class="homePage solutionsPage">
      <div class="homeBgSlider" aria-hidden="true">
        ${renderSlides("solutions-main", MAIN_BACKGROUNDS)}
        <div class="homeBgOverlay"></div>
        <div class="homeBgMesh"></div>
        <div class="homeBgGlow homeBgGlow--cyan"></div>
        <div class="homeBgGlow homeBgGlow--violet"></div>
        <div class="homeBgNoise"></div>
      </div>

      <section class="homeHero solutionsHero">
        <div class="shell shell--hero">
          <div class="heroSurface reveal gather">
            <div class="heroSurfaceDeck bgDeck" aria-hidden="true">
              ${renderSlides("solutions-hero-surface", HERO_PANEL_BACKGROUNDS)}
              <div class="bgDeck__veil bgDeck__veil--hero-surface"></div>
            </div>

            <div class="heroTopbar">
              <div class="heroBrand">
                <span class="heroBrandMark">${ICONS.sparkle}</span>

                <div class="heroBrandText">
                  <div class="heroBrandName">DB Tech Innovation</div>

                  <div class="heroBrandMetaWrap">
                    <div class="heroBrandMetaDeck bgDeck" aria-hidden="true">
                      ${renderSlides("solutions-brand-strip", BRAND_STRIP_BACKGROUNDS)}
                      <div class="bgDeck__veil bgDeck__veil--brand-strip"></div>
                    </div>

                    <div class="heroBrandMeta">
                      <span>Services</span>
                      <span>•</span>
                      <span>Réalisations</span>
                      <span>•</span>
                      <span>Digitalisation</span>
                      <span>•</span>
                      <span>IA</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="heroMicroNav">
                <a href="#services-list"><span>Services</span></a>
                <a href="#achievements-list"><span>Réalisations</span></a>
                <a href="#/catalogue"><span>Catalogue</span></a>
              </div>
            </div>

            <div class="heroBody">
              <div class="heroContent">
                <div class="heroEyebrow">
                  ${ICONS.sparkle}
                  <span>Une page complète pour présenter l’offre, les réalisations et la crédibilité opérationnelle</span>
                </div>

                <div class="heroTitleWrap">
                  <div class="heroTitleDeck bgDeck" aria-hidden="true">
                    ${renderSlides("solutions-hero-title", MAIN_BACKGROUNDS)}
                    <div class="bgDeck__veil bgDeck__veil--hero-title-main"></div>
                  </div>

                  <h1 class="heroTitle">
                    <span class="heroTitleLine heroTitleLine--dark">Nos services et nos réalisations</span>
                    <span class="heroTitleLine heroTitleLine--accent">présentés comme une vraie vitrine de transformation digitale</span>
                  </h1>
                </div>

                <p class="heroLead">
                  Cette page rassemble l’intégralité des grands services proposés par DB Tech Innovation
                  ainsi que l'historique de nos réalisations.
                </p>

                <div class="heroActions">
                  <a class="heroBtn heroBtn--primary" href="#services-list">
                    ${ICONS.layers}
                    <span>Voir tous les services</span>
                  </a>

                  <a class="heroBtn heroBtn--secondary" href="#achievements-list">
                    ${ICONS.rocket}
                    <span>Voir les réalisations</span>
                  </a>
                </div>
              </div>

              <div class="heroRail">
                <article class="heroRailCard heroRailCard--primary">
                  <div class="heroRailDeck bgDeck" aria-hidden="true">
                    ${renderSlides("solutions-rail-primary", SECTION_PANEL_BACKGROUNDS)}
                    <div class="bgDeck__veil bgDeck__veil--rail-primary"></div>
                  </div>

                  <div class="heroRailInner">
                    <div class="heroRailLabel">${ICONS.chart}<span>Offre structurée</span></div>

                    <h3>
                      <span class="splitTone splitTone--dark">Une même page pour montrer</span>
                      <span class="splitTone splitTone--accent">ce que nous faisons et ce que nous avons déjà réalisé</span>
                    </h3>

                    <p>
                      L’objectif est de projeter une image forte, crédible et orientée résultats
                      pour les institutions, entreprises et partenaires.
                    </p>
                  </div>
                </article>

                <article class="heroRailCard heroRailCard--secondary">
                  <div class="heroRailDeck bgDeck" aria-hidden="true">
                    ${renderSlides("solutions-rail-secondary", SECTION_PANEL_BACKGROUNDS)}
                    <div class="bgDeck__veil bgDeck__veil--rail-secondary"></div>
                  </div>

                  <div class="heroRailInner">
                    <div class="heroRailMetric">
                      <strong>${services.length}</strong>
                      <span>services</span>
                    </div>

                    <div class="heroRailList">
                      <span>${ICONS.layers}<span>Digitalisation documentaire</span></span>
                      <span>${ICONS.route}<span>Workflow & automatisation</span></span>
                      <span>${ICONS.chart}<span>Pilotage & dashboards</span></span>
                      <span>${ICONS.cpu}<span>IA métier</span></span>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <div class="heroBottomBandWrap">
              <div class="heroBottomBandDeck bgDeck" aria-hidden="true">
                ${renderSlides("solutions-bottom-band", BRAND_STRIP_BACKGROUNDS)}
                <div class="bgDeck__veil bgDeck__veil--bottom-band"></div>
              </div>

              <div class="heroBottomBand">
                <div class="heroBottomItem">${ICONS.lock}<span>Structure crédible</span></div>
                <div class="heroBottomItem">${ICONS.sparkle}<span>Positionnement premium</span></div>
                <div class="heroBottomItem">${ICONS.route}<span>Services complets</span></div>
                <div class="heroBottomItem">${ICONS.chart}<span>Réalisations visibles</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="homeSection" id="services-list">
        <div class="shell">
          <div class="sectionHeading reveal gather">
            <div class="sectionEyebrow">
              ${ICONS.layers}
              <span>Services</span>
            </div>

            <h2 class="sectionTitle">
              <span class="sectionTitleLine sectionTitleLine--dark">L’intégralité de nos services</span>
              <span class="sectionTitleLine sectionTitleLine--accent">pour digitaliser, structurer, piloter et accélérer les opérations</span>
            </h2>
          </div>

          <div class="capabilityGrid">
            ${services
              .map(
                (item, index) => `
              <article class="capabilityCard reveal gather capabilityCard--${(index % 4) + 1}" style="--card-img:url('${item.image}')">
                <div class="capabilityMedia"></div>
                <div class="capabilityVeil"></div>
                <div class="capabilityGlow"></div>

                <div class="capabilityContent">
                  <div class="capabilityLabel">
                    ${ICONS[item.icon]}
                    <span>DB Tech Innovation</span>
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
      </section>

      <section class="homeSection" id="achievements-list">
        <div class="shell">
          <div class="sectionHeading reveal gather">
            <div class="sectionEyebrow">
              ${ICONS.rocket}
              <span>Réalisations</span>
            </div>

            <h2 class="sectionTitle">
              <span class="sectionTitleLine sectionTitleLine--dark">Nos</span>
              <span class="sectionTitleLine sectionTitleLine--accent">réalisations</span>
            </h2>

            <p class="sectionLead">
              Nos réalisations vous sont présentées ici comme l’expression de l’expérience et du savoir-faire
              portés par DB Tech Innovation.
            </p>
          </div>

          <div class="sectorGrid">
            ${achievements
              .map(
                (item) => `
              <article class="sectorPanel reveal gather" style="--sector-img:url('${item.image}')">
                <div class="sectorPanelMedia"></div>
                <div class="sectorPanelVeil"></div>

                <div class="sectorPanelBody">
                  <div class="sectorPanelIcon">${ICONS[item.icon]}</div>
                  <h3>${item.title}</h3>
                  <p>${item.desc}</p>
                </div>
              </article>
            `
              )
              .join("")}
          </div>
        </div>
      </section>
    </div>
  `;

  const groupedSlides = new Map<string, HTMLElement[]>();

  Array.from(root.querySelectorAll<HTMLElement>("[data-bg-slide]")).forEach((slide) => {
    const group = slide.dataset.bgGroup;
    if (!group) return;

    if (!groupedSlides.has(group)) {
      groupedSlides.set(group, []);
    }

    groupedSlides.get(group)!.push(slide);
  });

  const timers: number[] = [];
  const activeIndexes = new Map<string, number>();

  const durations: Record<string, number> = {
    "solutions-main": 5400,
    "solutions-hero-surface": 6200,
    "solutions-brand-strip": 4800,
    "solutions-hero-title": 5400,
    "solutions-rail-primary": 5600,
    "solutions-rail-secondary": 5800,
    "solutions-bottom-band": 5200,
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

  const onVisibilityChange = () => {
    if (document.hidden) {
      stopAllSliders();
    } else if (!prefersReducedMotion.matches && timers.length === 0) {
      groupedSlides.forEach((_slides, group) => startGroupSlider(group));
    }
  };

  document.addEventListener("visibilitychange", onVisibilityChange);

  const cleanupKey = "__solutionsCleanup__";
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