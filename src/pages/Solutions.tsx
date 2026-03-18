import { SectionHeader, CTASection } from '../components/UI';
import { HeroSection } from '../components/Hero';
import { mainServices, achievements, sectorSolutions } from '../data/solutions';

const ICONS: Record<string, string> = {
  shield: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  layers: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.1 6.27a2 2 0 0 0 0 3.46l9.07 4.09a2 2 0 0 0 1.66 0l9.07-4.09a2 2 0 0 0 0-3.46l-9.07-4.09z"/><path d="m2.1 14.73 9.07 4.09a2 2 0 0 0 1.66 0l9.07-4.09"/><path d="m2.1 10.73 9.07 4.09a2 2 0 0 0 1.66 0l9.07-4.09"/></svg>`,
  grid: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>`,
  route: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/></svg>`,
  chart: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>`,
  cpu: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>`,
  briefcase: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  phone: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`,
  database: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
  spark: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 1.912 5.886L20 10.8l-5.088 1.914L13 18.6l-1.912-5.886L6 10.8l5.088-1.914L12 3z"/></svg>`,
  sparkle: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 1.912 5.886L20 10.8l-5.088 1.914L13 18.6l-1.912-5.886L6 10.8l5.088-1.914L12 3z"/></svg>`,
  check: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
};

export function Solutions() {
  return (
    <div className="solutions">
      <HeroSection 
        eyebrow="Secteurs & Impact"
        title="Des technologies <span>sur-mesure</span> pour chaque métier"
        desc="Nous transformons les défis technologiques complexes en solutions opérationnelles simples, fluides et performantes pour les acteurs du Gabon."
        image="/images/backgrounds/freepik__talk__32633.jpeg"
        icons={ICONS}
      />

      <section className="bg-soft">
        <div className="shell">
          <SectionHeader 
            eyebrow="Expertise Sectorielle"
            title="Une approche adaptée à vos réalités"
            centered
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
            {sectorSolutions.map((s, i) => (
              <div key={i} className="reveal card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', borderRadius: '32px' }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img src={s.img} alt={s.sector} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '32px' }}>
                  <div style={{ color: 'var(--primary)', marginBottom: '16px' }} dangerouslySetInnerHTML={{ __html: ICONS[s.icon] }}></div>
                  <div className="eyebrow" style={{ marginBottom: '12px' }}>{s.sector}</div>
                  <h3 className="text-xl" style={{ marginBottom: '16px' }}>{s.title}</h3>
                  <p style={{ marginBottom: '24px' }}>{s.desc}</p>
                  <ul style={{ display: 'grid', gap: '8px' }}>
                    {s.bullets.map((b, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--ink-muted)' }}>
                        <span style={{ color: 'var(--primary)' }} dangerouslySetInnerHTML={{ __html: ICONS.check }}></span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services">
        <div className="shell">
          <SectionHeader 
            eyebrow="Services"
            title="Nos pôles d'expertise technique"
            centered
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '32px' }}>
            {mainServices.map((s, i) => (
              <article key={i} className="reveal card" style={{ padding: '40px' }}>
                <div style={{ width: '56px', height: '56px', background: 'var(--bg-soft)', color: 'var(--primary)', display: 'grid', placeItems: 'center', borderRadius: '16px', marginBottom: '24px' }} dangerouslySetInnerHTML={{ __html: ICONS[s.icon] }}></div>
                <h3 className="text-2xl" style={{ marginBottom: '16px' }}>{s.title}</h3>
                <p style={{ color: 'var(--ink-muted)', marginBottom: '24px' }}>{s.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {s.bullets.map((b, idx) => <span key={idx} style={{ fontSize: '0.7rem', fontWeight: 800, background: 'var(--bg-soft)', padding: '4px 12px', borderRadius: '999px' }}>{b}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="bg-soft">
        <div className="shell">
          <SectionHeader 
            eyebrow="Réalisations"
            title="Nos grandes réalisations"
            desc="L'expression de notre savoir-faire au service de projets stratégiques majeurs."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '40px' }}>
            {achievements.map((a, i) => (
              <article key={i} className="reveal" style={{ display: 'grid', gap: '24px' }}>
                <div style={{ borderRadius: '40px', overflow: 'hidden', height: '320px', boxShadow: 'var(--shadow-lg)' }}>
                  <img src={a.image} alt={a.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div style={{ color: 'var(--primary)', marginBottom: '12px' }} dangerouslySetInnerHTML={{ __html: ICONS[a.icon] || ICONS.sparkle }}></div>
                  <h3 className="text-xl" style={{ marginBottom: '12px', lineHeight: 1.3 }}>{a.title}</h3>
                  <p style={{ color: 'var(--ink-muted)', fontSize: '0.9375rem' }}>{a.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Prêt à rejoindre l'innovation ?"
        desc="Parlons de votre prochain projet de transformation digitale ou de formation IA."
        btnText="Contactez-nous"
      />
    </div>
  );
}
