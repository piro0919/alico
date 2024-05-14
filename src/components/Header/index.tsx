import { Alice, Dancing_Script as DancingScript } from "next/font/google";
import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";
import styles from "./style.module.scss";
import useDrawerStore from "@/stores/useDrawerStore";

const alice = Alice({
  subsets: ["latin"],
  weight: "400",
});
const dancingScript = DancingScript({
  subsets: ["latin"],
  weight: "700",
});

export default function Header(): JSX.Element {
  const onOpen = useDrawerStore((state) => state.onOpen);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={`${dancingScript.className} ${styles.title}`} href="/">
          alico in Singerland
        </Link>
        <button className={styles.button} onClick={onOpen}>
          <CgMenuRight color="#fff" size={24} />
        </button>
        <nav className={styles.nav}>
          <ul className={`${alice.className} ${styles.list}`}>
            <li>
              <Link href="/biography">BIOGRAPHY</Link>
            </li>
            <li>
              <Link href="/discography">DISCOGRAPHY</Link>
            </li>
            <li>
              <Link href="/playlist">PLAYLIST</Link>
            </li>
            <li>
              <Link href="/blog">BLOG</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
