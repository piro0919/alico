"use client";
import Image from "next/image";
import { useEffect } from "react";
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
  const { setCurrentMusic, setMusicList } = useMusicListStore(
    useShallow<
      MusicListState,
      Pick<MusicListState, "setCurrentMusic" | "setMusicList">
    >((state) => ({
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
              onClick={() => setCurrentMusic({ currentMusic: { title, url } })}
            >
              <Image
                alt=""
                height={27}
                quality={100}
                src={`http://img.youtube.com/vi/${getYouTubeId({ url })}/mqdefault.jpg`}
                width={48}
              />
              <div className={styles.title}>{title}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
