import { useRouter } from 'next/router';

const HeaderSpacer = () => {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  if (isHomePage) {
    return null;
  }

  return <div className="h-20" />;
};

export default HeaderSpacer;