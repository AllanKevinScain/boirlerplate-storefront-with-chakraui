import React, { useState } from 'react';
import { IconButton, Stack, Text } from '@chakra-ui/react';
import { ButtonAddInterface } from '@plugins/types';
import { SvgImage } from '@plugins/react-components';

export const ButtonAdd: React.FC<ButtonAddInterface> = props => {
  const { cartQuantity } = props;
  const borderStyles = {
    borderStyle: 'solid',
    borderWidth: '0.063rem',
    borderColor: 'gray.200'
  };

  /* Esse state vai ser mudado ainda, pois as funções da oracle são em promise */
  const [state, setState] = useState<number>(cartQuantity);

  return (
    <Stack
      flexDir="row"
      gap="0"
      spacing="0"
      bg="white"
      width="27.5"
      height="10"
      rounded="md"
      px="2"
      justify="space-between"
      align="center"
      {...borderStyles}
    >
      {/* Icone da esquerda, ou a lixeira */}
      <IconButton
        p="0"
        rounded="0"
        variant="link"
        minW="auto"
        h="auto"
        aria-label="Diminuir item"
        disabled={false || state < 1}
        icon={
          <SvgImage src={state === 1 ? 'icon_trash.svg' : 'icon_minus.svg'} color="teal.600" sizey="3.5" sizex="3.5" />
        }
        onClick={() => setState(state => state - 1)}
      />
      {/* Número/contagem dos itens */}
      <Text fontWeight="900" variant="xl" textAlign="center">
        {state}
      </Text>
      {/* Icone da direira */}
      <IconButton
        p="0"
        minW="auto"
        rounded="0"
        h="auto"
        variant="link"
        aria-label="Adicionar item"
        disabled={false}
        icon={<SvgImage src="icon_plus.svg" color="teal.600" sizey="3.5" sizex="3.5" />}
        onClick={() => setState(state => state + 1)}
      />
    </Stack>
  );
};
