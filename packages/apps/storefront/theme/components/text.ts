import { ComponentStyleConfig } from '@chakra-ui/react';

export const Text: ComponentStyleConfig = {
  baseStyle: {
    color: 'blackAlpha.800',
    fontWeight: '400'
  },
  variants: {
    xs: {
      fontSize: 'xs',
      lineHeight: '4'
    },
    sm: {
      fontSize: 'sm',
      lineHeight: '5'
    },
    md: {
      fontSize: 'md',
      lineHeight: '5'
    },
    lg: {
      fontSize: 'lg',
      lineHeight: '5'
    },
    xl: {
      fontSize: 'xl',
      lineHeight: '5'
    },
    '2xl': {
      fontSize: '2xl',
      lineHeight: '8'
    },
    '2xs': {
      fontSize: '2xs',
      lineHeight: '3'
    }
  }
};
