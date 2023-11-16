import { useState } from 'react';
import {
  GlobalLoaderActionsContext,
  GlobalLoaderContext,
} from 'utils/context/auth/loaderContext';
import { ContextProps } from 'types/user';

export const GlobalLoaderService = ({
  children,
}: ContextProps): JSX.Element => {
  const [isGlobalLoaderOn, setGlobalLoader] = useState<boolean>(false);

  return (
    <GlobalLoaderContext.Provider value={isGlobalLoaderOn}>
      <GlobalLoaderActionsContext.Provider value={{ setGlobalLoader }}>
        {children}
      </GlobalLoaderActionsContext.Provider>
    </GlobalLoaderContext.Provider>
  );
};
