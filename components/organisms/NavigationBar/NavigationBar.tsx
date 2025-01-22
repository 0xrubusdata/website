// components/organisms/NavigationBar/NavigationBar.tsx
import React from 'react';
import Link from 'next/link'; // Use Next.js Link
import styles from '../../../styles/NavigationBar.module.css';

interface LinkItem {
  label: string;
  path: string;
}

interface NavigationBarProps {
  links: LinkItem[];
}

const NavigationBar: React.FC<NavigationBarProps> = ({ links }) => {
  return (
    <nav className={styles.navigationBar}>
      <div className={styles.links}>
        {links.map((link, index) => (
          <Link key={index} href={link.path}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavigationBar;