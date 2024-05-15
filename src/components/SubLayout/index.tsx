"use client";
import { Quando } from "next/font/google";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Header from "../Header";
import styles from "./style.module.scss";
import menuItems from "@/lib/menuItems";
import usePwaStore from "@/stores/usePwaStore";

const quando = Quando({
  subsets: ["latin"],
  weight: "400",
});

export type SubLayoutProps = {
  children: ReactNode;
};

export default function SubLayout({ children }: SubLayoutProps): JSX.Element {
  const isPwa = usePwaStore((state) => state.isPwa);
  const pathname = usePathname();
  const menuItem = menuItems.find(({ path }) => pathname === path);

  if (!menuItem) {
    throw new Error("menuItem not found");
  }

  const { text } = menuItem;

  return (
    <div
      className={styles.wrapper}
      style={{ gridTemplateRows: isPwa ? "auto 1fr" : "auto auto 1fr" }}
    >
      {isPwa ? null : (
        <div className={styles.topWrapper}>
          <div className={styles.imageWrapper}>
            <Image
              alt="alico"
              className={styles.image}
              fill={true}
              src="/E0D3hjJVcAMIVR0.jpg"
            />
          </div>
          <h1 className={`${quando.className} ${styles.h1}`}>{text}</h1>
        </div>
      )}
      <div className={styles.headerWrapper}>
        <Header />
      </div>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
