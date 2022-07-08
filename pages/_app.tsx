import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from '@mui/material';
import {theme} from '../theme';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'

const client = new ApolloClient({
  uri:'https://countries.trevorblades.com',
  cache : new InMemoryCache(),
});


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
          <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp
