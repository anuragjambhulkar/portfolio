/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Fixes image issues on GitHub Pages
  }
    ,typescript:{
        ignoreBuildErrors:true ,
    }
     assetPrefix: "./",
  basePath: "/portfolio"
};

export default nextConfig;
