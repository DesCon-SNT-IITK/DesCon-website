import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // Static export settings
  output: 'export',
  distDir: 'build',
  trailingSlash: true, // Recommended for static export

  // In production export we want relative assets (works on GitHub Pages/subpaths),
  // but in dev this breaks because requests become /route/_next/... and 404.
  assetPrefix: process.env.NODE_ENV === 'production' ? '.' : '',
};

export default nextConfig;
