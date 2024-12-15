import Image from 'next/image';
import { clsx } from 'clsx';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  className,
  width = 40,
  height = 40,
  priority = false
}) => {
  const aspectRatio = width / height;

  return (
    <div 
      className={clsx('relative', className)}
      style={{ 
        width,
        height,
        aspectRatio
      }}
    >
      <Image
        src="/images/WolfeLogo.png"
        alt="Wolfe Logo"
        fill
        style={{ objectFit: 'contain' }}
        priority={priority}
      />
    </div>
  );
};

export default Logo;