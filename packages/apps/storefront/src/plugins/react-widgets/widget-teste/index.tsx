import React from 'react';
import { Box } from '@chakra-ui/react';
import { Stack } from '@plugins/react-components';
import { WidgetTesteProps } from '@plugins/types';

const WidgetTeste: React.FC<WidgetTesteProps> = props => {
  const { id = '' } = props;

  return (
    <Stack>
      <Box id={id}>Ola mundo</Box>
      <Box id={id}>Ola mundo</Box>
    </Stack>
  );
};

export default WidgetTeste;
