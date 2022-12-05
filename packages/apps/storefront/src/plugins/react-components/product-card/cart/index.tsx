import React from 'react';
import { Checkbox, Flex, Image, Link, Stack, Text } from '@chakra-ui/react';
import { generateShadow } from '@storefront/theme/shadows';
import { toCurrency } from '@plugins/helpers';
import { ProductProperties } from '@plugins/types';
import { ButtonAdd, SvgImage } from '@plugins/react-components';

export const CartProduct: React.FC<ProductProperties> = props => {
  const {
    displayName,
    id,
    primaryThumbImageURL,
    salePrice,
    cartQuantity,
    discountable = false,
    coreProduct = true
  } = props;

  /* Boolean que decide se o usuário irá fazer ou não o seguro, para integrar precisa levar este boolean para a segunda camada */
  const [securityCheck, setSecurityCheck] = React.useState<boolean>(false);

  return (
    <Stack
      flexDir="row"
      gap="4"
      spacing="0"
      w="full"
      height="30"
      rounded="4"
      bg="white"
      px="4"
      align="center"
      {...generateShadow(0)}
    >
      {/* ThumbNail */}
      <Image maxW="15.5" objectFit="contain" src={primaryThumbImageURL} />

      {/* Principais informações, nome cod, preços */}
      <Stack flexDir="column" gap="0" spacing="2" w="full">
        <Stack flexDir="row" gap="4.5" spacing="0" w="full">
          {/* Nome e código */}
          <Stack flexDir="column" gap="0" spacing="3" w="full">
            <Text variant="sm" fontWeight="600" noOfLines={2}>
              {displayName}
            </Text>
            <Text variant="xs" fontWeight="500" color="gray.400">
              Cód.: {id}
            </Text>
          </Stack>

          {/* Valores */}
          <Stack flexDir="row" gap="0" spacing="0" w="full" align="center" justify="space-around" pt="2">
            <ButtonAdd cartQuantity={cartQuantity} />

            <Stack flexDir="column" gap="0" spacing="0" align="center" justify="space-around">
              <Text variant="lg" fontWeight="thin">
                {toCurrency(salePrice).format()}
              </Text>

              {securityCheck && (
                <Text variant="lg" fontWeight="thin">
                  {`+${toCurrency(10).format()}`}
                </Text>
              )}
            </Stack>
            <Text variant="lg" fontWeight="700">
              {toCurrency(cartQuantity * salePrice).format()}
            </Text>
          </Stack>
        </Stack>

        {/* Informações adicionais do produto */}
        <Stack flexDir="row" gap="3" spacing="0" w="full">
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
              <Text variant="xs" fontWeight="500" color="white">
                Frete Grátis NE
              </Text>
            </Stack>
          )}

          {/* Garantia */}
          {coreProduct && (
            <Flex flexDir="row" align="center" gap="1">
              {/* check */}
              <Checkbox
                colorScheme="teal"
                width="3.5"
                height="3.5"
                rounded="base"
                onChange={e => setSecurityCheck(e.target.checked)}
                _hover={{}}
              />

              {/* Seguro e proteção */}
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
            </Flex>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};
