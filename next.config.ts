const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  compress: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
    legacyBrowsers: false,
  },
};
