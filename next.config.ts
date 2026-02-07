import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ooxijkokuifpwunx.public.blob.vercel-storage.com',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'www.drozguroktaynar.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
