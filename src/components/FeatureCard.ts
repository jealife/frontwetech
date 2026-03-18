export function FeatureCard(icon: string, title: string, desc: string, index?: string) {
    return `
    <article class="card reveal scale-in">
      <div class="card__icon">${icon}</div>
      ${index ? `<span class="text-xs font-bold text-muted uppercase">0${index}</span>` : ""}
      <h3>${title}</h3>
      <p>${desc}</p>
    </article>
  `;
}
