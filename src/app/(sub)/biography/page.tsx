import { Metadata } from "next";
import Biography from "@/components/Biography";

export const metadata: Metadata = {
  title: "BIOGRAPHY",
};

export default function Page(): JSX.Element {
  return <Biography />;
}
