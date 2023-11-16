import { Theme } from 'types/theme';

export const selectThemeImg = (
  img: string,
  theme: string,
  imgObject: { [key: string]: string },
): string => {
  if (typeof img !== 'string') {
    return '';
  }

  const imgExtension = img.substring(img.lastIndexOf('.'));
  const imgName = img.replace(imgExtension, '');
  const imgKey = `${imgName}${theme === Theme.Dark ? 'Dark' : ''}`;

  return imgObject[imgKey] || imgObject[imgName];
};
