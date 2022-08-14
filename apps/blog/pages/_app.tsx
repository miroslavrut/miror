import { AppProps } from 'next/app';

import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <title>Welcome to blog!</title>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
