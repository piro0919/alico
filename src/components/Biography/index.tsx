import { Dancing_Script as DancingScript } from "next/font/google";
import Image from "next/image";
import styles from "./style.module.scss";

const dancingScript = DancingScript({
  subsets: ["latin"],
  weight: "400",
});

export default function Biography(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.imageWrapper}>
          <Image
            alt="alico"
            className={styles.image}
            fill={true}
            quality={100}
            src="/E0D3TGEUUAA3qp7.jpg"
          />
        </div>
        <div className={styles.textsWrapper}>
          <h2 className={`${dancingScript.className} ${styles.h2}`}>alico</h2>
          <p className={styles.description}>
            <span className={styles.newLine}>
              憂いを含んだ声質とピュアな響きで
            </span>
            <span className={styles.newLine}>
              クラシックからEDMまで歌いあげる
            </span>
            <span className={styles.newLine}>ソプラノアーティスト</span>
          </p>
        </div>
      </div>
    </div>
  );
}
