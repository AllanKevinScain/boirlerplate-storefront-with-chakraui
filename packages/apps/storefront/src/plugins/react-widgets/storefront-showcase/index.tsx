import React, { useMemo } from 'react';
import { useRecommendations } from '@plugins/hooks';
import { CenteringComponent } from '@plugins/react-components';
import { ProductCardInterface, StorefrontShowcaseInterface } from '@plugins/types';
import { StorefrontShowcaseWidget } from './storefront-showcase';

type cutStorefrontShowcaseInterface = Omit<StorefrontShowcaseInterface, 'products'>;

export default (props: cutStorefrontShowcaseInterface) => {
  const { widgetId } = props;
  const { recommendedProducts } = useRecommendations(widgetId);

  const products = useMemo(() => {
    const listProducts = recommendedProducts.map(item => {
      const product: ProductCardInterface = {
        displayName: item.displayName,
        primaryFullImageURL: item.primaryFullImageURL,
        route: item.route,
        listPrice: item.listPrice,
        salePrice: item.salePrice,
        id: item.id,
        parentCategory: item.parentCategory,
        cartQuantity: 0,
        percentageOff: 12,
        isLaunch: false,
        hasFavorite: false,
        discountable: true,
        coreProduct: false,
        productCardType: 'showcase'
      };

      return product;
    });

    return listProducts;
  }, [recommendedProducts]);

  return (
    <CenteringComponent py="12">
      <StorefrontShowcaseWidget
        title="Descontos Especiais"
        contentViewCollection="Ver Todas"
        isViewCollectionVisible={true}
        products={products}
        {...props}
      />
    </CenteringComponent>
  );
};
