import '../../../../public/styles/carousel-swiper-style.css';
import React, { useRef } from 'react';
import SwiperCore, { A11y, Autoplay, Keyboard, Mousewheel, Pagination } from 'swiper';
import { Swiper } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import SwiperClass from 'swiper/types/swiper-class';
import { Flex, Stack } from '@chakra-ui/react';
import { SvgImage } from '@plugins/react-components';
import { CarouselInterface } from '@plugins/types';

/* Módulos */
SwiperCore.use([A11y, Autoplay, Keyboard, Mousewheel, Pagination]);

export const CarouselWidget: React.FC<CarouselInterface> = props => {
  const { children, slideDuration = 2500, effect = 'fade', inLoop = true } = props;

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

  return (
    <Stack flexDir="row" spacing="0" gap="0" w="full" maxW="max" h="97.5" align="center" position="relative">
      {/* seta para o slide anterior/prev */}
      <ChevronArrow
        isRotate={true}
        positions={['auto', 'auto', 'auto', 0]}
        onClick={() => swiperRef.current?.slidePrev()}
      />
      {/* Carrossel */}
      <Swiper
        /* Efeitos */
        effect={effect}
        /* Passar o slide automatico - autoplay */
        autoplay={{
          delay: slideDuration,
          disableOnInteraction: false
        }}
        /* Bolinhas de paginação */
        pagination={{
          clickable: true
        }}
        /* Para ser infinito */
        loop={inLoop}
        /* Passar o slide com o scroll */
        mousewheel={true}
        /* Passar o slide com o teclado */
        keyboard={true}
        /* Função para passar o slide com as setas */
        onSwiper={swiper => (swiperRef.current = swiper)}
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
          width: '100%'
        }}
        className="mySwiper"
      >
        {children}
      </Swiper>
      {/* seta para o próximo slide/next */}
      <ChevronArrow
        isRotate={false}
        positions={['auto', 0, 'auto', 'auto']}
        onClick={() => swiperRef.current?.slideNext()}
      />
    </Stack>
  );
};
