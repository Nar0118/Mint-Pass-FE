import { Invitation } from 'types/invitation';
import { navBarPaths } from 'utils/constants/navBarPaths';

export interface StepData {
  title: string;
  content?: JSX.Element | string;
  description?: string;
}

export const fundingProcessData: Array<StepData> = [
  {
    title: 'Preparation',
    description: 'This project is in preparation phase.',
  },
  {
    title: 'Sale',
    description: 'Winners can participate in the token sale.',
  },
  {
    title: 'Distribution',
    description: 'The tokens get distributed to Sale participants.',
  },
];

export enum Responsive {
  FIRST = 'first',
  SECOND = 'second',
  DEFAULT = 'default',
}

export function validMail(mail: string): boolean {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    mail,
  );
}

export const handleCopyText = async (text: string): Promise<void> => {
  await navigator.clipboard.writeText(text);
};

export const handleGetCopyText = async (
  sellerWallet: string,
  buyerWallet: string,
): Promise<boolean> => {
  return navigator.clipboard
    .readText()
    .then(
      (clipText: string) =>
        sellerWallet === clipText || buyerWallet === clipText,
    );
};

export const currentPath = (path: string): boolean => {
  switch (path) {
    case navBarPaths.login:
    case navBarPaths.signUp:
    case navBarPaths.newPassword:
    case navBarPaths.changePassword:
    case navBarPaths.recoverPassword:
    case navBarPaths.twoFactor:
      return false;
    default:
      return true;
  }
};

export const abbreviateWalletAddress = (string: string): string => {
  if (string) {
    return string?.slice(0, 5) + '...' + string?.slice(string.length - 4);
  }
};

export const replaceEmail = (item: Invitation): void => {
  const [name, domain] = item.recipient.split('@');
  let replaceName;
  if (name.length > 3) {
    replaceName = name.substring(0, 3);
  } else {
    replaceName = name.substring(0, 1);
  }
  item.recipient = `${replaceName}${new Array(name.length).join(
    '*',
  )}@${domain} `;
};
