const withNextIntl = require('next-intl/plugin')();

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
};

module.exports = withNextIntl(nextConfig);
