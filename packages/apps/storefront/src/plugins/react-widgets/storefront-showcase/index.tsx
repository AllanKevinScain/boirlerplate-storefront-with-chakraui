import React from 'react';
import { Flex } from '@chakra-ui/react';
import { StorefrontShowcaseWidget } from './storefront-showcase';

export default props => {
  return (
    <Flex w="max" flexDir="column" margin="auto">
      <StorefrontShowcaseWidget
        title="Descontos Especiais"
        contentViewCollection="Ver Todas"
        isViewCollectionVisible={true}
        products={[
          {
            id: '100038700',
            productCardType: 'showcase',
            displayName: 'Geladeira/Refrigerador Brastemp Frost Free Evox 350Laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            primaryThumbImageURL: 'file/products/000043.000043.jpg',
            salePrice: 874.44,
            cartQuantity: 1,
            discountable: true,
            percentageOff: 12,
            isLaunch: true
          },
          {
            id: '100038701',
            productCardType: 'showcase',
            displayName: 'Geladeira/Refrigerador Brastemp Frost Free Evox 350Laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            primaryThumbImageURL: 'file/products/000043.000043.jpg',
            salePrice: 874.44,
            cartQuantity: 1,
            discountable: true,
            percentageOff: 12
          },
          {
            id: '100038702',
            productCardType: 'showcase',
            displayName: 'Geladeira/Refrigerador Brastemp Frost Free Evox 350Laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            primaryThumbImageURL: 'file/products/000043.000043.jpg',
            salePrice: 874.44,
            cartQuantity: 1,
            discountable: true,
            percentageOff: 12
          },
          {
            id: '100038703',
            productCardType: 'showcase',
            displayName: 'Geladeira/Refrigerador Brastemp Frost Free Evox 350Laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            primaryThumbImageURL: 'file/products/000043.000043.jpg',
            salePrice: 874.44,
            cartQuantity: 1,
            discountable: true,
            percentageOff: 12
          },
          {
            id: '100038704',
            productCardType: 'showcase',
            displayName: 'Geladeira/Refrigerador Brastemp Frost Free Evox 350Laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            primaryThumbImageURL: 'file/products/000043.000043.jpg',
            salePrice: 874.44,
            cartQuantity: 1,
            discountable: true,
            percentageOff: 12
          }
        ]}
        {...props}
      />
    </Flex>
  );
};
