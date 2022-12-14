import { ProductCardInterface } from '.';

interface StorefrontShowcaseInterface {
  products: ProductCardInterface[];
  title: string;
  contentViewCollection?: string;
  isViewCollectionVisible?: boolean;
  widgetId?: string;
}

export type { StorefrontShowcaseInterface };
