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
                <meta name="description" content="Framework for agents AI development." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;
