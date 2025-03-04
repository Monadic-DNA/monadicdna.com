import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/vi/**',
      },
    ],
    domains: [
      'hebbkx1anhila5yf.public.blob.vercel-storage.com'
    ]
  },
  eslint: {
    // Ignore ESLint errors during production build
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
