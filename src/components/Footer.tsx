import Link from 'next/link';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex justify-center space-x-8 font-extralight">
            <Link href="/about" className="hover:text-secondary transition-colors">
              About
            </Link>
            <Link href="/press" className="hover:text-secondary transition-colors">
              Press
            </Link>
            <Link href="/privacy" className="hover:text-secondary transition-colors">
              Privacy
            </Link>
          </div>
          <div className="text-sm font-extralight">
            © {currentYear} Wolfepack, Inc. | Cambridge, MA
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;