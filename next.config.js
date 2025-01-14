/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Add any experimental features you want to enable here
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;