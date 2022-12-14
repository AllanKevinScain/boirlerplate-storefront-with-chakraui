interface ProductOccProps {
  active: boolean;
  addOnProducts: undefined[];
  assetable: boolean;
  avgCustRating: undefined;
  brand: string;
  childSKUs: string[];
  configurable: boolean;
  creationDate: string;
  defaultParentCategory: undefined;
  defaultProductListingSku: undefined;
  derivedDirectCatalogs: undefined[];
  derivedListPriceFrom: string;
  derivedSalePriceFrom: string;
  derivedShippingSurchargeFrom: string;
  description: string;
  directCatalogs: undefined[];
  displayName: string;
  excludeFromSitemap: boolean;
  fullImageURLs: string[];
  height: number;
  id: string;
  largeImageURLs: string[];
  length: number;
  listPrice: number;
  listPrices: { mainPriceListGroup: number };
  listVolumePrice: undefined;
  listVolumePrices: { mainPriceListGroup: undefined };
  listingVariantKeyId: undefined;
  listingVariantValues: undefined;
  longDescription: undefined;
  mediumImageURLs: string[];
  nonreturnable: boolean;
  notForIndividualSale: boolean;
  onlineOnly: boolean;
  orderLimit: undefined;
  parentCategories: {
    repositoryId: string;
    fixedParentCategories: {
      repositoryId: string;
      fixedParentCategories: { repositoryId: string; fixedParentCategories: { repositoryId: string }[] }[];
    }[];
  }[];
  parentCategory: {
    repositoryId: string;
    fixedParentCategories: {
      repositoryId: string;
      fixedParentCategories: { repositoryId: string; fixedParentCategories: { repositoryId: string }[] }[];
    }[];
  }[];
  parentCategoryIdPath: string;
  primaryFullImageURL: string;
  primaryImageAltText: string;
  primaryImageTitle: string;
  primaryLargeImageURL: string;
  primaryMediumImageURL: string;
  primarySmallImageURL: string;
  primarySourceImageURL: string;
  primaryThumbImageURL: string;
  productImagesMetadata: undefined[];
  productVariantOptions: undefined[];
  relatedArticles: undefined[];
  relatedMediaContent: undefined[];
  relatedProducts: undefined;
  repositoryId: string;
  route: string;
  salePrice: number;
  salePrices: { mainPriceListGroup: undefined }[];
  saleVolumePrice: undefined;
  saleVolumePrices: { mainPriceListGroup: undefined };
  seoUrlSlugDerived: string;
  shippable: boolean;
  shippingSurcharge: number;
  shippingSurcharges: { mainPriceListGroup: number };
  smallImageURLs: string[];
  sourceImageURLs: string[];
  targetAddOnProducts: undefined[];
  thumbImageURLs: string[];
  type: string;
  unitOfMeasure: undefined;
  variantOptionPermutations: string;
  variantOptionsSeed: undefined;
  variantToSkuLookup: { '': string };
  variantValuesOrder: undefined;
  weight: number;
  width: number;
  x_PT07601: string;
  x_PT07602: string;
  x_PT07603: string;
  x_PT07604: string;
  x_brandId: string;
  x_departamento: undefined;
  x_descontoBoleto: number;
  x_descontoPix: number;
  x_freteGratis: undefined;
  x_groupId: undefined;
  x_lanamento: undefined;
  x_limitePorCarrinho: undefined;
  x_limitePorCpf: undefined;
  x_numeroDeDiasDaLimitaoPorCpf: undefined;
  x_parcelaMximaSemJuros: undefined;
  x_prevenda: boolean;
  x_prevenda2: undefined;
  x_prevendaAte: undefined;
  x_prevendaAte2: undefined;
  x_prevendaDe: undefined;
  x_prevendaDe2: undefined;
}

interface SkuOccProductProps {
  active: boolean;
  barcode: string;
  bundleLinks: undefined[];
  configurable: boolean;
  configurationMetadata: undefined[];
  derivedListPriceFrom: string;
  derivedOnlineOnly: boolean;
  derivedSalePriceFrom: string;
  derivedShippingSurchargeFrom: string;
  displayName: string;
  dynamicPropertyMapBigString: undefined;
  dynamicPropertyMapLong: undefined;
  fullImageURLs: string[];
  images: string[];
  largeImage: string;
  largeImageURLs: string[];
  listPrice: number;
  listPrices: { mainPriceListGroup: undefined };
  listVolumePrice: undefined;
  listVolumePrices: { mainPriceListGroup: undefined };
  listingSKUId: undefined;
  mediumImageURLs: undefined[];
  model: undefined;
  nonreturnable: boolean;
  onlineOnly: boolean;
  primaryFullImageURL: undefined;
  primaryLargeImageURL: undefined;
  primaryMediumImageURL: undefined;
  primarySmallImageURL: undefined;
  primarySourceImageURL: undefined;
  primaryThumbImageURL: undefined;
  productFamily: string;
  productLine: undefined;
  productListingSku: undefined;
  quantity: number;
  repositoryId: string;
  salePrice: number;
  salePriceEndDate: string;
  salePriceStartDate: undefined;
  salePrices: { mainPriceListGroup: undefined };
  saleVolumePrice: undefined;
  saleVolumePrices: { mainPriceListGroup: undefined };
  shippingSurcharge: number;
  shippingSurcharges: { mainPriceListGroup: undefined };
  smallImage: undefined;
  smallImageURLs: undefined[];
  soldAsPackage: boolean;
  sourceImageURLs: undefined[];
  thumbImageURLs: undefined[];
  thumbnailImage: undefined;
  unitOfMeasure: undefined;
  variantValuesOrder: undefined;
}

interface CatalogRepositoryOccProps {
  products: ProductOccProps[];
  skus: SkuOccProductProps[];
}

interface SkuVariantOption {
  name: string;
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  disabled?: any;
}

interface SkuVariant {
  optionName: string;
  optionId: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedValue?: any;
  options: SkuVariantOption[];
  fullId?: string;
}

interface ProductWithChildren extends ProductOccProps {
  purchasable: boolean;
  defaultSKU: SkuOccProductProps;
  variants: SkuVariant[];
  skuOptionsMap: Record<string, Array<string>>;

  /* REMOVE */
  installmentPrice: number;
  numberOfInstallments: number;
}

interface FetchProductsWithChildrenPaylod {
  categoryId?: string;
  search?: string;
  priceListGroupId?: string;
  offset?: number;
  limit?: number;
  useCurrentPageForCollectionId?: boolean;
  totalResults?: boolean;
  productIds?: string[];
  includeChildren?: boolean;
  sort?: string;
  totalExpandedResults?: boolean;
  includeChildSKUListingIds?: boolean;
}

interface UseRecommendationsProps {
  recommendedProducts: ProductWithChildren[];
  onRecommendationClick: (product: ProductOccProps) => void;
}

export type {
  ProductOccProps,
  SkuOccProductProps,
  CatalogRepositoryOccProps,
  FetchProductsWithChildrenPaylod,
  ProductWithChildren,
  UseRecommendationsProps
};
