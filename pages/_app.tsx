// pages/_app.tsx
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>Armind OS</title>
                <link rel="icon" href="/icons8-favicon-16.ico" />
                {/* Uncomment below for additional favicon formats */}
                {/* <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" /> */}
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;