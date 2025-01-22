// pages/index.tsx
import { FC } from 'react';
import Header from '../components/organisms/Header/Header';
import MainContent from '../components/organisms/MainContent/MainContent';
import Footer from '../components/organisms/Footer/Footer';
import styles from '../styles/Home.module.css';

const Home: FC = () => {
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
            <Header 
                logoSrc="/logo.png" 
                logoAlt="Logo ArmindOS" 
                title="Welcome to the ArmindOS Framework" 
            />
            <MainContent 
                description="This framework allows you to build agent AI applications with ease and efficiency."
                links={links}
                typewriterLines={typewriterLines}
            />
            <Footer copyrightText="© 2025 RubusData. All rights reserved." />
        </div>
    );
};

export default Home;