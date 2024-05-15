"use client";
import { motion } from "framer-motion";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ReactNode, useEffect, useState } from "react";
import usePwa from "use-pwa";
import { useWindowSize } from "usehooks-ts";
import { useShallow } from "zustand/react/shallow";
import Drawer from "../Drawer";
import Footer from "../Footer";
import MobileMenu from "../MobileMenu";
import MusicPlayer from "../MusicPlayer";
import styles from "./style.module.scss";
import env from "@/env";
import useShowWindowSize from "@/hooks/useShowWindowSize";
import useMusicListStore from "@/stores/useMusicListStore";
import usePwaStore, { PwaState } from "@/stores/usePwaStore";

type CommonFooterProps = {
  setPaddingBottom: (paddingBottom: number) => void;
};

function CommonFooter({ setPaddingBottom }: CommonFooterProps): JSX.Element {
  const currentMusic = useMusicListStore((state) => state.currentMusic);
  const isPwa = usePwaStore((state) => state.isPwa);
  const { width } = useWindowSize();
  const children = (
    <>
      <motion.div
        animate={currentMusic ? "open" : "closed"}
        className={styles.musicPlayerWrapper}
        initial="closed"
        variants={{
          closed: {
            height: 0,
          },
          open: {
            height: "64px",
          },
        }}
      >
        <MusicPlayer />
      </motion.div>
      <div className={styles.footerWrapper}>
        {isPwa && width < 980 ? <MobileMenu /> : <Footer />}
      </div>
    </>
  );

  useEffect(() => {
    if (!isPwa || width >= 980) {
      setPaddingBottom(0);

      return;
    }

    setPaddingBottom(64 * (currentMusic ? 2 : 1));
  }, [currentMusic, isPwa, setPaddingBottom, width]);

  return isPwa && width < 980 ? (
    <div className={styles.pwaInner}>{children}</div>
  ) : (
    <>{children}</>
  );
}

export type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  const { isLoading: initialIsLoading, isPwa: initialIsPwa } = usePwa();
  const { setIsLoading, setIsPwa } = usePwaStore(
    useShallow<PwaState, Pick<PwaState, "setIsLoading" | "setIsPwa">>(
      (state) => ({
        setIsLoading: state.setIsLoading,
        setIsPwa: state.setIsPwa,
      }),
    ),
  );
  const isLoading = usePwaStore((state) => state.isLoading);
  const [paddingBottom, setPaddingBottom] = useState(0);

  useShowWindowSize();

  useEffect(() => {
    setIsLoading({ isLoading: initialIsLoading });
  }, [initialIsLoading, setIsLoading]);

  useEffect(() => {
    setIsPwa({ isPwa: env.NEXT_PUBLIC_IS_PWA === "true" || initialIsPwa });
  }, [initialIsPwa, setIsPwa]);

  return (
    <>
      <motion.div animate={{ paddingBottom }} className={styles.wrapper}>
        {children}
        {isLoading ? null : (
          <CommonFooter setPaddingBottom={setPaddingBottom} />
        )}
      </motion.div>
      <Drawer />
      <ProgressBar color="#fff" height="2px" />
    </>
  );
}
