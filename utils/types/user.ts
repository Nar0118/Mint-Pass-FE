import { ReactNode } from 'react';

export interface ContextProps {
  [key: string]: string | ReactNode;
}

export interface User {
  _id: string;
  name: string;
  surname: string;
  country: string;
  nationality: string;
  email: string;
  role: string;
  walletAddress: string;
  authenticatedByGoogle: boolean;
  authenticatedByTwitter?: boolean;
  emailVerificationToken: string;
  referralCode: string;
  bio: string;
  twitterLink: string;
  instagramLink: string;
  discordLink: string;
  twitterId: string;
  kycPassed: boolean;
  phoneNumber: string;
  enable2FA: boolean;
  imageUrl: string;
}

export enum UserRoles {
  ADMIN = 'admin',
  BASIC = 'basic',
}

export interface UserKycDocument {
  birthdate: string;
  firstName: string;
  lastName: string;
  documentNumber: string;
  documentType: number;
  expireDate: string;
  country: string;
  nationality: string;
}
