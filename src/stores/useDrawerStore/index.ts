import { create } from "zustand";

export type DrawerState = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

const useDrawerStore = create<DrawerState>((set) => ({
  isOpen: false,
  onClose: (): void => set({ isOpen: false }),
  onOpen: (): void => set({ isOpen: true }),
}));

export default useDrawerStore;
