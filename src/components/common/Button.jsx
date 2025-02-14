import PropTypes from "prop-types";
import styles from "./Button.module.scss";
import classNames from "classnames";

const Button = ({ className, rounded, ...props }) => {
  return (
    <button
      className={classNames(
        styles.button,
        rounded && styles.rounded,
        className
      )}
      {...props}
    />
  );
};

Button.propTypes = {
  className: PropTypes.string,
  rounded: PropTypes.bool,
};

export default Button;