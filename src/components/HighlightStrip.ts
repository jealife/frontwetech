export function HighlightStrip(label: string, items: string[]) {
    return `
    <section class="highlight-strip" style="overflow: hidden; padding: 60px 0; background: #fff;">
      <div class="shell">
        <div class="reveal" style="display: flex; flex-direction: column; align-items: center; gap: 32px;">
          <span style="font-weight: 800; font-family: var(--font-heading); text-transform: uppercase; letter-spacing: 0.15em; font-size: 0.8rem; color: var(--primary); background: rgba(var(--primary-rgb), 0.05); padding: 6px 16px; border-radius: 999px;">
            ${label}
          </span>
          <div style="display: flex; gap: 16px; flex-wrap: wrap; justify-content: center;">
            ${items.map(item => `
              <div class="reveal scale-in" style="background: white; border: 1px solid var(--line-soft); padding: 12px 24px; border-radius: 16px; font-weight: 700; color: var(--ink-main); box-shadow: var(--shadow-sm); transition: all 0.3s var(--ease); cursor: default; display: flex; align-items: center; gap: 10px;" onmouseover="this.style.transform='translateY(-4px)'; this.style.borderColor='var(--primary)'; this.style.boxShadow='var(--shadow-md)'" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='var(--line-soft)'; this.style.boxShadow='var(--shadow-sm)'">
                <span style="width: 8px; height: 8px; background: var(--accent); border-radius: 50%;"></span>
                ${item}
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}
