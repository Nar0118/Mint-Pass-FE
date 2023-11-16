import { InputNumber as InputNum } from 'antd';
import questionMark from '../../../public/image/questionMark.svg';
import Image from '../image';
import InputNumberProps from './types';

import styles from './input.module.scss';

export default function InputNumber({
  id,
  label,
  type,
  onChange,
  question,
  description,
}: InputNumberProps) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
            {question && (
              <Image className={styles.img} src={questionMark} alt="" />
            )}
            <span className={styles.hint}>{description}</span>
          </label>
        )}
        <InputNum
          id={id}
          onChange={() => onChange}
          type={type}
          className={styles.input}
        />
      </div>
    </div>
  );
}
