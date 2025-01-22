// pages/index.tsx
import { FC } from 'react';
import Header from '../components/organisms/Header/Header';
import MainContent from '../components/organisms/MainContent/MainContent';
import Footer from '../components/organisms/Footer/Footer';
import styles from '../styles/Home.module.css';

const Home: FC = () => {
    return (
        <div className={styles.container}>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
};

export default Home;