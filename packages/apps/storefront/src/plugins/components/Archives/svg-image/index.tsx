import React from 'react';
import { Box } from '@chakra-ui/react';
import { SvgImageInterface } from '@plugins/interfaces';

const SvgImage: React.FC<SvgImageInterface> = props => {
  const { color, sizeX, sizeY, src } = props;

  return (
    <Box
      bg={color}
      sx={{
        w: sizeX,
        h: sizeY,
        mask: `url(/general/${src}) no-repeat center/contain`
      }}
    />
  );
};

export default SvgImage;
