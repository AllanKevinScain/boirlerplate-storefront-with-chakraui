import React from 'react';
import { ProductCardInterface } from '@plugins/types';
import { AnalysisProduct } from './analysis';
import { BuyTogetherProduct } from './buy-together';
import { CartProduct } from './cart';
import { ShowcaseProduct } from './showcase';

export const ProductCard: React.FC<ProductCardInterface> = props => {
  const { productCardType = 'cart' } = props;

  /* Cartão de produto a revisão no checkout */
  if (productCardType === 'analysis') return <AnalysisProduct {...props} />;

  /* Cartão de produto a revisão no checkout */
  if (productCardType === 'showcase') return <ShowcaseProduct {...props} />;

  /* Cartão de produto a revisão no checkout */
  if (productCardType === 'buyTogether') return <BuyTogetherProduct {...props} />;

  /* Cartão de produto para o carrinho no checkout **padrão */
  return <CartProduct {...props} />;
};
