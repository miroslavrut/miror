import { AppProps } from 'next/app';
import Navbar from '../components/layout/Navbar';

import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <title>Welcome to blog!</title>
      <main className="app">
        <Navbar />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
