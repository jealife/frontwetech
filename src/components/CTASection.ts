export function CTASection(title: string, desc: string, btnText: string = "Démarrer un projet", btnLink: string = "#contact") {
    return `
    <section id="contact">
      <div class="shell">
        <div style="background-color: var(--primary); border-radius: var(--radius-xl); padding: 80px 40px; text-align: center; color: white; box-shadow: var(--shadow-xl);">
          <div class="reveal">
            <h2 class="text-5xl" style="color: white; margin-bottom: 24px;">${title}</h2>
            <p class="text-xl" style="color: rgba(255,255,255,0.7); max-width: 600px; margin-inline: auto; margin-bottom: 40px;">${desc}</p>
            <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
              <a class="btn btn--accent" href="${btnLink}">
                <span>${btnText}</span>
              </a>
              <a class="btn" style="border: 1px solid rgba(255,255,255,0.2); color: white;" href="tel:+24102055501">
                <span>Parler à un expert</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
