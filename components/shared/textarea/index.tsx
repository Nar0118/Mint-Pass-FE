import React, { useState, ChangeEvent } from 'react';
import { Input } from 'antd';
import { errorMessages } from './errors';

import styles from './textarea.module.scss';

export enum ErrorCodeKey {
  SIZE,
  EMPTY,
  INAPPROPRIATE,
}

const { TextArea } = Input;

export const Textarea = ({ ...rest }) => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  const validateDescription = (description: string): string => {
    const truncatedDescription: string = description.trim();

    if (truncatedDescription === '') {
      return errorMessages[ErrorCodeKey.EMPTY];
    } else if (truncatedDescription.split(' ').length <= 2) {
      return errorMessages[ErrorCodeKey.INAPPROPRIATE];
    } else if (
      truncatedDescription.length < 20 ||
      truncatedDescription.length > 500
    ) {
      return errorMessages[ErrorCodeKey.SIZE];
    } else {
      return '';
    }
  };

  const handleTextarea = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const inputValue: string = event.target.value;
    setValue(inputValue);

    const validationError = validateDescription(inputValue);
    setError(validationError);
  };

  return (
    <div>
      <TextArea
        value={value}
        onChange={handleTextarea}
        onBlur={handleTextarea}
        autoSize={{ minRows: 3, maxRows: 5 }}
        className={`${styles.textarea} ${error ? styles.error : ''}`}
        {...rest}
      />
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};
