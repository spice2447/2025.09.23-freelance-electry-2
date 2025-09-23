import { FC, useState } from "react";
import styles from "./MenuItem.module.scss";
import Image from "next/image";
import arrow from "@/../public/svg/arrow-menu.svg";
import { INav } from "../Header";
import cn from "classnames";
// export interface IMenu {
//   id?: number;
//   question: string;
//   answer: string;
// }

export const MenuItem: FC<INav> = (props) => {
  const { text, subNav, link } = props;
  const [activeNav, setActiveNav] = useState<boolean>(false);
  return (
    <div
      className={styles.headerMenuItem}
      onClick={() => subNav !== null && setActiveNav(!activeNav)}
    >
      <div className={styles.headerMenuItemTop}>
        {link ?   <a href={link} className={styles.headerMenuItemText}>{text}</a>   : <p className={styles.headerMenuItemText}>{text}</p> }
       
        {subNav !== null && (
          <Image
            src={arrow}
            className={cn(styles.headerMenuItemIcon, activeNav && styles.headerMenuItemIconActive)}
            alt={"arrow-icon"}
          />
        )}
      </div>
      <div
        className={cn(
          styles.headerMenuItemDown,
          activeNav && styles.headerMenuItemDownActive
        )}
      >
        {subNav !== null &&
          subNav.map((item) => (
            <a href={item.link} key={item.id} className={styles.headerMenuItemSubText}>
              {item.text}
            </a>
          ))}
      </div>
    </div>
  );
};
