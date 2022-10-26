import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

const ComponentesChakra: React.FC = () => {
  return (
    <Box>
      <Button variant="ghost">ghost button</Button>
      <Button variant="solid">solid button</Button>
      <Button variant="underline">underline button</Button>
      <Text variant="xs">xs Text</Text>
      <Text variant="sm">sm Text</Text>
      <Text variant="md">md Text</Text>
      <Text variant="lg">lg Text</Text>
      <Text variant="xl">xl Text</Text>
    </Box>
  );
};

export default ComponentesChakra;
