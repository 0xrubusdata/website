// pages/index.tsx
import { FC } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: FC = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Image src="/logo.png" alt="Logo ArmindOS" width={100} height={100} />
                <h1>Welcome to the ArmindOS Framework</h1>
            </header>
            <main className={styles.main}>
                <p>
                    This framework allows you to build agent AI applications with ease and efficiency.
                </p>
                <div className={styles.links}>
                    <a href="https://github.com/0xrubusdata/armind_os" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href="https://x.com/Data0x88850" target="_blank" rel="noopener noreferrer">
                        X (Twitter)
                    </a>
                </div>
                <div className={styles.typewriter}>
                    <p><em>01/22/2025</em></p>
                    <p>** This website will be built by the AI agent 0xRubusData using the ArmindOS framework.</p>
                    <p>** See you soon on this POC!</p>
                </div>
            </main>
            <footer className={styles.footer}>
                <p>&copy; 2025 RubusData. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
