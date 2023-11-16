import { ChangeEvent, useState } from 'react';
import { NumberNftsEnum } from 'enums/NumberNftEnum';

import styles from './numberNfts.module.scss';
import Input from 'components/shared/input';

type NumberControlType = {
  [key: string]: boolean;
};

export const NumberNfts = () => {
  const [value, setValue] = useState<number>(0);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [numberControl, setNumberControl] = useState<NumberControlType>({
    up: false,
    down: false,
  });

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (parseInt(e.target.value) === parseInt(e.target.value)) {
      setValue(parseInt(e.target.value));
    }
  };

  const controlNumber = (type: string): void => {
    setValue(type === NumberNftsEnum.DOWN ? Math.max(0, value - 1) : value + 1);

    setNumberControl({
      down: type === NumberNftsEnum.DOWN,
      up: type === NumberNftsEnum.UP,
    });
  };

  return (
    <>
      <div
        className={`${styles.numberOfNFTs} ${
          styles[isFocused ? 'numberOfNFTsFocused' : 'numberOfNFTsUnFocused']
        }`}
      >
        <p>Number Of NFTs</p>
        <img src="/icons/ask.svg" alt="ask" />
      </div>
      <div
        className={`${styles.content} ${isFocused && styles.contentFocused}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <Input onChange={onChange} />
        <div className={styles.arrows}>
          <div>
            <img
              className={`${styles.arrowsImg} 
                        ${numberControl.down && styles.arrowsImgSelected}`}
              src="/icons/arrowUp.svg"
              alt="arrowUp"
              onClick={() => controlNumber(NumberNftsEnum.UP)}
            />
          </div>
          <div>
            <img
              className={`${styles.arrowsImg} 
                        ${numberControl.down && styles.arrowsImgSelected}`}
              src="/icons/arrowDown.svg"
              alt="arrowDown"
              onClick={() => controlNumber(NumberNftsEnum.DOWN)}
            />
          </div>
        </div>
      </div>
    </>
  );
};
