// src/components/base/DataRenderer/DataRenderer.jsx
import React from "react";
import s from "./dr.module.css";

export function DataRenderer({ data, label }) {
  if (!data) return null;

  // Рекурсия для объектов (адреса, компании и т.д.)
  if (typeof data === "object" && !Array.isArray(data)) {
    return (
      <div className={s.section}>
        {label && <h4 className={s.title}>{label}</h4>}
        <div className={s.group}>
          {Object.entries(data).map(
            ([key, value]) =>
              // Скрываем технические поля, такие как пароли
              !["password"].includes(key) && (
                <DataRenderer key={key} label={key} data={value} />
              ),
          )}
        </div>
      </div>
    );
  }

  // Отрисовка обычных значений
  return (
    <div className={s.item}>
      <span className={s.label}>{label}:</span>
      <span className={s.value}>{String(data)}</span>
    </div>
  );
}
