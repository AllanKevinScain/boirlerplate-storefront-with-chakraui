import { getFontPreloadLinks } from './preload';

export const getBaseStyleTag = () => `
${getFontPreloadLinks().join('\n')}
'<link href="/occ-public/styles/gelion.css" rel="stylesheet">
`;
