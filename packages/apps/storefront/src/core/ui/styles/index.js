import { getFontPreloadLinks } from './preload';

export const getBaseStyleTag = () => `
${getFontPreloadLinks().join('\n')}
<link href="/occ-public/styles/gelion.css" rel="stylesheet">
<link href="/occ-public/styles/carousel-swiper-style.css" rel="stylesheet">
<link href="/occ-public/styles/storefront-swiper-style.css" rel="stylesheet">
<link href="/occ-public/styles/swiper.css" rel="stylesheet">
`;
