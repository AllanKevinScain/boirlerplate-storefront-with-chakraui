const typescript = require('rollup-plugin-typescript2');
const { createBuildConfigs } = require('@oracle-cx-commerce/rollup-config');

const configs = createBuildConfigs({
  extraExternals: ['@chakra-ui/react', '@emotion/react', '@emotion/styled', 'framer-motion']
}).map(config => ({
  ...config,
  plugins: config.plugins.map(plugin => {
    if (plugin.name === 'typescript') return typescript();
    return plugin;
  })
}));

module.exports = configs;
