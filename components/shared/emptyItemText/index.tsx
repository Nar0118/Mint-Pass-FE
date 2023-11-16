import styles from './emptyItemText.module.scss';

export const EmptyItemText = ({ title }: { title: string }) => (
  <div className={styles.container}>No {title}</div>
);
