import React, { useState, ChangeEvent } from 'react';
import Input from 'components/shared/input';

import styles from './permalink.module.scss';

const permalink = 'https://on.mintpass.co | ';

export const Permalink = () => {
  const [inputValue, setInputValue] = useState<string>(
    `${permalink}mintpas-demo`,
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const newValue: string = event.target.value;
    if (newValue?.includes(permalink)) {
      setInputValue(newValue);
    }
  };

  return (
    <div className={styles.container}>
      <Input
        value={inputValue}
        label="Permalink"
        imgUrl="/icons/ask.svg"
        onChange={handleChange}
      />
    </div>
  );
};
