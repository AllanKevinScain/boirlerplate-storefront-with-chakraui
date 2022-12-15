import commonjs from '@rollup/plugin-commonjs';
const typescript = require('rollup-plugin-typescript2');
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
    'babel-plugin-module-resolver',
    '@types/react'
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
  ]
}));

module.exports = configs;
