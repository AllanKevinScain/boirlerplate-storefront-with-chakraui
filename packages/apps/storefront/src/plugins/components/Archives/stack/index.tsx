import React from 'react';
import { Stack as StackChakra, StackProps } from '@chakra-ui/react';

export const Stack: React.FC<StackProps> = props => {
  return (
    <StackChakra spacing="0" gap="0" {...props}>
      {props.children}
    </StackChakra>
  );
};
