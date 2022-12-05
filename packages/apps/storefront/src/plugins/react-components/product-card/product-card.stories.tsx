import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProductCard } from '.';

const Template: ComponentStory<typeof ProductCard> = args => <ProductCard {...args} />;

export const Cart = Template.bind({});
Cart.args = {
  productCardType: 'cart',
  displayName:
    'Smart TV Samsung 65" AU7700 4K UHD Crystal Tela sem limites Visual Livre de Cabos Controle Único Alexa Built In',
  id: '100038700',
  primaryThumbImageURL: 'file/general/empty_product.png',
  salePrice: 874.44,
  listPrice: 0,
  cartQuantity: 1,
  discountable: true,
  coreProduct: true
};

export const Analysis = Template.bind({});
Analysis.args = {
  productCardType: 'analysis',
  displayName:
    'Smart TV Samsung 65" AU7700 4K UHD Crystal Tela sem limites Visual Livre de Cabos Controle Único Alexa Built In',
  id: '100038700',
  primaryThumbImageURL: 'file/general/empty_product.png',
  salePrice: 874.44,
  listPrice: 0,
  cartQuantity: 1,
  discountable: true
};

export const Showcase = Template.bind({});
Showcase.args = {
  productCardType: 'showcase',
  displayName: 'Geladeira/Refrigerador Brastemp Frost Free Evox 350Laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  id: '100038700',
  primaryThumbImageURL: 'file/general/product_refrigerator.png',
  salePrice: 874.44,
  listPrice: 0,
  cartQuantity: 1,
  percentageOff: 12,
  hasFavorite: true
};

export const BuyTogether = Template.bind({});
BuyTogether.args = {
  id: '100038700',
  productCardType: 'buyTogether',
  displayName: 'Smart Tv 43" UHD Samsung 4k AU7700 Processador Crystal 4k...',
  primaryThumbImageURL: 'file/general/smart_tv.png',
  salePrice: 3069.9,
  listPrice: 3376.89,
  cartQuantity: 1
};

export default {
  title: 'components/ProductCard',
  component: ProductCard
} as ComponentMeta<typeof ProductCard>;
