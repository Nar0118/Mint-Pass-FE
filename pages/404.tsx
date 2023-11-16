import Error from 'next/error';

import styles from './error.module.scss';

export default function NotFound(): JSX.Element {
  return (
    <div className={styles.container}>
      <Error statusCode={404} />
    </div>
  );
}
