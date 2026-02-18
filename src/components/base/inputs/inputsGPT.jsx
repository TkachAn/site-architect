/* inputsGPT.jsx */
import React, { useState, forwardRef, useRef } from "react";
import { Eye, EyeOff } from "lucide-react";
import styles from "./ingpt.module.css";

/* =========================
   VALIDATORS
========================= */
const validators = {
  email: (v) =>
    !v
      ? "Email обязателен"
      : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
        ? "Некорректный email"
        : "",

  password: (v) => {
    if (!v) return "Пароль обязателен";
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(v)
      ? ""
      : "Пароль должен содержать минимум 8 символов, заглавную букву, строчную букву и цифру";
  },

  integer: (v) => {
    if (!v) return "";
    if (!/^\d+$/.test(v)) return "Только целые числа";
    if (v.length > 1 && v.startsWith("0"))
      return "Число не может начинаться с 0";
    return "";
  },

  digits: (v) => {
    if (!v) return "";
    if (!/^\d+$/.test(v)) return "Только цифры";
    if (/^0\d+/.test(v)) return "Число не может начинаться с 0";
    return "";
  },

  float: (v) => {
    if (!v) return "";
    if (!/^\d*[.,]?\d*$/.test(v)) return "Некорректный формат";
    return "";
  },
};

/* =========================
   BASE LAYOUT
========================= */
export const BaseInput = forwardRef(
  ({ label, error, children, className = "" }, ref) => (
    <div className={`${styles.base} ${className}`} ref={ref}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.control}>{children}</div>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  ),
);

/* =========================
   CONFIRM BLOCK
========================= */
const ConfirmBlock = ({
  value,
  confirmLabel = "Подтвердите",
  onValidChange,
  errorMessage = "Значения не совпадают",
  type = "text",
  children,
}) => {
  const [confirmValue, setConfirmValue] = useState("");
  const [error, setError] = useState("");

  const handleConfirm = (v) => {
    setConfirmValue(v);
    const isMatch = v === value;
    setError(isMatch ? "" : errorMessage);
    onValidChange?.(isMatch);
  };

  return (
    <div className={styles.confirmGroup}>
      {children}
      <input
        type={type}
        className={styles.input}
        placeholder={confirmLabel}
        value={confirmValue}
        onChange={(e) => handleConfirm(e.target.value)}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

/* =========================
   TEXT INPUT (Smart Modes)
========================= */
export const TextInput = forwardRef(
  ({ label, error, onChange, value, defaultValue, mode, ...props }, ref) => {
    const isControlled = value !== undefined;
    const [localValue, setLocalValue] = useState(defaultValue || "");
    const currentValue = isControlled ? value : localValue;
    const nextUpperRef = useRef(false);

    const handleChange = (e) => {
      let char = e.target.value.slice(-1);
      let v = e.target.value;

      if (mode === "camelCase") {
        if (char === " ") {
          nextUpperRef.current = true;
          v = v.slice(0, -1);
        } else if (nextUpperRef.current) {
          v = v.slice(0, -1) + char.toUpperCase();
          nextUpperRef.current = false;
        }
      } else if (mode === "snake_case") {
        v = v.replace(/\s/g, "_");
      } else {
        v = v.replace(/\s/g, "");
      }

      if (!isControlled) setLocalValue(v);
      if (onChange) {
        const event = Object.create(e);
        event.target = { ...e.target, value: v };
        onChange(event);
      }
    };

    return (
      <BaseInput label={label} error={error}>
        <input
          ref={ref}
          className={styles.input}
          value={currentValue}
          onChange={handleChange}
          {...props}
        />
      </BaseInput>
    );
  },
);

/* =========================
   TEXTAREA
========================= */
export const TextAreaInput = forwardRef(
  (
    { label, error, rows = 4, onChange, value, defaultValue, ...props },
    ref,
  ) => {
    const isControlled = value !== undefined;
    const [localValue, setLocalValue] = useState(defaultValue || "");
    const currentValue = isControlled ? value : localValue;

    const handleBlur = (e) => {
      const cleaned = e.target.value.trim().replace(/\s+/g, " ");
      if (!isControlled) setLocalValue(cleaned);
      if (onChange) {
        const event = Object.create(e);
        event.target = { ...e.target, value: cleaned };
        onChange(event);
      }
    };

    return (
      <BaseInput label={label} error={error}>
        <textarea
          ref={ref}
          className={styles.textarea}
          rows={rows}
          value={currentValue}
          onChange={(e) => {
            if (!isControlled) setLocalValue(e.target.value);
            onChange?.(e);
          }}
          onBlur={handleBlur}
          {...props}
        />
      </BaseInput>
    );
  },
);

/* =========================
   SELECT
========================= */
export const SelectInput = forwardRef(
  (
    { label, error, options = [], value, defaultValue, onChange, ...props },
    ref,
  ) => {
    const isControlled = value !== undefined;
    const normalizedOptions = options.map((o) =>
      typeof o === "string" ? { label: o, value: o } : o,
    );
    const [localValue, setLocalValue] = useState(
      defaultValue || normalizedOptions[0]?.value || "",
    );
    const currentValue = isControlled ? value : localValue;

    return (
      <BaseInput label={label} error={error}>
        <select
          ref={ref}
          className={styles.select}
          value={currentValue}
          onChange={(e) => {
            if (!isControlled) setLocalValue(e.target.value);
            onChange?.(e);
          }}
          {...props}
        >
          {normalizedOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </BaseInput>
    );
  },
);

/* =========================
   EMAIL / PASSWORD
========================= */
export const EmailInput = forwardRef(
  (
    { label = "E-mail", confirm, value, defaultValue, onChange, ...props },
    ref,
  ) => {
    const isControlled = value !== undefined;
    const [localValue, setLocalValue] = useState(defaultValue || "");
    const [error, setError] = useState("");
    const currentValue = isControlled ? value : localValue;

    const handleChange = (e) => {
      const v = e.target.value.replace(/\s/g, "");
      if (!isControlled) setLocalValue(v);
      setError(validators.email(v));
      onChange?.(e);
    };

    const inputEl = (
      <input
        ref={ref}
        type="email"
        className={styles.input}
        value={currentValue}
        onChange={handleChange}
        {...props}
      />
    );
    return (
      <BaseInput label={label} error={error}>
        {confirm ? (
          <ConfirmBlock value={currentValue} confirmLabel="Подтвердите e-mail">
            {inputEl}
          </ConfirmBlock>
        ) : (
          inputEl
        )}
      </BaseInput>
    );
  },
);

export const PasswordInput = forwardRef(
  (
    { label = "Пароль", confirm, value, defaultValue, onChange, ...props },
    ref,
  ) => {
    const isControlled = value !== undefined;
    const [localValue, setLocalValue] = useState(defaultValue || "");
    const [visible, setVisible] = useState(false);
    const [error, setError] = useState("");
    const currentValue = isControlled ? value : localValue;

    const handleChange = (e) => {
      const v = e.target.value;
      if (!isControlled) setLocalValue(v);
      setError(validators.password(v));
      onChange?.(e);
    };

    const inputType = visible ? "text" : "password";
    const inputEl = (
      <div className={styles.passwordWrap}>
        <input
          ref={ref}
          type={inputType}
          className={styles.input}
          value={currentValue}
          onChange={handleChange}
          {...props}
        />
        <button
          type="button"
          className={styles.toggle}
          onClick={() => setVisible(!visible)}
        >
          {visible ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    );

    return (
      <BaseInput label={label} error={error}>
        {confirm ? (
          <ConfirmBlock
            value={currentValue}
            type={inputType}
            confirmLabel="Подтвердите пароль"
          >
            {inputEl}
          </ConfirmBlock>
        ) : (
          inputEl
        )}
      </BaseInput>
    );
  },
);

/* =========================
   INTEGER INPUT (Только целые)
========================= */
export const IntegerInput = forwardRef(
  ({ label, value, defaultValue, onChange, ...props }, ref) => {
    const isControlled = value !== undefined;
    const [localValue, setLocalValue] = useState(defaultValue || "");
    const [error, setError] = useState("");
    const currentValue = isControlled ? value : localValue;

    const handleChange = (e) => {
      let v = e.target.value.replace(/\D/g, "");
      if (v.length > 1 && v.startsWith("0")) {
        v = v.replace(/^0+/, "") || "0";
      }
      if (!isControlled) setLocalValue(v);
      setError(validators.integer(v));
      if (onChange) {
        const event = Object.create(e);
        event.target = { ...e.target, value: v };
        onChange(event);
      }
    };

    return (
      <BaseInput label={label} error={error}>
        <input
          ref={ref}
          className={styles.input}
          inputMode="numeric"
          pattern="[0-9]*"
          value={currentValue}
          onChange={handleChange}
          {...props}
        />
      </BaseInput>
    );
  },
);

/* =========================
   DIGITS & FLOAT INPUT
========================= */
export const DigitsInput = forwardRef(
  ({ label, value, defaultValue, onChange, decimal, ...props }, ref) => {
    const isControlled = value !== undefined;
    const [localValue, setLocalValue] = useState(defaultValue || "");
    const [error, setError] = useState("");
    const currentValue = isControlled ? value : localValue;

    const handleChange = (e) => {
      let v = e.target.value;

      if (decimal) {
        v = v.replace(",", ".");
        // 1. Если начали с точки -> "0."
        if (v === ".") v = "0.";
        // Умная обработка: 00 -> 0.0, 01 -> 0.1
        if (/^0[0-9]/.test(v)) {
          v = "0." + v.slice(1);
        }
        v = v.replace(/[^0-9.]/g, "");
        const parts = v.split(".");
        if (parts.length > 2) v = parts[0] + "." + parts.slice(1).join("");
        setError(validators.float(v));
      } else {
        v = v.replace(/\D/g, "");
        if (v.length > 1 && v.startsWith("0")) v = v.replace(/^0+/, "") || "0";
        setError(validators.digits(v));
      }

      if (!isControlled) setLocalValue(v);
      if (onChange) {
        const event = Object.create(e);
        event.target = { ...e.target, value: v };
        onChange(event);
      }
    };

    return (
      <BaseInput label={label} error={error}>
        <input
          ref={ref}
          className={styles.input}
          inputMode={decimal ? "decimal" : "numeric"}
          value={currentValue}
          onChange={handleChange}
          {...props}
        />
      </BaseInput>
    );
  },
);

export const FloatInput = (props) => <DigitsInput {...props} decimal={true} />;

/* =========================
   PRICE INPUT
========================= */
export const PriceInput = forwardRef(
  ({ label = "Цена", onChange, error, defaultValue }, ref) => {
    const [digits, setDigits] = useState(
      defaultValue ? String(Math.round(defaultValue * 100)) : "",
    );

    const formatDisplay = (d) => {
      if (!d) return "0.00";
      const clean = d.padStart(3, "0");
      return `${Number(clean.slice(0, -2)).toLocaleString("ru-RU")}.${clean.slice(-2)}`;
    };

    const handleChange = (e) => {
      const d = e.target.value.replace(/\D/g, "");
      setDigits(d);
      onChange?.(Number(d || 0) / 100);
    };

    return (
      <BaseInput label={label} error={error}>
        <input
          ref={ref}
          className={styles.input}
          inputMode="numeric"
          value={formatDisplay(digits)}
          onChange={handleChange}
        />
      </BaseInput>
    );
  },
);
