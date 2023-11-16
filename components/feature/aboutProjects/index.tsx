import styles from './index.module.scss';

const UserBanner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleContainer}>
        <p>
          Join other creators and teams who’ve used MintPass launch and manage
          their <span className={styles.nftPR}>NFT projects.</span>
        </p>
      </div>
      <div className={styles.useTypes}>
        <span className={styles.boxes}>Nft generator</span>
        <span className={styles.boxes}>Optimized smart contracts</span>
        <span className={styles.boxes}>Completed ownership</span>
        <span className={styles.boxes}>All in one platform</span>
        <span className={styles.boxes}>Multi chain</span>
        <span className={styles.boxes}>Minted website</span>
        <span className={styles.boxes}>Whitelist</span>
      </div>
    </div>
  );
};

export default UserBanner;
