import commonjs from '@rollup/plugin-commonjs';
const typescript = require('rollup-plugin-typescript2');
// import alias from '@rollup/plugin-alias';
const { createBuildConfigs } = require('@oracle-cx-commerce/rollup-config');

const configs = createBuildConfigs({
  extraExternals: [
    'rollup-plugin-typescript2',
    'increase-memory-limit',
    'yup',
    'swiper',
    'radash',
    'html-react-parser',
    'framer-motion',
    'formik',
    'currency.js',
    '@emotion/styled',
    '@emotion/react',
    '@chakra-ui/react',
    '@choc-ui/chakra-autocomplete',
    'babel-plugin-module-resolver'
  ]
}).map(config => ({
  ...config,
  plugins: [
    ...config.plugins.map(plugin => {
      if (plugin.name === 'typescript') return typescript();
      return plugin;
    }),
    commonjs({
      include: /node_modules/,
      requireReturnsDefault: 'auto' // <---- this solves default issue
    })
    // alias({
    //   resolve: ['.js', '.jsx', '.ts', '.tsx'],
    //   entries: [
    //     { find: '@plugins', replacement: './storefront/src/plugins' },
    //     { find: '@core', replacement: './storefront/src/core' },
    //     { find: '@storefront', replacement: './storefront' }
    //   ]
    // })
  ]
}));

module.exports = configs;
