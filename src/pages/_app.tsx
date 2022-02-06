import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import dark from '../styles/theme/dark';
// import light from '../styles/theme/light';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={dark}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
