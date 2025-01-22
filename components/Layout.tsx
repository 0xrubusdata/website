import React, { ReactNode } from 'react';
import Footer from './organisms/Footer/Footer';
import Header from './organisms/Header/Header';
import NavigationBar from './organisms/NavigationBar/NavigationBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Define your links for the navigation
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/' },
    { label: 'Services', path: '/' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/' },
  ];

  return (
    <div>
      <Header 
        logoSrc="/logo.png" 
        logoAlt="Logo ArmindOS" 
        title="Welcome to the ArmindOS Framework" 
      />    
      <NavigationBar links={navLinks} />
      <main>{children}</main>
      <Footer copyrightText="© 2025 RubusData. All rights reserved." />
    </div>
  );
};

export default Layout;