import styles from "./earning.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.greenDiv}>
        <div>
          <div>
            <p className={styles.pTagOnBoard}>My Balance:</p>
            <h1 className={styles.h1TagOnBoard}> 1000000 FLT</h1>
          </div>
          <div className={styles.dwBtn}>
            <button className={styles.DBtn}>Deposit</button>
            <button className={styles.WBtn}>Withdraw</button>
          </div>
        </div>
        <Image
          className={styles.flashLogoOnBoard}
          src="/flash.png"
          alt="logo"
          width={100}
          height={100}
        />
      </div>
      <div className={styles.orangeDiv}>
        <div>
          <div>
            <p className={styles.pTagOnBoard}>My Next Payout:</p>
            <h1 className={styles.h1TagOnBoard}> 10000000 sats</h1>
          </div>

          <h3>⚡ xyz.satoshi</h3>
        </div>
        <Image
          className={styles.bitcoinLogoOnBoard}
          src="/bitcoinFinal.png"
          alt="logo"
          width={100}
          height={100}
        />
      </div>
   
      <div className={styles.footerNav}>
        <Link href="/staking">
          <Image src="/back.svg" alt="back-icon" width={100} height={100} />
        </Link>
        <Link href="/">
          <Image src="/home.svg" alt="home-icon" width={100} height={100} />
        </Link>
        <Link href="/about">
          <Image src="/info.svg" alt="info-icon" width={100} height={100} />
        </Link>
      </div>
    </div>
  );
}
