import { HeroSection } from '../components/Hero';
import { SectionHeader, FeatureCard, CTASection } from '../components/UI';
import { HighlightStrip } from '../components/InfoElements';

const ICONS: Record<string, string> = {
  spark: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="i"><path d="m12 3 1.912 5.886L20 10.8l-5.088 1.914L13 18.6l-1.912-5.886L6 10.8l5.088-1.914L12 3z"/></svg>`,
  check: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="i"><path d="M20 6 9 17l-5-5"/></svg>`,
  layers: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="i"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.1 6.27a2 2 0 0 0 0 3.46l9.07 4.09a2 2 0 0 0 1.66 0l9.07-4.09a2 2 0 0 0 0-3.46l-9.07-4.09z"/><path d="m2.1 14.73 9.07 4.09a2 2 0 0 0 1.66 0l9.07-4.09"/><path d="m2.1 10.73 9.07 4.09a2 2 0 0 0 1.66 0l9.07-4.09"/></svg>`,
  route: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="i"><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/></svg>`,
  chart: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="i"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>`,
  cpu: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="i"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>`,
};

const pillars = [
  { icon: "layers", title: "Digitalisation documentaire & GED", desc: "Transformation des dossiers papier en flux numériques clairs, centralisés et traçables." },
  { icon: "route", title: "Workflow & exécution métier", desc: "Structuration des traitements internes, validations et circuits opérationnels." },
  { icon: "chart", title: "Tableaux de bord décisionnels", desc: "KPI, reporting et lecture visuelle des performances et anomalies." },
  { icon: "cpu", title: "IA métier & assistants", desc: "Assistants intelligents pour synthèse, rédaction et accélération documentaire." }
];

const sectors = ["Banques", "Assurances", "Institutions", "Santé", "Éducation", "Administrations", "Services Publics", "Groupes privés"];

export function Home() {
  return (
    <div className="home">
      <HeroSection 
        eyebrow="Innovation Digitale"
        title="Transformez vos opérations avec une architecture <span>digitale premium</span>"
        desc="Nous concevons des solutions sur mesure pour structurer l’information, fluidifier les circuits et donner à vos équipes une meilleure capacité d’exécution."
        image="/images/backgrounds/sales-manager-examining-success-efficiency-metrics-within-firm.jpg"
        icons={ICONS}
      />

      <HighlightStrip label="Pensé pour" items={sectors} />

      <section id="solutions">
        <div className="shell">
          <SectionHeader 
            eyebrow="Notre Offre"
            title="Des solutions conçues pour la performance opérationnelle"
            desc="Nous mettons la technologie au service de votre efficacité réelle avec une approche orientée résultats."
          />
          <div className="grid-4">
            {pillars.map((p, i) => (
              <FeatureCard key={i} icon={ICONS[p.icon]} title={p.title} desc={p.desc} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft">
        <div className="shell">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div className="reveal">
              <div className="eyebrow">Organisation</div>
              <h2 className="text-4xl" style={{ marginBottom: '24px' }}>Classez, retrouvez et exploitez vos documents sans perte de temps</h2>
              <p className="text-lg" style={{ color: 'var(--ink-muted)', marginBottom: '32px' }}>Nous structurons les flux documentaires pour réduire les frictions et rendre l'information stratégique immédiatement disponible pour les décideurs.</p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, fontSize: '0.9375rem' }}><span style={{ color: 'var(--primary)' }} dangerouslySetInnerHTML={{ __html: ICONS.check }}></span>Classement intelligent</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, fontSize: '0.9375rem' }}><span style={{ color: 'var(--primary)' }} dangerouslySetInnerHTML={{ __html: ICONS.check }}></span>Recherche avancée</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, fontSize: '0.9375rem' }}><span style={{ color: 'var(--primary)' }} dangerouslySetInnerHTML={{ __html: ICONS.check }}></span>Traçabilité</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, fontSize: '0.9375rem' }}><span style={{ color: 'var(--primary)' }} dangerouslySetInnerHTML={{ __html: ICONS.check }}></span>Sécurité</li>
              </ul>
            </div>
            <div className="reveal slide-right">
              <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                <img src="/images/backgrounds/thinking-promising-project.jpg" alt="Organisation" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark" style={{ 
        background: 'radial-gradient(circle at top right, #1e293b, #0f172a)', 
        padding: '120px 0', 
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Cercles décoratifs subtils */}
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '400px', height: '400px', background: 'rgba(var(--primary-rgb), 0.05)', borderRadius: '50%', filter: 'blur(100px)' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '400px', height: '400px', background: 'rgba(var(--accent-rgb), 0.03)', borderRadius: '50%', filter: 'blur(100px)' }}></div>

        <div className="shell" style={{ position: 'relative', zIndex: 1 }}>
          <div className="reveal" style={{ maxWidth: '900px', marginBottom: '80px' }}>
            <div className="eyebrow" style={{ 
              background: 'rgba(255,255,255,0.08)', 
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'white', 
              padding: '10px 24px', 
              borderRadius: '999px', 
              fontSize: '0.75rem', 
              fontWeight: 800, 
              textTransform: 'uppercase', 
              letterSpacing: '0.12em', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px', 
              width: 'fit-content',
              marginBottom: '32px'
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4 11h5V4H4v7zm0 9h5v-7H4v7zm11 0h5v-7h-5v7zm0-16v7h5V4h-5z"/></svg>
              Notre méthode
            </div>
            <h2 className="text-6xl font-black" style={{ marginBottom: '32px', lineHeight: 1.1, letterSpacing: '-0.03em', color: 'white' }}>
              Une trajectoire claire pour transformer <span style={{ color: 'var(--accent)' }}>sans désorganiser</span> l'existant
            </h2>
            <p className="text-xl" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '750px', lineHeight: 1.6 }}>
              Nous intervenons avec une logique de cadrage, d'architecture et de déploiement progressif afin de créer une transformation solide, lisible et adaptée à votre réalité métier.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '32px' }}>
            {[
              {
                id: '01',
                title: "Audit & cadrage",
                desc: "Nous analysons vos usages, vos irritants, vos flux et vos objectifs pour définir un périmètre clair et une trajectoire réaliste.",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M8 12h8"/></svg>
              },
              {
                id: '02',
                title: "Architecture & design",
                desc: "Nous structurons les modules, les parcours, les rôles utilisateurs, les données et l'expérience cible avant le déploiement.",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
              },
              {
                id: '03',
                title: "Déploiement progressif",
                desc: "Nous mettons en place les briques prioritaires de manière maîtrisée afin d'obtenir des gains visibles sans désorganiser l'existant.",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m13 2-2 10h3L11 22"/></svg>
              },
              {
                id: '04',
                title: "Pilotage & amélioration",
                desc: "Nous suivons les usages, la qualité des traitements et les indicateurs afin d'optimiser durablement la solution.",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
              }
            ].map((step, i) => (
              <div key={step.id} className="reveal scale-in" style={{ 
                background: 'rgba(255,255,255,0.03)', 
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.08)', 
                padding: '48px', 
                borderRadius: '40px', 
                transitionDelay: `${i * 0.1}s`,
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ width: '56px', height: '56px', background: 'rgba(var(--accent-rgb), 0.1)', borderRadius: '16px', display: 'grid', placeItems: 'center', color: 'var(--accent)' }}>
                    {step.icon}
                  </div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 900, color: 'var(--accent)', opacity: 0.6, letterSpacing: '0.2em' }}>STEP {step.id}</div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold" style={{ marginBottom: '16px', letterSpacing: '-0.02em', color: 'white' }}>{step.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.0625rem', lineHeight: 1.7, fontWeight: 500 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Prêt à moderniser votre organisation ?"
        desc="Échangeons sur vos besoins pour concevoir une architecture digitale parfaitement adaptée à votre réalité métier."
      />
    </div>
  );
}
