import { FileItemProps } from './types';

import styles from './fileItem.module.scss';

export const FileItem = ({ file, onClick, divide, size }: FileItemProps) => {
  return (
    <div className={styles.container}>
      <div>
        <img src="/icons/chooseFile.svg" alt="chooseFile" />
        <span>{file.name}</span>
      </div>
      <div>
        <span>
          {file.size / divide} {size}
        </span>
        <img
          src="/icons/removeFile.svg"
          alt="removeFile"
          onClick={onClick}
          className={styles.removeImage}
        />
      </div>
    </div>
  );
};
