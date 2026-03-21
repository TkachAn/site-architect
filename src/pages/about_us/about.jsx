import { Section, Article } from "../../components/stsuct/sections/sections";
import { Layout } from "../layout";
import s from "./ab.module.css";

export const About = () => (
  <Layout title="О нас" al_title="Обо мне" ar_title="social">
    <Section id="about" title="Оксана Ткачевская">
      <Article id="Developer" title="Full Stack Developer">
        <div className={s.heroWrapper}>
          <div className={s.heroImage}>
            <img
              src="/Oksana.jpg" // загруженное фото, положи его в public/
              alt="Oksana Tkachevska"
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className={s.heroText}>
            <p>
              <b>Я — универсальный IT-специалист, </b>
              способен самостоятельно создавать весь продукт, от интерфейса до
              серверной части и баз данных. Работаю как с фронтендом, так и с
              бэкендом, что позволяет мне полностью реализовывать веб-сервисы и
              приложения.
            </p>
          </div>
        </div>
      </Article>
      <Article id="Frontend" title="Фронтенд (Frontend):">
        <ul className={s.list}>
          <li>
            <b>Языки:</b> HTML5, CSS3, JavaScript (ES6+),(HTLM, CSS, JS, React,
            ReactNative, NEXT)
          </li>
          <li>
            <b>Фреймворки / Библиотеки: </b>
            React, Vite+React, Next.js, React Native (для мобильной разработки)
          </li>
          <li>
            <b>Стилизация: </b>CSS Modules, Styled Components, знание
            препроцессоров (Sass/SCSS), адаптивная и кроссбраузирная верстка
          </li>
        </ul>
      </Article>
      <Article id="Backend" title="Бэкенд (Backend): ">
        <ul className={s.list}>
          <li>
            <b>Платформы:</b>
            Node.js, Next.js (как fullstack фреймворк)
          </li>
          <li>
            <b>Базы данных:</b>
            MongoDB (NoSQL), MariaDB (реляционная SQL), MySQL (так как BB - это,
            вероятно, phpMyAdmin или подобное, но в резюме лучше писать
            конкретные СУБД)
          </li>
          <li>
            <b>API:</b>
            Разработка REST API, работа с GraphQL (базово)
          </li>
          <li>
            <b>Аутентификация:</b>
            JWT, NextAuth.js, сессии
          </li>
        </ul>
      </Article>
      <Article id="tools" title="Инструменты и методологии">
        <ul className={s.list}>
          <li>
            <b>Контроль версий:</b>
            Git (GitHub, GitLab)
          </li>
          <li>
            <b>Сборщики и менеджеры пакетов:</b>
            Webpack, npm, yarn Среды разработки: VS Code, Postman (тестирование
            API)
          </li>
          <li>
            <b>Деплой и хостинг:</b>
            Vercel, Netlify, настройка серверов (базово)
          </li>
        </ul>
      </Article>
      <Article id="softskill" title="Soft Skills (Личностные качества)">
        <ul className={s.list}>
          <li>
            <b>Fullstack-мышление: </b>
            Понимаю полный цикл разработки продукта — от прототипа интерфейса до
            структуры данных в базе. Способен самостоятельно запустить MVP
            (минимально жизнеспособный продукт).
          </li>
          <li>
            <b>Самостоятельность: </b>
            Не нуждаюсь в постоянном контроле, умею искать информацию и решать
            нестандартные задачи без помощи тимлида.
          </li>
          <li>
            <b>Ответственность: </b>
            Понимаю, что качество конечного продукта зависит от надежности как
            клиентской, так и серверной части.
          </li>
          <li>
            <b>Коммуникабельность: </b>
            Умею переводить с «языка бизнеса» на «язык кода», могу
            аргументировать технические решения перед нетехнической аудиторией
            (заказчиками).
          </li>
          <li>
            <b>Обучаемость: </b>
            Быстро осваиваю новые технологии и инструменты, так как стек
            постоянно обновляется.
          </li>
          <li>
            <b>Ориентированность на результат: </b>
            Важен не просто написанный код, а работающий и удобный для
            пользователя продукт.
          </li>
        </ul>
      </Article>
    </Section>
  </Layout>
);
