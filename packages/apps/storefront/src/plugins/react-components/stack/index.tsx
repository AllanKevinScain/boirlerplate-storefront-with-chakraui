import React from 'react';
import { Stack as ST, StackProps } from '@chakra-ui/react';

export const Stack: React.FC<StackProps> = props => {
  return (
    <ST spacing="0" gap="0" {...props}>
      {props.children}
    </ST>
  );
};
