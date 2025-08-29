const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/aqualink-docs',
  assetPrefix: '/aqualink-docs/',
  images: {
    unoptimized: true,
  },
}

module.exports = withNextra(nextConfig)
