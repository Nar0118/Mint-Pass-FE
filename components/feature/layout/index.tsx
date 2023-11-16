import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Loader from 'components/shared/loader';
import { AuthContext } from 'utils/context/auth/context';
import { LayoutProps } from './types';

import styles from './layout.module.scss';

export default function Layout({ children }: LayoutProps): JSX.Element {
  const router = useRouter();
  const isAuthorized = useContext(AuthContext).authorized;
  const [isAppLoaded, setIsAppLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsAppLoaded(true);
  }, [router.pathname, isAuthorized]);

  return isAppLoaded ? (
    <div className={styles.generalModeBg}>
      {/* <Header /> */}
      <div className={styles.context}>{children}</div>
      {/* {isAuthPath && <Footer />} */}
    </div>
  ) : (
    <Loader style={false} isFullScreen={true} />
  );
}
