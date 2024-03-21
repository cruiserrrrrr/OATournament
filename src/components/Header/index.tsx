import { Logo } from "../Logo";
import styles from "./index.module.scss";
import { FC } from "react";



export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  )
};