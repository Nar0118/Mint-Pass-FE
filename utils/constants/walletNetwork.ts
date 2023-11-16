import env from './env';

const getNetworkName = (): string => {
  switch (env.avalancheChainId) {
    case '43114':
      return 'Avalanche C-Chain';
    case '80001':
      return 'Mumbai';
  }
};

export const network = {
  chainId: `0x${Number(env.avalancheChainId).toString(16)}`,
  chainName: getNetworkName(),
  nativeCurrency: {
    name: getNetworkName(),
    symbol: env.avalancheNativeTokenSymbol,
    decimals: 18,
  },
  rpcUrls: [env.avalancheRpcUrls],
  blockExplorerUrls: [env.avalancheBlockExplorer],
};
