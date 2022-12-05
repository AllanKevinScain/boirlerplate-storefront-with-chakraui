import { AnimationProps } from 'framer-motion';

type AnimationPropsCut = Pick<AnimationProps, 'animate' | 'transition'>;
interface SvgImageInterface extends AnimationPropsCut {
  color: string;
  sizey: string | number;
  sizex: string | number;
  src: string;
  rotate?: string;
  borderBottom?: string;
  borderStyle?: string;
  borderBottomWidth?: string;
}

export type { SvgImageInterface };
