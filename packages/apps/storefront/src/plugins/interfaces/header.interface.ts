type HeaderTypes = 'cart';

interface HeaderProperties {
  contentTitle: string;
  securyImagesIsVisible?: boolean;
  logoContent: string;
  logoIsVisible?: boolean;
  titleIsVisible?: boolean;
  securyImagesContent: string[];
}

interface HeaderInterface extends HeaderProperties {
  headerType: HeaderTypes;
}

export type { HeaderInterface, HeaderProperties };
