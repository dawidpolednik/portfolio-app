/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },
  output: 'standalone',
  reactStrictMode: true,
  trailingSlash: true,
  i18n: {
    locales: ['pl', 'en'],
    defaultLocale: 'pl',
    localeDetection: false,
  },
};

module.exports = nextConfig;
