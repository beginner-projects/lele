import styles from './withdrawBtn.module.css';

export default function WithdrawButton() {
  return (
    <button className={styles.withdrawBtn} role="button">
      Connect Wallet
    </button>
  );
}
