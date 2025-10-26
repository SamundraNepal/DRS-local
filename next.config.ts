import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // ✅ Allow all HTTPS domains
      },
      {
        protocol: 'http',
        hostname: '**', // ✅ Allow all HTTP domains (optional)
      },
    ],
  },
};

export default nextConfig;
