/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webp: {
    preset: "default",
    quality: 100,
  },
  images: {
    domains: ["https://d-and-a-impex.pl/"],
  },
  output: "export",
};

module.exports = nextConfig;
