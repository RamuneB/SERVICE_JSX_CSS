import React, { ReactNode } from "react";
import styles from "./Avatar.module.scss";

interface AvatarProps {
  children: ReactNode; // Apibrėžiama, kad `children` gali būti bet koks React elementas
}

const Avatar: React.FC<AvatarProps> = ({ children }) => {
  return <div className={styles.avatar}>{children}</div>;
};

export default Avatar;
