import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../common/Button';
import { Position } from './types/useCase';

interface UseCaseCardProps {
  title: string;
  description: string;
  backgroundImage: string;
  position: Position;
  buttonText: string;
  buttonHref: string;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ 
  title, 
  description, 
  backgroundImage,
  position,
  buttonText,
  buttonHref
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="flex-1 relative w-full"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gray-500/50" />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-12">
        <div className={`w-full flex ${position === 'right' ? 'justify-end' : 'justify-start'}`}>
          <div className="max-w-xl mx-4 sm:mx-8 md:mx-12 lg:mx-24">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-thin mb-3 sm:mb-4 text-white text-left">
              {title}
            </h3>
            <p className="text-base sm:text-lg md:text-xl font-thin text-white/90 text-left mb-6 sm:mb-8 max-w-lg leading-relaxed">
              {description}
            </p>
            <Button href={buttonHref} variant="outline">
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UseCaseCard;