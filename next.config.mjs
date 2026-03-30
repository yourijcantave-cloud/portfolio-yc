/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <--- ADD THIS LINE
  images: {
    unoptimized: true, // Required for static export
  },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
