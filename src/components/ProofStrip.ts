export function ProofStrip(label: string, items: string[]) {
    return `
    <section class="proofStrip" style="padding: 40px 0; border-top: 1px solid var(--line-soft); border-bottom: 1px solid var(--line-soft); background: var(--bg-soft);">
      <div class="shell">
        <div class="reveal" style="display: flex; align-items: center; justify-content: center; gap: 40px; flex-wrap: wrap;">
          <span style="font-weight: 800; font-family: var(--font-heading); text-transform: uppercase; letter-spacing: 0.1em; font-size: 0.75rem; color: var(--ink-muted); white-space: nowrap;">
            ${label}
          </span>
          <div style="display: flex; gap: 32px; flex-wrap: wrap; justify-content: center; align-items: center;">
            ${items.map(item => `
              <span style="font-weight: 700; color: var(--ink-soft); font-size: 0.9375rem; opacity: 0.7; transition: opacity 0.3s ease; cursor: default;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.7">
                ${item}
              </span>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}
