import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/tps_pages',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
