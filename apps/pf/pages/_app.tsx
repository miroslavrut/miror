import { AppProps } from 'next/app';
import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';

import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document
      .querySelector('body')
      .classList.add(
        'min-h-screen',
        'bg-gradient-to-r',
        'from-darkin',
        'to-darkpurple'
      );
  });

  return (
    <>
      <title>miror</title>
      <main className="app">
        <Navbar />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
