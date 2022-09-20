/*
 ** Copyright (c) 2020 Oracle and/or its affiliates.
 */
import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

interface HelloWorldProps {
  message: string;
}

const HelloWorld: React.FC<HelloWorldProps> = props => {
  return (
    <Box bg="red" h="100vh">
      <Flex>Teste</Flex>
      <h1 className="text-3xl font-bold underline bg-yellow-100 text-red-500">{props.message}</h1>
    </Box>
  );
};

export default HelloWorld;
