"use client";
import { motion } from "framer-motion";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ReactNode, useEffect } from "react";
import useMeasure from "react-use-measure";
import usePwa from "use-pwa";
import { useWindowSize } from "usehooks-ts";
import { useShallow } from "zustand/react/shallow";
import Drawer from "../Drawer";
import Footer from "../Footer";
import MobileMenu from "../MobileMenu";
import styles from "./style.module.scss";
import env from "@/env";
import useShowWindowSize from "@/hooks/useShowWindowSize";
import usePwaStore, { PwaState } from "@/stores/usePwaStore";

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
  const [ref, { height }] = useMeasure();
  const { width } = useWindowSize();

  useShowWindowSize();

  useEffect(() => {
    setIsLoading({ isLoading });
  }, [isLoading, setIsLoading]);

  useEffect(() => {
    setIsPwa({ isPwa });
  }, [isPwa, setIsPwa]);

  return (
    <>
      <div className={styles.wrapper} style={{ marginBottom: height }}>
        {children}
        {isLoading ? null : width < 980 &&
          (env.NEXT_PUBLIC_IS_PWA === "true" || isPwa) ? (
          <motion.div
            animate={{ opacity: 1 }}
            className={styles.mobileMenuWrapper}
            initial={{ opacity: 0 }}
            ref={ref}
            transition={{ delay: 1 }}
          >
            <MobileMenu />
          </motion.div>
        ) : (
          <Footer />
        )}
      </div>
      <Drawer />
      <ProgressBar />
    </>
  );
}
