import React from 'react';
import { Center, Divider, Heading, Image, Stack } from '@chakra-ui/react';
import { SvgImage } from '@plugins/react-components';
import { CardHeaderProperties } from '@plugins/types';

export const CartHeader: React.FC<CardHeaderProperties> = props => {
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
        {/* Logotipo */}
        {logoIsVisible && <SvgImage sizey="11.5" sizex="33" src={logoContent} color="white" />}
        {/* Divisor do logo e do titulo do header */}
        {logoIsVisible && titleIsVisible && (
          <Center h="11">
            <Divider orientation="vertical" bg="white" />
          </Center>
        )}
        {/* Título do Header */}
        {titleIsVisible && (
          <Heading fontWeight="700" fontSize="2xl" lineHeight="5" color="white">
            {contentTitle}
          </Heading>
        )}
      </Stack>

      {/* Página segura */}
      <Stack flexDir="row" spacing="0" gap="2" minW="22.5">
        {securyImagesIsVisible &&
          securyImagesContent.map((item, index) => (
            <Image key={item || index} height="9" w="auto" src={`file/general/${item}`} />
          ))}
      </Stack>
    </Stack>
  );
};
