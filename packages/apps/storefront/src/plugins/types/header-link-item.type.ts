type HeaderLinkItemType = 'button' | 'link' | 'text';

interface LinkitemProperties {
  content: string;
  url?: string;
}

interface HeaderLinkItemInterface extends LinkitemProperties {
  variant: HeaderLinkItemType;
}

export type { HeaderLinkItemInterface, LinkitemProperties };
