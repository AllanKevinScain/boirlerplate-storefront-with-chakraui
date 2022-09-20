module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@chakra-ui/storybook-addon',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
  ],
  staticDirs: [
    {
      from: '../public',
      to: '/occ-public'
    }
  ],
  framework: '@storybook/react',
  features: {
    emotionAlias: false
  }
};
