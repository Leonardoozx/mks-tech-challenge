/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // https://mks-sistemas.nyc3.digitaloceanspaces.com/products/{imageName}.webp
      {
        protocol: 'https',
        hostname: 'mks-sistemas.nyc3.digitaloceanspaces.com',
        port: '',
        pathname: '/products/**.webp',
      },
      // https://imgur.com/{imageId}
      {
        protocol: 'https',
        hostname: 'imgur.com',
        port: '',
        pathname: '/*.png'
      }
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
