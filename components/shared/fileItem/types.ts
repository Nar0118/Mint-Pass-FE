import { UploadFile } from 'antd';
import { MouseEvent } from 'react';

export interface FileItemProps {
  file: UploadFile;
  onClick: (e: MouseEvent<Element>) => void;
  divide: number;
  size: string;
}
