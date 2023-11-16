import { Button as AntdButton, Spin } from 'antd';
import { useLoader } from 'utils/hooks/useLoading';
import PropTypes from 'prop-types';
import ButtonProps, {
  BackgroundType,
  BorderTransparent,
  BorderType,
  ButtonType,
  Color,
  DisableMode,
  IconSide,
} from 'types/buttonType';
import {
  getBackgroundType,
  getBorderTransparent,
  getBorderType,
  getColor,
  getDisableMode,
  getPadding,
  getSizeClassName,
  getStyle,
} from './getStyles';

import styles from './button.module.scss';

export default function Button({
  children,
  onClick,
  className,
  text,
  btnType,
  spin,
  icon,
  iconSide,
  size,
  disableMode,
  borderType,
  backgroundType,
  color,
  borderTransparent,
  paddingSize,
  ...rest
}: ButtonProps) {
  const { isLoading, startLoading, stopLoading } = useLoader();

  const handleButton = async () => {
    if (!onClick) {
      return;
    }

    try {
      startLoading();
      if (onClick) {
        onClick();
      }
    } catch (err) {
      console.error(err);
    } finally {
      stopLoading();
    }
  };

  return (
    <AntdButton
      className={`${styles.btn} ${getSizeClassName(size)} ${getDisableMode(
        disableMode,
      )} ${getBackgroundType(backgroundType)} ${getBorderType(
        borderType,
      )} ${getColor(color)} ${getBorderTransparent(
        borderTransparent,
      )} ${className} ${getStyle(btnType)} ${getPadding(paddingSize)}`}
      {...rest}
      onClick={handleButton}
    >
      {!!spin ? (
        <Spin />
      ) : (
        <div className={styles.container}>
          {iconSide === IconSide.Left && icon}
          {text}
          {iconSide === IconSide.Right && icon}
        </div>
      )}
      {isLoading ? <Spin /> : children}
    </AntdButton>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  btnType: PropTypes.oneOf([
    ButtonType.darkGreen,
    ButtonType.lightRed,
    ButtonType.lightBlue,
    ButtonType.lightGreen,
    ButtonType.lightYellow,
    ButtonType.lightOrange,
    ButtonType.darkBlue,
    ButtonType.darkOrange,
    ButtonType.darkRed,
    ButtonType.darkYellow,
    ButtonType.opacityBlue,
    ButtonType.white,
    ButtonType.black,
    ButtonType.blue,
    ButtonType.whiteBlue,
    ButtonType.blackBorder,
    ButtonType.whiteBorder,
    ButtonType.primary,
  ]),
  color: PropTypes.oneOf([
    Color.white,
    Color.black,
    Color.darkGreen,
    Color.lightRed,
    Color.lightBlue,
    Color.lightGreen,
    Color.lightYellow,
    Color.lightOrange,
    Color.darkBlue,
    Color.darkOrange,
    Color.darkRed,
    Color.darkYellow,
  ]),
  borderType: PropTypes.oneOf([BorderType.Solid, BorderType.Dashed]),
  backgroundType: PropTypes.oneOf([
    BackgroundType.Transparent,
    'background-color',
  ]),
  borderTransparent: PropTypes.oneOf([
    BorderTransparent.Transparent,
    'background-color',
  ]),
  disabled: PropTypes.oneOf([true, false]),
  disableMode: PropTypes.oneOf([DisableMode.Light, DisableMode.Dark]),
};
