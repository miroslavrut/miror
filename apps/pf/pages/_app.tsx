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
        'bg-gradient-to-b',
        'from-gray-800',
        'to-gray-700'
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
