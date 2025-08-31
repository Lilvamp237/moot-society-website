// src/components/ScrollToTop.tsx
'use client'; // This must be a Client Component to use hooks

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// This component doesn't render anything. It just handles the scroll effect.
export default function ScrollToTop() {
  // Get the current URL path
  const pathname = usePathname();

  // 'useEffect' runs this code whenever the 'pathname' changes
  useEffect(() => {
    // This is the browser API to scroll to the top of the page
    window.scrollTo(0, 0);
  }, [pathname]); // The effect depends on the pathname.

  return null; // This component renders nothing to the screen
}