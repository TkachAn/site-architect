import s from "./m.module.css";
import { CloseIconButton } from "../../../base/buttons/IconButtons";

export const Modal = ({ children, onClose }) => {
  return (
    <div className={s.overlay} onClick={onClose}>
      <div className={s.content} onClick={(e) => e.stopPropagation()}>
        <CloseIconButton className={s.closeButton} onClick={onClose} />
        {children}
      </div>
    </div>
  );
};
