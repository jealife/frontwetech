

export function HighlightStrip({ label, items }: { label: string; items: string[] }) {
  return (
    <section className="highlight-strip" style={{ overflow: 'hidden', padding: '60px 0', background: '#fff' }}>
      <div className="shell">
        <div className="reveal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
          <span style={{ fontWeight: 800, fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.8rem', color: 'var(--primary)', background: 'rgba(var(--primary-rgb), 0.05)', padding: '6px 16px', borderRadius: '999px' }}>
            {label}
          </span>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {items.map((item, i) => (
              <div key={i} className="reveal scale-in" style={{ background: 'white', border: '1px solid var(--line-soft)', padding: '12px 24px', borderRadius: '16px', fontWeight: 700, color: 'var(--ink-main)', boxShadow: 'var(--shadow-sm)', transition: 'all 0.3s var(--ease)', cursor: 'default', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '8px', height: '8px', background: 'var(--accent)', borderRadius: '50%' }}></span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Ticker({ items }: { items: string[] }) {
  return (
    <div className="ticker-wrap" style={{ overflow: 'hidden', background: 'var(--primary)', padding: '20px 0', color: 'white', borderRadius: 'var(--radius-lg)', marginBottom: '80px' }}>
      <div className="ticker" style={{ display: 'flex', gap: '60px', whiteSpace: 'nowrap', animation: 'ticker 40s linear infinite' }}>
        {[...items, ...items].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 800, fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem' }}>
            <span style={{ width: '6px', height: '6px', background: 'var(--accent)', borderRadius: '50%' }}></span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
