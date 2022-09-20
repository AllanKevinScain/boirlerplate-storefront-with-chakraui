import React from 'react';
import Component, { fetchers as defaultFetchers } from '@oracle-cx-commerce/react-widgets/root/component';
import { ChakraProvider } from '@chakra-ui/react';

/**
 * Root component.
 */
const Root = props => {
  return (
    <ChakraProvider resetCSS>
      <Component {...props} />
    </ChakraProvider>
  );
};

export const fetchers = [...defaultFetchers];
export default Root;
