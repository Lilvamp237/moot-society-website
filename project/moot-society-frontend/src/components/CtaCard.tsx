// src/components/CtaCard.tsx
import Link from 'next/link';
import React from 'react';

interface CtaCardProps {
  href: string;
  imageUrl: string;
  title: string;
}

export default function CtaCard({ href, imageUrl, title }: CtaCardProps) {
  return (
    <Link href={href} className="group block rounded-lg shadow-xl overflow-hidden">
      {/* 
        PART 1: The Image Container
        This is based on the debugging code that we know worked.
        It has a fixed height and the background image.
      */}
      <div
        className="h-64 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
      {/* 
        PART 2: The Text Container
        This is a simple div below the image. It is completely separate,
        so there are no overlays or stacking conflicts possible.
      */}
      <div className="bg-gray-900 p-4 text-center">
        <h4 className="text-lg font-bold text-white uppercase tracking-wider">
          {title}
        </h4>
      </div>
    </Link>
  );
}