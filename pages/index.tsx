import { FC } from 'react';

const Home: FC = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Welcome to Armind OS Framework</h1>
            <p>
                This framework allows you to build agent AI applications with 
                ease and efficiency. 
            </p>
            <p>
                <a href="https://github.com/0xrubusdata/armind_os" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
            </p>
            <p>
                <a href="https://x.com/Data0x88850" target="_blank" rel="noopener noreferrer">
                    X (Twitter)
                </a>
            </p>
        </div>
    );
};

export default Home;