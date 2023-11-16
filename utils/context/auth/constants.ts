import { navBarPaths } from 'utils/constants/navBarPaths';

export const withoutAuthRoutes: Array<string> = [
  '/',
  navBarPaths.login,
  navBarPaths.signUp,
  navBarPaths.fundingPools,
  navBarPaths.companyProfile,
  navBarPaths.recoverPassword,
  navBarPaths.newPassword,
  navBarPaths.twoFactor,
];
