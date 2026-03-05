/* inpG.jsx — Полный файл с добавленным IntegerInput */
import { Section, Article } from "../../../components/stsuct/sections/sections";
import {
  TextInput,
  TextAreaInput,
  EmailInput,
  PasswordInput,
  PriceInput,
  FloatInput,
  IntegerInput,
} from "../../../components/base/inputs/inputsGPT";

import { useState, useEffect } from "react";  
import s from "./si.module.css";

export const InpG = () => {
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
      <Section title="TextInput" id="text-fields">
        <Article title="Уникальные режимы TextInput" id="text-transform">
          <p>
            Компонент <b>TextInput</b> поддерживает уникальный пропс -
            <b>mode: </b><ul className={s.modeList}>
              <li>Default</li>
              <li>CamelCase</li>
              <li>Snake_case</li>
            </ul>
          </p>

          <p>
            Автоматическая очистка: удаление лишних пробелов, предотвращая ввод некорректных данных.
          </p>
          <p>
            <strong>Когда использовать:</strong>
          </p>
          <ul>
            <li>
              Для ввода технических имен, идентификаторов, системных ключей или
              тегов.
            </li>
            <li>
              В формах, где нужно гарантировать отсутствие лишних пробелов без
              ручной очистки данных.
            </li>
          </ul>
        </Article>

        <Article id="default-mode" title="Default Mode" className={s.demoBox}>
          <p>
            <b>Default:</b> По умолчанию компонент настроен на удаление лишних
            пробелов, предотвращая ввод некорректных данных.
            <br></br>
            Идеально <b>для артикулов и системных ID</b>.
          </p>
          <TextInput label="Clasic Case" placeholder="enter text here" />
          <div className={s.codeBlock}>
            {`<TextInput label="Clasic Case" placeholder="enter text here" />`}
          </div>
        </Article>

        <Article id="camel-case" title="camelCase" className={s.demoBox}>
          <p>
            <strong>Режим camelCase:</strong> Автоматически удаляет пробелы,
            переводя следующую за ними букву в верхний регистр (например, "user
            name" → "userName"). Идеально подходит для быстрой генерации имен
            переменных, ключей или идентификаторов.
          </p>
          <TextInput
            label="Camel Case"
            mode="camelCase"
            placeholder="enter code generators or keys here"
          />
          <div className={s.codeBlock}>
            {`<TextInput label="Camel Case" mode="camelCase" placeholder="enter code generators or keys here" />`}
          </div>
        </Article>

        <Article id="snake-case" title="Snake_case" className={s.demoBox}>
          <p>
            <strong>Режим snake_case:</strong> Мгновенно заменяет все пробелы на
            нижнее подчеркивание (например, "my file" → "my_file"). Незаменим
            для создания системных ключей, названий файлов или URL-фрагментов.
          </p>
          <TextInput
            label="Snake Case"
            mode="snake_case"
            placeholder="enter settings or environment variables here"
          />
          <div className={s.codeBlock}>
            {`<TextInput label="Snake Case" mode="snake_case" placeholder="enter settings or environment variables here" />`}
          </div>
        </Article>
      </Section>

      <Section title="TextArea" id="textarea-fields">
        <Article id="textarea" title="режим Super Clean" className={s.demoBox}>
          <ul>
            <li>
              Для больших текстов используется <b>TextAreaInput</b>.
            </li>
            <li>
              Его главная <strong>Особенность "Super Clean":</strong>. При
              потере фокуса (onBlur)
            </li>
            <li>Удаляются пробелы по краям строки.</li>
            <li>
              Любые последовательности из нескольких пробелов или переносов
              строк внутри текста заменяются на один пробел.
            </li>
            <li>гарантируя компактность данных.</li>
          </ul>
          <TextAreaInput
            label="Super Clean Area"
            placeholder="Лишние пробелы исчезнут при Blur"
            rows={2}
          />
          <div className={s.codeBlock}>
            {`<TextAreaInput label="Super Clean Area" placeholder="Лишние пробелы исчезнут при Blur" rows={2} />`}
          </div>
        </Article>
      </Section>

      <Section title="Email и Безопасность" id="auth-fields">
        <p>
          Формы регистрации часто страдают от опечаток. Чтобы решить это, в
          EmailInput и PasswordInput встроен блок ConfirmBlock. Двойная
          проверка.
        </p>
        <Article id="email-input" title="email input" className={s.demoBox}>
          <p>
            <b>EmailInput:</b> Авто-удаление пробелов и проверка формата @.
          </p>
          <EmailInput label="Ваш Email" placeholder="example@mail.com" />
          <div className={s.codeBlock}>
            {`<EmailInput label="Email" placeholder="example@mail.com" />`}
          </div>
          <p>
            <b>EmailInput + Confirm Mode:</b> Добавляет поле проверки.
          </p>
          <EmailInput
            label="Ваш Email"
            placeholder="example@mail.com"
            confirm={true}
          />
          <div className={s.codeBlock}>
            {`<EmailInput label="Email" placeholder="example@mail.com" confirm={true} />`}
          </div>
        </Article>

        <Article
          id="password-input"
          title="PasswordInput"
          className={s.demoBox}
        >
          <p>
            <b>PasswordInput:</b> Контроль видимости (👁️) и встроенная
            валидация.
          </p>
          <PasswordInput label="Введите пароль" />
          <div className={s.codeBlock}>
            {`<PasswordInput label="Пароль" />`}
          </div>
          <p>
            <b>Confirm Mode:</b> Добавляет поле проверки.
          </p>
          <PasswordInput label="Новый пароль" confirm={true} />
          <div className={s.codeBlock}>
            {`<PasswordInput label="Пароль" confirm={true} />`}
          </div>
        </Article>
      </Section>

      <Section title="Финансовые и числовые данные" id="numeric-fields">
        <Article
          id="integer-input"
          title="IntegerInput (Целые числа)"
          className={s.demoBox}
        >
          <p>
            <b>IntegerInput:</b> Только целые числа. Запрещает ведущие нули.
          </p>
          <IntegerInput label="Количество" placeholder="0" />
          <div className={s.codeBlock}>
            {`<IntegerInput label="Количество" />`}
          </div>
        </Article>

        <Article id="price-input" title="PriceInput" className={s.demoBox}>
          <p>
            <b>PriceInput:</b> Форматирует ввод в денежный вид (1 000.00).
          </p>
          <PriceInput label="Стоимость услуги" />
          <div className={s.codeBlock}>{`<PriceInput label="Цена" />`}</div>
        </Article>

        <Article id="float-input" title="FloatInput" className={s.demoBox}>
          <p>
            <b>FloatInput:</b> Строгий ввод чисел с плавающей точкой.
          </p>
          <FloatInput label="Коэффициент" placeholder="0.00" />
          <div className={s.codeBlock}>
            {`<FloatInput label="Вес" placeholder="0.00" />`}
          </div>
        </Article>
      </Section>
    </>
  );
};

/*
<p className={s.intro}>
        Концепция «Единого ядра» (Base Layout) <br></br>Основой всей системы
        инпутов является компонент BaseInput. Это фундамент, который гарантирует
        визуальную целостность и «стерильность» интерфейса. <br></br>Единый
        стандарт: Все компоненты, включая TextInput, используют BaseInput для
        стандартизации отступов, шрифтов и расположения элементов. <br></br>
        Архитектура слоев: <br></br>Компонент четко разделяет три уровня:
        <br></br>
        заголовок (label), <br></br>область управления (control) и <br></br>блок
        сообщения об ошибке (error). Визуальное единообразие: Благодаря общей
        базе, <br></br>пользователь получает предсказуемый опыт: <br></br>поля
        ввода имеют одинаковую высоту, скругления (6px) и реакцию на фокус,
        независимо от их типа. <br></br>Универсальный контейнер: <br></br>
        BaseInput автоматически обрабатывает передачу ref, что позволяет
        разработчику управлять компонентом на низком уровне, сохраняя при этом
        общую стилистику.
      </p>
*/