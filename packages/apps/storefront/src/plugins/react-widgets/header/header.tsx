import React from 'react';
import { Flex } from '@chakra-ui/react';
import { HeaderInterface } from '@plugins/types';
import { CartHeader } from './cart-header';
import { DefaultHeader } from './default-header';

export const HeaderWidget: React.FC<HeaderInterface> = props => {
  const { headerType = 'cart' } = props;

  return (
    <Flex flexDir="row" w="full" h={headerType === 'default' ? '30.5' : '20.5'} bg="blue.600" justify="center">
      {headerType === 'cart' && <CartHeader {...props} />}
      {headerType === 'default' && <DefaultHeader {...props} />}
    </Flex>
  );
};
