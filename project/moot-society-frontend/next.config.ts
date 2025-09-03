// next.config.ts
import type { NextConfig } from 'next';

const config: NextConfig = {
  // Image settings
  images: {
    remotePatterns: [
      {
        // --- THIS IS THE FIX ---
        protocol: 'https', // Changed from 'http' to 'https'
        // --- END OF THE FIX ---
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // Skip ESLint errors during builds
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Skip TypeScript type errors during builds
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default config;