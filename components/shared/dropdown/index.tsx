import { Select, Space } from 'antd';
import Image from '../image';
import { DropdownProps } from './types';
import questionMark from '../../../public/image/questionMark.svg';

import styles from './dropdown.module.scss';

export default function Dropdown({
  label,
  options,
  onChange,
  errorMassage,
}: DropdownProps) {
  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label}>
          {label}
          <Image className={styles.img} src={questionMark} alt="" />
        </label>
      )}
      <Space direction="vertical" style={{ width: '100%' }}>
        <Select
          className={`${
            errorMassage ? styles.dropDownError : styles.dropDownGreen
          } ${styles.dropDown}`}
          onChange={onChange}
          options={options}
          popupClassName={styles.dropStyles}
        />
      </Space>
      {errorMassage && <span className={styles.error}>{errorMassage}</span>}
    </div>
  );
}
