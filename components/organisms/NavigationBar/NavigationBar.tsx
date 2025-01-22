import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../styles/NavigationBar.module.css';

interface LinkItem {
  label: string;  // Text to display for the link
  path: string;   // Route path for the link
}

interface NavigationBarProps {
  links: LinkItem[]; // Array of links to render
}

const NavigationBar: React.FC<NavigationBarProps> = ({ links }) => {
  return (
    <nav className={styles.navigationBar}>
      <div className={styles.links}>
        {links.map((link, index) => (
          <Link key={index} to={link.path}>{link.label}</Link>
        ))}
      </div>
    </nav>
  );
};

export default NavigationBar;