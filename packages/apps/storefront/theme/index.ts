import { extendTheme } from '@chakra-ui/react';
import colors from './colors';
import fonts from './fonts';
import sizes from './sizes';
import components from './components';

export const theme = extendTheme({
  styles: {
    global: {
      '*[data-focus]': {
        boxShadow: 'none !important'
      }
    }
  },
  colors,
  sizes,
  space: sizes,
  ...components,
  ...fonts
});
