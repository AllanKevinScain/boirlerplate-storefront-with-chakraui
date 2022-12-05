const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@chakra-ui/storybook-addon', '@storybook/addon-essentials'],
  staticDirs: [
    {
      from: '../public',
      to: '/'
    }
  ],
  core: {
    builder: {
      name: 'webpack5',
      options: {
        lazyCompilation: true
      }
    }
  },
  features: {
    storyStoreV7: true,
    emotionAlias: false
  },
  framework: '@storybook/react',
  webpackFinal: async config => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        configFile: '../../../tsconfig.json',
        extensions: config.resolve.extensions
      })
    ];
    return config;
  }
};
