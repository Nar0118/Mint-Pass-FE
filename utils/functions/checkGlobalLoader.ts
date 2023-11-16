export const checkGlobalLoader = (
  count: number,
  setGlobalLoader: (e: boolean) => void,
  setItemLoading: (e: boolean) => void,
  boolean: boolean,
): void => {
  const maxCount: number = 4;
  if (count < maxCount) {
    setGlobalLoader(boolean);
  } else {
    setItemLoading(boolean);
  }
};
