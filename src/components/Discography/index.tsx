import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import Spacer from "react-spacer";
import styles from "./style.module.scss";

export default function Discography(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <ul className={styles.list}>
          {[
            {
              date: "2023.07.01",
              imageUrl: "/large_5e3c349d27104c54680baf8ec787f0c7.jpg",
              title: "YOUR STORIES",
              url: "https://big-up.style/o6dSutDye8",
            },
            {
              date: "2023.04.01",
              imageUrl: "/large_a3ff8d440e181a8f1771430faedc4f92.jpg",
              title: "Vocis Helix",
              url: "https://big-up.style/xmc4ZV8n83",
            },
            {
              date: "2020.01.31",
              imageUrl: "/itew587325.webp",
              title: "薔薇とケモノ",
              url: "https://linkco.re/CzbhDud6",
            },
            {
              date: "2020.01.31",
              imageUrl: "/itew586790.webp",
              title: "彩虹のアインシュリット",
              url: "https://linkco.re/6nymY3zP",
            },
            {
              date: "2020.01.31",
              imageUrl: "/itew587324.webp",
              title: "春告の贄",
              url: "https://linkco.re/mNmA3trV",
            },
          ].map(({ date, imageUrl, title, url }) => (
            <li className={styles.item} key={url}>
              <div className={styles.thumbnailWrapper}>
                <Image alt={title} fill={true} quality={100} src={imageUrl} />
              </div>
              <div className={styles.detailWrapper}>
                <div className={styles.releaseWrapper}>{date}</div>
                <div className={styles.titleWrapper}>{title}</div>
                <Spacer grow="1" />
                <div className={styles.socialIcons}>
                  <SocialIcon
                    bgColor="#e6c8b4"
                    className={styles.socialIcon}
                    target="_blank"
                    url={url}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
