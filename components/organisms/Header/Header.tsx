// components/organisms/Header/Header.tsx
import Image from 'next/image';
import styles from '../../../styles/Header.module.css';

interface HeaderProps {
    logoSrc: string;  // Source for the logo image
    logoAlt: string;  // Alt text for the logo image
    title: string;    // Title to display in the header
}

const Header: React.FC<HeaderProps> = ({ logoSrc, logoAlt, title }) => {
    return (
        <header className={styles.header}>
            <Image src={logoSrc} alt={logoAlt} width={100} height={100} />
            <h1>{title}</h1>
        </header>
    );
};

export default Header;