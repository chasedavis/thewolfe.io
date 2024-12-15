import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

interface ScrollArrowProps {
  onClick: () => void;
  hasBackgroundImage?: boolean;
}

const ScrollArrow: React.FC<ScrollArrowProps> = ({ onClick, hasBackgroundImage = true }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-colors ${
        hasBackgroundImage 
          ? 'text-white/70 hover:text-white' 
          : 'text-gray-400 hover:text-gray-600'
      }`}
      initial={{ y: 0 }}
      animate={{ y: [0, 8, 0] }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      aria-label="Scroll to next section"
    >
      <ChevronDownIcon className="h-8 w-8" />
    </motion.button>
  );
};

export default ScrollArrow;