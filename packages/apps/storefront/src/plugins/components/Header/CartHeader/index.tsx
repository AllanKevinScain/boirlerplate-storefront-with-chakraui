import React from 'react';
import { Center, Divider, Heading, Image, Stack } from '@chakra-ui/react';
import { HeaderProperties } from '@plugins/interfaces';
import { SvgImage } from '../../Archives';

export const CartHeader: React.FC<HeaderProperties> = props => {
  const {
    logoContent,
    logoIsVisible = true,
    contentTitle,
    securyImagesContent = [],
    securyImagesIsVisible = true,
    titleIsVisible = true
  } = props;

  return (
    <Stack flexDir="row" spacing="0" gap="0" w="full" maxW="max" h="full" align="center" justify="space-between">
      <Stack flexDir="row" spacing="0" gap="8.5" align="center" minW="33">
        {logoIsVisible && <SvgImage sizeY="11.5" sizeX="33" src={logoContent} color="white" />}
        {logoIsVisible && titleIsVisible && (
          <Center h="11">
            <Divider orientation="vertical" bg="white" />
          </Center>
        )}
        {titleIsVisible && (
          <Heading fontWeight="700" fontSize="2xl" lineHeight="5" color="white">
            {contentTitle}
          </Heading>
        )}
      </Stack>

      <Stack flexDir="row" spacing="0" gap="2" minW="22.5">
        {securyImagesIsVisible &&
          securyImagesContent.map((item, index) => (
            <Image key={item || index} height="9" w="auto" src={`./general/${item}`} />
          ))}
      </Stack>
    </Stack>
  );
};
