// src/contents/forHome/sec_btn/btnG.jsx
"use client";
import React, { useState, useEffect } from "react";
import { Section, Article } from "../../../components/stsuct/sections/sections";
import {
  NormButton,
  SubmitButton,
  DeleteButton,
  AddButton,
  EditButton,
} from "../../../components/base/buttons/buttons";
import {
  CloseIconButton,
  DeleteIconButton,
  EditIconButton,
  AddIconButton,
  LogOutIconButton,
  MenuIconButton,
} from "../../../components/base/buttons/IconButtons";

import s from "./btnG.module.css";

export const BtnG = () => {
  const [lastAction, setLastAction] = useState("Нажмите на любую кнопку...");
  const [isDebug, setIsDebug] = useState(false);

  const handleAction = (msg) =>
    setLastAction(`Событие: ${msg} (${new Date().toLocaleTimeString()})`);

  useEffect(() => {
    return () => document.body.classList.remove("show-debug");
  }, []);

  const toggleDebug = () => {
    setIsDebug(!isDebug);
    document.body.classList.toggle("show-debug");
    handleAction(isDebug ? "Debug выключен" : "Debug включен");
  };

  return (
    <>
      <p>
        Библиотека <b>Buttons</b> — это набор высокоуровневых UI-компонентов,
        оптимизированных для быстрой разработки интерфейсов с соблюдением
        стандартов доступности и Mobile First.
      </p>

      {/* --- ИНТЕРАКТИВНЫЙ ЛОГ --- */}
      <div
        className={s.demoBox}
        style={{
          position: "sticky",
          top: "10px",
          zIndex: 100,
          border: "2px solid #0070f3",
        }}
      >
        <strong>Интерактивный монитор:</strong>
        <div className={s.eventLog}>{lastAction}</div>
      </div>

      {/* --- БАЗОВЫЕ КНОПКИ --- */}
      <Section title="Классические кнопки" id="base-buttons">
        <Article
          title="Универсальный NormButton"
          id="norm-btn"
          className={s.demoBox}
        >
          <p>
            Базовая кнопка, которая адаптируется под контекст через пропс{" "}
            <b>status</b>.
          </p>
          <div className={s.demoRow}>
            <NormButton onClick={() => handleAction("Клик по Normal")}>
              Обычная
            </NormButton>
            <NormButton
              status="accent"
              onClick={() => handleAction("Клик по Accent")}
            >
              Призыв к действию
            </NormButton>
            <NormButton status="blocked">Заблокирована</NormButton>
          </div>
          <ul className={s.descriptionList}>
            <li>
              <b>Normal:</b> Для второстепенных действий (Отмена, Назад).
            </li>
            <li>
              <b>Accent:</b> Для главных действий на странице (Подписаться,
              Купить).
            </li>
            <li>
              <b>Blocked:</b> Используется, когда действие недоступно (например,
              форма не заполнена).
            </li>
          </ul>
        </Article>
      </Section>

      {/* --- СЕМАНТИЧЕСКИЕ КНОПКИ --- */}
      <Section title="Семантические действия" id="action-buttons">
        <Article
          title="Кнопки с предопределенной логикой"
          id="semantic"
          className={s.demoBox}
        >
          <p>Эти компоненты уже содержат стандартный текст и настройки типа.</p>
          <div className={s.demoRow}>
            <SubmitButton onClick={() => handleAction("Форма отправлена")} />
            <AddButton onClick={() => handleAction("Элемент добавлен")} />
            <EditButton onClick={() => handleAction("Режим редактирования")} />
            <DeleteButton onClick={() => handleAction("Запрос на удаление")} />
          </div>
          <div
            className={s.codeBlock}
          >{`<SubmitButton /> // Автоматически: "Сохранить", тип submit`}</div>
          <ul className={s.descriptionList}>
            <li>
              <b>SubmitButton:</b> Всегда имеет <code>type="submit"</code>.
              Использовать строго внутри форм.
            </li>
            <li>
              <b>DeleteButton:</b> Для удаления данных. Рекомендуется сочетать с
              модальным окном подтверждения.
            </li>
            <li>
              <b>Add/Edit:</b> Стандартные инструменты управления контентом
              (CRUD).
            </li>
          </ul>
        </Article>
      </Section>

      {/* --- ИКОНОЧНЫЕ КНОПКИ --- */}
      <Section title="Иконочные интерфейсы" id="icon-buttons">
        <Article title="Компактные действия" id="icons" className={s.demoBox}>
          <p>
            Кнопки без текста, использующие <b>Lucide Icons</b>. Идеальны для
            панелей инструментов.
          </p>
          <div className={s.demoRow}>
            <MenuIconButton onClick={() => handleAction("Меню открыто")} />
            <AddIconButton
              onClick={() => handleAction("Добавлено через иконку")}
            />
            <EditIconButton
              onClick={() => handleAction("Правка через иконку")}
            />
            <DeleteIconButton
              onClick={() => handleAction("Удалено через иконку")}
            />
            <LogOutIconButton
              onClick={() => handleAction("Выход из системы")}
            />
          </div>
          <p>
            <strong>Живой пример масштабирования:</strong> Теперь поддерживается
            пропс <code>size</code>.
          </p>
          <div className={s.demoRow}>
            <EditIconButton
              size={16}
              onClick={() => handleAction("Маленькая иконка")}
            />
            <EditIconButton
              size={32}
              onClick={() => handleAction("Средняя иконка")}
            />
            <EditIconButton
              size={48}
              onClick={() => handleAction("Большая иконка")}
            />
          </div>
        </Article>
      </Section>

      {/* --- РЕЖИМ ОТЛАДКИ --- */}
      <Section title="Инструменты разработчика" id="debug">
        <Article title="Debug Mode" className={s.demoBox}>
          <p>
            Нажмите кнопку ниже, чтобы увидеть границы всех кнопок и их
            технические метки.
          </p>
          <NormButton
            onClick={toggleDebug}
            status={isDebug ? "accent" : "normal"}
          >
            {isDebug ? "ДЕБАК ВКЛЮЧЕН" : "ВКЛЮЧИТЬ ДЕБАГ"}
          </NormButton>
        </Article>
      </Section>
    </>
  );
};
