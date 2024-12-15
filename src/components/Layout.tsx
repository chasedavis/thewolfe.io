import React from 'react';
import { Header, HeaderSpacer } from './navigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeaderSpacer />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;