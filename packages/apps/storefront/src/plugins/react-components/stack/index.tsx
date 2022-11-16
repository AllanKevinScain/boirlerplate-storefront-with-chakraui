import React from 'react';
import { Stack as ST, StackProps } from '@chakra-ui/react';

export const Stack: React.FC<StackProps> = props => {
  return <ST {...props}>{props.children}</ST>;
};
