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

      <section>
        <div className="shell">
          <div className="reveal" style={{ background: 'var(--bg-soft)', borderRadius: '40px', padding: '100px 60px', textAlign: 'center' }}>
            <div className="eyebrow" style={{ marginInline: 'auto' }}>Méthodologie</div>
            <h2 className="text-5xl" style={{ marginBottom: '40px', maxWidth: '800px', marginInline: 'auto' }}>Une architecture pensée pour <span>l'exécution</span></h2>
            
            <div className="grid-4" style={{ marginTop: '60px', textAlign: 'left' }}>
              <div className="reveal scale-in">
                <div className="text-6xl font-black" style={{ color: 'var(--primary)', opacity: 0.1, marginBottom: '-30px' }}>01</div>
                <h3 className="text-xl">Structurer</h3>
                <p>Organisation des données et centralisation des flux.</p>
              </div>
              <div className="reveal scale-in" style={{ transitionDelay: '0.1s' }}>
                <div className="text-6xl font-black" style={{ color: 'var(--primary)', opacity: 0.1, marginBottom: '-30px' }}>02</div>
                <h3 className="text-xl">Fluidifier</h3>
                <p>Optimisation des circuits et réduction des délais.</p>
              </div>
              <div className="reveal scale-in" style={{ transitionDelay: '0.2s' }}>
                <div className="text-6xl font-black" style={{ color: 'var(--primary)', opacity: 0.1, marginBottom: '-30px' }}>03</div>
                <h3 className="text-xl">Piloter</h3>
                <p>Tableaux de bord et indicateurs de performance.</p>
              </div>
              <div className="reveal scale-in" style={{ transitionDelay: '0.3s' }}>
                <div className="text-6xl font-black" style={{ color: 'var(--primary)', opacity: 0.1, marginBottom: '-30px' }}>04</div>
                <h3 className="text-xl">Accélérer</h3>
                <p>Automatisation et aide à la décision par l'IA.</p>
              </div>
            </div>
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
