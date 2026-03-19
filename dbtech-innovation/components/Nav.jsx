"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Fix background after 20px
      setIsScrolled(currentScrollY > 20);

      // Hide/Show logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & not at the top
        setIsHidden(true);
      } else {
        // Scrolling up
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] border-b
        ${isScrolled ? 'bg-white/95 backdrop-blur-2xl py-2 shadow-lg border-white/60' : 'bg-white/80 backdrop-blur-xl py-4 border-white/20'}
        ${isHidden && !isOpen ? '-translate-y-full' : 'translate-y-0'}
      `}
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src="/Logo.png" 
              alt="DB Tech Innovation" 
              className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
            {[
              { name: 'Accueil', path: '/' },
              { name: 'Catalogue', path: '/catalogue' },
              { name: 'Solutions', path: '/solutions' },
              { name: 'Contact', path: '/contact' }
            ].map((link) => (
              <Link 
                key={link.path}
                href={link.path} 
                className={`relative py-2 text-sm xl:text-[0.9375rem] font-bold tracking-tight transition-all duration-300
                  ${currentPath === link.path ? 'text-primary' : 'text-slate-600 hover:text-primary'}
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent 
                  after:scale-x-0 after:origin-right after:transition-transform after:duration-300
                  ${currentPath === link.path ? 'after:scale-x-100 after:origin-left' : 'hover:after:scale-x-100 hover:after:origin-left'}
                `}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <div className="hidden md:block text-white">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-7 py-4 text-sm font-bold uppercase tracking-[0.1em]  bg-primary rounded-full hover:bg-[#00366b] hover:shadow-xl hover:shadow-blue-900/20 active:scale-95 transition-all duration-300"
              >
                Nous contacter
              </Link>
            </div>

            {/* Menu Toggle */}
            <button 
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none group bg-slate-50 rounded-xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-white z-[90] transition-all duration-500 ease-in-out
          ${isOpen ? 'translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible'}
        `}
        style={{ 
          top: isScrolled ? '64px' : '80px',
          height: 'calc(100vh - 64px)'
        }}
      >
        <div className="flex flex-col items-center justify-start h-full pt-12 pb-10 gap-8 px-10 overflow-y-auto relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,71,140,0.03),transparent)] pointer-events-none"></div>
          
          {[
            { name: 'Accueil', path: '/' },
            { name: 'Catalogue', path: '/catalogue' },
            { name: 'Solutions', path: '/solutions' },
            { name: 'Contact', path: '/contact' }
          ].map((link, i) => (
            <Link 
              key={link.path}
              href={link.path} 
              className={`w-full text-center text-3xl font-black tracking-tight transition-all duration-300 
                ${currentPath === link.path ? 'text-primary' : 'text-slate-800'}
                ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
              `}
              style={{ transitionDelay: `${i * 75}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
              {currentPath === link.path && <span className="block h-1 w-20 mx-auto bg-accent mt-2 rounded-full"></span>}
            </Link>
          ))}
          
          <div className={`w-full mt-4 transition-all duration-500 delay-400 text-white ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <Link 
              href="/contact" 
              className="flex items-center justify-center w-full py-5 text-lg font-black uppercase tracking-widest  bg-primary rounded-2xl shadow-2xl shadow-blue-900/20"
              onClick={() => setIsOpen(false)}
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
