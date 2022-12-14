import React from 'react';
import { motion } from 'framer-motion';
import { Image, ImageProps, Link } from '@chakra-ui/react';
import { BannerInterface } from '@plugins/types';

const MotionImage = motion<Omit<ImageProps, 'transition'>>(Image);

export const BannerWidget: React.FC<BannerInterface> = props => {
  const { height, imageBanner, width, url = '/', hasAnimation = true } = props;

  return (
    <Link isExternal href={url} textDecoration="none">
      {hasAnimation ? (
        <MotionImage
          src={`file/general/${imageBanner.src}`}
          h={height}
          w={width}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
      ) : (
        <Image src={`file/general/${imageBanner.src}`} h={height} w={width} />
      )}
    </Link>
  );
};
