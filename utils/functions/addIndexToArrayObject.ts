export const addIndexToArrayObject = (array: Array<object>): Array<object> => {
  return array?.map((item: object, index: number) => ({
    ...item,
    index: index + 1,
  }));
};
