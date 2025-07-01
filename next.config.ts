/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ปิด eslint ตอน build (เฉพาะบน production/Vercel)
  },
};

module.exports = nextConfig;
