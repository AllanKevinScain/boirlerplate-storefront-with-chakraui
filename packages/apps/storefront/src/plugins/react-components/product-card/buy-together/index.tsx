import React from 'react';
import { Image, Link, Stack, Text } from '@chakra-ui/react';
import { ProductProperties } from '@plugins/types';
import { toCurrency, truncate } from '@plugins/helpers';
import { generateShadow } from '../../../../../theme/shadows';

export const BuyTogetherProduct: React.FC<ProductProperties> = props => {
  const { displayName, id, salePrice, listPrice = 0, primaryFullImageURL } = props;

  return (
    <Stack
      spacing="0"
      gap="0"
      id={id}
      flexDir="column"
      bgColor="white"
      maxW="73"
      maxH="85"
      minW="73"
      minH="85"
      p="5"
      borderRadius="0.25rem"
      {...generateShadow(0)}
    >
      <Image h="50" objectFit="contain" src={primaryFullImageURL} />
      <Link fontSize="md" fontWeight="600">
        {truncate({ content: displayName, capit: 52 })}
      </Link>
      <Stack pt="3" flexDir="column" gap="0" spacing="0">
        <Text as="s" variant="sm" color="gray.1000">
          de {toCurrency(listPrice).format()}
        </Text>
        <Text as="p" fontSize="sm">
          <Text as="span" color="blue.600" fontWeight="700" variant="2xl">
            {toCurrency(salePrice).format()}
          </Text>
          &nbsp; à vista
        </Text>
      </Stack>
    </Stack>
  );
};
