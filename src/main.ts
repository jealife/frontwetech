import "./style.css";
import { renderHome } from "./pages/home";
import { renderCatalogue } from "./pages/catalogue";
import { renderSolutions } from "./pages/solutions";
import { attachReveal, attachButtonPointerFX } from "./ui/reveal";

const routes: Record<string, (root: HTMLElement) => void> = {
  "/": renderHome,
  "/catalogue": renderCatalogue,
  "/solutions": renderSolutions,
};

const NAV_BACKGROUNDS = [
  "/images/backgrounds/freepik__talk__32634.jpeg",
  "/images/backgrounds/freepik__talk__32635.jpeg",
];

const FOOTER_BACKGROUNDS = [
  "/images/backgrounds/freepik__talk__32635.jpeg",
  "/images/backgrounds/freepik__talk__32634.jpeg",
];

let lastRoutePath = "/";
let pointerFxBound = false;

function getPath() {
  const hash = window.location.hash || "#/";

  if (hash.startsWith("#/")) {
    const withoutSharp = hash.slice(1);
    const base = withoutSharp.split(/[?#]/)[0];
    const path = base.startsWith("/") ? base : `/${base}`;

    if (routes[path]) lastRoutePath = path;
    return routes[path] ? path : "/";
  }

  return lastRoutePath;
}

function navigate(path: string) {
  window.location.hash = `#${path}`;
}

function renderNavSlides(group: string, images: string[]) {
  return images
    .map(
      (src, index) => `
        <div
          class="globalBgDeck__slide ${index === 0 ? "is-active" : ""}"
          data-bg-slide
          data-bg-group="${group}"
          style="background-image:url('${src}')"
        ></div>
      `
    )
    .join("");
}

function bindGlobalBackgroundDecks(scope: ParentNode) {
  const groupedSlides = new Map<string, HTMLElement[]>();

  Array.from(scope.querySelectorAll<HTMLElement>("[data-bg-slide]")).forEach((slide) => {
    const group = slide.dataset.bgGroup;
    if (!group) return;

    if (!groupedSlides.has(group)) groupedSlides.set(group, []);
    groupedSlides.get(group)!.push(slide);
  });

  const timers: number[] = [];
  const activeIndexes = new Map<string, number>();

  const durations: Record<string, number> = {
    "global-nav": 6200,
    "global-footer": 7200,
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
    }, durations[group] ?? 6200);

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

  return () => {
    stopAllSliders();
    document.removeEventListener("visibilitychange", onVisibilityChange);
  };
}

function bindNavState(scope: ParentNode) {
  const nav = scope.querySelector<HTMLElement>(".globalNav");
  if (!nav) return () => {};

  let lastScrollY = window.scrollY;
  let ticking = false;

  const updateNav = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY <= 12) {
      nav.classList.remove("is-condensed");
      nav.classList.remove("is-hidden");
      nav.classList.remove("is-scrolled");
    } else {
      nav.classList.add("is-condensed");
      nav.classList.add("is-scrolled");

      if (currentScrollY > lastScrollY && currentScrollY > 180) {
        nav.classList.add("is-hidden");
      } else {
        nav.classList.remove("is-hidden");
      }
    }

    lastScrollY = currentScrollY;
    ticking = false;
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateNav);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  updateNav();

  return () => {
    window.removeEventListener("scroll", onScroll);
  };
}

function render() {
  const app = document.querySelector<HTMLDivElement>("#app");
  if (!app) return;

  const path = getPath();
  const page = routes[path] ?? routes["/"];

  app.innerHTML = `
    <div class="appShell">
      <div class="spotlight" aria-hidden="true"></div>

      <header class="globalNav">
        <div class="shell">
          <div class="globalNav__frame">
            <div class="globalNav__bg globalBgDeck" aria-hidden="true">
              ${renderNavSlides("global-nav", NAV_BACKGROUNDS)}
              <div class="globalBgDeck__veil globalBgDeck__veil--nav"></div>
            </div>

            <div class="globalNav__inner">
              <a class="topBrand fx-brand" href="#/" aria-label="DB Tech Innovation Accueil">
                <span class="topBrand__logoWrap topBrand__logoWrap--clean">
                  <span class="topBrand__logoHalo" aria-hidden="true"></span>
                  <span class="topBrand__logoPlate" aria-hidden="true"></span>
                  <img
                    class="topBrand__logo topBrand__logo--xl"
                    src="/images/backgrounds/LOGO DB TECH INNOVATION_20260303_102859_0000.png"
                    alt="Logo DB Tech Innovation"
                  />
                </span>

                <div class="topBrand__text">
                  <div class="topBrand__name">DB Tech Innovation</div>
                </div>
              </a>

              <nav class="globalNav__links" aria-label="Navigation principale">
                <a class="globalNav__link fx-btn ${path === "/" ? "is-active" : ""}" href="#/">
                  <span>Accueil</span>
                </a>
                <a class="globalNav__link fx-btn ${path === "/catalogue" ? "is-active" : ""}" href="#/catalogue">
                  <span>Catalogue</span>
                </a>
                <a class="globalNav__link fx-btn ${path === "/solutions" ? "is-active" : ""}" href="#/solutions">
                  <span>Solutions</span>
                </a>
              </nav>

              <div class="globalNav__cta">
                <a class="navBtn navBtn--ghost fx-btn" href="tel:+24102055501">
                  <span>Appeler</span>
                  <span class="btn__shine"></span>
                </a>

                <a
                  class="navBtn navBtn--primary fx-btn"
                  href="#contact-global"
                >
                  <span>Contact</span>
                  <span class="btn__shine"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main id="pageRoot" class="pageRoot"></main>

      <footer class="globalFooter" id="contact-global">
        <div class="shell">
          <div class="globalFooter__frame">
            <div class="globalFooter__bg globalBgDeck" aria-hidden="true">
              ${renderNavSlides("global-footer", FOOTER_BACKGROUNDS)}
              <div class="globalBgDeck__veil globalBgDeck__veil--footer"></div>
            </div>

            <div class="globalFooter__inner">
              <div class="globalFooter__brand">
                <span class="globalFooter__logoWrap globalFooter__logoWrap--clean">
                  <span class="globalFooter__logoHalo" aria-hidden="true"></span>
                  <span class="globalFooter__logoPlate" aria-hidden="true"></span>
                  <img
                    class="globalFooter__logo globalFooter__logo--xl"
                    src="/images/backgrounds/LOGO DB TECH INNOVATION_20260303_102859_0000.png"
                    alt="Logo DB Tech Innovation"
                  />
                </span>

                <div class="globalFooter__brandText">
                  <div class="globalFooter__name">DB Tech Innovation</div>
                  <div class="globalFooter__desc">
                    Solutions digitales sur mesure pour entreprises, institutions et organisations.
                  </div>
                </div>
              </div>

              <div class="globalFooter__col">
                <div class="globalFooter__title">Navigation</div>
                <div class="globalFooter__links">
                  <a class="globalFooter__link" href="#/">Accueil</a>
                  <a class="globalFooter__link" href="#/catalogue">Catalogue</a>
                  <a class="globalFooter__link" href="#/solutions">Solutions</a>
                </div>
              </div>

              <div class="globalFooter__col">
                <div class="globalFooter__title">Contact</div>
                <div class="globalFooter__links">
                  <a class="globalFooter__link" href="tel:+24102055501">+241 02 05 55 01</a>
                  <a
                    class="globalFooter__link"
                    href="https://wa.me/24102055501"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>
                  <a class="globalFooter__link" href="mailto:services@dbtech-innovation.com">
                    services@dbtech-innovation.com
                  </a>
                </div>
              </div>

              <div class="globalFooter__col">
                <div class="globalFooter__title">Localisation</div>
                <div class="globalFooter__links">
                  <div class="globalFooter__infoCard">Libreville, Gabon</div>
                </div>
              </div>
            </div>
          </div>

          <div class="globalFooter__bottom">
            <span>© ${new Date().getFullYear()} DB Tech Innovation</span>
            <span>Tous droits réservés</span>
          </div>
        </div>
      </footer>

      <div class="globalFab">
        <a class="globalFab__btn fx-btn" href="tel:+24102055501" aria-label="Appeler">
          ☎
          <span class="btn__shine"></span>
        </a>
        <a
          class="globalFab__btn globalFab__btn--wa fx-btn"
          href="https://wa.me/24102055501"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
        >
          ✦
          <span class="btn__shine"></span>
        </a>
      </div>
    </div>
  `;

  const previousCleanup = (app as HTMLDivElement & {
    __mainCleanup__?: () => void;
  }).__mainCleanup__;

  if (previousCleanup) previousCleanup();

  const cleanupDecks = bindGlobalBackgroundDecks(app);
  const cleanupNavState = bindNavState(app);

  const pageRoot = document.getElementById("pageRoot");
  if (!pageRoot) return;

  page(pageRoot);

  attachReveal();
  attachButtonPointerFX();

  if (!pointerFxBound) {
    const root = document.documentElement;

    window.addEventListener(
      "pointermove",
      (e) => {
        root.style.setProperty("--cx", `${e.clientX}px`);
        root.style.setProperty("--cy", `${e.clientY}px`);
      },
      { passive: true }
    );

    pointerFxBound = true;
  }

  (app as HTMLDivElement & { __mainCleanup__?: () => void }).__mainCleanup__ = () => {
    cleanupDecks();
    cleanupNavState();
  };
}

window.addEventListener("hashchange", render);
render();

(window as Window & { navigate?: (path: string) => void }).navigate = navigate;