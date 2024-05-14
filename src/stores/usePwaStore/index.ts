import { create } from "zustand";
import env from "@/env";

export type PwaState = {
  isLoading: boolean;
  isPwa: boolean;
  setIsLoading: (args: { isLoading: boolean }) => void;
  setIsPwa: (args: { isPwa: boolean }) => void;
};

const usePwaStore = create<PwaState>((set) => ({
  isLoading: true,
  isPwa: env.NEXT_PUBLIC_IS_PWA === "true" || false,
  setIsLoading: ({ isLoading }): void => set({ isLoading }),
  setIsPwa: ({ isPwa }): void =>
    set({ isPwa: env.NEXT_PUBLIC_IS_PWA === "true" || isPwa }),
}));

export default usePwaStore;
