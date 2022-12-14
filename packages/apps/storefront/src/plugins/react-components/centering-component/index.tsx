import React from 'react';
import { Flex } from '@chakra-ui/react';
import { CenteringComponentProps } from '@plugins/types';

export const CenteringComponent: React.FC<CenteringComponentProps> = props => {
  const { children } = props;

  return (
    <Flex w="max" flexDir="column" margin="auto" {...props}>
      {children}
    </Flex>
  );
};
