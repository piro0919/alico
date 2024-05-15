"use client";
import NoSSR from "@mpth/react-no-ssr";
import { motion } from "framer-motion";
import { Dancing_Script as DancingScript, Quando } from "next/font/google";
import Image from "next/image";
import noScroll from "no-scroll";
import { useEffect } from "react";
import { MdExpandCircleDown } from "react-icons/md";
import { TailSpin } from "react-loader-spinner";
import ReactPlayer from "react-player";
import { Element, scroller } from "react-scroll";
import Masonry from "react-smart-masonry";
import { SocialIcon } from "react-social-icons";
import Spacer from "react-spacer";
import { Timeline } from "react-twitter-widgets";
import usePwa from "use-pwa";
import { useSessionStorage } from "usehooks-ts";
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
  const { canInstallprompt, enabledPwa, showInstallPrompt } = usePwa();
  const [isShowTop, setIsShowTop] = useSessionStorage("is-show-top", true);

  useEffect(() => {
    if (isLoading) {
      noScroll.on();

      return;
    }

    const timeout = setTimeout(() => {
      noScroll.off();
      setIsShowTop(false);
    }, 2000);

    return (): void => clearTimeout(timeout);
  }, [isLoading, setIsShowTop]);

  return (
    <>
      <div style={{ opacity: isPwa && !isShowTop ? 0 : 1 }}>
        <motion.div
          animate={{ opacity: isPwa ? 0 : 1 }}
          className={styles.topWrapper}
          initial={{ opacity: 1 }}
          style={{
            pointerEvents: isPwa ? "none" : "auto",
          }}
          transition={{ delay: 1 }}
        >
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
                {isPwa
                  ? "alico オフィシャルアプリ"
                  : "alico オフィシャルサイト"}
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
        </motion.div>
      </div>
      <Element name="content">
        {isLoading ? null : (
          <motion.div
            className={styles.contentWrapper}
            style={{
              marginTop: isPwa ? "-100dvh" : 0,
            }}
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
                        {Array(1)
                          .fill(undefined)
                          .map((_, index) => (
                            <li key={index}>
                              <div className={styles.date}>2024.06.01</div>
                              <div className={styles.title}>
                                alico in Singerland オープン！
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
                    <ReactPlayer
                      className={styles.reactPlayer}
                      iframeClassName={styles.reactPlayerIframe}
                      url="https://www.youtube.com/watch?v=8Xcl3x8kxM4"
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
                        {[
                          {
                            date: "2023.07.01",
                            imageUrl:
                              "/large_5e3c349d27104c54680baf8ec787f0c7.jpg",
                            title: "YOUR STORIES",
                            url: "https://big-up.style/musics/554840",
                          },
                          {
                            date: "2023.04.01",
                            imageUrl:
                              "/large_a3ff8d440e181a8f1771430faedc4f92.jpg",
                            title: "Vocis Helix",
                            url: "https://big-up.style/xmc4ZV8n83",
                          },
                          {
                            date: "2020.01.31",
                            imageUrl: "/itew587325.webp",
                            title: "薔薇とケモノ",
                            url: "https://linkco.re/CzbhDud6",
                          },
                        ].map(({ date, imageUrl, title, url }) => (
                          <li className={styles.item} key={url}>
                            <div className={styles.thumbnailWrapper}>
                              <Image
                                alt={title}
                                fill={true}
                                quality={100}
                                src={imageUrl}
                              />
                            </div>
                            <div className={styles.detailWrapper}>
                              <div className={styles.releaseWrapper}>
                                {date}
                              </div>
                              <div className={styles.titleWrapper}>{title}</div>
                              <Spacer grow="1" />
                              <div className={styles.socialIcons}>
                                <SocialIcon
                                  bgColor="#e6c8b4"
                                  className={styles.socialIcon}
                                  target="_blank"
                                  url={url}
                                />
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                  <article className={styles.article} data-article="link">
                    <div className={styles.h2Wrapper}>
                      <h2 className={`${quando.className} ${styles.h2}`}>
                        LINK
                      </h2>
                    </div>
                    <hr className={styles.hr} />
                    <div className={styles.content}>
                      <ul className={styles.list}>
                        <li>
                          <a
                            className={styles.title}
                            href="https://line.me/ti/g2/sQ39n2ITWk4ADOb9yEU3zCHgtcY8RvfzrwQYSw?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
                            target="_blank"
                          >
                            TikTok配信スケジュール
                          </a>
                          <p className={styles.description}>
                            LINEオープンチャットでお知らせします！
                          </p>
                        </li>
                        <li>
                          <a
                            className={styles.title}
                            href="https://docs.google.com/spreadsheets/d/12x8EPpWWBGktdHA_aulRtZ3HUnLJ2mhY7laBdwrk-j8/edit"
                            target="_blank"
                          >
                            カラオケリスト
                          </a>
                          <p className={styles.description}>
                            曲リクエストはこちらからどうぞ！
                          </p>
                        </li>
                        {canInstallprompt && enabledPwa && !isPwa ? (
                          <li>
                            <div
                              className={styles.title}
                              onClick={() => showInstallPrompt()}
                            >
                              alicoオフィシャルアプリ
                            </div>
                            <p className={styles.description}>
                              こちらからダウンロード！
                            </p>
                          </li>
                        ) : null}
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
