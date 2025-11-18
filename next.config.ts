import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  basePath: '/tps_pages',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
