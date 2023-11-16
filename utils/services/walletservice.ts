import { WalletsNames } from 'utils/constants/connectWalletData';
import { imagesSvg } from 'utils/constants/imagesSrc';

export const walletIcon = (walletName: string) => {
  if (walletName === WalletsNames.Second) {
    return imagesSvg.connectWalletIcon;
  }

  return imagesSvg.metamask;
};
