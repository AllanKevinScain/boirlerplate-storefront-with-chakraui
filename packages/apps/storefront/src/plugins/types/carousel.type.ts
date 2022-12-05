interface CarouselBannerInterface {
  src: string;
  url?: string;
}

interface CarouselInterface {
  slideDuration?: number;
  effect?: 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | undefined;
  children: React.ReactNode;
  inLoop?: boolean;
}

export type { CarouselBannerInterface, CarouselInterface };
