export default {
  components: {
    Button: {
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
    },
    Link: { baseStyle: { _focus: { boxShadow: 'none' } } },
    Text: {
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
        }
      }
    },
    Checkbox: {
      baseStyle: {
        control: {
          borderRadius: 'base'
        }
      }
    }
  }
};
