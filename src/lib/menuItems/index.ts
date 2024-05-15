import { BiUser } from "react-icons/bi";
import { FaMicrophoneAlt } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { GrTest } from "react-icons/gr";
import { RiPlayListFill } from "react-icons/ri";

const menuItems = [
  {
    Icon: BiUser,
    path: "/biography",
    text: "BIOGRAPHY",
  },
  {
    Icon: FaMicrophoneAlt,
    path: "/discography",
    text: "DISCOGRAPHY",
  },
  {
    Icon: RiPlayListFill,
    path: "/playlist",
    text: "PLAYLIST",
  },
  {
    Icon: GiNotebook,
    path: "/blog",
    text: "BLOG",
  },
  {
    Icon: GrTest,
    path: "/test",
    text: "TEST",
  },
] as const;

export default menuItems;
