import { ProductOccProps } from '@plugins/types';
import { group } from 'radash';

export const sortProductsByAvaliability = (products: ProductOccProps[]) => {
  const groupedProducts = group(products, item => (item.shippable ? '' : ''));

  return [...(groupedProducts['true'] || []), ...(groupedProducts['false'] || [])];
};
