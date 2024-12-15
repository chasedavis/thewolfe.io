import { useInView } from 'react-intersection-observer';

interface UseInViewAnimationOptions {
  triggerOnce?: boolean;
  threshold?: number;
}

export const useInViewAnimation = (options: UseInViewAnimationOptions = {}) => {
  const { triggerOnce = true, threshold = 0.05 } = options;

  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
  });

  const animation = {
    initial: { opacity: 0, y: 5 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.3 }
  };

  return { ref, inView, animation };
};