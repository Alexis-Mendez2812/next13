/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
    appDir:true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.dicebear.com',
        port: '',
        pathname: '/api/adventurer/*',
      },
      {
        protocol: 'https',
        hostname: '**.com.svg',
      },
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
