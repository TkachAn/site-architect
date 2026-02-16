import s from "./c.module.css";

export function Container({ children, className }) {
  return <div className={`${s.container} ${className || ""}`}>{children}</div>;
}
