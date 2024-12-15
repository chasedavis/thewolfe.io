import Link from 'next/link';
import { useRouter } from 'next/router';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { clsx } from 'clsx';
import CommonLogo from '../common/Logo';

const Logo = () => {
  const { isScrolled } = useScrollPosition();
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <Link href="/" className="flex items-center md:scale-125 px-4">
      <div className={clsx(
        'transition-all duration-300',
        (isScrolled || !isHomePage) ? 'brightness-50' : 'brightness-100'
      )}>
        <CommonLogo width={40} height={40} priority />
      </div>
    </Link>
  );
};

export default Logo;