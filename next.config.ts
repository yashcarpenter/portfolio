import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only use static export for GitHub Pages, not for Vercel
  ...(process.env.DEPLOY_TARGET === 'github' && {
    output: 'export',
    trailingSlash: true,
    distDir: 'out',
  }),
  images: {
    unoptimized: true
  },
  // Only add basePath for GitHub Pages
  ...(process.env.DEPLOY_TARGET === 'github' && {
    basePath: '/portflio',
    assetPrefix: '/portflio',
  }),
};

export default nextConfig;
