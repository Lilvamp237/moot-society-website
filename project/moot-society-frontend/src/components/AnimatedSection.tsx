// src/components/AnimatedSection.tsx
'use client';

import { useInView } from 'react-intersection-observer';
import React from 'react';

// The component now accepts an optional delay prop
export default function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      // The transition is now more dramatic: longer duration, more movement, and a blur effect.
      // The style attribute applies the custom delay for the staggered effect.
      className={`transition-all duration-1000 ease-out transform
        ${inView ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-16 blur-md'}`
      }
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}