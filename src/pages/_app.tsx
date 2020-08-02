import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import Head from 'next/head';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

import ThemeSwitch from '../components/ThemeSwitch';

import GlobalStyles from '../styles/global';

const App: React.FC<AppProps> = ({ Component, ...pageProps }) => {
  const [theme, setTheme] = useState('');

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <Head>
        <title>Next.js App</title>
      </Head>
      <ThemeSwitch onChangeValue={(theme: string) => setTheme(theme)} />
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
