import React, { CSSProperties } from "react";
import classNames from "classnames";
import styles from "./UrlIcon.module.scss";

interface UrlIconProps {
  url: string; // Paveikslėlio URL
  style?: CSSProperties; // Papildomas stiliaus objektas
  className?: string; // Papildoma CSS klasė
}

const UrlIcon: React.FC<UrlIconProps> = ({ url, className, style = {} }) => {
  return (
    <div
      className={classNames(styles.icon, className)}
      style={{
        maskImage: `url(${url})`, // Palaikoma modernaus naršyklės varianto
        WebkitMaskImage: `url(${url})`, // Palaikoma WebKit naršyklės varianto
        backgroundColor: "currentColor", // Užtikrinama, kad spalva būtų aiški
        ...style, // Sujungiamas papildomas stilius
      }}
    />
  );
};

export default UrlIcon;
