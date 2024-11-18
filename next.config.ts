import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/nextjs-github-pages",  // <=== enables static exports
  reactStrictMode: true,
  /* config options here */
};

export default nextConfig;
