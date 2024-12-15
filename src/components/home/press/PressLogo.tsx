import { PressLogoProps } from './types/pressLogo';
import { LOGO_HEIGHT } from './constants';
import { PressLogoImage } from './PressLogoImage';
import { PressLogoSvg } from './PressLogoSvg';

const PressLogoComponent: React.FC<PressLogoProps> = ({ logo }) => {
  const width = LOGO_HEIGHT * logo.aspectRatio;

  return (
    <a
      href={logo.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0 flex items-center text-white"
      title={logo.name}
    >
      {logo.type === 'png' ? (
        <PressLogoImage src={logo.image} alt={logo.name} width={width} />
      ) : (
        <PressLogoSvg src={logo.image} width={width} />
      )}
    </a>
  );
};

export default PressLogoComponent;