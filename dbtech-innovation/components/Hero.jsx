import Link from 'next/link';

export function HeroSection({ eyebrow, title, desc, image, icons }) {
  return (
    <section className="hero">
      <div className="shell">
        <div className="hero__grid grid-2">
          <div className="hero__content reveal animate-fade-up">
            <div className="hero__eyebrow">{eyebrow}</div>
            <h1 className="hero__title text-6xl" dangerouslySetInnerHTML={{ __html: title }}></h1>
            <p className="hero__desc text-xl">{desc}</p>
            <div className="hero__actions">
              <Link href="/solutions" className="btn btn--primary btn--large">Nos solutions</Link>
              <Link href="/catalogue" className="btn btn--secondary btn--large">Voir le catalogue</Link>
            </div>
          </div>
          <div className="hero__visual reveal scale-in">
            {/* Tech Decor Background */}
            <div className="tech-decor glow-blue" style={{ top: '-15%', right: '-15%', opacity: 0.6 }}></div>
            <div className="tech-decor glow-yellow" style={{ bottom: '-10%', left: '-10%', opacity: 0.4 }}></div>
            
            <div className="hero__image-wrapper">
              <img src={image} alt="DB Tech Achievement" />
            </div>
            
            <div className="hero__floating-card hero__floating-card--1 animate-float">
              <div className="card__icon" dangerouslySetInnerHTML={{ __html: icons.check }}></div>
              <div>
                <div className="text-sm font-bold">Performance</div>
                <div className="text-xs text-muted">99.9% Excellence</div>
              </div>
            </div>
            
            <div className="hero__floating-card hero__floating-card--2 animate-float" style={{ animationDelay: '1s' }}>
              <div className="card__icon" dangerouslySetInnerHTML={{ __html: icons.spark }}></div>
              <div>
                <div className="text-sm font-bold">Innovation</div>
                <div className="text-xs text-muted">IA Native</div>
              </div>
            </div>

            {/* Tech nodes & lines */}
            <div className="tech-decor tech-line" style={{ top: '20%', left: '-15%', width: '130%', opacity: 0.3, transform: 'rotate(-4deg)' }}></div>
            <div className="tech-decor tech-node" style={{ top: '20%', left: '-2%' }}></div>
            <div className="tech-decor tech-node" style={{ bottom: '30%', right: '0' }}></div>
            <div className="tech-decor tech-shape" style={{ top: '10%', left: '-8%', borderStyle: 'double', opacity: 0.6 }}></div>
            <div className="tech-decor tech-shape" style={{ bottom: '20%', right: '-5%', opacity: 0.5 }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
