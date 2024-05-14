import ReactModernDrawer from "react-modern-drawer";
import { useShallow } from "zustand/react/shallow";
import useDrawerStore, { DrawerState } from "@/stores/useDrawerStore";

export default function Drawer(): JSX.Element {
  const { isOpen, onClose } = useDrawerStore(
    useShallow<DrawerState, Pick<DrawerState, "isOpen" | "onClose">>(
      (state) => ({
        isOpen: state.isOpen,
        onClose: state.onClose,
      }),
    ),
  );

  return (
    <ReactModernDrawer direction="right" onClose={onClose} open={isOpen}>
      <div>Hello World</div>
    </ReactModernDrawer>
  );
}
