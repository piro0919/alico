"use client";
import { useEffect, useState } from "react";

export default function Page(): JSX.Element {
  const [manifest, setManifest] = useState();
  const [cachesInWindow, setCachesInWindow] = useState<boolean>();

  useEffect(() => {
    const {
      navigator: { serviceWorker },
    } = window;

    if (!("getManifest" in serviceWorker)) {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const manifest = serviceWorker.getManifest();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setManifest(manifest);
  }, []);

  useEffect(() => {
    setCachesInWindow("caches" in window);
  }, []);

  return (
    <div>
      <div>{`manifest: ${JSON.stringify(manifest)}`}</div>
      <div>{`cachesInWindow: ${cachesInWindow}`}</div>
    </div>
  );
}
