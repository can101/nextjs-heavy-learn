import Link from "next/link";
import React from "react";
import Styles from "./styles.module.css";
import { AiFillHeart } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className={Styles.footer}>
      Made with{" "}
      <AiFillHeart style={{ color: "red", marginRight: 5, marginLeft: 5 }} />{" "}
      by&nbsp;
      <Link href={"https://twitter.com/Canelik24386471"}>Can Çelik</Link>
    </footer>
  );
}
