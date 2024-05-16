"use client";
import NoSSR from "@mpth/react-no-ssr";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
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

const PWAPrompt = dynamic(() => import("react-ios-pwa-prompt"), {
  ssr: false,
});

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
  const { isLoading, isPwa } = usePwa();
  const { setIsLoading, setIsPwa } = usePwaStore(
    useShallow<PwaState, Pick<PwaState, "setIsLoading" | "setIsPwa">>(
      (state) => ({
        setIsLoading: state.setIsLoading,
        setIsPwa: state.setIsPwa,
      }),
    ),
  );
  const [paddingBottom, setPaddingBottom] = useState(0);

  useShowWindowSize();

  useEffect(() => {
    setIsLoading({ isLoading });
  }, [isLoading, setIsLoading]);

  useEffect(() => {
    setIsPwa({ isPwa: env.NEXT_PUBLIC_IS_PWA === "true" || isPwa });
  }, [isPwa, setIsPwa]);

  return (
    <>
      <motion.div animate={{ paddingBottom }} className={styles.wrapper}>
        {children}
        {isLoading ? null : (
          <CommonFooter setPaddingBottom={setPaddingBottom} />
        )}
      </motion.div>
      <NoSSR>
        <Drawer />
      </NoSSR>
      <ProgressBar color="#fff" height="2px" />
      <PWAPrompt
        copyAddHomeButtonLabel="2) 「ホーム画面に追加」をタップします。"
        copyBody="このウェブサイトにはアプリ機能があります。ホーム画面に追加してフルスクリーンおよびオフラインで使用できます。"
        copyClosePrompt="キャンセル"
        copyShareButtonLabel="1) （四角から矢印が飛び出したマーク）をタップします。"
        copyTitle="ホーム画面に追加"
        debug={
          process.env.NODE_ENV === "development" &&
          env.NEXT_PUBLIC_IS_PWA === "true"
        }
      />
    </>
  );
}
