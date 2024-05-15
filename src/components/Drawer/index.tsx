import { Alice } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import ReactModernDrawer from "react-modern-drawer";
import { useShallow } from "zustand/react/shallow";
import styles from "./style.module.scss";
import menuItems from "@/lib/menuItems";
import useDrawerStore, { DrawerState } from "@/stores/useDrawerStore";

const alice = Alice({
  subsets: ["latin"],
  weight: "400",
});

export default function Drawer(): JSX.Element {
  const { isOpen, onClose } = useDrawerStore(
    useShallow<DrawerState, Pick<DrawerState, "isOpen" | "onClose">>(
      (state) => ({
        isOpen: state.isOpen,
        onClose: state.onClose,
      }),
    ),
  );
  const pathname = usePathname();

  useEffect(() => {
    onClose();
  }, [onClose, pathname]);

  return (
    <ReactModernDrawer
      className={styles.drawer}
      direction="right"
      onClose={onClose}
      open={isOpen}
    >
      <ul className={`${alice.className} ${styles.list}`}>
        {menuItems.map(({ path, text }) => (
          <li key={path}>
            <Link href={path}>{text}</Link>
          </li>
        ))}
      </ul>
    </ReactModernDrawer>
  );
}
