/*
 ** Copyright (c) 2020 Oracle and/or its affiliates.
 */

module.exports = {
  extends: '@oracle-cx-commerce/babel-config',
  plugins: [
    'dynamic-import-node',
    [
      'module-resolver',
      {
        alias: {
          '@core': 'storefront/src/core',
          '@plugins': 'storefront/src/plugins',
          '@storefront': 'storefront'
        }
      }
    ]
  ]
};
