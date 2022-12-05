type HeaderTypes = 'cart' | 'default';

interface HeaderProperties {
  logoContent: string;
  logoIsVisible?: boolean;
}

interface SearchInterface {
  searchInputPlaceholderText?: string;
  isSearchInputVisible?: boolean;
  isSearchLoading?: boolean;
  suggestions?: {
    id: string;
    type: string;
    keyword: string;
    displayName: string;
    route: string;
    primarySmallImageURL: string;
  }[];
  searchTerms?: string;
  setSearchTerms?: (terms: string) => void;
  onSearch?: (terms: string) => void;
}

interface DropdownMenuItemInterface {
  displayName: string;
  childCollections: {
    displayName: string;
    route: string;
  }[];
}

interface StackDropdownHeaderInterface {
  navigableCollections?: DropdownMenuItemInterface[];
  internalBannerImage?: string;
}
interface CardHeaderProperties extends HeaderProperties {
  contentTitle?: string;
  titleIsVisible?: boolean;
  securyImagesContent?: string[];
  securyImagesIsVisible?: boolean;
}

interface DefaultHeaderProperties extends HeaderProperties, SearchInterface, StackDropdownHeaderInterface {
  cartQuantity?: number;
  currentProfile?: { firstName: string };
  onNavigateToFavorites?: () => void;
  onNavigateToCart?: () => void;
  onNavigateToprofile?: () => void;
}

interface HeaderInterface extends CardHeaderProperties, DefaultHeaderProperties {
  headerType: HeaderTypes;
}

export type {
  CardHeaderProperties,
  DefaultHeaderProperties,
  DropdownMenuItemInterface,
  HeaderInterface,
  SearchInterface,
  StackDropdownHeaderInterface
};
