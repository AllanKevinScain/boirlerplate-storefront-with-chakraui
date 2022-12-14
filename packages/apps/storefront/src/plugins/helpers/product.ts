import { ProductOccProps } from '@plugins/types';
import _ from 'lodash';

export const sortProductsByAvaliability = (products: ProductOccProps[]) => {
  const groupedProducts = _.groupBy(products, item => {
    return [item['purchasable']];
  });

  return [...(groupedProducts['true'] || []), ...(groupedProducts['false'] || [])];
};
