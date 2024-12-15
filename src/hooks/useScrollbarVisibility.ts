import { useEffect } from 'react';

export const useScrollbarVisibility = () => {
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const body = document.body;

    const handleScroll = () => {
      // Remove the hide class when scrolling starts
      body.classList.remove('scrollbar-hide-idle');

      // Clear any existing timeout
      if (timeout) {
        clearTimeout(timeout);
      }

      // Set a timeout to add the hide class back after scrolling stops
      timeout = setTimeout(() => {
        body.classList.add('scrollbar-hide-idle');
      }, 1000); // Hide scrollbar after 1 second of no scrolling
    };

    // Add initial hide class
    body.classList.add('scrollbar-hide-idle');

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);
};