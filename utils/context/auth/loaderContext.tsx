import { createContext } from 'react';

interface LoaderActionProps {
  setGlobalLoader: (e: boolean) => void;
}

export const GlobalLoaderContext = createContext<boolean>(false);
export const GlobalLoaderActionsContext =
  createContext<LoaderActionProps>(null);
