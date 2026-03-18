export function SectionHeader(eyebrow: string, title: string, desc?: string) {
    return `
    <div class="section-header reveal">
      <div class="eyebrow">${eyebrow}</div>
      <h2 class="section-title">${title}</h2>
      ${desc ? `<p class="section-desc">${desc}</p>` : ""}
    </div>
  `;
}
