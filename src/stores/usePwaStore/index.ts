import { create } from "zustand";

export type PwaState = {
  isLoading: boolean;
  isPwa: boolean;
  setIsLoading: (args: { isLoading: boolean }) => void;
  setIsPwa: (args: { isPwa: boolean }) => void;
};

const usePwaStore = create<PwaState>((set) => ({
  isLoading: true,
  isPwa: false,
  setIsLoading: ({ isLoading }): void => set({ isLoading }),
  setIsPwa: ({ isPwa }): void => set({ isPwa }),
}));

export default usePwaStore;
