import React, { useState } from 'react';
import styles from '../../../styles/MobileNavigationBar.module.css';
import Links from '../../atoms/Links';
import Button from '@/components/atoms/Button/Button';
import { LinkItem } from '@/components/types/atoms/LinkItem';

interface MobileNavigationBarProps {
  links: LinkItem[];
  initialExpanded?: boolean;
}

const MobileNavigationBar: React.FC<MobileNavigationBarProps> = ({ links, initialExpanded = false }) => {
  const [navbarExpanded, setNavbarExpanded] = useState(initialExpanded);

  const handleNavbarToggle = () => {
    setNavbarExpanded(!navbarExpanded);
  };

  return (
    <nav className={styles.mobileNavigationBar}>
      <Button label={navbarExpanded ? 'Hide Menu' : 'Show Menu'} onClick={handleNavbarToggle} />
      {navbarExpanded && <Links links={links} />}
    </nav>
  );
};

export default MobileNavigationBar;