import "./style.css";
import { renderHome } from "./pages/home";
import { renderCatalogue } from "./pages/catalogue";
import { renderSolutions } from "./pages/solutions";
import { attachReveal } from "./ui/reveal";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

const routes: Record<string, (root: HTMLElement) => void> = {
  "/": renderHome,
  "/catalogue": renderCatalogue,
  "/solutions": renderSolutions,
};

let lastRoutePath = "/";

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

function bindNavState(scope: ParentNode) {
  const nav = scope.querySelector<HTMLElement>(".globalNav");
  if (!nav) return () => { };

  const onScroll = () => {
    if (window.scrollY > 50) {
      nav.classList.add("is-scrolled");
    } else {
      nav.classList.remove("is-scrolled");
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

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
      ${Nav(path)}
      <main id="pageRoot" class="pageRoot"></main>
      ${Footer()}
    </div>
  `;

  const cleanupNav = bindNavState(app);
  const pageRoot = document.getElementById("pageRoot");
  if (pageRoot) {
    page(pageRoot);
    attachReveal();
  }

  (app as any).__mainCleanup__ = () => {
    cleanupNav();
  };
}

window.addEventListener("hashchange", render);
render();

(window as any).navigate = navigate;