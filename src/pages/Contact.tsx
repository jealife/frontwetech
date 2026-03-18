import { SectionHeader } from '../components/UI';

const ICONS: Record<string, string> = {
  mail: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  phone: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  map: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>`
};

export function Contact() {
  return (
    <div className="contact-page">
      {/* Unique Contact Hero */}
      <section style={{ 
        padding: '160px 0 80px', 
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center'
      }}>
        <div className="shell">
          <div className="glass-panel reveal animate-fade-up" style={{ 
            padding: '80px 40px', 
            borderRadius: 'var(--radius-xl)', 
            maxWidth: '1000px',
            margin: '0 auto',
            boxShadow: 'var(--shadow-xl)'
          }}>
            <div className="eyebrow" style={{ marginBottom: '24px' }}>Contact & Accompagnement</div>
            <h1 className="text-6xl" style={{ marginBottom: '32px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Une question ? Un projet ?<br />
              <span style={{ color: 'var(--primary)', position: 'relative', display: 'inline-block', marginTop: '12px' }}>
                Parlons-en.
                <span style={{ position: 'absolute', bottom: '8px', left: 0, width: '100%', height: '8px', background: 'rgba(var(--accent-rgb), 0.3)', zIndex: -1 }}></span>
              </span>
            </h1>
            <p className="text-xl" style={{ color: 'var(--ink-muted)', maxWidth: '700px', margin: '0 auto' }}>
              Nos experts sont à votre disposition pour analyser vos besoins et vous proposer des architectures digitales sur mesure adaptées à votre réalité et vos enjeux.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0' }}>
        <div className="shell">
          <SectionHeader 
            eyebrow="Nos Coordonnées"
            title="Comment pouvons-nous vous aider ?"
            desc="N'hésitez pas à nous contacter directement ou via le formulaire ci-dessous."
            centered={true}
          />
          
          <div className="grid-2" style={{ marginTop: '60px', gap: '60px', alignItems: 'flex-start' }}>
            
            {/* Contact Form */}
            <div className="reveal scale-in glass-panel" style={{ padding: '48px', borderRadius: 'var(--radius-xl)' }}>
              <h3 className="text-2xl" style={{ marginBottom: '24px' }}>Envoyez-nous un message</h3>
              <form 
                action="mailto:services@dbtech-innovation.com" 
                method="POST" 
                encType="text/plain"
                style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
                onSubmit={(e) => {
                  e.preventDefault();
                  // Simple JS fallback if needed
                  const formData = new FormData(e.target as HTMLFormElement);
                  const subject = formData.get('subject') || 'Contact depuis le site Web';
                  const body = `Nom: ${formData.get('name')}%0D%0AEmail: ${formData.get('email')}%0D%0A%0D%0AMessage:%0D%0A${formData.get('message')}`;
                  window.location.href = `mailto:services@dbtech-innovation.com?subject=${subject}&body=${body}`;
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="name" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--ink-soft)' }}>Nom complet</label>
                    <input type="text" id="name" name="name" required style={{ padding: '14px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', outline: 'none', background: 'var(--bg-soft)', fontSize: '1rem', transition: 'border-color 0.2s' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="email" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--ink-soft)' }}>Adresse Email</label>
                    <input type="email" id="email" name="email" required style={{ padding: '14px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', outline: 'none', background: 'var(--bg-soft)', fontSize: '1rem', transition: 'border-color 0.2s' }} />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="subject" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--ink-soft)' }}>Sujet du message</label>
                  <input type="text" id="subject" name="subject" required style={{ padding: '14px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', outline: 'none', background: 'var(--bg-soft)', fontSize: '1rem', transition: 'border-color 0.2s' }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="message" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--ink-soft)' }}>Votre Message</label>
                  <textarea id="message" name="message" rows={5} required style={{ padding: '14px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', outline: 'none', background: 'var(--bg-soft)', fontSize: '1rem', resize: 'vertical', transition: 'border-color 0.2s' }}></textarea>
                </div>

                <button type="submit" className="btn btn--primary btn--large" style={{ width: '100%', marginTop: '8px', padding: '16px', fontSize: '1.0625rem' }}>
                  Evoyer le message
                </button>
              </form>
            </div>

            {/* Direct Contacts Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div className="reveal glass-panel" style={{ padding: '32px', borderRadius: 'var(--radius-xl)', display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ width: '48px', height: '48px', background: 'white', color: 'var(--primary)', borderRadius: '12px', display: 'grid', placeItems: 'center', flexShrink: 0, boxShadow: 'var(--shadow-sm)' }} dangerouslySetInnerHTML={{ __html: ICONS.mail }}></div>
                <div>
                  <div className="text-sm font-bold" style={{ color: 'var(--ink-muted)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</div>
                  <a href="mailto:services@dbtech-innovation.com" className="text-lg font-bold hover:text-primary transition-colors">services@dbtech-innovation.com</a>
                </div>
              </div>

              <div className="reveal glass-panel" style={{ padding: '32px', borderRadius: 'var(--radius-xl)', display: 'flex', gap: '20px', alignItems: 'center', transitionDelay: '0.1s' }}>
                <div style={{ width: '48px', height: '48px', background: 'white', color: 'var(--primary)', borderRadius: '12px', display: 'grid', placeItems: 'center', flexShrink: 0, boxShadow: 'var(--shadow-sm)' }} dangerouslySetInnerHTML={{ __html: ICONS.phone }}></div>
                <div>
                  <div className="text-sm font-bold" style={{ color: 'var(--ink-muted)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Téléphone / WhatsApp</div>
                  <a href="tel:+24102055501" className="text-lg font-bold hover:text-primary transition-colors">+241 02 05 55 01</a>
                </div>
              </div>

              <div className="reveal glass-panel" style={{ padding: '32px', borderRadius: 'var(--radius-xl)', display: 'flex', gap: '20px', alignItems: 'center', transitionDelay: '0.2s' }}>
                <div style={{ width: '48px', height: '48px', background: 'white', color: 'var(--primary)', borderRadius: '12px', display: 'grid', placeItems: 'center', flexShrink: 0, boxShadow: 'var(--shadow-sm)' }} dangerouslySetInnerHTML={{ __html: ICONS.map }}></div>
                <div>
                  <div className="text-sm font-bold" style={{ color: 'var(--ink-muted)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Siège Social</div>
                  <div className="text-lg font-bold">Libreville, Gabon</div>
                  <div style={{ color: 'var(--ink-soft)', fontSize: '0.9rem', marginTop: '4px' }}>Innovation, consulting & déploiement international</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
