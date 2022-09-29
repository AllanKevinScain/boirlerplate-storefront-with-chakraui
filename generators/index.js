/*
 ** Copyright (c) 2022 Oracle and/or its affiliates.
 */

/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
const inquirer = require('inquirer');
const { addArchive, updateArchive } = require('./actions');
const { setLowerCase, setCamelize, setKebabler } = require('./helpers');

const config = plop =>
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Esolha uma das aleternativas:',
        name: 'gerador',
        choices: ['widget', 'component']
      }
    ])
    .then(answers => {
      if (answers.gerador === 'widget')
        plop.setGenerator('post', {
          description: 'Gerar um widget',
          prompts: [
            {
              type: 'input',
              name: 'widgetName',
              message: 'Nome do seu widget:'
            }
          ],
          actions: [
            addArchive('src/plugins/components/{{kebabler widgetName}}/index.tsx', 'index'),
            addArchive('src/plugins/components/{{kebabler widgetName}}/config.js', 'config'),
            addArchive('src/plugins/components/{{kebabler widgetName}}/meta.js', 'meta'),
            addArchive('src/plugins/components/{{kebabler widgetName}}/index.stories.tsx', 'stories'),
            addArchive('assets/components/_{{camelizer widgetName}}/index.json', 'indexj'),
            addArchive('assets/components/_{{camelizer widgetName}}/config.json', 'configj'),
            updateArchive('index.js', false),
            updateArchive('meta.js', true)
          ]
        });

      if (answers.gerador === 'component')
        plop.setGenerator('post', {
          description: 'Gerar um component',
          prompts: [
            {
              type: 'input',
              name: 'componentName',
              message: 'Nome do seu component:'
            }
          ],
          actions: [
            addArchive('src/plugins/components/Archives/{{kebabler widgetName}}/index.tsx', 'index'),
            addArchive('src/plugins/components/Archives/{{kebabler widgetName}}/index.stories.tsx', 'stories')
          ]
        });

      setLowerCase(plop);
      setKebabler(plop);
      setCamelize(plop);
    });

module.exports = config;
