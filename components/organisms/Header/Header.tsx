// components/organisms/Header/Header.tsx
import Image from 'next/image';
import styles from '../../../styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <Image src="/logo.png" alt="Logo ArmindOS" width={100} height={100} />
            <h1>Welcome to the ArmindOS Framework</h1>
        </header>
    );
};

export default Header;