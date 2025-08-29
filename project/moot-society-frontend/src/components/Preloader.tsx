// src/components/Preloader.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
        fixed inset-0 z-50 flex flex-col items-center justify-center 
        bg-background/50 backdrop-blur-lg 
        transition-opacity duration-500 ease-in-out
        ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
    >
      <div className="text-center">
        <Image
          src="/moot-logo.png"
          alt="Moot Society Logo"
          width={150}
          height={150}
          // --- THE CHANGE IS HERE ---
          // 'rounded-full' makes the image a perfect circle.
          // 'border' and 'border-border-color' add a subtle, theme-aware border.
          className="mx-auto mb-6 rounded-full border-2 border-border-color"
          priority
        />
        <h1 className="font-serif text-2xl tracking-wider text-foreground">
          Moot Society
        </h1>
        <p className="mt-2 text-lg text-foreground/70">
          Preparing for the Bar...
        </p>
      </div>
    </div>
  );
};

export default Preloader;