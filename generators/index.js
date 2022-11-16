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
            addArchive('src/plugins/react-widgets/{{kebabler widgetName}}/index.tsx', 'index'),
            addArchive('src/plugins/react-widgets/{{kebabler widgetName}}/config.js', 'config'),
            addArchive('src/plugins/react-widgets/{{kebabler widgetName}}/meta.js', 'meta'),
            addArchive(
              'src/plugins/react-widgets/{{kebabler widgetName}}/{{kebabler widgetName}}.stories.tsx',
              'stories'
            ),
            addArchive('src/plugins/types/{{kebabler widgetName}}.type.ts', 'type'),
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
            addArchive('src/plugins/react-components/{{kebabler widgetName}}/index.tsx', 'index'),
            addArchive(
              'src/plugins/react-components/{{kebabler widgetName}}/{{kebabler widgetName}}.stories.tsx',
              'stories'
            )
          ]
        });

      setLowerCase(plop);
      setKebabler(plop);
      setCamelize(plop);
    });

module.exports = config;
