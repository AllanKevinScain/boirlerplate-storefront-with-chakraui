const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@chakra-ui/storybook-addon', '@storybook/addon-essentials'],
  webpackFinal: async config => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        configFile: '../../../tsconfig.json',
        extensions: config.resolve.extensions
      })
    ];
    return config;
  },
  staticDirs: [
    {
      from: '../public',
      to: '/occ-public'
    }
  ],
  framework: '@storybook/react'
};
