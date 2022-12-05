import React from 'react';
import { motion } from 'framer-motion';
import { Box, BoxProps } from '@chakra-ui/react';
import { SvgImageInterface } from '@plugins/types';

const MotionBox = motion<Omit<BoxProps, 'transition'>>(Box);

/* Esse é um componenete que subtitui o IMAGE */
export const SvgImage: React.FC<SvgImageInterface> = props => {
  const { color, sizex, sizey, src, rotate } = props;

  return (
    <MotionBox
      {...props}
      bg={color}
      transform={rotate}
      sx={{
        w: sizex,
        h: sizey,
        mask: `url(file/general/${src}) no-repeat center/contain`
      }}
    />
  );
};
