// next.config.ts

import type { NextConfig } from 'next';

const config: NextConfig = {
  // Image settings
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**', // Allows any image from the 'uploads' folder
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
