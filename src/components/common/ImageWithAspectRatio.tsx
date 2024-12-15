import Image from 'next/image';

interface ImageWithAspectRatioProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}

const ImageWithAspectRatio: React.FC<ImageWithAspectRatioProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className = ''
}) => {
  return (
    <div className={`relative ${className}`} style={{ aspectRatio: `${width}/${height}` }}>
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: 'contain' }}
        priority={priority}
      />
    </div>
  );
};

export default ImageWithAspectRatio;