/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  distDir: 'out'
}

module.exports = nextConfig