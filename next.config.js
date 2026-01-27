/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async rewrites() {
    return [
      {
        source: '/llms.txt',
        destination: '/llms',
      },
    ];
  },
};

module.exports = nextConfig;
  
