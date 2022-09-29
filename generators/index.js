/*
 ** Copyright (c) 2022 Oracle and/or its affiliates.
 */

/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

const { addArchive, updateArchive } = require('./actions');
const { setLowerCase } = require('./helpers');

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
      addArchive('src/plugins/components/{{widgetName}}/index.tsx', 'index'),
      addArchive('src/plugins/components/{{widgetName}}/config.js', 'config'),
      addArchive('src/plugins/components/{{widgetName}}/meta.js', 'meta'),
      addArchive('src/plugins/components/{{widgetName}}/{{stringLowerCase widgetName}}.stories.tsx', 'stories'),
      addArchive('assets/components/_{{widgetName}}/index.json', 'indexj'),
      addArchive('assets/components/_{{widgetName}}/config.json', 'configj'),
      updateArchive('index.js', false),
      updateArchive('meta.js', true)
    ]
  });

  setLowerCase(plop);
};

module.exports = config;
