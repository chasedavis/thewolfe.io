import Link from 'next/link';
import { useRouter } from 'next/router';
import { clsx } from 'clsx';
import { useScrollPosition } from '../../hooks/useScrollPosition';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const { isScrolled } = useScrollPosition();
  const router = useRouter();
  const isActive = router.pathname === href;
  const isHomePage = router.pathname === '/';

  return (
    <Link
      href={href}
      className={clsx(
        'px-4 py-2 text-xs md:text-sm font-medium rounded-md transition-colors',
        isHomePage
          ? isActive
            ? isScrolled
              ? 'bg-gray-200 text-gray-700 hover:text-gray-900'
              : 'bg-white/10 text-white'
            : isScrolled
              ? 'text-gray-700 hover:bg-gray-200 hover:text-gray-900'
              : 'text-gray-300 hover:bg-white/10 hover:text-white'
          : isActive
            ? 'bg-gray-200 text-gray-900'
            : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900'
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;