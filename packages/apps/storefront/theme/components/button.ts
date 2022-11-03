import { ComponentStyleConfig } from '@chakra-ui/react';

export const Button: ComponentStyleConfig = {
  baseStyle: {
    _focus: { boxShadow: 'none' },
    _hover: { opacity: '0.8 !important' },
    transition: 'all 0.3s !important'
  },
  variants: {
    ghost: {
      bg: 'gray.200',
      color: 'blackAlpha.800',
      _hover: { opacity: '0.8 !important', bg: 'gray.100' },
      transition: 'all 0.3s !important'
    },
    solid: {
      bg: 'teal.600',
      color: 'blackAlpha.800',
      _hover: { opacity: '0.8 !important', bg: 'teal.400' },
      transition: 'all 0.3s !important'
    },
    underline: {
      bg: 'transparent',
      border: 'solid 2px',
      borderColor: 'teal.600',
      _hover: { opacity: '0.8 !important' },
      transition: 'all 0.3s !important'
    }
  }
};
