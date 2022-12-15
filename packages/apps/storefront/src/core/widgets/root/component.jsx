import React from 'react';
import Component, { fetchers as defaultFetchers } from '@oracle-cx-commerce/react-widgets/root/component';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../../../../theme';

/**
 * Root component.
 */
const Root = props => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...props} />
    </ChakraProvider>
  );
};

export const fetchers = [...defaultFetchers];
export default Root;
