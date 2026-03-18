
export function HeroSection({ eyebrow, title, desc, image, icons }: { 
  eyebrow: string, 
  title: string, 
  desc: string, 
  image: string,
  icons: Record<string, string> 
}) {
  return (
    <section className="hero">
      <div className="shell">
        <div className="hero__grid grid-2">
          <div className="hero__content reveal animate-fade-up">
            <div className="hero__eyebrow">{eyebrow}</div>
            <h1 className="hero__title text-6xl" dangerouslySetInnerHTML={{ __html: title }}></h1>
            <p className="hero__desc text-xl">{desc}</p>
            <div className="hero__actions">
              <a href="/solutions" className="btn btn--primary btn--large">Nos solutions</a>
              <a href="/catalogue" className="btn btn--secondary btn--large">Voir le catalogue</a>
            </div>
          </div>
          <div className="hero__visual reveal scale-in">
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
          </div>
        </div>
      </div>
    </section>
  );
}
