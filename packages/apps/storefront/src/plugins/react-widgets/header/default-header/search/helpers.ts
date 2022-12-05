import { keyframes } from '@chakra-ui/react';

const EMPTY_MESSAGE = 'Sem sugestões encontradas';
const MIN_MESSAGE = 'Digite no mínimo 3 caracteres';
const LOADING_MESSAGE = 'Carregando resultados...';

const getEmptyMessage = ({ searchTerms, isSearchLoading }: { searchTerms: string; isSearchLoading: boolean }) => {
  if (searchTerms.length < 3) {
    return MIN_MESSAGE;
  }

  if (isSearchLoading) {
    return LOADING_MESSAGE;
  }

  return EMPTY_MESSAGE;
};

const popEffect = (initScale: number) => keyframes`
    0% {
      transform: scale(${initScale});
      opacity:0
    }
    100% {
      transform: scale(1);
      opacity:1
    }
`;

const popAnimation = (index: number, initScale: number) => {
  const delay = index * 100;

  return `${popEffect(initScale)} 0.5s forwards cubic-bezier(0.175, 0.885, 0.32, 1.275) ${`${delay}ms`}`;
};

export { getEmptyMessage, popAnimation };
