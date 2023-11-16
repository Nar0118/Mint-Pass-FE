import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Web3ReactProvider } from '@web3-react/core';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import Layout from 'components/feature/layout';
import { GlobalLoader } from 'components/feature/globalLoader';
import { wrapper } from 'store/store';
import { AuthProvider } from 'utils/context/auth/provider';
import {
  metaMaskConnector,
  metaMaskHooks,
  metamaskStore,
  walletConnectConnector,
  walletConnectHooks,
  walletConnectStore,
} from '../utils/web3/connectors';
import { GlobalServices } from 'utils/services/service/globalServices';
import { navBarPaths } from 'utils/constants/navBarPaths';
import env from 'utils/constants/env';

import '../styles/globals.scss';

function MyApp({ Component, pageProps, ...rest }: any): JSX.Element {
  const { store } = wrapper.useWrappedStore(rest);

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const is2Fa = JSON.parse(sessionStorage.getItem('is2Fa'));
      if (url === navBarPaths.twoFactor && !is2Fa) {
        router.back();
      }
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Passphrase</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GoogleOAuthProvider clientId={env.googleApiKey}>
        <Web3ReactProvider
          connectors={[
            [metaMaskConnector, metaMaskHooks, metamaskStore],
            [walletConnectConnector, walletConnectHooks, walletConnectStore],
          ]}
        >
          <Provider store={store}>
            <AuthProvider>
              <GlobalServices>
                <GlobalLoader />
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </GlobalServices>
            </AuthProvider>
          </Provider>
        </Web3ReactProvider>
      </GoogleOAuthProvider>
    </>
  );
}

export default MyApp;
