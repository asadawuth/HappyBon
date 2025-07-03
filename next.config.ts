/** @type {import('next').NextConfig} */
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
  images: {
    formats: ["image/webp", "image/avif"], // 👈 เพิ่มส่วนนี้
  },
};

module.exports = nextConfig;
