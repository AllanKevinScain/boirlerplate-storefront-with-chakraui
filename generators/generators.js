/*
 ** Copyright (c) 2022 Oracle and/or its affiliates.
 */

/* eslint-disable prettier/prettier */
/*
 ** Copyright (c) 2022 Oracle and/or its affiliates.
 */

/* eslint-disable no-unused-vars */
/*
 ** Copyright (c) 2022 Oracle and/or its affiliates.
 */
/* eslint-disable no-undef */

const { addArchive, updateArchive, updateTypes, updateIndexComponent } = require('./actions');

module.exports = {
  setGenerateWidget: plop =>
    plop.setGenerator('post', {
      description: 'Gerar um widget',
      prompts: [
        {
          type: 'input',
          name: 'componentName',
          message: 'Nome do seu widget:'
        }
      ],
      actions: [
        addArchive(
          'src/plugins/react-widgets/{{kebabler componentName}}/{{kebabler componentName}}.tsx',
          'widget-false-index'
        ),
        addArchive('src/plugins/react-widgets/{{kebabler componentName}}/index.tsx', 'widget-index'),
        addArchive('src/plugins/react-widgets/{{kebabler componentName}}/config.js', 'widget-config'),
        addArchive('src/plugins/react-widgets/{{kebabler componentName}}/meta.js', 'widget-meta'),
        addArchive('src/plugins/types/{{kebabler componentName}}.type.ts', 'archive-type'),
        updateTypes(),
        addArchive(
          'src/plugins/react-widgets/{{kebabler componentName}}/{{kebabler componentName}}.stories.tsx',
          'widget-stories'
        ),
        addArchive('assets/components/_{{camelizer componentName}}/index.json', 'asset-index'),
        addArchive('assets/components/_{{camelizer componentName}}/config.json', 'asset-config'),
        updateArchive('index.js', false),
        updateArchive('meta.js', true)
      ]
    }),
  setGenerateComponent: plop =>
    plop.setGenerator('post', {
      description: 'Gerar um componente',
      prompts: [
        {
          type: 'input',
          name: 'componentName',
          message: 'Nome do seu componente:'
        }
      ],
      actions: [
        addArchive('src/plugins/react-components/{{kebabler componentName}}/index.tsx', 'component-index'),
        addArchive(
          'src/plugins/react-components/{{kebabler componentName}}/{{kebabler componentName}}.stories.tsx',
          'component-stories'
        ),
        addArchive('src/plugins/types/{{kebabler componentName}}.type.ts', 'archive-type'),
        updateTypes(),
        updateIndexComponent()
      ]
    })
};
