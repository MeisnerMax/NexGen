/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async rewrites() {
    // NexAsset-Website als Unterordner dieser Domain (eigenes Vercel-Projekt next-immo, dort basePath /nexasset).
    const nexasset = process.env.NEXASSET_SITE_ORIGIN || 'https://neximmo.nexgen-consulting.de';
    return [
      {
        source: '/llms.txt',
        destination: '/llms',
      },
      { source: '/nexasset', destination: `${nexasset}/nexasset` },
      { source: '/nexasset/:path*', destination: `${nexasset}/nexasset/:path*` },
    ];
  },
};

module.exports = nextConfig;
  
