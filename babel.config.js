/*
 ** Copyright (c) 2020 Oracle and/or its affiliates.
 */

/* eslint-env node */
module.exports = {
  extends: '@oracle-cx-commerce/babel-config',
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    ['@babel/plugin-proposal-private-methods', { loose: false }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: false }],
    [
      'module-resolver',
      {
        alias: {
          '@core': 'storefront/src/core',
          '@plugins': 'storefront/src/plugins'
        }
      }
    ]
  ]
};
