import { Input as AntdInput } from 'antd';
import InputProps, { RestTypes } from './types';
import { EyeInvisibleFilled, EyeFilled } from '@ant-design/icons';

import styles from './input.module.scss';

export default function Input({
  label,
  type,
  onChange,
  id,
  placeholder,
  errorMassage,
  imgUrl,
  colorPlaceholder,
  ...rest
}: InputProps) {
  return (
    <div className={styles.container}>
      {label && (
        <div className={styles.context}>
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
          {imgUrl ? <img src={imgUrl} alt={imgUrl} /> : <></>}
        </div>
      )}
      {type === RestTypes.Password ? (
        <AntdInput.Password
          {...rest}
          id={id}
          onChange={onChange}
          iconRender={(visible) =>
            visible ? (
              <EyeFilled
                style={{
                  color: errorMassage
                    ? 'var(--input-error-massage)'
                    : 'var(--input-focus-border)',
                }}
              />
            ) : (
              <EyeInvisibleFilled
                style={{ color: 'var(--white_900_opacity_300)' }}
              />
            )
          }
          className={`${styles[colorPlaceholder]} ${
            errorMassage ? styles.inputError : styles.inputGreen
          } ${styles.input}`}
          placeholder={placeholder}
        />
      ) : (
        <AntdInput
          {...rest}
          id={id}
          type={type}
          onChange={onChange}
          className={`${styles[colorPlaceholder]} ${
            errorMassage ? styles.inputError : styles.inputGreen
          } ${styles.input}`}
          placeholder={placeholder}
        />
      )}
      {errorMassage && <span className={styles.error}>{errorMassage}</span>}
    </div>
  );
}
