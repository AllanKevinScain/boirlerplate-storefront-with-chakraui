/*
 ** Copyright (c) 2022 Oracle and/or its affiliates.
 */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */

module.exports = {
  addArchive: (archiveWillGenrate, templateArchive) => {
    const path = `../packages/apps/storefront/${archiveWillGenrate}`;
    const templateFile = `./templates/${templateArchive}.hbs`;

    return { type: 'add', path, templateFile };
  },
  updateArchive: (archiveWillGenrate, meta) => {
    const indexTemplate = `export const _{{camelizer componentName}} = () => import('./{{kebabler componentName}}');`;
    const metaTemplate = `export { default as _{{camelizer componentName}} } from './{{kebabler componentName}}/meta';`;

    const path = `../packages/apps/storefront/src/plugins/react-widgets/${archiveWillGenrate}`;
    const template = meta ? metaTemplate : indexTemplate;

    return { type: 'append', pattern: '/* Flag para o plop */', path, template };
  },
  updateTypes: () => {
    return {
      type: 'append',
      pattern: '/* Flag para o plop */',
      path: `../packages/apps/storefront/src/plugins/types/index.ts`,
      template: `export * from './{{kebabler componentName}}.type';`
    };
  },
  updateIndexComponent: () => {
    return {
      type: 'append',
      pattern: '/* Flag para o plop */',
      path: `../packages/apps/storefront/src/plugins/react-components/index.ts`,
      template: `export * from './{{kebabler componentName}}';`
    };
  }
};
