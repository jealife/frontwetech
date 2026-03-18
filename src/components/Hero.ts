export function Hero(eyebrow: string, title: string, desc: string, image: string, ICONS: any) {
    return `
    <section class="hero bg-soft">
      <div class="shell">
        <div class="hero__grid">
          <div class="hero__content animate-fade-up">
            <div class="eyebrow">
              ${ICONS.spark}
              <span>${eyebrow}</span>
            </div>
            <h1 class="hero__title">
              ${title}
            </h1>
            <p class="hero__desc text-lg">
              ${desc}
            </p>
            <div class="hero__actions">
              <a class="btn btn--primary" href="#contact">
                <span>Démarrer un projet</span>
              </a>
              <a class="btn btn--outline" href="#solutions">
                <span>Nos solutions</span>
                ${ICONS.arrow}
              </a>
            </div>
          </div>
          
          <div class="hero__visual reveal">
            <div class="hero__image-wrapper">
              <img src="${image}" alt="Professional success" />
            </div>
            <div class="hero__floating-card hero__floating-card--1 scale-up">
              <div class="card__icon" style="margin-bottom: 0;">${ICONS.chart}</div>
              <div>
                <div class="text-xs font-bold text-muted uppercase">Efficacité</div>
                <div class="text-xl font-bold">+85%</div>
              </div>
            </div>
            <div class="hero__floating-card hero__floating-card--2 scale-up">
              <div class="card__icon" style="margin-bottom: 0; color: var(--accent); background: rgba(var(--accent-rgb), 0.1);">${ICONS.star}</div>
              <div>
                <div class="text-xs font-bold text-muted uppercase">Qualité</div>
                <div class="text-xl font-bold">Premium</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
