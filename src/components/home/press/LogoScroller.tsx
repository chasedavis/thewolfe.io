import { motion } from 'framer-motion';
import { PRESS_LOGOS } from './constants';
import PressLogoComponent from './PressLogo';

const LogoScroller = () => {
  return (
    <motion.div
      className="flex items-center justify-around space-x-16"
      animate={{
        x: [0, -1920],
      }}
      transition={{
        x: {
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }
      }}
    >
      {[...PRESS_LOGOS, ...PRESS_LOGOS].map((logo, index) => (
        <PressLogoComponent 
          key={`${logo.name}-${index}`}
          logo={logo} 
          index={index}
        />
      ))}
    </motion.div>
  );
};

export default LogoScroller;