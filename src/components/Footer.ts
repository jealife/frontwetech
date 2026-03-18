export function Footer() {
    const year = new Date().getFullYear();
    return `
    <footer class="globalFooter" id="contact">
      <div class="shell">
        <div class="globalFooter__inner">
          <div class="globalFooter__brand">
            <img
              src="/images/backgrounds/LOGO DB TECH INNOVATION_20260303_102859_0000.png"
              alt="Logo DB Tech Innovation"
              height="180"
              style="filter: brightness(0) invert(1); margin-bottom: 2.5rem;"
            />
            <h2 class="text-2xl">DB Tech Innovation</h2>
            <p class="globalFooter__desc">
              Conception de solutions digitales premium pour structurer l’information, fluidifier les circuits et renforcer le pilotage décisionnel.
            </p>
          </div>

          <div class="globalFooter__col">
            <h3 class="globalFooter__title">Menu</h3>
            <a class="footer-link" href="#/">Accueil</a>
            <a class="footer-link" href="#/catalogue">Catalogue</a>
            <a class="footer-link" href="#/solutions">Solutions</a>
          </div>

          <div class="globalFooter__col">
            <h3 class="globalFooter__title">Contact</h3>
            <a class="footer-link" href="tel:+24102055501">+241 02 05 55 01</a>
            <a class="footer-link" href="mailto:services@dbtech-innovation.com">services@dbtech-innovation.com</a>
            <a class="footer-link" href="https://wa.me/24102055501" target="_blank">WhatsApp</a>
          </div>

          <div class="globalFooter__col">
            <h3 class="globalFooter__title">Localisation</h3>
            <p class="globalFooter__desc">Libreville, Gabon</p>
            <p class="globalFooter__desc" style="margin-top: 1rem;">Solutions sur mesure pour entreprises, institutions et organisations.</p>
          </div>
        </div>

        <div class="globalFooter__bottom">
          <span>© ${year} DB Tech Innovation. Tous droits réservés.</span>
          <span>Design & Engineering by Antigravity</span>
        </div>
      </div>
    </footer>
  `;
}
