import { motion } from 'framer-motion';
import Logo from '../common/Logo';

const pressLogos = [
  { name: 'TechCrunch', image: '/images/press/techcrunch.svg' },
  { name: 'Wired', image: '/images/press/wired.svg' },
  { name: 'The Verge', image: '/images/press/theverge.svg' },
  { name: 'Forbes', image: '/images/press/forbes.svg' },
  { name: 'Engadget', image: '/images/press/engadget.svg' },
  { name: 'VentureBeat', image: '/images/press/venturebeat.svg' },
  { name: 'CNET', image: '/images/press/cnet.svg' },
  { name: 'Mashable', image: '/images/press/mashable.svg' },
  { name: 'Gizmodo', image: '/images/press/gizmodo.svg' },
  { name: 'PCMag', image: '/images/press/pcmag.svg' },
];

const PressBanner = () => {
  return (
    <div className="flex justify-center">
      <div className="relative w-1/2 overflow-hidden">
        <div 
          className="w-full"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          }}
        >
          <motion.div
            className="flex space-x-16 opacity-60"
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
            {[...pressLogos, ...pressLogos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 h-8 w-32 bg-white/80"
                style={{
                  maskImage: `url(${logo.image})`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskImage: `url(${logo.image})`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PressBanner;