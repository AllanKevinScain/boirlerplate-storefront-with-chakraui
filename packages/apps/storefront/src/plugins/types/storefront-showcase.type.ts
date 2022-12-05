import { ProductCardInterface } from '.';

interface StorefrontShowcaseInterface {
  products: ProductCardInterface[];
  title: string;
  contentViewCollection?: string;
  isViewCollectionVisible?: boolean;
}

export type { StorefrontShowcaseInterface };
