import React from "react";  
import classNames from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  rounded?: boolean;
  small?: boolean;
  large?: boolean;
  size?: "small" | "medium" | "large";
}

const Button = ({
  className,
  rounded,
  small,
  large,
  size,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        styles.button,
        rounded && styles.rounded,
        small && styles.small,
        large && styles.large,
        size === "small" && styles.small,
        size === "medium" && styles.medium,
        size === "large" && styles.large,
        className
      )}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
