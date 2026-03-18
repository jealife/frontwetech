export function Nav(path: string) {
    return `
    <header class="globalNav">
      <div class="shell">
        <div class="globalNav__inner">
          <a class="topBrand" href="#/" aria-label="DB Tech Innovation Home">
            <img
              class="topBrand__logo"
              src="/images/backgrounds/LOGO DB TECH INNOVATION_20260303_102859_0000.png"
              alt="Logo DB Tech Innovation"
            />
            <span class="topBrand__name">DB Tech Innovation</span>
          </a>

          <nav class="globalNav__links" aria-label="Navigation principale">
            <a class="globalNav__link ${path === "/" ? "is-active" : ""}" href="#/">ACCUEIL</a>
            <a class="globalNav__link ${path === "/catalogue" ? "is-active" : ""}" href="#/catalogue">CATALOGUE</a>
            <a class="globalNav__link ${path === "/solutions" ? "is-active" : ""}" href="#/solutions">SOLUTIONS</a>
          </nav>

          <div class="globalNav__cta">
            <a class="btn btn--outline" href="tel:+24102055501">Appeler</a>
            <a class="btn btn--primary" href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </header>
  `;
}
