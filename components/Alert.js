import cs from "classnames";
import styles from "../styles/alert.module.css";

export default function Alert({ type, children }) {
  return (
    <div
      className={cs({
        [styles.success]: type === "success",
        [styles.error]: type === "error",
      })}
    >
      {children}
    </div>
  );
}
