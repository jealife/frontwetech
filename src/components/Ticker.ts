export function Ticker(items: string[]) {
    return `
    <div class="ticker-wrap" style="overflow: hidden; background: var(--primary); padding: 20px 0; color: white; border-radius: var(--radius-lg); margin-bottom: 80px;">
      <div class="ticker" style="display: flex; gap: 60px; white-space: nowrap; animation: ticker 40s linear infinite;">
        ${[...items, ...items].map(item => `
          <div style="display: flex; align-items: center; gap: 12px; font-weight: 800; font-family: var(--font-heading); text-transform: uppercase; letter-spacing: 0.1em; font-size: 0.8rem;">
            <span style="width: 6px; height: 6px; background: var(--accent); border-radius: 50%;"></span>
            ${item}
          </div>
        `).join('')}
      </div>
    </div>
    <style>
      @keyframes ticker {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    </style>
  `;
}
