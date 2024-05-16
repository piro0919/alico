// eslint-disable-next-line filenames/match-exported
import type { Metadata } from "next";
import { Shippori_Antique as ShipporiAntique } from "next/font/google";
import "pattern.css";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import "react-modern-drawer/dist/index.css";
import "ress";
import "./globals.scss";
import Layout from "@/components/Layout";

const shipporiAntique = ShipporiAntique({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  description: "alico のオフィシャルサイト。",
  title: {
    default: "alico in Singerland - alico オフィシャルサイト",
    template: "%s - alico in Singerland - alico オフィシャルサイト",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="ja">
      <body className={shipporiAntique.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
