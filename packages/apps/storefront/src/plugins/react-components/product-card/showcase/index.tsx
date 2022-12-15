import React from 'react';
import { chakra, IconButton, Image, Link, Stack, Tag, Text } from '@chakra-ui/react';
import { SvgImage } from '@plugins/react-components';
import { toCurrency, truncate } from '@plugins/helpers';
import { ProductProperties } from '@plugins/types';
import { generateShadow } from '../../../../../theme/shadows';

export const ShowcaseProduct: React.FC<ProductProperties> = props => {
  const {
    displayName,
    salePrice,
    primaryFullImageURL,
    percentageOff = 0,
    listPrice = 0,
    route = '/',
    isLaunch = false,
    hasFavorite = false
  } = props;

  const [isFavorite, setIsFavorite] = React.useState(hasFavorite);

  const handleFavoriteProduct = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsFavorite(state => !state);
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <Link href={route} onClick={() => console.log('teste')} _hover={{}}>
      <Stack
        flexDir="column"
        gap="0"
        spacing="0"
        w="73"
        h="105.5"
        maxW="73"
        height="105"
        rounded="4"
        bg="white"
        pb="4.5"
        px="6"
        position="relative"
        {...generateShadow(0)}
      >
        <IconButton
          bg={isFavorite ? 'blue.600' : 'transparent'}
          aria-label="Favoritar o produto"
          minW="8"
          h="8"
          rounded="50%"
          icon={<SvgImage sizey="5.5" sizex="5.5" src="icon_heart.svg" color={isFavorite ? 'white' : 'gray.200'} />}
          p="0"
          m="0"
          transition="all 0.3s"
          position="absolute"
          right="3"
          top="3"
          onClick={e => handleFavoriteProduct(e)}
          {...generateShadow(3)}
          _hover={{ opacity: 0.7 }}
          _active={{}}
        />

        {isLaunch && (
          <Tag
            minH="7"
            size="md"
            variant="solid"
            colorScheme="purple"
            rounded="1.438rem"
            alignSelf="center"
            position="relative"
            top="-3"
            height="7"
            minW="29"
          >
            <SvgImage color="white" sizex="2.5" sizey="8" src="icon_min_lightning.svg" />
            <Text fontWeight="600" variant="sm" color="white" ml="2">
              Lançamento
            </Text>
          </Tag>
        )}

        <Stack flexDir="row" spacing="0" gap="0" justify="center" pt={isLaunch ? '' : '6'} pb="6">
          <Image src={primaryFullImageURL} h="42" />
        </Stack>

        <Stack flexDir="row" spacing="0" gap="0">
          <Tag h="7" variant="solid" colorScheme="teal" borderRadius="20" margin="auto auto auto 0" minW="35.5">
            <SvgImage color="white" sizex="5" sizey="8" src="icon_truck.svg" />
            <Text fontWeight="600" variant="sm" color="white" ml="2">
              Frete Grátis NE
            </Text>
          </Tag>
          <Tag h="7" variant="solid" colorScheme="orange" borderRadius="20" margin="auto 0 auto auto" minW="17.5">
            <SvgImage color="white" sizex="2.5" sizey="8" src="icon_long_arrow_down.svg" />
            <Text fontWeight="900" variant="sm" color="white" ml="2">
              - {percentageOff}%
            </Text>
          </Tag>
        </Stack>

        <Stack flexDir="column" spacing="0" gap="0">
          <Text fontWeight="500" variant="md" mt="1" h="10">
            {truncate({ content: displayName, capit: 52 })}
          </Text>
          <Stack flexDir="row" spacing="0" py="1" gap="1.5" align="center">
            {new Array(5).fill(null).map((_, index) => {
              const bg = index < 4 ? 'orange.300' : 'gray.300';
              const key = bg + index;

              return <SvgImage key={key} color={bg} sizex="3.5" sizey="3.5" src="icon_mini_start.svg" />;
            })}
            <Text fontWeight="300" variant="sm" color="gray.400" pl="1" pt="1">
              ( 12 )
            </Text>
          </Stack>

          <Text fontWeight="500" variant="sm" color="blackAlpha.600" textDecoration="line-through" h="5">
            {salePrice && `de ${toCurrency(listPrice).format()}`}
          </Text>
          <Text fontWeight="700" variant="2xl" color="blue.600">
            {toCurrency(salePrice ? salePrice : listPrice).format()}
          </Text>
          <Text fontWeight="400" variant="sm" color="blackAlpha.500">
            ou em até <chakra.span fontWeight="700">10x</chakra.span> de&nbsp;
            <chakra.span fontWeight="700">R$ 219,00</chakra.span> s/juros
          </Text>
        </Stack>
      </Stack>
    </Link>
  );
};
