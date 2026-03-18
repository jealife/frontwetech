import { CTASection } from '../components/UI';
import { HeroSection } from '../components/Hero';
import { Ticker } from '../components/InfoElements';
import { catalogueItems, catalogueGroups } from '../data/catalogue';

const ICONS: Record<string, string> = {
  scan: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/><path d="M12 7v10"/></svg>`,
  docs: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
  flow: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
  dash: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
  ai: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/></svg>`,
  shield: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  pay: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`,
  edu: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5L2 10z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
};

export function Catalogue() {
  const tickerItems = ["Digitalisation GED", "Validation Workflow", "KPI Cockpit", "IA Synthèse", "Mobile Field App", "Gov-Tech Solutions"];

  return (
    <div className="catalogue">
      <HeroSection 
        eyebrow="Expertise & Innovation"
        title="Explorez l'étendue de nos <span>pôles technologiques</span>"
        desc="Une architecture complète de services conçus pour transformer votre organisation en un système fluide, structuré et performant au Gabon."
        image="/images/backgrounds/freepik__3d-white-squares-of-various-sizes-arranged-in-a-ca__32632.jpeg"
        icons={ICONS}
      />
      
      <div className="shell" style={{ marginTop: '-40px', paddingLeft: '20px', paddingRight: '20px', position: 'relative', zIndex: 10 }}>
        <Ticker items={tickerItems} />
      </div>

      {/* <nav style={{ position: 'sticky', top: '100px', zIndex: 50, background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--line-soft)', padding: '12px 0' }}>
        <div className="shell" style={{ overflowX: 'auto', display: 'flex', gap: '24px', whiteSpace: 'nowrap', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase' }}>
          {catalogueGroups.map(group => (
            <a key={group} href={`#${group.replace(/\s/g, '-')}`} className="nav-link" style={{ opacity: 0.8 }}>{group}</a>
          ))}
        </div>
      </nav> */}

      {catalogueGroups.map((group, i) => {
        const items = catalogueItems.filter(it => it.group === group);
        return (
          <section key={group} id={group.replace(/\s/g, '-')} className={i % 2 === 1 ? 'bg-soft' : ''}>
            <div className="shell">
              <div className="reveal" style={{ marginBottom: '48px' }}>
                <div className="eyebrow">{group}</div>
                <h2 className="text-4xl">{group}</h2>
              </div>
              <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '32px' }}>
                {items.map((item, idx) => (
                  <div key={idx} className="reveal card glass-panel" style={{ display: 'flex', flexDirection: 'column', height: '100%', borderRadius: '24px', overflow: 'hidden' }}>
                    {item.img && (
                      <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                        <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(255,255,255,0.9)', width: '40px', height: '40px', borderRadius: '12px', display: 'grid', placeItems: 'center', color: 'var(--primary)' }} dangerouslySetInnerHTML={{ __html: ICONS[item.icon] }}></div>
                      </div>
                    )}
                    <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <h3 className="text-xl" style={{ marginBottom: '12px' }}>{item.title}</h3>
                      <p style={{ color: 'var(--ink-muted)', fontSize: '0.9375rem', marginBottom: '24px', flex: 1 }}>{item.desc}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {item.tags?.map(tag => <span key={tag} style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', background: 'var(--bg-soft)', color: 'var(--primary)', padding: '4px 12px', borderRadius: '999px' }}>{tag}</span>)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CTASection 
        title="Besoin d'une solution sur mesure ?"
        desc="Nos services s'adaptent à vos besoins spécifiques et à votre infrastructure technique au Gabon."
      />
    </div>
  );
}
