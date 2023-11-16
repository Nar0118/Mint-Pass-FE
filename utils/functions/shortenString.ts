export const shortenString = (
  string: string,
  maxLength: number,
  leftCount: number,
  rightCount: number,
): string => {
  if (string?.length > maxLength) {
    return (
      string.substring(0, leftCount) +
      '...' +
      string.substring(string.length - rightCount)
    );
  }

  return string;
};
