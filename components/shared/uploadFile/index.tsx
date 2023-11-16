import { Upload } from 'antd';
import { IUploadFile } from './types';
import Button from '../button';

import styles from './uploadFile.module.scss';

export const UploadFile = ({
  title,
  withIcon,
  type,
  onChange,
  color,
  background,
}: IUploadFile) => (
  <div className={styles.content}>
    <div
      className={`${styles.contentWhite} ${styles[color]}  ${styles[background]}`}
    >
      <label htmlFor="file-upload" className={`${styles[type]}`}>
        {withIcon && <img src="/icons/uploadFilePlus.svg" />}
      </label>
      <Upload
        multiple
        beforeUpload={onChange}
        showUploadList={false}
        className={styles.upload}
      >
        <Button>{title}</Button>
      </Upload>
    </div>
  </div>
);
