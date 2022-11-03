import React from 'react';
import { Button, Text } from '@chakra-ui/react';
import { Stack } from '../Archives';

const ComponentesChakra: React.FC = () => {
  return (
    <Stack flexDir="column">
      <Button variant="ghost">ghost button</Button>
      <Button variant="solid">solid button</Button>
      <Button variant="underline">underline button</Button>
      <Text variant="xs">xs Text</Text>
      <Text variant="sm">sm Text</Text>
      <Text variant="md">md Text</Text>
      <Text variant="lg">lg Text</Text>
      <Text variant="xl">xl Text</Text>
    </Stack>
  );
};

export default ComponentesChakra;
