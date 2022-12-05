import React from 'react';
import { Button } from '@chakra-ui/react';
import { SvgImage } from '@plugins/react-components';
import { DropdownMenuItemInterface } from '@plugins/types';

export const DropdownMenuItem: React.FC<
  DropdownMenuItemInterface & { onMouseHover: () => void; isBorderBottom: boolean }
> = props => {
  const { displayName = '', onMouseHover = () => null, isBorderBottom } = props;

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const styleRotateChevronIcon = isOpen
    ? {
        animate: {
          scale: [1, 1],
          rotate: [0, 180],
          borderRadius: ['0%', '50%']
        },
        transition: {
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.1],
          repeatDelay: 1
        },
        borderBottom: 'solid 2px orange'
      }
    : undefined;

  return (
    <Button
      bg="transparent"
      fontWeight="600"
      fontSize="sm"
      lineHeight="5"
      color="white"
      onMouseEnter={() => {
        onMouseHover();
        setIsOpen(true);
      }}
      onMouseLeave={() => setIsOpen(false)}
      rightIcon={
        <SvgImage src="icon_chevron_input.svg" color="teal.600" sizex="3" sizey="3" {...styleRotateChevronIcon} />
      }
      rounded="0"
      px="1"
      borderBottomWidth={isBorderBottom ? '0.375rem' : '0'}
      borderBottomColor={'teal.600'}
      _hover={{}}
      _active={{}}
    >
      {displayName}
    </Button>
  );
};
