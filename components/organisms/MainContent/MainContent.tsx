// components/organisms/MainContent/MainContent.tsx
import styles from '../../../styles/MainContent.module.css';

const MainContent = () => {
    return (
        <main className={styles.main}>
            <p>This framework allows you to build agent AI applications with ease and efficiency.</p>
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
    );
};

export default MainContent;