import Image from 'next/image';
import { getLogoStyle } from './utils';
import { LOGO_HEIGHT } from './constants';

interface PressLogoImageProps {
  src: string;
  alt: string;
  width: number;
}

export const PressLogoImage: React.FC<PressLogoImageProps> = ({ src, alt, width }) => (
  <div
    className="relative"
    style={getLogoStyle(width, LOGO_HEIGHT)}
  >
    <Image
      src={src}
      alt={alt}
      fill
      className="opacity-50 hover:opacity-100 transition-opacity"
      style={{ objectFit: 'contain' }}
    />
  </div>
);