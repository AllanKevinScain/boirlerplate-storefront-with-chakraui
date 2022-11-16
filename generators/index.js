/*
 ** Copyright (c) 2022 Oracle and/or its affiliates.
 */

/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
const inquirer = require('inquirer');
const { addArchive, updateArchive, updateTypes, updateIndexComponent } = require('./actions');
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
      setLowerCase(plop);
      setKebabler(plop);
      setCamelize(plop);
      if (answers.gerador === 'component')
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
            addArchive('src/plugins/react-components/{{kebabler componentName}}/index.tsx', 'index'),
            addArchive(
              'src/plugins/react-components/{{kebabler componentName}}/{{kebabler componentName}}.stories.tsx',
              'stories'
            ),
            addArchive('src/plugins/types/{{kebabler componentName}}.type.ts', 'type'),
            updateTypes(),
            updateIndexComponent()
          ]
        });

      if (answers.gerador === 'widget')
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
            addArchive('src/plugins/react-widgets/{{kebabler componentName}}/index.tsx', 'index'),
            addArchive('src/plugins/react-widgets/{{kebabler componentName}}/config.js', 'config'),
            addArchive('src/plugins/react-widgets/{{kebabler componentName}}/meta.js', 'meta'),
            addArchive(
              'src/plugins/react-widgets/{{kebabler componentName}}/{{kebabler componentName}}.stories.tsx',
              'stories'
            ),
            addArchive('src/plugins/types/{{kebabler componentName}}.type.ts', 'type'),
            updateTypes(),
            addArchive('assets/components/_{{camelizer componentName}}/index.json', 'indexj'),
            addArchive('assets/components/_{{camelizer componentName}}/config.json', 'configj'),
            updateArchive('index.js', false),
            updateArchive('meta.js', true)
          ]
        });
    });

module.exports = config;
