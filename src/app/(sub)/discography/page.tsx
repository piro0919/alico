import { Metadata } from "next";
import Discography from "@/components/Discography";

export const metadata: Metadata = {
  title: "DISCOGRAPHY",
};

export default function Page(): JSX.Element {
  return <Discography />;
}
