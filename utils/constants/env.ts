export interface EnvVariables {
  captchaKey: string;
  nextPublicApiBaseUrl: string;
  googleApiKey: string;
  friendsInviteLink: string;
  templateId: string;
  factorySCAddress: string;
  web3ChainId: string;
  seoLink: string;
  avalancheChainId: string;
  connectWalletBridge: string;
  metamaskDownloadLink: string;
  avalancheRpcUrls: string;
  avalancheBlockExplorer: string;
  avalancheNativeTokenSymbol: string;
  nativeTokensDecimals: string;
  tokenContractAddress: string;
  apiVersion: number;
}

let env: EnvVariables;
if (process.env.NEXT_PUBLIC_TEST === '1') {
  env = {
    nextPublicApiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    captchaKey: process.env.NEXT_PUBLIC_RE_CAPTCHA_KEY,
    googleApiKey: process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID,
    friendsInviteLink: process.env.NEXT_PUBLIC_FRIENDS_INVITE_LINK,
    templateId: process.env.NEXT_PUBLIC_TEMPLATE_ID,
    factorySCAddress: process.env.NEXT_PUBLIC_TEST_FACTORY_SC_ADDRESS,
    web3ChainId: process.env.NEXT_PUBLIC_WEB3_CHAIN_ID,
    seoLink: process.env.NEXT_PUBLIC_SEO_LINK,
    avalancheChainId: process.env.NEXT_PUBLIC_TEST_CHAIN_ID,
    avalancheRpcUrls: process.env.NEXT_PUBLIC_TEST_RPC_URLS,
    avalancheBlockExplorer: process.env.NEXT_PUBLIC_TEST_BLOCK_EXPLORER,
    connectWalletBridge: process.env.NEXT_PUBLIC_CONNECT_WALLET_BRIDGE,
    metamaskDownloadLink: process.env.NEXT_PUBLIC_METAMASK_DOWNLOAD_LINK,
    nativeTokensDecimals: process.env.NEXT_PUBLIC_TEST_NATIVE_TOKEN_DECIMALS,
    avalancheNativeTokenSymbol:
      process.env.NEXT_PUBLIC_TEST_NATIVE_TOKEN_SYMBOL,
    tokenContractAddress: process.env.NEXT_PUBLIC_TEST_TOKEN_CONTRACT_ADDRESS,
    apiVersion: Number(process.env.NEXT_PUBLIC_API_VERSION),
  };
} else {
  env = {
    nextPublicApiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    captchaKey: process.env.NEXT_PUBLIC_RE_CAPTCHA_KEY,
    googleApiKey: process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID,
    friendsInviteLink: process.env.NEXT_PUBLIC_FRIENDS_INVITE_LINK,
    templateId: process.env.NEXT_PUBLIC_TEMPLATE_ID,
    factorySCAddress: process.env.NEXT_PUBLIC_FACTORY_SC_ADDRESS,
    web3ChainId: process.env.NEXT_PUBLIC_WEB3_CHAIN_ID,
    seoLink: process.env.NEXT_PUBLIC_SEO_LINK,
    avalancheChainId: process.env.NEXT_PUBLIC_AVALANCHE_CHAIN_ID,
    avalancheRpcUrls: process.env.NEXT_PUBLIC_AVALANCHE_RPC_URLS,
    avalancheBlockExplorer: process.env.NEXT_PUBLIC_AVALANCHE_BLOCK_EXPLORER,
    connectWalletBridge: process.env.NEXT_PUBLIC_CONNECT_WALLET_BRIDGE,
    metamaskDownloadLink: process.env.NEXT_PUBLIC_METAMASK_DOWNLOAD_LINK,
    nativeTokensDecimals:
      process.env.NEXT_PUBLIC_AVALANCHE_NATIVE_TOKEN_DECIMALS ?? '18',
    avalancheNativeTokenSymbol:
      process.env.NEXT_PUBLIC_AVALANCHE_NATIVE_TOKEN_SYMBOL,
    tokenContractAddress: process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS,
    apiVersion: Number(process.env.NEXT_PUBLIC_API_VERSION),
  };
}

export default env;
