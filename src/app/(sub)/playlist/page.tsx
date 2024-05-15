import { Metadata } from "next";
import Playlist from "@/components/Playlist";

export const metadata: Metadata = {
  title: "PLAYLIST",
};

export default function Page(): JSX.Element {
  return <Playlist />;
}
