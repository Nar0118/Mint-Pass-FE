import React, { useState } from 'react';
import Loader from 'components/shared/loader';

interface LoaderProps {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  startLoading: () => void;
  stopLoading: () => void;
  Loader: JSX.Element;
}

export const useLoader = (): LoaderProps => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const startLoading = (): void => setIsLoading(true);
  const stopLoading = (): void => setIsLoading(false);

  return {
    isLoading,
    setIsLoading,
    startLoading,
    stopLoading,
    Loader: <Loader />,
  };
};
