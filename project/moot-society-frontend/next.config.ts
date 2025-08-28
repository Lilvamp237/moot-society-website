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