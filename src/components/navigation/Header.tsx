import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import NavLink from './NavLink';
import Logo from './Logo';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const navigation = [
  { name: 'The Wolfe', href: '/' },
  { name: 'Stats', href: '/stats' },
  { name: 'Tech Specs', href: '/tech-specs' },
  { name: 'FAQ', href: '/faq' },
];

const Header = () => {
  const { isScrolled } = useScrollPosition();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  useEffect(() => {
    setMounted(true);
  }, []);

  const getHeaderBackground = () => {
    if (!mounted) return 'bg-transparent';
    if (!isHomePage) return 'bg-gray-100';
    return isScrolled ? 'bg-gray-100 shadow-lg' : 'bg-transparent';
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${getHeaderBackground()}`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-center h-20">
          <div className="flex items-center sm:space-x-2 md:space-x-4 lg:space-x-8">
            {navigation.slice(0, 2).map((item) => (
              <NavLink key={item.name} href={item.href}>
                {item.name}
              </NavLink>
            ))}
            <Logo />
            {navigation.slice(2).map((item) => (
              <NavLink key={item.name} href={item.href}>
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;