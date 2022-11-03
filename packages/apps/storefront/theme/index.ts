import { extendTheme } from '@chakra-ui/react';
import { colors, fonts, sizes, styles } from './foundations';
import { Button } from './components/button';
import { Link } from './components/link';
import { Text } from './components/text';
import { Checkbox } from './components/checkbox';
import { Stack } from './components/stack';

export const theme = extendTheme({
  styles,
  colors,
  sizes,
  space: sizes,
  ...fonts,
  components: {
    Button,
    Link,
    Text,
    Checkbox,
    Stack
  }
});
