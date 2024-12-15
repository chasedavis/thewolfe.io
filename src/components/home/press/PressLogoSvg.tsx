import { getLogoStyle, getSvgMaskStyle } from './utils';
import { LOGO_HEIGHT } from './constants';

interface PressLogoSvgProps {
  src: string;
  width: number;
}

export const PressLogoSvg: React.FC<PressLogoSvgProps> = ({ src, width }) => (
  <div
    className="opacity-70 hover:opacity-100 transition-opacity"
    style={{
      ...getLogoStyle(width, LOGO_HEIGHT),
      ...getSvgMaskStyle(src),
    }}
  />
);