import { useCallback, useContext, useEffect, useState } from 'react';
import { getRecommendations, getRecommendationsSet } from '@oracle-cx-commerce/commerce-utils/selector';
import { useSelector } from '@oracle-cx-commerce/react-components/provider';
import { StoreContext } from '@oracle-cx-commerce/react-ui/contexts';
import { StoreInterface, UseRecommendationsProps } from '@plugins/types';
import { sortProductsByAvaliability } from '@plugins/helpers';
import { isEmpty } from 'radash';
import { useAuth, fetchProductsWithChildren } from '@plugins/hooks';

export function useRecommendations(widgetId: string): UseRecommendationsProps {
  const { isLoggedIn } = useAuth();
  const store = useContext<StoreInterface>(StoreContext);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const recommendations = useSelector(getRecommendations, { widgetId });
  const { recSetId } = useSelector(getRecommendationsSet, { widgetId });

  useEffect(() => {
    async function loadProducts() {
      try {
        const products = await fetchProductsWithChildren(store, {
          productIds: recommendations
        });

        if (isLoggedIn) {
          setRecommendedProducts(products);
        } else {
          const productsAux = sortProductsByAvaliability(products);
          setRecommendedProducts(productsAux);
        }
      } catch (error) {
        console.error(error);
      }
    }

    if (isEmpty(recommendations)) {
      loadProducts();
    }
  }, [isLoggedIn, recommendations, store]);

  const onRecommendationClick = useCallback(
    product => {
      store.action('recommendationsClickThru', { product, recSetId });
    },
    [store, recSetId]
  );

  return {
    recommendedProducts,
    onRecommendationClick
  };
}
