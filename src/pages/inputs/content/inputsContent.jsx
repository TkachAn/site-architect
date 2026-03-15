import { TextInput } from "../../../components/base/inputs/inputsGPT"
import { Article, Section } from "../../../components/stsuct/sections/sections"
import s from "./in.module.css"

export function InputContent(){
    return (
      <>
        <Section title="TextInput" id="1">
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
              <b>Default:</b> По умолчанию компонент настроен на удаление лишних
              пробелов, предотвращая ввод некорректных данных.
              <br></br>
              Идеально <b>для артикулов и системных ID</b>.
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
        </Section>
      </>
    );
}

//{`<TextInput label="Camel Case" mode="camelCase" placeholder="camelCase" />`}