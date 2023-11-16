import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from './context';
import Loader from 'components/shared/loader';
import * as localStorage from 'utils/services/localStorageService';
import localStorageKeys from 'utils/constants/localStorageKeys';
import { navBarPaths } from 'utils/constants/navBarPaths';
import { withoutAuthRoutes } from './constants';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const router = useRouter();

  const [authData, setAuthorized] = useState({
    authorized: false,
    kycPassed: false,
    path: '/',
  });
  const [loading, setLoading] = useState<boolean>(false);

  const getAuthToken = (): string | JSON => {
    return localStorage.getItemFromLocalStorage(localStorageKeys.TOKEN_KEY);
  };

  const getKycStatus = (): boolean => {
    const kycPassed = localStorage.getItemFromLocalStorage(
      localStorageKeys.KYC_PASSED,
    );

    return kycPassed === 'true';
  };

  const redirectTo = (path: string): void => {
    const authToken = getAuthToken();

    if (authToken === '') {
      setAuthorized({
        ...authData,
        authorized: false,
        kycPassed: getKycStatus(),
      });
      setLoading(false);

      if (path.includes(navBarPaths.FPCompany)) {
        withoutAuthRoutes.push(path);
      }

      if (withoutAuthRoutes.includes(path.split('?')[0])) {
        router.push(path);
      } else {
        setAuthorized({
          ...authData,
          path: path,
          kycPassed: getKycStatus(),
        });
        router.push(navBarPaths.login);
        setLoading(true);
      }
    } else {
      setAuthorized({
        ...authData,
        authorized: true,
        path: '/',
        kycPassed: getKycStatus(),
      });
      setLoading(false);
      if (path === navBarPaths.login || path === navBarPaths.signUp) {
        setLoading(true);
        router.push('/');
      }
    }
  };

  useEffect(() => {
    redirectTo(router.asPath);
  }, [router.pathname]);

  return (
    <AuthContext.Provider value={authData}>
      {loading ? <Loader /> : children}
    </AuthContext.Provider>
  );
};
