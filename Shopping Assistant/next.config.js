/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "unsplash.it",
      "images.unsplash.com",
      "picsum.photos",
      "m.media-amazon.com",
    ],
  },
};

module.exports = nextConfig;
