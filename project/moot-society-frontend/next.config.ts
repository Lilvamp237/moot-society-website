// next.config.ts

import type { NextConfig } from 'next';

const config: NextConfig = {
  // THIS IS THE PART YOU NEED TO ADD
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**', // Allows any image from the 'uploads' folder
      },
    ],
  },
};

export default config;


/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Skip ESLint errors during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Skip TS type errors during builds
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
