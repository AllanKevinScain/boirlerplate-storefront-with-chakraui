import { SwiperOptions } from 'swiper/types';

interface StorefrontInterface {
  breakpoints: {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
  };
  height: string;
  children: React.ReactNode;
  looping?: boolean;
  isArrowLeftVisible?: boolean;
}

export type { StorefrontInterface };
