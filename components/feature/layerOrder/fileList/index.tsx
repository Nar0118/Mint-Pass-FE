import Image from 'components/shared/image';
import layer from '../../../../public/image/layer.svg';
import { IFileList } from '../types';

import styles from './fileList.module.scss';

export const FileList = ({ file, index }: IFileList) => {
  return (
    <div key={index} className={styles.files}>
      <div>
        <span>{file.name}</span>
      </div>
      <div>
        <Image src={layer} />
      </div>
    </div>
  );
};
