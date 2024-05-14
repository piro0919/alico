"use client";
import { Quando } from "next/font/google";
import Image from "next/image";
import { ReactNode } from "react";
import Header from "../Header";
import styles from "./style.module.scss";

const quando = Quando({
  subsets: ["latin"],
  weight: "400",
});

export type SubLayoutProps = {
  children: ReactNode;
};

export default function SubLayout({ children }: SubLayoutProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            alt="alico"
            className={styles.image}
            fill={true}
            src="/E0D3hjJVcAMIVR0.jpg"
          />
        </div>
        <h1 className={`${quando.className} ${styles.h1}`}>BIOGRAPHY</h1>
      </div>
      <div className={styles.headerWrapper}>
        <Header />
      </div>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
