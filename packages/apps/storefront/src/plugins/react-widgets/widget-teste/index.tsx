import React from 'react';
import { Box } from '@chakra-ui/react';
import { WidgetTesteProps } from '@plugins/types';

const WidgetTeste: React.FC<WidgetTesteProps> = props => {
  const { id = '' } = props;

  return <Box id={id}>Ola mundo</Box>;
};

export default WidgetTeste;
