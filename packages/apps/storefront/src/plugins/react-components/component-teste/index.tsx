import React from 'react';
import { Box } from '@chakra-ui/react';
import { ComponentTesteProps } from '@plugins/types';

const ComponentTeste: React.FC<ComponentTesteProps> = props => {
  const { id = '' } = props;

  return <Box id={id}>Ola mundo</Box>;
};

export default ComponentTeste;
