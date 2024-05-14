"use client";
import NoSSR from "@mpth/react-no-ssr";
import { motion } from "framer-motion";
import { Dancing_Script as DancingScript, Quando } from "next/font/google";
import Image from "next/image";
import noScroll from "no-scroll";
import { useEffect } from "react";
import { MdExpandCircleDown } from "react-icons/md";
import { TailSpin } from "react-loader-spinner";
import { Element, scroller } from "react-scroll";
import Masonry from "react-smart-masonry";
import { SocialIcon } from "react-social-icons";
import Spacer from "react-spacer";
import { Timeline } from "react-twitter-widgets";
import YouTube from "react-youtube";
import sleep from "sleep-promise";
import { useShallow } from "zustand/react/shallow";
import Header from "../Header";
import styles from "./style.module.scss";
import usePwaStore, { PwaState } from "@/stores/usePwaStore";

const dancingScript = DancingScript({
  subsets: ["latin"],
  weight: "400",
});
const quando = Quando({
  subsets: ["latin"],
  weight: "400",
});

export default function App(): JSX.Element {
  const { isLoading, isPwa } = usePwaStore(
    useShallow<PwaState, Pick<PwaState, "isLoading" | "isPwa">>((state) => ({
      isLoading: state.isLoading,
      isPwa: state.isPwa,
    })),
  );

  useEffect(() => {
    const callback = async (): Promise<void> => {
      if (isLoading) {
        noScroll.on();

        return;
      }

      await sleep(1000);

      noScroll.off();
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    callback();
  }, [isLoading]);

  return (
    <>
      <div className={styles.topWrapper}>
        <div className={styles.leftWrapper}>
          <div className={`pattern-cross-dots-md ${styles.diagonalLines}`} />
          <motion.div
            animate={{ opacity: isLoading ? 1 : 0 }}
            className={styles.loadingWrapper}
            initial={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <TailSpin color="#fff" height="60" radius="1" width="60" />
          </motion.div>
          <motion.div
            animate={{ opacity: isLoading ? 0 : 1 }}
            className={styles.textsWrapper}
            initial={{ opacity: 0 }}
            transition={{ delay: 1 }}
          >
            <h1 className={`${dancingScript.className} ${styles.h1}`}>
              alico in Singerland
            </h1>
            <div className={styles.text}>
              {isPwa ? "alico オフィシャルアプリ" : "alico オフィシャルサイト"}
            </div>
          </motion.div>
        </div>
        <div className={styles.rightWrapper}>
          <Image
            alt="alico"
            className={styles.image}
            fill={true}
            src="/312167906_424940613049488_3487110088321145466_n.jpg"
          />
        </div>
        <motion.button
          animate={{
            bottom: isLoading ? "-48px" : "18px",
            opacity: isLoading || isPwa ? 0 : 1,
          }}
          className={styles.button}
          initial={{ bottom: "-48px", opacity: 0 }}
          onClick={() =>
            scroller.scrollTo("content", {
              duration: 500,
              smooth: "easeInOutQuad",
            })
          }
          transition={{ delay: 1 }}
        >
          <MdExpandCircleDown color="#fff" size={48} />
        </motion.button>
      </div>
      <Element name="content">
        {isLoading ? null : (
          <motion.div
            animate={{ opacity: 1 }}
            className={styles.contentWrapper}
            initial={{ opacity: isPwa ? 0 : 1 }}
            style={{
              marginTop: isPwa ? "-100dvh" : 0,
            }}
            transition={{ delay: 1 }}
          >
            <div className={styles.headerWrapper}>
              <Header />
            </div>
            <main className={styles.main}>
              <NoSSR>
                <Masonry
                  autoArrange={true}
                  breakpoints={{
                    desktop: 980,
                    mobile: 0,
                    tablet: 740,
                    wide: 1300,
                  }}
                  className={styles.masonry}
                  columns={{
                    desktop: 2,
                    mobile: 1,
                  }}
                  gap={{
                    desktop: 36,
                    mobile: 12,
                    tablet: 24,
                  }}
                >
                  <article className={styles.article} data-article="topics">
                    <div className={styles.h2Wrapper}>
                      <h2 className={`${quando.className} ${styles.h2}`}>
                        TOPICS
                      </h2>
                    </div>
                    <hr className={styles.hr} />
                    <div className={styles.content}>
                      <ul className={styles.list}>
                        {Array(3)
                          .fill(undefined)
                          .map((_, index) => (
                            <li key={index}>
                              <div className={styles.date}>2024.05.01</div>
                              <div className={styles.title}>
                                2ndオリジナルアルバム『残夢』店舗別購入特典絵柄決定！
                              </div>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </article>
                  <article
                    className={styles.article}
                    data-article="music-video"
                  >
                    <div className={styles.h2Wrapper}>
                      <h2 className={`${quando.className} ${styles.h2}`}>
                        MUSIC VIDEO
                      </h2>
                    </div>
                    <YouTube
                      className={styles.youTube}
                      iframeClassName={styles.youTubeIframe}
                      videoId="8Xcl3x8kxM4"
                    />
                  </article>
                  <article
                    className={styles.article}
                    data-article="new-release"
                  >
                    <div className={styles.h2Wrapper}>
                      <h2 className={`${quando.className} ${styles.h2}`}>
                        NEW RELEASE
                      </h2>
                    </div>
                    <hr className={styles.hr} />
                    <div className={styles.content}>
                      <ul className={styles.list}>
                        {Array(3)
                          .fill(undefined)
                          .map((_, index) => (
                            <li className={styles.item} key={index}>
                              <div className={styles.thumbnailWrapper}>
                                <Image
                                  alt=""
                                  fill={true}
                                  quality={100}
                                  src="/ite587325.jpg"
                                />
                              </div>
                              <div className={styles.detailWrapper}>
                                <div className={styles.releaseWrapper}>
                                  2020.01.31
                                </div>
                                <div className={styles.titleWrapper}>
                                  薔薇とケモノ
                                </div>
                                <Spacer grow="1" />
                                <div className={styles.socialIcons}>
                                  <SocialIcon
                                    bgColor="#e6c8b4"
                                    className={styles.socialIcon}
                                    target="_blank"
                                    url="https://linkco.re/CzbhDud6"
                                  />
                                </div>
                              </div>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </article>
                  <article className={styles.article} data-article="x">
                    <div className={styles.h2Wrapper}>
                      <h2 className={`${quando.className} ${styles.h2}`}>X</h2>
                    </div>
                    <hr className={styles.hr} />
                    <div className={styles.content}>
                      <Timeline
                        dataSource={{
                          screenName: "ALItheatreCO",
                          sourceType: "profile",
                        }}
                        options={{
                          chrome: "noheader, nofooter",
                          dnt: true,
                          height: "480",
                          lang: "ja",
                        }}
                      />
                    </div>
                  </article>
                </Masonry>
              </NoSSR>
            </main>
          </motion.div>
        )}
      </Element>
    </>
  );
}
