"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { attachReveal } from '../lib/reveal';

export function RevealHelper() {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      attachReveal();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
