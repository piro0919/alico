import { Alice } from "next/font/google";
import Link from "next/link";
import styles from "./style.module.scss";
import menuItems from "@/lib/menuItems";

const alice = Alice({
  subsets: ["latin"],
  weight: "400",
});

export default function MobileMenu(): JSX.Element {
  return (
    <nav className={styles.nav}>
      <ul className={`${alice.className} ${styles.list}`}>
        {menuItems.map(({ Icon, path, text }) => (
          <li key={path}>
            <Link className={styles.link} href={path}>
              <Icon size={24} />
              <span>{text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
