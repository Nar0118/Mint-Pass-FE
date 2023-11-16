import styles from './home.module.scss';
import { LayerOrder } from '../layerOrder';

export default function HomePage(): JSX.Element {
  return (
    <div className={styles.container}>
      <LayerOrder />
    </div>
  );
}
