import React from 'react';
import {
  Box,
  Box as GridNagem,
  Button,
  Divider,
  Image,
  Link,
  Stack as ContainerBackDrop,
  Stack as ContainerToPositionContainerWhite,
  Stack as ContainerWhite,
  Stack
} from '@chakra-ui/react';
import { StackDropdownHeaderInterface } from '@plugins/types';
import { DropdownMenuItem } from './dropdown-menu-item';

export const StackDropdownHeader: React.FC<StackDropdownHeaderInterface> = props => {
  const { internalBannerImage = '', navigableCollections = [] } = props;

  const [category, setCategory] = React.useState<{
    index: number;
    childCategorie: { displayName: string; route: string }[];
  }>({
    index: 0,
    childCategorie: []
  });

  const [ismenuOpen, setMenuOpen] = React.useState<boolean>(false);
  const [itemSelectedBorder, setItemSelectedBorder] = React.useState<string>('');

  const positionWhiteBox = category.index < navigableCollections.length / 2 ? { left: '0' } : { right: '0' };

  return (
    <Stack flexDir="row" spacing="0" gap="0" bg="blue.1000" w="full" minH="11" justify="center" position="relative">
      <Stack flexDir="row" spacing="0" gap="6" w="full" maxW="max" align="center" position="relative">
        <Stack
          flexDir="row"
          spacing="0"
          gap="0"
          w="full"
          justify="space-between"
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
          zIndex="4"
        >
          {navigableCollections.map((item, index) => (
            <DropdownMenuItem
              key={item.displayName || index}
              {...item}
              isBorderBottom={item.displayName === itemSelectedBorder && ismenuOpen}
              onMouseHover={() => {
                setItemSelectedBorder(item.displayName);
                setCategory(() => ({ index, childCategorie: item.childCollections }));
              }}
            />
          ))}
          {ismenuOpen && (
            <ContainerToPositionContainerWhite
              flexDir="row"
              w="58.625rem"
              position="absolute"
              bg="red"
              h="107.5"
              top="10"
              {...positionWhiteBox}
            >
              <ContainerWhite
                flexDir="row"
                spacing="0"
                gap="0"
                w="full"
                h="107.5"
                bg="white"
                borderBottomWidth="0.938rem"
                borderBottomColor="teal.600"
                py="7.5"
              >
                {/* Grid */}
                <GridNagem
                  display="grid"
                  gridTemplateColumns="1fr 1fr"
                  gridTemplateRows="repeat(9, 1fr)"
                  gridAutoFlow="column"
                  w="full"
                  maxW="132.5"
                >
                  {category.childCategorie.map(({ displayName, route }, index) => (
                    <Box key={displayName || index} pl="9">
                      <Link
                        href={route}
                        fontWeight="400"
                        fontSize="md"
                        color="gray.600"
                        _hover={{ color: 'blue.600', fontWeight: '600' }}
                      >
                        {displayName}
                      </Link>
                    </Box>
                  ))}
                  <Divider h="104" orientation="vertical" bg="black" position="absolute" justifySelf="center" top="0" />
                </GridNagem>

                <Stack flexDir="row" spacing="0" gap="0" w="full" align="center" justify="center">
                  <Image src={`file/general/${internalBannerImage}`} h="76.5" />
                </Stack>
              </ContainerWhite>
            </ContainerToPositionContainerWhite>
          )}
        </Stack>
        <Button w="36.5" h="7.5" bg="teal.600" fontWeight="600" fontSize="sm" lineHeight="5">
          Busca de Cartuchos
        </Button>
      </Stack>

      {ismenuOpen && (
        <ContainerBackDrop
          flexDir="row"
          position="absolute"
          w="full"
          h="100vh"
          bg="RGBA(0,0,0,0.54)"
          left="0"
          top="10"
          justify="center"
          zIndex="3"
        />
      )}
    </Stack>
  );
};
