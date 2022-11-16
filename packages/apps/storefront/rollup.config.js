const typescript = require('rollup-plugin-typescript2');
const { createBuildConfigs } = require('@oracle-cx-commerce/rollup-config');

const configs = createBuildConfigs({
  extraExternals: [
    '@chakra-ui/react',
    '@emotion/react',
    '@emotion/styled',
    'framer-motion',
    'radash',
    'yup',
    'formik',
    'swiper',
    'date-fns',
    'currency.js',
    'increase-memory-limit',
    '@choc-ui/chakra-autocomplete',
    'html-react-parser'
  ]
}).map(config => ({
  ...config,
  plugins: config.plugins.map(plugin => {
    if (plugin.name === 'typescript') return typescript();
    return plugin;
  })
}));

module.exports = configs;
