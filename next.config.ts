// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true, // ปิด eslint ตอน build (เฉพาะบน production/Vercel)
//   },
// };

// module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true, // ✅ ข้าม eslint บน build จริง
  },
  experimental: {
    optimizeCss: true, // ✅ ใช้ได้บน Next.js 13+
  },
  images: {
    formats: ["image/webp", "image/avif"], // ✅ AVIF = ขนาดเล็กกว่า WebP อีก
    domains: [
      "yourdomain.com",
      "happy-bon.vercel.app", // ✅ เพิ่ม domain จริงด้วย (หรือ CDN ถ้ามี)
    ],
  },
};

module.exports = nextConfig;
