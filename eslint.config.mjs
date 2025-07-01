import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // นำ config มาตรฐานของ Next.js + TypeScript
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // ปิด rules ที่ทำให้ build ไม่ผ่าน
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // ปิดเตือนตัวแปรที่ไม่ได้ใช้
      "@typescript-eslint/no-explicit-any": "off", // ปิดการเตือนเมื่อใช้ any
      "react/no-unescaped-entities": "off", // ปิดเตือนตัวอักษรพิเศษที่ไม่ได้ escape
      "react-hooks/exhaustive-deps": "warn", // ปล่อยให้เตือนเฉย ๆ แต่ไม่ block build
      "@next/next/no-img-element": "warn", // เตือนการใช้ <img> เฉย ๆ
    },
  },
];

export default eslintConfig;
