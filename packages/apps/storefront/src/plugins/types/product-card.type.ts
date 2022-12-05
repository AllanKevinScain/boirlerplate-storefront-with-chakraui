type ProductCardTypes = 'cart' | 'analysis' | 'showcase' | 'buyTogether';

interface ProductProperties {
  cartQuantity: number; // quantidade de items
  salePrice: number; //null,
  displayName: string; //+ 12 meses após garantia de fábrica,
  id: string; // G00000004330612200250,
  longDescription?: string; // null,
  primaryThumbImageURL: string; //'/img/no-image.jpg'
  largeImage?: string; // null,
  smallImage?: string; //null,
  listVolumePrice?: undefined; // null,
  nonreturnable?: boolean; //false,
  excludeFromSitemap?: boolean; // false,
  orderLimit?: undefined; //null,
  description?: string; // CAIXA ACÚSTICA AMPLIFICADA 12 MESES,
  listPrices?: { mainPriceListGroup: number }; // 45.02
  salePrices?: { mainPriceListGroup: undefined }; //null
  primaryFullImageURL?: string; // /img/no-image.jpg,
  largeImageURLs?: Array<string>; //[/img/no-image.jpg],
  coreProduct?: boolean; // false,
  listVolumePrices?: { mainPriceListGroup: undefined }; //null
  primaryLargeImageURL?: string; ///img/no-image.jpg,
  addOnProducts?: [];
  shippable?: boolean; // false,
  smallImageURLs?: Array<string>; // [/img/no-image.jpg],
  derivedShippingSurchargeFrom?: undefined; // mainPriceListGroup,
  derivedSalePriceFrom?: undefined; // mainPriceListGroup,
  shippingSurcharges?: { mainPriceListGroup: undefined }; // null},
  discountable?: boolean; // false,
  saleVolumePrices?: { mainPriceListGroup: undefined }; //null,
  brand?: undefined; //null,
  saleVolumePrice?: undefined; //null,
  assetable?: boolean; // false,
  primaryMediumImageURL?: string; // /img/no-image.jpg,
  fullImageURLs?: Array<string>; // [/img/no-image.jpg],
  thumbImageURLs?: Array<string>; // [/img/no-image.jpg],
  creationDate?: string | Date; // date 2021-12-17T12:52:16.000Z,
  productImages?: [];
  route?: string; // /-12-meses-ap%C3%B3s-garantia-de-f%C3%A1brica/product/G00000004330612200250,
  notForIndividualSale?: boolean; // true,
  mediumImageURLs?: Array<string>; // [/img/no-image.jpg],
  repositoryId?: string; // G00000004330612200250,
  derivedListPriceFrom?: undefined; // mainPriceListGroup,
  shippingSurcharge?: undefined; // null
  primarySourceImageURL?: string; // /img/no-image.jpg,
  primarySmallImageURL?: string; // /img/no-image.jpg,
  sourceImageURLs?: Array<string>; // [/img/no-image.jpg],
  avgCustRating?: undefined; //null,
  listPrice?: number; //45.02
  percentageOff?: number; // porcentagem
  isLaunch?: boolean; //lançamento
  hasFavorite?: boolean; //favorito
}

interface ProductCardInterface extends ProductProperties {
  productCardType: ProductCardTypes;
}

export type { ProductCardInterface, ProductProperties };
