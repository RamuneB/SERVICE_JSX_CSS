import React from "react";  // Būtinas importas
import classNames from "classnames";
import styles from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return <input className={classNames(styles.input, className)} {...props} />;
};

export default Input;  // Eksportuojame komponentą
