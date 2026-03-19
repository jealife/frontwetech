"use client";

import { useState, useEffect } from 'react';

export function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="floating-actions" style={{ position: 'fixed', bottom: '32px', right: '32px', zIndex: 1000, display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'center' }}>
      {/* Bouton WhatsApp */}
      <a 
        href="https://wa.me/24102055501" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fab fab--whatsapp" 
        title="WhatsApp"
        style={{ 
          width: '56px', height: '56px', borderRadius: '50%', background: '#25D366', color: 'white', display: 'grid', placeItems: 'center', boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)', transition: 'all 0.3s var(--ease)', textDecoration: 'none' 
        }}
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      </a>

      {/* Bouton Appel Direct */}
      <a 
        href="tel:+24102055501" 
        className="fab fab--call" 
        title="Nous appeler"
        style={{ 
          width: '56px', height: '56px', borderRadius: '50%', background: 'black', color: 'white', display: 'grid', placeItems: 'center', boxShadow: '0 8px 24px rgba(0,0,0, 0.2)', transition: 'all 0.3s var(--ease)', textDecoration: 'none' 
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      </a>

      {/* Bouton Retour en Haut intelligent */}
      <button 
        onClick={scrollToTop} 
        className={`fab fab--top ${isVisible ? 'is-visible' : ''}`}
        title="Retour en haut"
        style={{ 
          width: '56px', height: '56px', borderRadius: '50%', background: 'white', border: '1px solid var(--line-soft)', color: 'var(--primary)', display: 'grid', placeItems: 'center', boxShadow: '0 8px 24px var(--shadow-color)', transition: 'all 0.4s var(--ease)', cursor: 'pointer', opacity: isVisible ? 1 : 0, transform: `translateY(${isVisible ? '0' : '20px'})`, pointerEvents: isVisible ? 'all' : 'none' 
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </button>

      <style dangerouslySetInnerHTML={{ __html: `
        .fab:hover { transform: scale(1.15) translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.15); }
        .fab--whatsapp:hover { background: #128C7E; }
        .fab--call:hover { background: #000; }
        .fab--top:hover { border-color: var(--primary); }
        
        @media (max-width: 768px) {
          .floating-actions { bottom: 20px; right: 20px; gap: 10px; }
          .fab { width: 50px !important; height: 50px !important; }
        }
      `}} />
    </div>
  );
}
