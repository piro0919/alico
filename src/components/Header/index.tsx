import { Alice, Dancing_Script as DancingScript } from "next/font/google";
import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";
import styles from "./style.module.scss";
import menuItems from "@/lib/menuItems";
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
            {menuItems.map(({ path, text }) => (
              <li key={path}>
                <Link href={path}>{text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
