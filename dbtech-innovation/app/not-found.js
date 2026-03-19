import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found-page" style={{ 
      minHeight: '80vh', 
      display: 'grid', 
      placeItems: 'center', 
      padding: '100px 20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Éléments décoratifs en arrière-plan */}
      <div style={{ 
        position: 'absolute', 
        top: '20%', 
        left: '10%', 
        width: '300px', 
        height: '300px', 
        background: 'rgba(var(--primary-rgb), 0.05)', 
        borderRadius: '50%', 
        filter: 'blur(80px)',
        zIndex: -1
      }}></div>
      <div style={{ 
        position: 'absolute', 
        bottom: '20%', 
        right: '10%', 
        width: '250px', 
        height: '250px', 
        background: 'rgba(var(--accent-rgb), 0.05)', 
        borderRadius: '50%', 
        filter: 'blur(70px)',
        zIndex: -1
      }}></div>

      <div className="shell" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <div className="reveal glass-panel animate-fade-up" style={{ 
          padding: '80px 40px', 
          borderRadius: '40px', 
          boxShadow: 'var(--shadow-xl)',
          position: 'relative',
          background: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(30px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.5)'
        }}>
          <div className="eyebrow" style={{ marginBottom: '24px', letterSpacing: '0.3em' }}>Erreur 404</div>
          
          <h1 className="text-7xl font-black" style={{ 
            marginBottom: '32px', 
            lineHeight: 1, 
            letterSpacing: '-0.04em',
            background: 'linear-gradient(135deg, var(--ink) 0%, var(--primary) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Page Introuvable
          </h1>
          
          <p className="text-xl" style={{ 
            color: 'var(--ink-muted)', 
            maxWidth: '550px', 
            margin: '0 auto 48px',
            lineHeight: 1.6
          }}>
            Le lien que vous avez suivi est peut-être rompu ou la page a été déplacée. DB Tech Innovation continue d'évoluer.
          </p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="btn btn--primary btn--large">
              Retour à l'accueil
            </Link>
            <Link href="/solutions" className="btn btn--secondary btn--large">
              Nos solutions
            </Link>
          </div>

          {/* Décoration subtile "404" en fond de carte */}
          <div style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            fontSize: '20rem', 
            fontWeight: 900, 
            color: 'rgba(0,0,0,0.02)', 
            zIndex: -1,
            pointerEvents: 'none',
            userSelect: 'none'
          }}>
            404
          </div>
        </div>

        <div className="reveal" style={{ marginTop: '40px', color: 'var(--ink-soft)', fontSize: '0.9rem', fontWeight: 600 }}>
          Besoin d'aide ? <Link href="/contact" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Contactez notre support technique</Link>
        </div>
      </div>
    </div>
  );
}
