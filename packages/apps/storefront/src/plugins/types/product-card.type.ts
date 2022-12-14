import { ProductOccProps } from '@plugins/types';

type ProductCardTypes = 'cart' | 'analysis' | 'showcase' | 'buyTogether';
/* 

*/
type cutProductOccProps = Pick<
  ProductOccProps,
  'displayName' | 'primaryFullImageURL' | 'route' | 'listPrice' | 'salePrice' | 'id' | 'parentCategory'
>;

interface ProductProperties extends cutProductOccProps {
  cartQuantity: number;
  percentageOff?: number; // porcentagem
  isLaunch?: boolean; //lançamento
  hasFavorite?: boolean; //favorito
  discountable?: boolean; // false,
  coreProduct?: boolean; // false,
}

interface ProductCardInterface extends ProductProperties {
  productCardType: ProductCardTypes;
}

export type { ProductCardInterface, ProductProperties };
