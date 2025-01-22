import React, { useState } from 'react';
import styles from '../../../styles/MobileNavigationBar.module.css';
import Button from '@/components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { LinkItem } from '@/components/types/atoms/LinkItem';

interface MobileNavigationBarProps {
  links: LinkItem[];
  initialExpanded?: boolean;
}

const MobileNavigationBar: React.FC<MobileNavigationBarProps> = ({ links, initialExpanded = false }) => {
  const [navbarExpanded, setNavbarExpanded] = useState(initialExpanded);

  const handleNavbarToggle = () => {
    setNavbarExpanded((prevState) => !prevState);
  };

  return (
    <nav className={styles.mobileNavigationBar}>
      <Button label={navbarExpanded ? 'Hide Menu' : 'Show Menu'} onClick={handleNavbarToggle} />
      {navbarExpanded && (
        <ul className={styles.linksList}>
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default MobileNavigationBar;