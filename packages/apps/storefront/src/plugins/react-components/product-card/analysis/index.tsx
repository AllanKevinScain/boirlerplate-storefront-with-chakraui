import React from 'react';
import { Image, Link, Stack, Text } from '@chakra-ui/react';
import { generateShadow } from '@storefront/theme/shadows';
import { ProductProperties } from '@plugins/types';
import { SvgImage } from '@plugins/react-components';

export const AnalysisProduct: React.FC<ProductProperties> = props => {
  const { displayName, id, primaryThumbImageURL, discountable = false, coreProduct = true } = props;

  return (
    <Stack
      flexDir="row"
      gap="4"
      spacing="0"
      w="full"
      height="23"
      rounded="4"
      bg="white"
      px="4"
      py="3.5"
      align="center"
      {...generateShadow(0)}
    >
      {/* ThumbNail */}
      <Image maxW="15.5" objectFit="contain" src={primaryThumbImageURL} />

      <Stack flexDir="column" h="full" gap="0" spacing="0.5" w="full" justify="space-evenly">
        {/* Nome do produto */}
        <Text variant="sm" fontWeight="600" noOfLines={2}>
          {displayName}
        </Text>

        <Stack flexDir="row" gap="4" spacing="0" w="full">
          <Stack flexDir="row" gap="3" spacing="0" align="center">
            {/* Código do produto */}
            <Text fontWeight="500" variant="xs" color="gray.400">
              Cód.: {id}
            </Text>

            {/* Seguro e proteção */}
            {coreProduct && (
              <Stack flexDir="row" gap="1" spacing="0">
                <Text variant="xs" fontWeight="700">
                  Segura Garantia Extendida Original
                </Text>
                <Text variant="xs" fontWeight="500">
                  + 12 meses protegido
                </Text>
                <Link href="pdf/termo_autorizacao_pagamento_premio.pdf" isExternal>
                  <SvgImage color="blue.600" sizey="3.5" sizex="3.5" src="icon_info.svg" />
                </Link>
              </Stack>
            )}
          </Stack>

          {/* Frete Grátis */}
          {discountable && (
            <Stack
              flexDir="row"
              gap="1"
              spacing="0"
              align="center"
              justify="center"
              width="25"
              height="7"
              rounded="base"
              bg="teal.600"
              shadow="0 4px 3px rgb(0 0 0 / 20%)"
            >
              <SvgImage color="white" sizex="3" sizey="3" src="icon_truck.svg" />
              <Text fontWeight="500" variant="2xs" color="white">
                Frete Grátis NE
              </Text>
            </Stack>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};
