import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollArrow from '../ScrollArrow';
import PressBanner from '../home/press/PressBanner';

type HeightOption = 'screen' | 'screen-1.5' | 'auto';

interface SectionProps {
  children: React.ReactNode;
  backgroundImage?: string;
  className?: string;
  isFirst?: boolean;
  showScrollArrow?: boolean;
  id: string;
  nextSectionId?: string;
  height?: HeightOption;
  centerContent?: boolean;
}

const getHeightClass = (height: HeightOption) => {
  switch (height) {
    case 'screen-1.5':
      return 'h-[150vh]';
    case 'auto':
      return 'h-auto';
    case 'screen':
    default:
      return 'h-screen';
  }
};

const Section: React.FC<SectionProps> = ({ 
  children, 
  backgroundImage, 
  className = '',
  isFirst = false,
  showScrollArrow = false,
  id,
  nextSectionId,
  height = 'screen',
  centerContent = true
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToNext = () => {
    if (nextSectionId) {
      const nextSection = document.getElementById(nextSectionId);
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`${getHeightClass(height)} relative ${className}`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {backgroundImage && <div className="absolute inset-0 bg-gray-500/50" />}
      <div className="relative z-10 h-full flex flex-col">
        <div className={`flex-grow flex flex-col ${centerContent ? 'justify-center' : ''} ${isFirst ? 'mt-20' : ''}`}>
          {children}
        </div>
        {id === "hero" && (
          <div className="container mx-auto px-4">
            <PressBanner />
          </div>
        )}
        {showScrollArrow && nextSectionId && (
          <div className="flex-shrink-0 h-16 relative">
            <ScrollArrow 
              onClick={scrollToNext} 
              hasBackgroundImage={!!backgroundImage}
            />
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Section;