// components/organisms/MainContent/MainContent.tsx
import React from 'react';
import styles from '../../../styles/MainContent.module.css';
import Typewriter from '../../atoms/Typewriter';
import ExternalLink from '@/components/atoms/Link/ExternalLink';

interface LinkItem {
  href: string;
  label: string;
}

interface MainContentProps {
  description: string;
  links: LinkItem[];
  typewriterLines: string[];
}

const MainContent: React.FC<MainContentProps> = ({ description, links, typewriterLines }) => {
  return (
    <main className={styles.main}>
      <p>{description}</p>
      <div className={styles.linksContainer}> {/* Add a container for the links */}
        {links.map((link, index) => (
          <ExternalLink key={index} link={link} />
        ))}
      </div>
      <Typewriter lines={typewriterLines} />
    </main>
  );
};

export default MainContent;