import { useContext } from 'react';
import Loader from 'components/shared/loader';
import { GlobalLoaderContext } from 'utils/context/auth/loaderContext';

import styles from './globalloader.module.scss';

export const GlobalLoader = (): JSX.Element => {
  const isGlobalLoaderOn = useContext(GlobalLoaderContext);

  return (
    isGlobalLoaderOn && (
      <div className={styles.loader}>
        <Loader />
      </div>
    )
  );
};
