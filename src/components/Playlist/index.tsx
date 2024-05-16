"use client";
import Image from "next/image";
import { useEffect } from "react";
import { IoPauseSharp, IoPlaySharp } from "react-icons/io5";
import { SocialIcon } from "react-social-icons";
import Spacer from "react-spacer";
import { useShallow } from "zustand/react/shallow";
import styles from "./style.module.scss";
import getYouTubeId from "@/lib/getYouTubeId";
import useMusicListStore, { MusicListState } from "@/stores/useMusicListStore";

export default function Playlist(): JSX.Element {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const musicList = [
    {
      title: "YOUR STORIES",
      url: "https://www.youtube.com/watch?v=OQfSto4oF9g",
    },
    {
      title: "VocisHelix",
      url: "https://www.youtube.com/watch?v=cKKUMf7qQeo",
    },
    {
      title: "Time after time",
      url: "https://www.youtube.com/watch?v=tRLZLVfo1NQ",
    },
  ];
  const { currentMusic, offPlaying, playing, setCurrentMusic, setMusicList } =
    useMusicListStore(
      useShallow<
        MusicListState,
        Pick<
          MusicListState,
          | "currentMusic"
          | "offPlaying"
          | "playing"
          | "setCurrentMusic"
          | "setMusicList"
        >
      >((state) => ({
        currentMusic: state.currentMusic,
        offPlaying: state.offPlaying,
        playing: state.playing,
        setCurrentMusic: state.setCurrentMusic,
        setMusicList: state.setMusicList,
      })),
    );

  useEffect(() => {
    setMusicList({ musicList });
  }, [musicList, setMusicList]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <ul className={styles.list}>
          {musicList.map(({ title, url }) => (
            <li
              className={styles.item}
              key={url}
              onClick={() =>
                currentMusic?.url === url && playing
                  ? offPlaying()
                  : setCurrentMusic({ currentMusic: { title, url } })
              }
            >
              {currentMusic?.url === url && playing ? (
                <IoPauseSharp color="#e6c8b4" size={18} />
              ) : (
                <IoPlaySharp color="#e6c8b4" size={18} />
              )}
              <Image
                alt=""
                height={27}
                quality={100}
                src={`http://img.youtube.com/vi/${getYouTubeId({ url })}/mqdefault.jpg`}
                width={48}
              />
              <div className={styles.title}>{title}</div>
              <Spacer grow={1} />
              <SocialIcon
                className={styles.socialIcon}
                key={url}
                target="_blank"
                url={url}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
