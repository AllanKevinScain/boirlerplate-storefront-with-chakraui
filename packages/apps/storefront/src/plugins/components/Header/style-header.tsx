import React from 'react';
import { Flex } from '@chakra-ui/react';
import { HeaderInterface } from '@plugins/interfaces';
import { CartHeader } from './CartHeader';

export const StyledHeader: React.FC<HeaderInterface> = props => {
  const { headerType = 'cart' } = props;

  return (
    <Flex
      flexDir="row"
      w="full"
      h="20.5"
      align="center"
      justify="center"
      bg="#0046B4"
      shadow="0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)"
    >
      {headerType === 'cart' && <CartHeader {...props} />}
    </Flex>
  );
};
