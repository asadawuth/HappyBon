const nextConfig = {
  compress: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizeCss: true,
    legacyBrowsers: false,
  },
  images: {
    formats: ["image/webp", "image/avif"],
  },
};

module.exports = nextConfig;
