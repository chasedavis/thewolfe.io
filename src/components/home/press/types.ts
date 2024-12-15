export type BlendMode = 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'none';

export interface PressLogo {
  name: string;
  image: string;
  aspectRatio: number;
  type: 'svg' | 'png';
  href: string;
  blendMode?: BlendMode;
}

export interface PressLogoProps {
  logo: PressLogo;
  index: number;
}