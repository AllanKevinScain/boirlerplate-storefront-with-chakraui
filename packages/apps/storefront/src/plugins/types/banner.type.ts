interface BannerInterface {
  width: string;
  height: string;
  src: string;
  url?: string;
  hasAnimation?: boolean;
}

interface BannerGroupInterface {
  children: React.ReactNode;
}

export type { BannerGroupInterface, BannerInterface };
