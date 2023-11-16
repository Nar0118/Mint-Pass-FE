import { ChangeEvent } from 'react';
import { Rule } from 'antd/lib/form';

export const handleValidation = (
  e: ChangeEvent<HTMLInputElement>,
  setPasswordErr: (value: string) => void,
  setPasswordSuccess: (value: boolean) => void,
): void => {
  const passwordInputValue = e.target.value.trim();

  const uppercaseRegExp = /(?=.*?[A-Z])/;
  const lowercaseRegExp = /(?=.*?[a-z])/;
  const digitsRegExp = /(?=.*?[0-9])/;
  const specialCharRegExp = /(?=.*?[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"])/;
  const minLengthRegExp = /.{8,}/;
  const passwordLength = passwordInputValue.length;
  const uppercasePassword = uppercaseRegExp.test(passwordInputValue);
  const lowercasePassword = lowercaseRegExp.test(passwordInputValue);
  const digitsPassword = digitsRegExp.test(passwordInputValue);
  const specialCharPassword = specialCharRegExp.test(passwordInputValue);
  const minLengthPassword = minLengthRegExp.test(passwordInputValue);

  if (passwordLength === 0) {
    setPasswordErr('Password is empty');
    setPasswordSuccess(false);
  } else if (!minLengthPassword) {
    setPasswordErr('At least minimum 8 characters');
    setPasswordSuccess(false);
  } else if (!uppercasePassword) {
    setPasswordErr('At least one Uppercase');
    setPasswordSuccess(false);
  } else if (!lowercasePassword) {
    setPasswordErr('At least one Lowercase');
    setPasswordSuccess(false);
  } else if (!digitsPassword) {
    setPasswordErr('At least one digit');
    setPasswordSuccess(false);
  } else if (!specialCharPassword) {
    setPasswordErr('At least one Special Characters');
    setPasswordSuccess(false);
  } else {
    setPasswordSuccess(true);
    setPasswordErr('');
  }
};

export const confirmPasswordValidator = (
  setChangeSuccess: (value: boolean) => void,
): Rule => {
  return ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue('newPassword') === value) {
        setChangeSuccess(false);
        return Promise.resolve();
      }
      setChangeSuccess(true);
    },
  });
};
