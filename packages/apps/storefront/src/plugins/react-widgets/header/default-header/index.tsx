import React from 'react';
import { Stack, Text } from '@chakra-ui/react';
import { SvgImage } from '@plugins/react-components';
import { DefaultHeaderProperties } from '@plugins/types';
import { SearchInput } from './search';
import { StackDropdownHeader } from './stack-dropdown-header';

export const DefaultHeader: React.FC<DefaultHeaderProperties> = props => {
  const {
    logoContent,
    logoIsVisible = true,
    onNavigateToFavorites = () => null,
    onNavigateToCart = () => null,
    onNavigateToprofile = () => null,
    cartQuantity = 0,
    currentProfile = { firstName: '' }
  } = props;

  const { internalBannerImage, navigableCollections } = props;

  const Icon: React.FC<{ children: React.ReactNode; onClick: () => void }> = props => {
    return (
      <Stack
        as="button"
        position="relative"
        flexDir="column"
        spacing="0"
        gap="0"
        w="10"
        h="10"
        onClick={() => props.onClick()}
        transition="all 0.3s"
        _hover={{ opacity: 0.7 }}
      >
        {props.children}
      </Stack>
    );
  };

  return (
    <Stack flexDir="column" spacing="0" gap="0" w="full" h="full" align="center">
      <Stack flexDir="row" spacing="0" gap="0" w="full" maxW="max" h="full" align="center">
        <Stack flexDir="row" spacing="0" gap="0" align="center" w="full">
          {/* Logotipo */}
          {logoIsVisible && <SvgImage sizey="11.5" sizex="33" src={logoContent} color="white" />}
          <Stack flexDir="row" spacing="0" gap="0" w="full" pl="16" pr="12">
            <SearchInput {...props} />
          </Stack>
        </Stack>

        {/* Página segura */}
        <Stack flexDir="row" spacing="0" gap="5">
          {/* Icone de usuário */}
          <Icon onClick={() => onNavigateToprofile()}>
            <Stack w="full" h="full" justify="center" align="center">
              <SvgImage sizey="6" sizex="7" src="icon_user.svg" color="white" />
            </Stack>
            <Text
              position="absolute"
              bottom="-3"
              left="-2"
              fontWeight="500"
              variant="xs"
              color="white"
              whiteSpace="nowrap"
            >
              Olá, {currentProfile.firstName}
            </Text>
          </Icon>

          {/* Icone de favoritos */}
          <Icon onClick={() => onNavigateToFavorites()}>
            <Stack w="full" h="full" justify="center" align="center">
              <SvgImage sizey="6" sizex="7" src="icon_heart.svg" color="white" />
            </Stack>
          </Icon>

          {/* Icone do carrinho */}
          <Icon onClick={() => onNavigateToCart()}>
            {cartQuantity && (
              <Stack
                spacing="0"
                gap="0"
                position="absolute"
                w="4.5"
                h="4.5"
                bg="yellow.600"
                rounded="50%"
                align="center"
                justify="center"
                zIndex="1"
                right="0"
                transition="all 0.3s"
                _hover={{ opacity: 0.7 }}
              >
                <Text fontWeight="900" variant="xs">
                  {cartQuantity}
                </Text>
              </Stack>
            )}
            <Stack w="full" h="full" justify="center" align="center">
              <SvgImage sizey="6" sizex="7" src="icon_shoppingcart.svg" color="white" />
            </Stack>
          </Icon>
        </Stack>
      </Stack>
      <StackDropdownHeader internalBannerImage={internalBannerImage} navigableCollections={navigableCollections} />
    </Stack>
  );
};
