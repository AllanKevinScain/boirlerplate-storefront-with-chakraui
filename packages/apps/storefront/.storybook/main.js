module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@chakra-ui/storybook-addon', '@storybook/addon-essentials'],
  staticDirs: [
    {
      from: '../public',
      to: '/occ-public'
    }
  ],
  framework: '@storybook/react',
  features: {
    emotionAlias: false
  },
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto'
    });

    return config;
  }
};
