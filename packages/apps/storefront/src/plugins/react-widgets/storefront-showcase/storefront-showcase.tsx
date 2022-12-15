import React from 'react';
import { isEmpty } from 'radash';
import { SwiperSlide } from 'swiper/react';
import { Button, Heading, Stack } from '@chakra-ui/react';
import { ProductCard, Storefront, SvgImage } from '@plugins/react-components';
import { StorefrontShowcaseInterface } from '@plugins/types';
import { generateShadow } from '../../../../theme/shadows';

export const StorefrontShowcaseWidget: React.FC<StorefrontShowcaseInterface> = props => {
  const { products = [], title = '', contentViewCollection = 'Ver Todas', isViewCollectionVisible = true } = props;

  return (
    <Stack flexDir="column" spacing="5" gap="0" w="max">
      <Stack flexDir="row" spacing="0" gap="0">
        <Heading fontWeight="700" fontSize="2xl" lineHeight="8" color="blackAlpha.800" margin="auto auto auto 0">
          {title}
        </Heading>
        {isViewCollectionVisible && (
          <Button
            variant="link"
            rightIcon={
              <SvgImage src="icon_chevron_input.svg" color="blue.600" sizex="2.5" sizey="1.5" rotate="rotate(4.7rad)" />
            }
            margin="auto 0 auto auto"
            fontWeight="600"
            fontSize="md"
            lineHeight="6"
            color="blackAlpha.800"
          >
            {contentViewCollection}
          </Button>
        )}
      </Stack>

      <Storefront
        breakpoints={{
          '@0.00': {
            slidesPerView: 4,
            spaceBetween: 20
          }
        }}
        height="105.5"
      >
        {!isEmpty(products) &&
          products.map((product, index) => (
            <SwiperSlide
              key={product.id || index}
              style={{
                borderRadius: '2.5',
                textAlign: 'unset',
                maxWidth: '18.25rem',
                ...generateShadow(1)
              }}
            >
              <ProductCard {...product} />
            </SwiperSlide>
          ))}
      </Storefront>
    </Stack>
  );
};
