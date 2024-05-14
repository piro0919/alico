import { SocialIcon } from "react-social-icons";
import styles from "./style.module.scss";

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.copyrightWrapper}>
          &copy; 2024 alico in Singerland
        </div>
        <div className={styles.socialIcons}>
          {[
            "https://www.instagram.com/alico_soprano/",
            "https://www.youtube.com/c/alico_vocal",
            "https://www.tiktok.com/@alico_soprano",
            "https://x.com/ALItheatreCO",
          ].map((url) => (
            <SocialIcon
              className={styles.socialIcon}
              key={url}
              target="_blank"
              url={url}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
