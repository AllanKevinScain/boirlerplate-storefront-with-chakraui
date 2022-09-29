/*
 ** Copyright (c) 2022 Oracle and/or its affiliates.
 */
/* eslint-disable no-undef */
const config = plop => {
  plop.setGenerator('post', {
    description: 'Gerador de codigos',
    prompts: [
      {
        type: 'input',
        name: 'widgetName',
        message: 'Qual é o nome do seu widget?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../packages/apps/storefront/src/plugins/components/{{widgetName}}/index.tsx',
        templateFile: './templates/index.hbs'
      },
      {
        type: 'add',
        path: '../packages/apps/storefront/src/plugins/components/{{widgetName}}/config.js',
        templateFile: './templates/config.hbs'
      },
      {
        type: 'add',
        path: '../packages/apps/storefront/src/plugins/components/{{widgetName}}/meta.js',
        templateFile: './templates/meta.hbs'
      },
      {
        type: 'add',
        path: '../packages/apps/storefront/assets/components/_{{widgetName}}/index.json',
        templateFile: './templates/indexj.hbs'
      },
      {
        type: 'add',
        path: '../packages/apps/storefront/assets/components/_{{widgetName}}/config.json',
        templateFile: './templates/configj.hbs'
      },
      {
        type: 'append',
        path: '../packages/apps/storefront/src/plugins/components/index.js',
        separator: '\n',
        pattern: `/* Flag para o plop */`,
        template: `export const {{widgetName}} = () => import('./{{widgetName}}');`
      },
      {
        type: 'append',
        path: '../packages/apps/storefront/src/plugins/components/meta.js',
        separator: '\n',
        pattern: `/* Flag para o plop */`,
        template: `export { default as {{widgetName}} } from './{{widgetName}}/meta';`
      }
    ]
  });
};

module.exports = config;
