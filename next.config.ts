import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images:{
    unoptimized:true
  },
  basePath:"/nhtberk.github.io",
  reactStrictMode: true,
  eslint:{
    ignoreDuringBuilds:true
  }
  /* config options here */
};

export default nextConfig;
