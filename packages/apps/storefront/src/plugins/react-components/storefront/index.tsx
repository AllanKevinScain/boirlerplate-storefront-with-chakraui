import '../../../../public/styles/storefront-swiper-style.css';
import React, { useRef } from 'react';
import SwiperCore, { A11y, Mousewheel } from 'swiper';
import { Swiper } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import SwiperClass from 'swiper/types/swiper-class';
import { Flex, Stack } from '@chakra-ui/react';
import { StorefrontInterface } from '@plugins/types';
import { SvgImage } from '@plugins/react-components';
import { generateShadow } from '../../../../theme/shadows';

/* Módulos */
SwiperCore.use([Mousewheel, A11y]);

export const Storefront: React.FC<StorefrontInterface> = props => {
  const {
    children,
    breakpoints = {
      '@0.00': {
        slidesPerView: 4,
        spaceBetween: 20
      }
    },
    looping = false,
    height = '105.5',
    isArrowLeftVisible = true
  } = props;

  /* Ceta de prev e next */
  const ChevronArrow = ({
    onClick,
    positions = [],
    isRotate = false
  }: {
    onClick: () => void;
    positions: Array<number | string>;
    isRotate: boolean;
  }) => {
    return (
      <Flex
        as="button"
        w="10.5"
        h="10.5"
        rounded="50%"
        zIndex={2}
        position="absolute"
        top={positions[0]}
        right={positions[1]}
        bottom={positions[2]}
        left={positions[3]}
        align="center"
        justify="center"
        bg="white"
        opacity={0.7}
        {...generateShadow(0)}
        onClick={() => onClick()}
      >
        <SvgImage
          src="icon_chevron_input.svg"
          sizex="5.5"
          sizey="5.5"
          color="blue.600"
          rotate={isRotate ? 'rotate(1.6rad)' : 'rotate(4.7rad)'}
        />
      </Flex>
    );
  };

  const swiperRef = useRef<SwiperClass>();
  /* Use state para mostrar as cetas */
  const [isLocateSwiper, setIsLocateSwiper] = React.useState({
    isEnd: false,
    isBeginning: false
  });

  return (
    <Stack flexDir="row" spacing="0" gap="0" w="full" maxW="max" h={height} align="center" position="relative">
      {/* seta para o slide anterior/prev */}
      {!isLocateSwiper.isBeginning && isArrowLeftVisible && (
        <ChevronArrow
          isRotate={true}
          positions={['auto', 'auto', 'auto', -15]}
          onClick={() => swiperRef.current?.slidePrev()}
        />
      )}
      {/* Carrossel */}
      <Swiper
        /* Passar o slide com o scroll */
        mousewheel={true}
        /* Passar o slide com o teclado */
        keyboard={true}
        /* Se terá navegação infinita */
        loop={looping}
        /* Função para passar o slide com as setas */
        onSwiper={swiper => {
          setIsLocateSwiper(() => ({ isBeginning: swiper.isBeginning, isEnd: swiper.isEnd }));
          swiperRef.current = swiper;
        }}
        onActiveIndexChange={({ isBeginning, isEnd }) => setIsLocateSwiper(() => ({ isBeginning, isEnd }))}
        /* Estilização e acessibilidade */
        a11y={{
          containerMessage: 'Caixa principal do Carossel',
          containerRoleDescriptionMessage: 'Caixa externa do Carrossel',
          firstSlideMessage: 'Este é o primeiro slide',
          itemRoleDescriptionMessage: 'Slide do Carrossel',
          lastSlideMessage: 'Este é o último slide',
          nextSlideMessage: 'Próximo slide',
          paginationBulletMessage: 'Ir para o slide {{ índice }}',
          prevSlideMessage: 'Slide anterior',
          slideLabelMessage: '{{índice}}/{{comprimento do slide}}',
          slideRole: 'grupo'
        }}
        style={{
          width: '100%',
          height: '100%',
          overflowX: 'clip'
        }}
        breakpoints={breakpoints}
        className="storefront-style"
      >
        {children}
      </Swiper>
      {/* seta para o próximo slide/next */}
      {!isArrowLeftVisible ? (
        <ChevronArrow
          isRotate={false}
          positions={['auto', -15, 'auto', 'auto']}
          onClick={() => swiperRef.current?.slideNext()}
        />
      ) : (
        !isLocateSwiper.isEnd && (
          <ChevronArrow
            isRotate={false}
            positions={['auto', -15, 'auto', 'auto']}
            onClick={() => swiperRef.current?.slideNext()}
          />
        )
      )}
    </Stack>
  );
};
