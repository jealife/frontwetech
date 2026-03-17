import "./home.css";
import { attachReveal } from "../ui/reveal";

export function renderHome(root: HTMLElement) {
  const ICONS: Record<string, string> = {
    spark: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2l1.6 4.9L18 8.5l-4.4 1.4L12 15l-1.6-5.1L6 8.5l4.4-1.6L12 2zm6 10 .8 2.2L21 15l-2.2.8L18 18l-.8-2.2L15 15l2.2-.8L18 12zM6 14l.8 2.2L9 17l-2.2.8L6 20l-.8-2.2L3 17l2.2-.8L6 14z"/></svg>`,
    arrow: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13 5l7 7-7 7-1.4-1.4 4.6-4.6H4v-2h12.2l-4.6-4.6L13 5z"/></svg>`,
    check: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 16.2l-3.5-3.5L4 14.2 9 19l11-11-1.4-1.4z"/></svg>`,
    shield: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2l8 4v6c0 5-3.4 9.7-8 10-4.6-.3-8-5-8-10V6l8-4z"/></svg>`,
    layers: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2l10 6-10 6L2 8l10-6zm0 10 10-6v4l-10 6L2 10V6l10 6zm0 6 10-6v4l-10 6L2 16v-4l10 6z"/></svg>`,
    route: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm10 12a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM7 9c6 0 4 6 10 6v2c-7 0-5-8-10-8V9z"/></svg>`,
    chart: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 19h16v2H2V3h2v16zm3-2H5v-6h2v6zm4 0H9V7h2v10zm4 0h-2V4h2v13zm4 0h-2v-9h2v9z"/></svg>`,
    cpu: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 2h6v2h2.5A1.5 1.5 0 0 1 19 5.5V8h2v2h-2v4h2v2h-2v2.5A1.5 1.5 0 0 1 17.5 20H15v2H9v-2H6.5A1.5 1.5 0 0 1 5 18.5V16H3v-2h2v-4H3V8h2V5.5A1.5 1.5 0 0 1 6.5 4H9V2zm-2 4v12h10V6H7zm2 2h6v8H9V8z"/></svg>`,
    briefcase: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 3h6a2 2 0 0 1 2 2v2h3a2 2 0 0 1 2 2v3h-9v2h-2v-2H2V9a2 2 0 0 1 2-2h3V5a2 2 0 0 1 2-2zm6 4V5H9v2h6zm7 7v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5h9v2h2v-2h9z"/></svg>`,
    database: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C7 2 3 3.8 3 6v12c0 2.2 4 4 9 4s9-1.8 9-4V6c0-2.2-4-4-9-4zm0 2c4.4 0 7 .9 7 2s-2.6 2-7 2-7-.9-7-2 2.6-2 7-2zm0 14c-4.4 0-7-.9-7-2v-2c1.5 1.1 4.3 1.7 7 1.7s5.5-.6 7-1.7v2c0 1.1-2.6 2-7 2zm0-5c-4.4 0-7-.9-7-2V9c1.5 1.1 4.3 1.7 7 1.7S17.5 10.1 19 9v2c0 1.1-2.6 2-7 2z"/></svg>`,
    phone: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8c1.4 2.7 3.9 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.4.6 3.7.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.7 22 2 13.3 2 2c0-.6.4-1 1-1h3.2c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.7.1.4 0 .8-.3 1.1l-1.9 2z"/></svg>`,
    mail: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 3-8 5-8-5V6l8 5 8-5v1z"/></svg>`,
    star: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2l2.8 6.6 7.2.6-5.5 4.7 1.7 7.1L12 17.9 5.8 21l1.7-7.1L2 9.2l7.2-.6L12 2z"/></svg>`,
    scan: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 7V4h3V2H2v5h2zm13-5v2h3v3h2V2h-5zM4 17H2v5h5v-2H4v-3zm18 0h-2v3h-3v2h5v-5zM6 11h12v2H6v-2z"/></svg>`,
    bolt: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/></svg>`,
    grid: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/></svg>`,
    eye: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 5c5.5 0 9.7 4.4 10.8 6-1.1 1.6-5.3 6-10.8 6S2.3 12.6 1.2 11C2.3 9.4 6.5 5 12 5zm0 2C8.3 7 5.1 9.6 3.5 11 5.1 12.4 8.3 15 12 15s6.9-2.6 8.5-4C18.9 9.6 15.7 7 12 7zm0 1.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z"/></svg>`,
    target: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M11 2h2v3.1A7 7 0 0 1 18.9 11H22v2h-3.1A7 7 0 0 1 13 18.9V22h-2v-3.1A7 7 0 0 1 5.1 13H2v-2h3.1A7 7 0 0 1 11 5.1V2zm1 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2.2a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6z"/></svg>`,
    file: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6 2h8l4 4v16H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm7 1.5V7h3.5L13 3.5zM8 10h8v2H8v-2zm0 4h8v2H8v-2zm0 4h6v2H8v-2z"/></svg>`,
    lock: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 10V7a5 5 0 0 1 10 0v3h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h1zm2 0h6V7a3 3 0 1 0-6 0v3z"/></svg>`,
  };

  const HERO_IMAGE =
    "/images/backgrounds/sales-manager-examining-success-efficiency-metrics-within-firm.jpg";

  const heroSlides = [
    {
      eyebrow: "Digitalisation intelligente",
      title:
        "Transformez vos opérations avec une architecture digitale claire, maîtrisée et orientée performance",
      desc:
        "Nous concevons des solutions premium pour structurer l’information, accélérer les traitements, renforcer la visibilité décisionnelle et donner à vos équipes une meilleure capacité d’exécution.",
    },
    {
      eyebrow: "Automatisation métier",
      title:
        "Réduisez les lenteurs internes grâce à des parcours plus nets, plus traçables et mieux orchestrés",
      desc:
        "Chaque demande, validation, traitement et circuit métier est repensé pour supprimer les zones de friction, clarifier les responsabilités et fluidifier l’exécution.",
    },
    {
      eyebrow: "Pilotage & visibilité",
      title:
        "Donnez à vos dirigeants une lecture plus fine de l’activité, des blocages et des priorités réelles",
      desc:
        "Tableaux de bord, indicateurs, alertes intelligentes et suivi opérationnel pour piloter avec plus de recul, plus de vitesse et plus de précision.",
    },
  ];

  const platformPillars = [
    {
      icon: "layers",
      title: "Gestion documentaire",
      desc:
        "Centralisez vos contenus, sécurisez leur circulation et facilitez la recherche d’information à chaque étape de votre activité.",
      links: ["GED", "Numérisation", "Classement", "Traçabilité"],
      index: "01",
    },
    {
      icon: "route",
      title: "Workflow & exécution",
      desc:
        "Transformez les circuits flous en parcours structurés, lisibles et beaucoup plus rapides à exécuter pour vos équipes.",
      links: ["Workflow", "Validation", "Suivi", "Escalade"],
      index: "02",
    },
    {
      icon: "chart",
      title: "Pilotage décisionnel",
      desc:
        "Offrez une vue consolidée de l’activité avec des indicateurs plus lisibles, des délais mieux suivis et des décisions mieux appuyées.",
      links: ["Dashboards", "KPI", "Reporting", "Alertes"],
      index: "03",
    },
    {
      icon: "cpu",
      title: "IA métier utile",
      desc:
        "Accélérez le tri, l’analyse, la préparation et l’exploitation des données avec une intelligence artificielle encadrée par vos usages.",
      links: ["IA métier", "Analyse", "Productivité", "Assistance"],
      index: "04",
    },
  ];

  const showcaseSolutions = [
    {
      icon: "file",
      eyebrow: "Gestion documentaire",
      title:
        "Classez, retrouvez et exploitez vos documents dans un environnement plus fiable et beaucoup plus lisible",
      desc:
        "Nous structurons les flux documentaires pour réduire les pertes de temps, améliorer la qualité des recherches et rendre l’information plus rapidement exploitable par les équipes opérationnelles et les décideurs.",
      bullets: [
        "Classement intelligent",
        "Recherche rapide",
        "Traçabilité documentaire",
        "Meilleure accessibilité",
      ],
      image: "/images/backgrounds/thinking-promising-project.jpg",
      meta: ["GED", "Archives", "Circulation interne"],
    },
    {
      icon: "route",
      eyebrow: "Workflow & automatisation",
      title:
        "Réduisez les lenteurs de traitement avec des circuits plus courts, plus visibles et beaucoup plus simples à piloter",
      desc:
        "Nous modélisons vos processus de validation, de traitement et de suivi pour diminuer les points de friction, clarifier les rôles et accélérer l’exécution des opérations.",
      bullets: [
        "Moins d’allers-retours",
        "Validation structurée",
        "Suivi temps réel",
        "Responsabilités claires",
      ],
      image:
        "/images/backgrounds/sales-manager-examining-success-efficiency-metrics-within-firm.jpg",
      meta: ["Demandes", "Validation", "Traitement"],
    },
    {
      icon: "chart",
      eyebrow: "Pilotage & dashboards",
      title:
        "Visualisez les indicateurs réellement utiles pour diriger avec plus de recul et plus de précision",
      desc:
        "Nous concevons des tableaux de bord qui mettent en évidence les volumes, délais, performances, blocages et priorités afin de rendre les arbitrages plus rapides et les décisions mieux informées.",
      bullets: [
        "KPI lisibles",
        "Alertes métier",
        "Vue consolidée",
        "Décision accélérée",
      ],
      image: "/images/backgrounds/investor-analyzing-forex-market-trends.jpg",
      meta: ["Reporting", "Suivi", "Performance"],
    },
    {
      icon: "cpu",
      eyebrow: "IA & productivité",
      title:
        "Appuyez vos équipes avec des outils intelligents conçus pour accélérer l’analyse et mieux exploiter l’information",
      desc:
        "Nous intégrons des briques d’intelligence artificielle pour assister la recherche, le tri, la priorisation, la génération de synthèses et certaines décisions opérationnelles à faible risque.",
      bullets: [
        "Assistants métiers",
        "Synthèses rapides",
        "Pré-traitement intelligent",
        "Productivité renforcée",
      ],
      image: "/images/backgrounds/it-professional-updating-ai-systems.jpg",
      meta: ["IA", "Assistant", "Aide à la décision"],
    },
  ];

  const sectors = [
    {
      icon: "shield",
      title: "Banques & institutions financières",
      desc:
        "Pour les structures qui exigent rigueur, traçabilité, visibilité opérationnelle et maîtrise des traitements sensibles.",
    },
    {
      icon: "briefcase",
      title: "Entreprises & groupes privés",
      desc:
        "Pour améliorer la coordination interne, accélérer l’exécution métier et renforcer la qualité du pilotage.",
    },
    {
      icon: "database",
      title: "Administrations & services publics",
      desc:
        "Pour mieux structurer les dossiers, fluidifier les circuits et professionnaliser la circulation de l’information.",
    },
    {
      icon: "layers",
      title: "Organisations multi-sites",
      desc:
        "Pour harmoniser les processus, consolider la donnée et garder une vision cohérente de l’activité sur plusieurs entités.",
    },
  ];

  const trustBadges = [
    "Digitalisation structurée",
    "Workflow intelligence",
    "Document orchestration",
    "Decision support",
    "Architecture métier",
    "Operational dashboards",
    "Data visibility",
    "IA pragmatique",
  ];

  const miniStats = [
    {
      value: "4",
      label: "couches de valeur",
      sub: "Documents, workflows, pilotage, intelligence métier",
    },
    {
      value: "360°",
      label: "vision opérationnelle",
      sub: "Une approche pensée pour les équipes, les managers et la direction",
    },
    {
      value: "Premium",
      label: "niveau d’exécution",
      sub: "Une expérience plus lisible, plus crédible et plus statutaire",
    },
  ];

  const featuredLogos = [
    "Banques",
    "Institutions",
    "Entreprises",
    "Administrations",
    "Santé",
    "Éducation",
    "Services publics",
    "Groupes privés",
  ];

  const proofMetrics = [
    {
      value: "01",
      title: "Information mieux structurée",
      desc:
        "Réduction du désordre documentaire et meilleure disponibilité des informations utiles.",
    },
    {
      value: "02",
      title: "Circuits de traitement plus fluides",
      desc:
        "Moins de frictions entre les étapes, plus de visibilité sur l’avancement des dossiers.",
    },
    {
      value: "03",
      title: "Pilotage renforcé",
      desc:
        "Des indicateurs plus clairs pour arbitrer, prioriser et corriger plus vite.",
    },
    {
      value: "04",
      title: "Décision mieux appuyée",
      desc:
        "Une lecture consolidée de l’activité et des alertes plus intelligentes.",
    },
  ];

  const methodSteps = [
    {
      icon: "scan",
      index: "01",
      title: "Audit & cadrage",
      desc:
        "Nous analysons vos usages, vos irritants, vos flux et vos objectifs pour définir un périmètre clair et une trajectoire réaliste.",
    },
    {
      icon: "grid",
      index: "02",
      title: "Architecture & design",
      desc:
        "Nous structurons les modules, les parcours, les rôles utilisateurs, les données et l’expérience cible avant le déploiement.",
    },
    {
      icon: "bolt",
      index: "03",
      title: "Déploiement progressif",
      desc:
        "Nous mettons en place les briques prioritaires de manière maîtrisée afin d’obtenir des gains visibles sans désorganiser l’existant.",
    },
    {
      icon: "eye",
      index: "04",
      title: "Pilotage & amélioration",
      desc:
        "Nous suivons les usages, la qualité des traitements et les indicateurs afin d’optimiser durablement la solution.",
    },
  ];

  const architectureLayers = [
    {
      icon: "file",
      title: "Sources & documents",
      desc: "Courriers, dossiers, formulaires, pièces jointes, archives et contenus métiers.",
    },
    {
      icon: "route",
      title: "Workflow & orchestration",
      desc: "Routage, validation, affectation, escalade, journalisation et suivi d’étapes.",
    },
    {
      icon: "database",
      title: "Données & consolidation",
      desc: "Structuration des données utiles, consolidation multi-processus et historisation.",
    },
    {
      icon: "cpu",
      title: "IA & assistance",
      desc: "Recherche intelligente, pré-tri, synthèses, suggestions et assistance métier ciblée.",
    },
    {
      icon: "chart",
      title: "Pilotage & tableaux de bord",
      desc: "KPI, alertes, suivi des délais, vision consolidée et lecture décisionnelle.",
    },
    {
      icon: "lock",
      title: "Gouvernance & sécurité",
      desc: "Contrôle d’accès, traçabilité, rôles, confidentialité et conformité d’usage.",
    },
  ];

  const insights = [
    {
      tag: "Méthode",
      title: "Pourquoi une digitalisation sans cadrage crée souvent plus de confusion que de gain",
      desc:
        "Une transformation réussie commence par une lecture rigoureuse des flux, des rôles et des points de friction réels.",
    },
    {
      tag: "Pilotage",
      title: "Ce que les dirigeants attendent réellement d’un tableau de bord de haut niveau",
      desc:
        "Pas seulement des chiffres, mais une lecture claire des priorités, des blocages et des arbitrages à faire.",
    },
    {
      tag: "IA métier",
      title: "Comment intégrer l’intelligence artificielle sans perdre le contrôle sur les usages",
      desc:
        "L’IA devient utile lorsqu’elle est encadrée par les processus, les rôles et les limites opérationnelles de l’organisation.",
    },
  ];

  const engagementPoints = [
    "Approche orientée résultats",
    "Design premium et lisibilité décisionnelle",
    "Modules pensés pour l’usage réel",
    "Montée en charge structurée",
  ];

  root.innerHTML = `
    <div class="homeV9">
      <section class="homeV9__hero">
        <div class="shell">
          <div class="heroTopGrid">
            <div class="heroShowcase reveal gather">
              <div class="heroShowcase__main">
                <div class="eyebrow eyebrow--accent">
                  ${ICONS.spark}
                  <span>${heroSlides[0].eyebrow}</span>
                </div>

                <div class="heroKicker">
                  <span>Architecture digitale</span>
                  <span>Workflow intelligence</span>
                  <span>Pilotage premium</span>
                </div>

                <h1 class="heroHeadline">
                  Transformez vos opérations avec une architecture digitale
                  <span class="heroHeadline__accent">plus claire, plus fluide et plus stratégique</span>
                </h1>

                <p class="heroLead heroLead--wide">
                  ${heroSlides[0].desc}
                </p>

                <div class="heroActions">
                  <a class="heroButton heroButton--primary" href="#home-contact">
                    <span>Demander une démonstration</span>
                    ${ICONS.arrow}
                  </a>

                  <a class="heroButton heroButton--secondary" href="#home-solutions">
                    <span>Découvrir nos solutions</span>
                    ${ICONS.arrow}
                  </a>
                </div>

                <div class="heroTrustRow">
                  ${engagementPoints
                    .map(
                      (item) => `
                        <span class="heroTrustItem">
                          ${ICONS.check}
                          <span>${item}</span>
                        </span>
                      `
                    )
                    .join("")}
                </div>
              </div>

              <div class="heroShowcase__side">
                ${heroSlides
                  .map(
                    (item, index) => `
                      <article class="heroInfoCard ${index === 0 ? "heroInfoCard--active" : ""}">
                        <div class="heroInfoCard__top">
                          <span class="heroInfoCard__index">0${index + 1}</span>
                          <span class="heroInfoCard__eyebrow">${item.eyebrow}</span>
                        </div>

                        <h3>${item.title}</h3>
                        <p>${item.desc}</p>
                      </article>
                    `
                  )
                  .join("")}
              </div>
            </div>

            <aside class="heroCommandPanel reveal gather">
              <div class="heroCommandPanel__head">
                <span class="heroCommandPanel__eyebrow">Vision exécutive</span>
                <h2>Une digitalisation pensée comme un système, pas comme un simple site vitrine</h2>
              </div>

              <div class="heroCommandPanel__list">
                <article class="heroCommandItem">
                  <div class="heroCommandItem__icon">${ICONS.file}</div>
                  <div>
                    <strong>Structurer l’information</strong>
                    <p>Rendre les documents et données plus accessibles, mieux organisés et plus exploitables.</p>
                  </div>
                </article>

                <article class="heroCommandItem">
                  <div class="heroCommandItem__icon">${ICONS.route}</div>
                  <div>
                    <strong>Fluidifier les parcours</strong>
                    <p>Réduire les lenteurs, clarifier les rôles et mieux suivre chaque étape critique.</p>
                  </div>
                </article>

                <article class="heroCommandItem">
                  <div class="heroCommandItem__icon">${ICONS.chart}</div>
                  <div>
                    <strong>Renforcer le pilotage</strong>
                    <p>Donner aux managers et aux dirigeants une lecture consolidée de l’activité réelle.</p>
                  </div>
                </article>
              </div>

              <div class="heroCommandPanel__footer">
                <span class="heroCommandTag">Méthode</span>
                <span class="heroCommandTag">Architecture</span>
                <span class="heroCommandTag">Exécution</span>
              </div>
            </aside>
          </div>

          <div class="heroBottomGrid">
            <div class="heroVisual reveal gather">
              <div class="heroVisualCard heroVisualCard--main">
                <div class="heroVisualMedia" style="background-image:url('${HERO_IMAGE}')"></div>
                <div class="heroVisualOverlay"></div>

                <div class="heroVisualContent">
                  <div class="heroVisualBadge">
                    ${ICONS.chart}
                    <span>Système de pilotage digital</span>
                  </div>

                  <h3>Une expérience plus statutaire, plus rassurante et beaucoup plus lisible pour vos visiteurs</h3>

                  <p>
                    Une présence digitale pensée pour inspirer confiance, exposer clairement votre valeur
                    et montrer dès les premières secondes une vraie maîtrise opérationnelle.
                  </p>
                </div>
              </div>
            </div>

            <div class="heroMiniStats reveal gather">
              ${miniStats
                .map(
                  (item, idx) => `
                    <article class="miniStat miniStat--${idx + 1}">
                      <strong>${item.value}</strong>
                      <span>${item.label}</span>
                      <small>${item.sub}</small>
                    </article>
                  `
                )
                .join("")}
            </div>
          </div>
        </div>
      </section>

      <section class="proofStrip">
        <div class="shell">
          <div class="proofStrip__inner reveal gather">
            <span class="proofStrip__label">Pensé pour</span>

            <div class="proofStrip__logos">
              ${featuredLogos
                .map(
                  (item) => `
                    <span class="proofStrip__logo">${item}</span>
                  `
                )
                .join("")}
            </div>
          </div>
        </div>
      </section>

      <section class="proofSection" id="home-proof">
        <div class="shell">
          <div class="sectionIntro reveal gather">
            <div class="eyebrow">
              ${ICONS.target}
              <span>Ce que cette approche change</span>
            </div>

            <h2 class="sectionTitle">
              Une transformation conçue pour produire un impact visible dans l’organisation
            </h2>

            <p class="sectionLead">
              Notre démarche ne cherche pas seulement à moderniser l’apparence. Elle vise à rendre
              l’information plus nette, les circuits plus fluides, les responsabilités plus lisibles
              et le pilotage plus efficace.
            </p>
          </div>

          <div class="proofMetricsGrid">
            ${proofMetrics
              .map(
                (item) => `
                  <article class="proofMetricCard reveal gather">
                    <span class="proofMetricCard__index">${item.value}</span>
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="platformSection" id="home-platform">
        <div class="shell">
          <div class="sectionIntro reveal gather">
            <div class="eyebrow">
              ${ICONS.layers}
              <span>Ce que nous faisons</span>
            </div>

            <h2 class="sectionTitle">
              Des solutions conçues pour rendre votre organisation plus simple, plus fluide et plus performante
            </h2>

            <p class="sectionLead">
              Nous mettons la technologie au service de votre efficacité réelle. L’objectif est de mieux
              structurer vos opérations, mieux suivre votre activité et offrir une expérience plus claire
              à vos équipes comme à vos interlocuteurs.
            </p>
          </div>

          <div class="pillarGrid">
            ${platformPillars
              .map(
                (item) => `
                  <article class="pillarCard reveal gather">
                    <div class="pillarCard__top">
                      <span class="pillarCard__index">${item.index}</span>
                      <div class="pillarCard__icon">${ICONS[item.icon]}</div>
                    </div>

                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>

                    <div class="pillarCard__links">
                      ${item.links
                        .map(
                          (link) => `
                            <span>${link}</span>
                          `
                        )
                        .join("")}
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="methodSection" id="home-method">
        <div class="shell">
          <div class="methodShell reveal gather">
            <div class="methodShell__intro">
              <div class="eyebrow eyebrow--dark">
                ${ICONS.grid}
                <span>Notre méthode</span>
              </div>

              <h2 class="sectionTitle sectionTitle--light">
                Une trajectoire claire pour transformer sans désorganiser l’existant
              </h2>

              <p class="sectionLead sectionLead--light">
                Nous intervenons avec une logique de cadrage, d’architecture et de déploiement progressif
                afin de créer une transformation solide, lisible et adaptée à votre réalité métier.
              </p>
            </div>

            <div class="methodTimeline">
              ${methodSteps
                .map(
                  (item) => `
                    <article class="methodStep">
                      <div class="methodStep__line"></div>
                      <div class="methodStep__icon">${ICONS[item.icon]}</div>
                      <div class="methodStep__body">
                        <span class="methodStep__index">${item.index}</span>
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
      </section>

      <section class="showcaseSection" id="home-solutions">
        <div class="shell">
          <div class="sectionIntro reveal gather">
            <div class="eyebrow">
              ${ICONS.cpu}
              <span>Nos solutions</span>
            </div>

            <h2 class="sectionTitle">
              Une présentation beaucoup plus forte de nos expertises pour accompagner votre transformation digitale
            </h2>

            <p class="sectionLead">
              Nous accompagnons les structures qui souhaitent mieux organiser leurs opérations, fluidifier
              leurs processus, améliorer leur pilotage et exploiter plus efficacement leur information stratégique.
            </p>
          </div>

          <div class="showcaseStack">
            ${showcaseSolutions
              .map(
                (item, index) => `
                  <article class="showcaseRow reveal gather ${index % 2 === 1 ? "showcaseRow--reverse" : ""}">
                    <div class="showcaseRow__visual">
                      <div class="showcaseRow__visualFrame">
                        <div class="showcaseRow__visualInner">
                          <div class="showcaseRow__image" style="background-image:url('${item.image}')"></div>
                          <div class="showcaseRow__imageOverlay"></div>
                        </div>

                        <div class="showcaseRow__meta">
                          ${item.meta
                            .map(
                              (meta) => `
                                <span>${meta}</span>
                              `
                            )
                            .join("")}
                        </div>
                      </div>
                    </div>

                    <div class="showcaseRow__content">
                      <div class="showcaseRow__eyebrow">
                        ${ICONS[item.icon]}
                        <span>${item.eyebrow}</span>
                      </div>

                      <h3>${item.title}</h3>
                      <p>${item.desc}</p>

                      <div class="showcaseRow__bullets">
                        ${item.bullets
                          .map(
                            (bullet) => `
                              <span class="showcaseBullet">
                                ${ICONS.check}
                                <span>${bullet}</span>
                              </span>
                            `
                          )
                          .join("")}
                      </div>

                      <a class="showcaseRow__cta" href="#home-contact">
                        <span>Échanger sur cette solution</span>
                        ${ICONS.arrow}
                      </a>
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="architectureSection" id="home-architecture">
        <div class="shell">
          <div class="architectureShell">
            <div class="sectionIntro reveal gather">
              <div class="eyebrow">
                ${ICONS.cpu}
                <span>Architecture digitale & intelligence métier</span>
              </div>

              <h2 class="sectionTitle">
                Une logique système pour relier documents, processus, données, IA et pilotage
              </h2>

              <p class="sectionLead">
                Nous pensons la digitalisation comme une architecture complète, dans laquelle chaque couche
                renforce la suivante : les documents alimentent les workflows, les workflows structurent la donnée,
                la donnée nourrit le pilotage et l’IA vient accélérer les usages utiles.
              </p>
            </div>

            <div class="architectureGrid">
              ${architectureLayers
                .map(
                  (item) => `
                    <article class="architectureCard reveal gather">
                      <div class="architectureCard__icon">${ICONS[item.icon]}</div>
                      <h3>${item.title}</h3>
                      <p>${item.desc}</p>
                    </article>
                  `
                )
                .join("")}
            </div>
          </div>
        </div>
      </section>

      <section class="sectorsSection" id="home-sectors">
        <div class="shell">
          <div class="sectionIntro reveal gather">
            <div class="eyebrow">
              ${ICONS.briefcase}
              <span>Secteurs accompagnés</span>
            </div>

            <h2 class="sectionTitle">
              Une expertise qui s’adapte à plusieurs environnements professionnels exigeants
            </h2>

            <p class="sectionLead">
              Notre approche est pensée pour des organisations qui ont besoin de plus de lisibilité,
              plus de rigueur, plus de coordination et une meilleure capacité de pilotage.
            </p>
          </div>

          <div class="sectorRow sectorRow--expanded">
            ${sectors
              .map(
                (item) => `
                  <article class="sectorCard reveal gather">
                    <div class="sectorCard__icon">${ICONS[item.icon]}</div>
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="badgeSection">
        <div class="shell">
          <div class="badgeCloud reveal gather">
            ${trustBadges
              .map(
                (item) => `
                  <span class="badgeCloud__item">
                    ${ICONS.star}
                    <span>${item}</span>
                  </span>
                `
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="insightSection" id="home-insights">
        <div class="shell">
          <div class="insightShell reveal gather">
            <div class="insightShell__copy">
              <div class="eyebrow">
                ${ICONS.spark}
                <span>Insights</span>
              </div>

              <h2 class="sectionTitle">
                Des contenus pensés pour aider les dirigeants et les équipes à mieux comprendre la transformation digitale
              </h2>

              <p class="sectionLead">
                Nous partageons des points de vue utiles sur la structuration des processus, la lisibilité de la donnée,
                le pilotage décisionnel et l’intégration maîtrisée de l’intelligence artificielle.
              </p>
            </div>

            <div class="insightShell__cards">
              ${insights
                .map(
                  (item) => `
                    <article class="insightCard">
                      <span class="insightCard__tag">${item.tag}</span>
                      <h3>${item.title}</h3>
                      <p>${item.desc}</p>
                    </article>
                  `
                )
                .join("")}
            </div>
          </div>
        </div>
      </section>

      <section class="contactSection" id="home-contact">
        <div class="shell">
          <div class="contactShell reveal gather">
            <div class="contactShell__copy">
              <div class="eyebrow eyebrow--accent">
                ${ICONS.phone}
                <span>Contact</span>
              </div>

              <h2 class="sectionTitle">
                Échangeons sur vos enjeux et définissons une trajectoire claire, crédible et adaptée à votre organisation
              </h2>

              <p class="sectionLead">
                Nous vous aidons à cadrer une solution plus moderne, plus fluide et beaucoup plus lisible
                pour mieux organiser vos opérations, votre information, vos validations et votre pilotage.
              </p>

              <div class="contactShell__proofs">
                <span class="contactShell__proof">
                  ${ICONS.check}
                  <span>Vision stratégique</span>
                </span>
                <span class="contactShell__proof">
                  ${ICONS.check}
                  <span>Approche structurée</span>
                </span>
                <span class="contactShell__proof">
                  ${ICONS.check}
                  <span>Exécution premium</span>
                </span>
              </div>
            </div>

            <div class="contactShell__actions">
              <a class="contactCard contactCard--primary" href="tel:+241XXXXXXXX">
                <div class="contactCard__icon">${ICONS.phone}</div>
                <div class="contactCard__body">
                  <strong>Parler avec notre équipe</strong>
                  <span>Planifier un échange direct sur votre projet de digitalisation</span>
                </div>
              </a>

              <a class="contactCard contactCard--secondary" href="mailto:contact@dbtech-innovation.com">
                <div class="contactCard__icon">${ICONS.mail}</div>
                <div class="contactCard__body">
                  <strong>Présenter votre besoin par email</strong>
                  <span>Décrivez votre contexte, vos objectifs et les modules que vous souhaitez structurer</span>
                </div>
              </a>

              <a class="contactCard contactCard--ghost" href="#home-method">
                <div class="contactCard__icon">${ICONS.grid}</div>
                <div class="contactCard__body">
                  <strong>Voir notre méthode</strong>
                  <span>Comprendre comment nous cadrons, concevons et déployons les solutions</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;

  const cleanupKey = "__homeCleanup__";
  const previousCleanup = (root as HTMLElement & { [cleanupKey]?: () => void })[cleanupKey];

  if (previousCleanup) previousCleanup();

  (root as HTMLElement & { [cleanupKey]?: () => void })[cleanupKey] = () => {};

  attachReveal();
}