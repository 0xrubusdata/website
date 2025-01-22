import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../styles/Sidebar.module.css';

interface LinkProps {
  label: string;
  to: string;
}

interface SidebarProps {
  links: LinkProps[];
}

const Sidebar: React.FC<SidebarProps> = ({ links }) => {
  return (
    <div className={styles.sidebar}>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;