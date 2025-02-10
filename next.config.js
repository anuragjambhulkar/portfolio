/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Fixes image issues on GitHub Pages
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  assetPrefix: './',  // Ensures proper asset handling
  basePath: "/portfolio",
};

module.exports = nextConfig; // Use CommonJS export
