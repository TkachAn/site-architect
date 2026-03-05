import React from "react";
import { useParams } from "react-router-dom"; // Хук для чтения :statusCode из URL
import s from "./er.module.css";
import errorData from "./errors.json"; // Твой JSON со списком
import { NormButton } from "../base/buttons/buttons";

export function Errors({ statusCode: propsCode }) {
  // 1. Извлекаем код из URL (если зашли по ссылке /error/500)
  const { statusCode: urlCode } = useParams();

  // 2. Приоритет: сначала смотрим пропсы, если пусто — смотрим URL
  const code = propsCode || urlCode;

  // 3. Ищем описание ошибки в словаре
  const errorInfo = errorData.errors_client[code] ||
    errorData.errors_server[code] || {
      ru: "Неизвестная ошибка",
      en: "Unknown Error",
    };

  return (
    <div className={s.errorWrapper}>
      <h1 className={s.errorCode}>{code || "???"}</h1>
      <p className={s.errorText}>{errorInfo.ru}</p>
      <p className={s.errorSubText}>{errorInfo.en}</p>
     <NormButton onClick={() => window.location.reload()} status="accent">
        Обновить страницу
      </NormButton>
    </div>
  );
}
/*
 <NormButton onClick={() => (window.location.href = "/")} status="accent">
        На главную
      </NormButton>
      
*/