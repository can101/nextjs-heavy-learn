import Link from "next/link";
import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import Styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={`${Styles.header} container fluid`}>
      <div className={Styles.headerWrapper}>
        <Link href={"/"} className={Styles.logo}>
          <FaPlayCircle /> NETFILMS
        </Link>
        <nav className={Styles.navigationMenu}>
          <Link href={"/"}>Movies</Link>
          <Link href={"/"}>Series</Link>
          <Link href={"/"}>Kids</Link>
        </nav>
      </div>
    </header>
  );
}
