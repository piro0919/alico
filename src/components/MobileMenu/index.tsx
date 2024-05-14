import { Quicksand } from "next/font/google";
import styles from "./style.module.scss";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: "700",
});

export default function MobileMenu(): JSX.Element {
  return (
    <nav className={styles.nav}>
      <ul className={`${quicksand.className} ${styles.list}`}>
        <li>BIOGRAPHY</li>
        <li>DISCOGRAPHY</li>
        <li>PLAYLIST</li>
        <li>BLOG</li>
      </ul>
    </nav>
  );
}
