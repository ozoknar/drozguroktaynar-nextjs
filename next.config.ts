import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ooxijkokuifpwunx.public.blob.vercel-storage.com',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
