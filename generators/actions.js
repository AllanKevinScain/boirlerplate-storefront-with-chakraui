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
    const indexTemplate = `export const {{camelizer widgetName}} = () => import('./{{kebabler widgetName}}');`;
    const metaTemplate = `export { default as {{camelizer widgetName}} } from './{{kebabler widgetName}}/meta';`;

    const path = `../packages/apps/storefront/src/plugins/components/${archiveWillGenrate}`;
    const template = meta ? metaTemplate : indexTemplate;

    return { type: 'append', pattern: '/* Flag para o plop */', path, template };
  }
};
