import Link from 'next/link';

const SECTOR_LINKS = {
  "Banques": "/catalogue#Banque-&-Finance",
  "Assurances": "/catalogue#Digitalisation-&-GED",
  "Institutions": "/catalogue#Justice-&-Institutions",
  "Santé": "/catalogue#Santé",
  "Éducation": "/catalogue#Éducation",
  "Administrations": "/catalogue#Justice-&-Institutions",
  "Services Publics": "/catalogue#Justice-&-Institutions",
  "Groupes privés": "/catalogue#Workflows-&-Automatisation"
};

const SECTOR_ICONS = {
  Banques: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 22h18"/><path d="m6 18 3-9 3 9"/><path d="m12 18 3-9 3 9"/><path d="M11 2h2"/><path d="m9 2 1 4"/><path d="m15 2-1 4"/></svg>`,
  Assurances: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  Institutions: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3"/><path d="M5 21V10.85"/><path d="M19 21V10.85"/><path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4"/></svg>`,
  Santé: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14.5a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3z"/><path d="M10 10c0-2.209 1.791-4 4-4"/><path d="M22 10c0-2.209-1.791-4-4-4"/><path d="M7 10c0-2.209-1.791-4-4-4"/><path d="M10 22c0-2.209-1.791-4-4-4"/><path d="M22 22c0-2.209-1.791-4-4-4"/></svg>`,
  Éducation: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5L2 10z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
  Administrations: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="8" x2="16" y1="10" y2="10"/><line x1="8" x2="12" y1="14" y2="14"/></svg>`,
  "Services Publics": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"/><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="12" cy="10" r="3"/></svg>`,
  "Groupes privés": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  "default": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="1"/></svg>`
};

export function HighlightStrip({ label, items }) {
  return (
    <section className="highlight-strip" style={{ padding: '100px 0', background: 'var(--bg-soft)' }}>
      <div className="shell">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="eyebrow" style={{ marginInline: 'auto' }}>
            {label}
          </span>
          <h2 className="text-4xl" style={{ marginTop: '20px', fontWeight: 800 }}>Des solutions adaptées à votre <span>secteur</span></h2>
        </div>
        
        <div className="highlight-strip-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '24px',
          justifyContent: 'center',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {items.map((item, i) => (
            <Link 
              key={item}
              href={SECTOR_LINKS[item] || "/catalogue"} 
              className="reveal scale-in glass-panel group" 
              style={{ 
                padding: '32px 24px', 
                borderRadius: '28px', 
                fontWeight: 700, 
                color: 'var(--ink)', 
                transition: 'all 0.4s var(--ease)', 
                cursor: 'pointer', 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center', 
                gap: '16px',
                textAlign: 'center',
                animationDelay: `${i * 0.05}s`,
                textDecoration: 'none'
              }}
            >
              <div 
                className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{ width: '56px', height: '56px', background: 'rgba(var(--primary-rgb), 0.04)', color: 'var(--primary)', borderRadius: '18px', display: 'grid', placeItems: 'center' }}
                dangerouslySetInnerHTML={{ __html: SECTOR_ICONS[item] || SECTOR_ICONS.default }}
              ></div>
              <div style={{ fontSize: '1rem', letterSpacing: '-0.01em', lineHeight: 1.3 }}>{item}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Ticker({ items }) {
  return (
    <div className="ticker-wrap" style={{ overflow: 'hidden', background: 'var(--primary)', padding: '20px 0', color: 'white', borderRadius: 'var(--radius-lg)', marginBottom: '80px' }}>
      <div className="ticker" style={{ display: 'flex', width: 'max-content', whiteSpace: 'nowrap', animation: 'ticker 40s linear infinite' }}>
        {[...items, ...items].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '0 30px', fontWeight: 800, fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem' }}>
            <span style={{ width: '6px', height: '6px', background: 'var(--accent)', borderRadius: '50%' }}></span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
