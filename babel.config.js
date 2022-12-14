/*
 ** Copyright (c) 2020 Oracle and/or its affiliates.
 */

/* eslint-env node */
module.exports = {
  extends: '@oracle-cx-commerce/babel-config',
  plugins: [
    /*
      Esses três plugins arrumam este war
      ["@babel/plugin-proposal-private-property-in-object", { "loose": false }]
      to the "plugins" section of your Babel config.
    */
    // ['@babel/plugin-proposal-class-properties', { loose: false }],
    // ['@babel/plugin-proposal-private-methods', { loose: false }],
    // ['@babel/plugin-proposal-private-property-in-object', { loose: false }],
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
  ],
  compact: false
};
