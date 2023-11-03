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
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    // camel-case style names from css modules
    config.module.rules
      .find(({ oneOf }) => !!oneOf)
      .oneOf.filter(({ use }) => JSON.stringify(use)?.includes('css-loader'))
      .reduce((acc, { use }) => acc.concat(use), [])
      .forEach(({ options }) => {
        if (options.modules) {
          options.modules.exportLocalsConvention = 'camelCase';
        }
      });

    return config;
  },
};

module.exports = nextConfig;
