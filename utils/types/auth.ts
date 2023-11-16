import { UserRoles } from './user';

export interface AuthResponse {
  success: boolean;
  userData?: UserData;
  error?: string;
  email: string;
  existingUser?: User;
  user?: User;
}

export interface UserData {
  token: string;
  user: User;
}

export interface User {
  authenticatedByGoogle: boolean;
  authenticatedByTwitter: boolean;
  email: string;
  emailVerificationToken: string;
  password: string;
  role: UserRoles;
  twitterId: string;
  walletAddress: string;
  referralCode: string;
  kycPassed: boolean;
  phoneNumber: string;
  enable2FA: boolean;
}
