import { IN_STOCK } from '@oracle-cx-commerce/commerce-utils/constants/cart';
import {
  getLocationBasedInventory,
  getProduct,
  getSku,
  getSkuPrice
} from '@oracle-cx-commerce/commerce-utils/selector';
import { ProductWithChildren } from '@plugins/types';
import { isEmpty } from 'radash';

export const getProductWithChildren = (state, { productId }): ProductWithChildren | Record<string, unknown> => {
  const product = getProduct(state, { productId });
  if (!isEmpty(product)) {
    const childSKUs = product.childSKUs.map(skuId => {
      const { stockStatus, inStockQuantity = 0, orderableQuantity = 0 } = getLocationBasedInventory(state, { skuId });
      const sku = getSku(state, { skuId });
      const skuPrice = getSkuPrice(state, { skuId });

      const hasStock = stockStatus === IN_STOCK && inStockQuantity > 0;
      const purchasable = hasStock && sku.listPrice > 0;

      return {
        ...sku,
        listPrice: skuPrice.listPrice || sku.listPrice,
        salePrice: skuPrice.salePrice || sku.salePrice,
        inStockQuantity,
        orderableQuantity,
        hasStock,
        purchasable
      };
    });

    const defaultSKU = childSKUs.find(sku => sku.purchasable) || childSKUs[0] || {};
    const purchasable = !!defaultSKU.purchasable;

    const variants = Object.entries(product.variantOptionsSeed).map(item => {
      return {
        fullId: item[0],
        ...(item[1] as Array<object>)
      };
    });

    const skuOptionsMap = Object.entries(product.variantToSkuLookup).reduce((acc, curr) => {
      return {
        ...acc,
        [String(curr[1])]: curr[0].split(';').filter(n => n)
      };
    }, {});

    return {
      ...product,
      skuOptionsMap,
      purchasable,
      defaultSKU,
      childSKUs,
      variants
    };
  }

  return {};
};

export const getProductsWithChildren = (state, { productIds = [] }): ProductWithChildren[] => {
  const products = productIds
    .map(productId => getProductWithChildren(state, { productId }))
    .filter(product => !isEmpty(product)) as ProductWithChildren[];

  return products;
};
