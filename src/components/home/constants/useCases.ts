import { UseCase } from '../types/useCase';

export const useCases: UseCase[] = [
  {
    title: 'Virtual Reality',
    description:
      'With the Wolfe Pro, your laptop is fully equipped to handle VR. For the first time, gamers, developers, and other professionals can use this technology without a desktop computer.',
    backgroundImage: '/images/hero/chris.jpg',
    position: 'left',
    buttonText: 'See Tech Specs',
    buttonHref: '/tech-specs',
  },
  {
    title: 'Gaming',
    description:
      'The Wolfe outperforms consoles and most desktops, so you can play all the latest AAA games. And for enthusiasts, the Wolfe Pro allows you to play at the highest settings, without compromising performance.',
    backgroundImage: '/images/hero/Darkroom2.jpg',
    position: 'right',
    buttonText: 'See Performance Stats',
    buttonHref: '/stats',
  },
  {
    title: 'Professional Work',
    description:
      'The Wolfe lets you create faster and more efficiently than ever. Enhance your CAD with super-smooth rendering and modeling, boost your performance in the Adobe Suite, or power any other GPU-accelerated application.',
    backgroundImage: '/images/hero/caroline.jpg',
    position: 'left',
    buttonText: 'See FAQ',
    buttonHref: '/faq',
  },
] as const;