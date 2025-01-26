import React, { ReactNode } from 'react';
import Footer from './organisms/Footer/Footer';
import Header from './organisms/Header/Header';
import NavigationBar from './organisms/NavigationBar/NavigationBar';
import Banner from './organisms/Banner/Banner';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Define your links for the navigation
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'ArmindOS', path: '/armindos' },
    { label: 'Roadmap', path: '/roadmap' },
    { label: 'Agents', path: '/agents' }, 
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/' },
  ];

  return (
    <div>
      <Banner/>
      <Header 
        title="Welcome to Rubus Lab" 
      />    
      <NavigationBar links={navLinks} />
      <main>{children}</main>
      <Footer copyrightText="© 2025 RubusData. All rights reserved." />
    </div>
  );
};

export default Layout;