import {
  TextInput,
  TextAreaInput,
  SelectInput,
  PhoneInput,
  EmailInput,
  PasswordInput,
  IntegerInput,
  FloatInput,
  PriceInput,
} from "../../../components/base/inputs/inputsGPT";
import { Article, Section } from "../../../components/stsuct/sections/sections";
import s from "./in.module.css";

export function InputContent() {
  return (
    <>
      <Section title="Общие технические детали для всех компонентов" id="all-inputs">
        <Article className={s.demoBox} title="BaseInput" id="base-input"><p>

          Все компоненты обернуты в forwardRef, что позволяет использовать их с библиотеками типа react-hook-form.
          Все они используют общий BaseInput для единообразного отображения лейблов и сообщений об ошибках.
        </p>
          <pre className={s.codeBlock}>
            {`<BaseInput
        label={label}
        error={externalError || internalError}
        onStatusChange={onStatusChange}
        name={name}
        required={required}
      > 
        {children}
</BaseInput>`}
          </pre>
        </Article>
      </Section>
      <Section title="TextInput" id="text-input">
        <Article
          title="Уникальные режимы TextInput"
          id="text-transform"
          className={s.demoBox}
        >
          <p>
            Компонент <b>TextInput</b> поддерживает уникальный пропс -
            <b>mode: </b>
            <ul>
              <li>Default</li>
              <li>CamelCase</li>
              <li>Snake_case</li>
            </ul>
          </p>

          <p>
            Автоматическая очистка: удаление лишних пробелов, предотвращая
            ввод некорректных данных.
          </p>
          <p>
            <strong>Когда использовать:</strong>
          </p>
          <ul>
            <li>
              Для ввода технических имен, идентификаторов, системных ключей
              или тегов.
            </li>
            <li>
              В формах, где нужно гарантировать отсутствие лишних пробелов без
              ручной очистки данных.
            </li>
          </ul>
        </Article>
        <Article id="default-mode" title="Default Mode" className={s.demoBox}>
          <p>
            <b>Default:</b> По умолчанию компонент настроен на умную очистку:
            удаляет пробелы в начале, схлопывает двойные пробелы между словами в
            один и обрезает пробелы в конце при потере фокуса.
            <br />
            Идеально <b>для имен, фамилий и названий</b>.
          </p>
          <TextInput label="Clasic Case" placeholder="enter text here" />
          <pre className={s.codeBlock}>
            {`<TextInput 
              label="Clasic Case" 
              placeholder="enter text here" 
        />`}
          </pre>
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
          <pre className={s.codeBlock}>
            {
              `<TextInput 
    label="Camel Case" 
    mode="camelCase" 
    placeholder="enter code generators or keys here" 
/>`}
          </pre>
        </Article>
        <Article id="snake_case" title="snake_case" className={s.demoBox}>
          <p>
            <strong>Режим snake_case:</strong> Заменяет пробелы на нижнее
            подчеркивание (_). (например, "user name" → "user_name"). Идеально
            подходит при прямых запросах к SQL-базам, где поля традиционно
            пишутся через подчеркивание или для Констант (const MY_CONSTANT =
            "value").
          </p>
          <TextInput
            label="Snake Case"
            mode="snake_case"
            placeholder="enter code generators or keys here"
          />
          <pre className={s.codeBlock}>
            {
              `<TextInput 
    label="Snake Case" 
    mode="snake_case" 
    placeholder="enter code generators or keys here" 
/>`}
          </pre>
        </Article>
      </Section>
      <Section title="TextArea & Select" id="textarea-select">
        <Article title="TextAreaInput" id="textarea" className={s.demoBox}>
          <p>
            <b>TextAreaInput:</b> Поле для многострочного ввода с автоматической
            очисткой при потере фокуса.
          </p>
          <ul>
            <li>Удаляет лишние пробелы.</li>
            <li>Схлопывает множественные переносы строк в один.</li>
          </ul>
          <TextAreaInput label="Описание" placeholder="Введите текст..." />
          <pre className={s.codeBlock}>
            {`<TextAreaInput 
    label="Описание" 
    placeholder="Введите текст..." 
    rows={4} 
/>`}
          </pre>
        </Article>

        <Article title="SelectInput" id="select" className={s.demoBox}>
          <p>
            <b>SelectInput:</b> Кастомный выпадающий список. Принимает массив
            строк или объектов.
          </p>
          <SelectInput
            label="Выберите категорию"
            options={["Вариант 1", "Вариант 2", "Вариант 3"]}
          />
          <pre className={s.codeBlock}>
            {`<SelectInput 
    label="Выберите категорию" 
    options={["Вариант 1", "Вариант 2", "Вариант 3"]} 
/>`}
          </pre>
        </Article>
      </Section>
      <Section title="Contact & Security" id="contact-security">
        <Article title="PhoneInput" id="phone" className={s.demoBox}>
          <p>
            <b>PhoneInput:</b> Поле для ввода номера телефона с автоматической
            подстановкой кода страны.
          </p>
          <ul>
            <li>Валидация под разные страны (UA, RU, USA).</li>
            <li>Авто-подстановка кода при фокусе.</li>
          </ul>
          <PhoneInput label="Телефон (UA)" country="UA" />
          <pre className={s.codeBlock}>
            {`<PhoneInput 
    label="Телефон (UA)" 
    country="UA" 
/>`}
          </pre>
        </Article>

        <Article title="EmailInput" id="email" className={s.demoBox}>
          <p>
            <b>EmailInput:</b> Поле для ввода почты с проверкой формата.
            Поддерживает режим подтверждения и <b>детектор раскладки</b>.
          </p>
          <ul>
            <li>Встроенная валидация формата.</li>
            <li>Режим подтверждения "(confirm={true})" (добавляет второе поле «Подтвердите Email»).</li>
            <li>
              <b>Умная система:</b> оповещает пользователя, если он начинает
              вводить адрес на русской раскладке.
            </li>
          </ul>
          <EmailInput
            label="Электронная почта"
            confirm={true}
            placeholder="example@mail.com"
          />
          <pre className={s.codeBlock}>
            {`<EmailInput 
    label="Электронная почта" 
    confirm={true} 
    placeholder="example@mail.com" 
/>`}
          </pre>
        </Article>
      </Section>
      <Section title="PasswordInput" id="password">

        <Article title="Режим - confirm" id="confirm" className={s.demoBox}>
          <p>
            <b>PasswordInput:</b> Поле для пароля с переключением видимости и
            режимом подтверждения.

            используется для создания нового пароля либо в формах регистрации
          </p>
          <ul>
            <li>Встроенная валидация формата(Минимум 1 заглавная буква, 1 цифра, всего 8 символов).</li>
            <li>Режим подтверждения "(confirm={true})" (добавляет второе поле «Подтвердите пароль»).</li>

          </ul>
          <PasswordInput
            label="Придумайте пароль"
            confirm={true}
            placeholder="Минимум 8 символов"
          />
          <pre className={s.codeBlock}>
            {`<PasswordInput 
    label="Придумайте пароль" 
    confirm={true} 
    placeholder="Минимум 8 символов"  
/>`}
          </pre>
        </Article>

        <Article title="Режим mode - login" id="login" className={s.demoBox}>
          <p>

            <b>Режим mode="login":</b> использовать это поле (пароля без проверки сложности) для входа в систему.
            <PasswordInput
              label="Вход в систему (без проверки)"
              mode="login"
              placeholder="Введите ваш текущий пароль"
            />
          </p>

          <pre className={s.codeBlock}>
            {`<PasswordInput 
    label="Вход в систему" 
    mode="login" 
    placeholder="Любой пароль" 
/>`}
          </pre>

        </Article>
      </Section>
      <Section title="Numeric Inputs" id="numeric-inputs">
        <Article title="IntegerInput" id="integer" className={s.demoBox}>
          <p>
            <b>IntegerInput:</b> Поле только для целых чисел. Блокирует ввод
            некорректных символов и лишних нулей.
          </p>
          <IntegerInput label="Количество" placeholder="0" />
          <pre className={s.codeBlock}>
            {`<IntegerInput 
    label="Количество" 
    placeholder="0" 
/>`}
          </pre>
        </Article>

        <Article title="FloatInput" id="float" className={s.demoBox}>
          <p>
            <b>FloatInput:</b> Поле для дробных чисел. Автоматически заменяет
            запятую на точку.
          </p>
          <FloatInput label="Вес (кг)" placeholder="0.00" />
          <pre className={s.codeBlock}>
            {`<FloatInput 
    label="Вес (кг)" 
    placeholder="0.00" 
/>`}
          </pre>
        </Article>

        <Article title="PriceInput" id="price" className={s.demoBox}>
          <p>
            <b>PriceInput:</b> Специализированное поле для цен с локализованным
            выводом.
          </p>
          <ul>
            <li>Автоматическое форматирование разрядов.</li>
            <li>Всегда отображает 2 знака после запятой.</li>
          </ul>
          <PriceInput label="Стоимость курса" defaultValue={1500.5} />
          <pre className={s.codeBlock}>
            {`<PriceInput 
    label="Стоимость курса" 
    defaultValue={1500.50} 
/>`}
          </pre>
        </Article>
      </Section>
    </>
  );
}

//{`<TextInput label="Camel Case" mode="camelCase" placeholder="camelCase" />`}