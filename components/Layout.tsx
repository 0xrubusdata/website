import React, { ReactNode } from 'react';
import Footer from './organisms/Footer/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;