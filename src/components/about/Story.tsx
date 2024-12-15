import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Story = () => {
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
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-4xl font-normal mb-8">The Story</h2>
      <div className="prose prose-lg space-y-8">
        <p className="text-gray-600 font-light">
          In June 2015, Dino was unpleasantly surprised to find that his new MacBook couldn't play any of the latest games. Soon after, the team hacked together a prototype in a DeWolfe dorm room at Harvard, and the first Wolfe was born. Over the next year, the Wolfepack continued to improve their hardware and software - and it's finally ready to be shared with the world.
        </p>

        <p className="text-gray-600 font-light">
          First and foremost, our mission is to make the desktop computer obsolete. Furthermore, we want to level the playing field between platforms, by making Macs performance powerhouses. Finally, we want to stop big companies from charging outrageous prices for minuscule upgrades, by letting everyone take control of their own computer's performance.
        </p>
      </div>
    </motion.div>
  );
};

export default Story;