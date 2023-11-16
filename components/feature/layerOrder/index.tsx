import { useState } from 'react';
import { RcFile } from 'antd/es/upload';
import { UploadFileColor } from 'components/shared/uploadFile/types';
import { UploadFile } from 'components/shared/uploadFile';
import { EmptyItemText } from 'components/shared/emptyItemText';
import { FileList } from './fileList';
import { CollectionFileEnum } from './types';

import styles from './collectionUploadFiles.module.scss';

export const LayerOrder = () => {
  const [files, setFiles] = useState<any[]>([]);

  const handleFilesUpload = (files: RcFile): void => {
    setFiles((prevFiles: any[]) => [...prevFiles, files]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <UploadFile
          color={UploadFileColor.blackColor}
          background={UploadFileColor.whiteBg}
          title={CollectionFileEnum.CHOOSE_FILE}
          onChange={handleFilesUpload}
        />
        {files?.length === 0 ? (
          <EmptyItemText title="file chosen" />
        ) : (
          <div className={styles.filesCount}>
            <span>{files?.length}</span>Files
          </div>
        )}
      </div>
      <div className={styles.allFiles}>
        {files.map((file: FileList, index: number) => (
          <FileList file={file as unknown as File} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};
