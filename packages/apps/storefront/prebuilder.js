/* eslint-disable no-template-curly-in-string */
const replace = require('replace-in-file');

replace({
  files: 'node_modules/@oracle-cx-commerce/builder/esbuild/index.js',
  from: /entryPoints: \['src\/client.js'\]/g,
  to: "entryPoints: ['src/client.js']"
});

replace({
  files: 'node_modules/@oracle-cx-commerce/builder/esbuild/plugins/externalize.js',
  from: /external: true/g,
  to: 'external: false'
});

replace({
  files: 'node_modules/@oracle-cx-commerce/react-app/server/middleware/app/local/components.js',
  from: /const resourceContents = readHtml\(resourceFolder\);/g,
  to: match => `${match.slice(0, -1)} || readHtml(path.join(rootLocation, propertyValue, 'index.html'));`
});
