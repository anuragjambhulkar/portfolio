/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Fixes image issues on GitHub Pages
  }
    ,typescript:{
        ignoreBuildErrors:true ,
    }
};

export default nextConfig;
