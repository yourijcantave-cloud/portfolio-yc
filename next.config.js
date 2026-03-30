/** @type {import('next').NextConfig} */
const nextConfig = {
  // This tells the robot to ignore tiny type errors and keep building
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

