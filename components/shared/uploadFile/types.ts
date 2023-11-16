import { RcFile } from 'antd/es/upload';

export interface IUploadFile {
  title: string;
  withIcon?: boolean;
  type?: UploadFileType;
  onChange: (e: RcFile) => void;
  color?: UploadFileColor;
  background?: UploadFileColor;
}

export enum UploadFileType {
  small = 'small',
  big = 'big',
}

export enum UploadFileColor {
  blackColor = 'black',
  whiteBg = 'whiteBg',
}
