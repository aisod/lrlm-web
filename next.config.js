const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  // Fix workspace root warning
  experimental: {
    turbo: {
      root: __dirname
    }
  }
};

module.exports = withNextIntl(nextConfig);
