interface BannerInterface {
  width: string;
  height: string;
  imageBanner: { src: string };
  url?: string;
  hasAnimation?: boolean;
}

interface BannerGroupInterface {
  children: React.ReactNode;
}

export type { BannerGroupInterface, BannerInterface };
