import format from "format-duration";
import Image from "next/image";
import { Line } from "rc-progress";
import { useEffect, useRef, useState } from "react";
import {
  IoCaretDownSharp,
  IoPauseSharp,
  IoPlaySharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
} from "react-icons/io5";
import ReactPlayer from "react-player";
import { OnProgressProps } from "react-player/base";
import Spacer from "react-spacer";
import { useBoolean } from "usehooks-ts";
import { useShallow } from "zustand/react/shallow";
import styles from "./style.module.scss";
import getYouTubeId from "@/lib/getYouTubeId";
import useMusicListStore, { MusicListState } from "@/stores/useMusicListStore";

export default function MusicPlayer(): JSX.Element {
  const { currentMusic, musicList, setCurrentMusic } = useMusicListStore(
    useShallow<
      MusicListState,
      Pick<MusicListState, "currentMusic" | "musicList" | "setCurrentMusic">
    >((state) => ({
      currentMusic: state.currentMusic,
      musicList: state.musicList,
      setCurrentMusic: state.setCurrentMusic,
    })),
  );
  const ref = useRef<ReactPlayer>(null);
  const {
    setFalse: offPlaying,
    setTrue: onPlaying,
    value: playing,
  } = useBoolean(false);
  const [{ played, playedSeconds }, setOnProgressProps] =
    useState<OnProgressProps>({
      loaded: 0,
      loadedSeconds: 0,
      played: 0,
      playedSeconds: 0,
    });

  useEffect(() => {
    if (!currentMusic) {
      return;
    }

    onPlaying();
  }, [currentMusic, onPlaying]);

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <button onClick={() => ref.current?.seekTo(0)}>
            <IoPlaySkipBackSharp size={18} />
          </button>
          {playing ? (
            <button onClick={() => offPlaying()}>
              <IoPauseSharp size={30} />
            </button>
          ) : (
            <button onClick={() => onPlaying()}>
              <IoPlaySharp size={30} />
            </button>
          )}
          <button
            onClick={() => {
              const index = musicList.findIndex(
                ({ url }) => currentMusic?.url === url,
              );

              setCurrentMusic({
                currentMusic: musicList[(index + 1) % musicList.length],
              });
            }}
          >
            <IoPlaySkipForwardSharp size={18} />
          </button>
          {currentMusic ? (
            <Image
              alt=""
              className={styles.image}
              height={27}
              quality={100}
              src={`http://img.youtube.com/vi/${getYouTubeId({ url: currentMusic.url })}/mqdefault.jpg`}
              width={48}
            />
          ) : null}
          <div className={styles.title}>{currentMusic?.title}</div>
          <Spacer grow={1} />
          <div className={styles.duration}>
            {ref.current
              ? `${format(Math.floor(playedSeconds) * 1000)} / ${format(ref.current.getDuration() * 1000)}`
              : ""}
          </div>
          <button onClick={() => setCurrentMusic({ currentMusic: undefined })}>
            <IoCaretDownSharp size={18} />
          </button>
        </div>
      </div>
      <div className={styles.lineWrapper}>
        <Line
          percent={played * 100}
          strokeColor="red"
          strokeLinecap="square"
          trailColor="#666"
        />
      </div>
      <ReactPlayer
        className={styles.reactPlayer}
        onEnded={() => {
          const index = musicList.findIndex(
            ({ url }) => currentMusic?.url === url,
          );

          setCurrentMusic({
            currentMusic: musicList[(index + 1) % musicList.length],
          });
        }}
        onProgress={(onProgressProps) => setOnProgressProps(onProgressProps)}
        playing={playing}
        progressInterval={100}
        ref={ref}
        url={currentMusic?.url}
      />
    </div>
  );
}
