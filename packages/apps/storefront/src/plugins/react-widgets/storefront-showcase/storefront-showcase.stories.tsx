import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StorefrontShowcaseWidget as StorefrontShowcase } from './storefront-showcase';

const Template: ComponentStory<typeof StorefrontShowcase> = args => <StorefrontShowcase {...args} />;

export const Default = Template.bind({});

export default {
  title: 'widgets/StorefrontShowcase',
  component: StorefrontShowcase,
  args: {
    title: 'Descontos Especiais',
    contentViewCollection: 'Ver Todas',
    isViewCollectionVisible: true,
    products: [
      {
        id: '100038700',
        productCardType: 'showcase',
        displayName: 'Geladeira/Refrigerador Brastemp Frost Free Evox 350Laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        primaryThumbImageURL: 'file/general/product_refrigerator.png',
        salePrice: 874.44,
        cartQuantity: 1,
        discountable: true,
        percentageOff: 12
      },
      {
        id: '100038701',
        productCardType: 'showcase',
        displayName: 'Geladeira/Refrigerador Brastemp Frost Free Evox 350Laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        primaryThumbImageURL: 'file/general/product_refrigerator.png',
        salePrice: 874.44,
        cartQuantity: 1,
        discountable: true,
        percentageOff: 12
      },
      {
        id: '100038702',
        productCardType: 'showcase',
        displayName: 'Geladeira/Refrigerador Brastemp Frost Free Evox 350Laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        primaryThumbImageURL: 'file/general/product_refrigerator.png',
        salePrice: 874.44,
        cartQuantity: 1,
        discountable: true,
        percentageOff: 12
      },
      {
        id: '100038703',
        productCardType: 'showcase',
        displayName: 'Geladeira/Refrigerador Brastemp Frost Free Evox 350Laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        primaryThumbImageURL: 'file/general/product_refrigerator.png',
        salePrice: 874.44,
        cartQuantity: 1,
        discountable: true,
        percentageOff: 12
      },
      {
        id: '100038704',
        productCardType: 'showcase',
        displayName: 'Geladeira/Refrigerador Brastemp Frost Free Evox 350Laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        primaryThumbImageURL: 'file/general/product_refrigerator.png',
        salePrice: 874.44,
        cartQuantity: 1,
        discountable: true,
        percentageOff: 12
      }
    ]
  }
} as ComponentMeta<typeof StorefrontShowcase>;
