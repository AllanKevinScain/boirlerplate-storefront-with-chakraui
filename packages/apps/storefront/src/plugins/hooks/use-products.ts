import { useContext, useEffect, useState } from 'react';
import { getProducts } from '@oracle-cx-commerce/commerce-utils/selector';
import { StoreContext } from '@oracle-cx-commerce/react-ui/contexts';
import { isEmpty } from 'radash';
import { runAllAndMergeResult } from '@plugins/helpers';
import { getProductsWithChildren } from '@plugins/selectors';
import { ProductOccProps, StoreInterface, FetchProductsWithChildrenPaylod } from '@plugins/types';
import { useAuth } from '@plugins/hooks';

/**
 * Fetcher de produtos
 */

export const fetchProductsWithChildren = async (store: StoreInterface, payload: FetchProductsWithChildrenPaylod) => {
  const { productIds = [], ...listProductsParams } = payload;

  if (!isEmpty(productIds)) {
    const { ok } = await runAllAndMergeResult([
      store.action('listProducts', {
        productIds,
        ...listProductsParams
      }),
      store.action('getStockStatus', {
        products: productIds,
        expandStockDetails: true
      })
    ]);

    if (ok) {
      return getProductsWithChildren(store.getState(), {
        productIds
      });
    }

    return [];
  }

  if (isEmpty(productIds)) {
    const { ok: listProductsOk, delta: listProductsDelta } = await store.action('listProducts', {
      ...listProductsParams
    });

    const products = getProducts(listProductsDelta);
    const responseProducts: ProductOccProps[] = Object.values(products || {});
    const responseProductIds = responseProducts.map(p => p.id);

    const { ok: getStockOk } = await store.action('getStockStatus', {
      products: responseProductIds,
      expandStockDetails: true
    });

    if (getStockOk && listProductsOk) {
      return getProductsWithChildren(store.getState(), {
        productIds: responseProductIds
      });
    }

    return [];
  }

  return [];
};

/**
 * Hook de produtos
 */
export function useProducts(listProductsParams) {
  const { isLoggedIn } = useAuth();
  const [products, setProducts] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const store = useContext<StoreInterface>(StoreContext);

  useEffect(() => {
    async function loadProducts() {
      try {
        if (!isEmpty(listProductsParams)) {
          const prods = await fetchProductsWithChildren(store, {
            ...listProductsParams
          });

          setProducts(prods);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoadingProducts(false);
      }
    }

    loadProducts();
  }, [store, listProductsParams, isLoggedIn]);

  return {
    products,
    isLoadingProducts
  };
}
