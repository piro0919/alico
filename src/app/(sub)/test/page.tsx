"use client";
import { useEffect, useState } from "react";

export default function Page(): JSX.Element {
  const [iOSCanInstall, setIOSCanInstall] = useState(false);
  const [iOSIsInstalled, setIOSIsInstalled] = useState(false);

  useEffect(() => {
    setIOSCanInstall("standalone" in window.navigator);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setIOSIsInstalled(window.navigator?.standalone === true);
  }, [iOSCanInstall, iOSIsInstalled]);

  return (
    <div>
      <div>{`iOSCanInstall: ${iOSCanInstall}`}</div>
      <div>{`iOSIsInstalled: ${iOSIsInstalled}`}</div>
    </div>
  );
}
