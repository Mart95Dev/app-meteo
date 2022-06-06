/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  nextConfig,
  images: {
    imageFolderPath: "public/assets",
    exportFolderPath: "out",
    quality: 75,
    domains: ["cdn.weatherapi.com", "ipgeolocation.io"],
  },
  env: {
    storePicturesInWEBP: true,
    generateAndUseBlurImages: true,
  },

  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};
