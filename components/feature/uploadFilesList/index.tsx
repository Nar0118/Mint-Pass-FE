import { MouseEvent, useState } from 'react';
import { UploadFile as AntUploadFile } from 'antd';
import { UploadFile } from 'components/shared/uploadFile';
import { UploadFileColor } from 'components/shared/uploadFile/types';
import { FileItem } from 'components/shared/fileItem';
import { EmptyItemText } from 'components/shared/emptyItemText';

import styles from './uploadFilesList.module.scss';

enum FileSizeEnum {
  KB = 'KB',
}

export const UploadFilesList = () => {
  const [files, setFiles] = useState<Array<AntUploadFile>>([]);

  const handleFilesUpload = (newFiles: AntUploadFile) => {
    setFiles((prevFiles: Array<AntUploadFile>) => [...prevFiles, newFiles]);
  };

  const removeFile = (_: MouseEvent<Element>, index: number): void => {
    const filterFiles: Array<AntUploadFile> = files.filter(
      (_, i: number) => i !== index,
    );
    setFiles(filterFiles);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <UploadFile
          color={UploadFileColor.blackColor}
          background={UploadFileColor.whiteBg}
          title="Choose files"
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
        {files.map((file: AntUploadFile, index: number) => (
          <FileItem
            file={file}
            onClick={(e: MouseEvent<Element>) => removeFile(e, index)}
            key={index}
            divide={1000}
            size={FileSizeEnum.KB}
          />
        ))}
      </div>
    </div>
  );
};
