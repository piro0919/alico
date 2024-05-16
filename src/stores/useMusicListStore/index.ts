import { create } from "zustand";

type Music = {
  title: string;
  url: string;
};

export type MusicListState = {
  currentMusic?: Music;
  musicList: Music[];
  offPlaying: () => void;
  onPlaying: () => void;
  playing: boolean;
  setCurrentMusic: (args: { currentMusic: Music | undefined }) => void;
  setMusicList: (args: { musicList: Music[] }) => void;
};

const useMusicListStore = create<MusicListState>((set) => ({
  currentMusic: undefined,
  musicList: [],
  offPlaying: (): void => set({ playing: false }),
  onPlaying: (): void => set({ playing: true }),
  playing: false,
  setCurrentMusic: ({ currentMusic }): void => set({ currentMusic }),
  setMusicList: ({ musicList }): void => set({ musicList }),
}));

export default useMusicListStore;
