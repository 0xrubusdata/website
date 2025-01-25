// pages/index.tsx
import { FC } from 'react';
import MainContent from '../components/organisms/MainContent/MainContent';
import styles from '../styles/Armindos.module.css';

const Armindos: FC = () => {
    const links = [
      { href: "https://github.com/0xrubusdata/armind_os", label: "GitHub" },
      { href: "https://x.com/Data0x88850", label: "X (Twitter)" },
    ];

    const typewriterLines = [
      "01/22/2025",
      "** This website will be built by the AI agent 0xRubusData using the ArmindOS framework.",
      "** See you soon on this POC!",
    ];
    
    return (
      <div className={styles.container}>
        <MainContent 
          description="This framework allows you to build agent AI applications with ease and efficiency."
          links={links}
          typewriterLines={typewriterLines}
        />
      </div>  
    );
};

export default Armindos;