import React from 'react';

export function SectionHeader({ eyebrow, title, desc, centered = false }: { 
  eyebrow: string; 
  title: string; 
  desc?: string;
  centered?: boolean;
}) {
  return (
    <div className={`section-header reveal ${centered ? 'mx-auto text-center' : ''}`}>
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="section-title text-5xl">{title}</h2>
      {desc && <p className="section-desc text-xl">{desc}</p>}
    </div>
  );
}

export function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="reveal card">
      <div className="card__icon">
        {typeof icon === 'string' ? (
          <div dangerouslySetInnerHTML={{ __html: icon }} />
        ) : (
          icon
        )}
      </div>
      <h3 className="text-xl">{title}</h3>
      <p style={{ color: 'var(--ink-muted)' }}>{desc}</p>
    </div>
  );
}

export function CTASection({ title, desc, btnText = "Demander un devis", link = "/contact" }: { 
  title: string; 
  desc: string; 
  btnText?: string;
  link?: string;
}) {
  return (
    <section className="cta-section">
      <div className="shell">
        <div className="reveal cta-box">
          <h2 className="text-5xl">{title}</h2>
          <p className="text-xl">{desc}</p>
          <div className="cta-actions">
            <a href={link} className="btn btn--accent btn--large">{btnText}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
