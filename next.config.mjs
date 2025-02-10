/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  basePath: '/portfolio', // Add your desired base path here
};

export default nextConfig;
