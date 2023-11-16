import { initializeConnector } from '@web3-react/core';
import { MetaMask } from '@web3-react/metamask';
import { WalletConnect } from '@web3-react/walletconnect';
import env from 'utils/constants/env';

export const [metaMaskConnector, metaMaskHooks, metamaskStore] =
  initializeConnector<MetaMask>((actions) => new MetaMask({ actions }));
export const [walletConnectConnector, walletConnectHooks, walletConnectStore] =
  initializeConnector<WalletConnect>(
    (actions) =>
      new WalletConnect({
        actions,
        options: {
          rpc: { 80001: env.avalancheRpcUrls },
          bridge: env.connectWalletBridge,
          qrcode: true,
        },
      }),
  );
