import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/portflio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portflio' : '',
  distDir: 'out',
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
};

export default nextConfig;
