"use client";
import usePwa from "use-pwa";

export default function Page(): JSX.Element {
  const hoge = usePwa();

  return <div style={{ fontSize: "20px" }}>{JSON.stringify(hoge)}</div>;
}
