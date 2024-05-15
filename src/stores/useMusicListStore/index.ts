import { create } from "zustand";

type Music = {
  title: string;
  url: string;
};

export type MusicListState = {
  currentMusic?: Music;
  musicList: Music[];
  setCurrentMusic: (args: { currentMusic: Music | undefined }) => void;
  setMusicList: (args: { musicList: Music[] }) => void;
};

const useMusicListStore = create<MusicListState>((set) => ({
  currentMusic: undefined,
  musicList: [],
  setCurrentMusic: ({ currentMusic }): void => set({ currentMusic }),
  setMusicList: ({ musicList }): void => set({ musicList }),
}));

export default useMusicListStore;
