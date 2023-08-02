/** @type {import('next').NextConfig} */
const nextConfig = {
  // headers: () => [
  //   {
  //     source: '/:path*',
  //     headers: [
  //       {
  //         key: 'Cache-Control',
  //         value: 'no-store',
  //       },
  //     ],
  //   },
  // ],
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ['lh3.googleusercontent.com']
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  }
}

module.exports = nextConfig