import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { LoaderProps } from './types';

import styles from './loader.module.scss';

export default function Loader({
  style = true,
  isFullScreen = false,
}: LoaderProps): JSX.Element {
  const antIcon = <LoadingOutlined className={styles.spiner} spin />;
  const margin = style ? {} : { margin: 0 };
  return (
    <div
      className={`${styles.loader} ${isFullScreen && styles.fullScreen}`}
      style={margin}
    >
      <Spin indicator={antIcon} />
    </div>
  );
}
