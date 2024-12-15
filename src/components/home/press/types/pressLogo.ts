import { LogoType } from './types';

export interface PressLogo {
  name: string;
  image: string;
  aspectRatio: number;
  type: LogoType;
  href: string;
}

export interface PressLogoProps {
  logo: PressLogo;
  index: number;
}