/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/repo-isminiz', // GitHub repo adınızı buraya yazın
}

module.exports = nextConfig 