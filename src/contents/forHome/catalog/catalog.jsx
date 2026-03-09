import { Link } from "react-router-dom";
import { Article, Section } from "../../../components/stsuct/sections/sections";
import s from "./c.module.css";

export default function Catalog() {
  return (
    <Section id="catalog" title="Каталог компонентов">
      <p className={s.intro}>
        Проект <strong>ARCH.ENGINE</strong> построен на базе чистых
        семантических компонентов с использованием подхода
        <strong> Mobile First</strong>. Библиотека демонстрирует интеграцию
        модульных стилей, строгой валидации форм и адаптивной верстки для
        создания производительных веб-интерфейсов.
      </p>

      <Article
        id="st_c"
        title="Структурные SEO-компоненты"
        className={s.article}
      >
        <p className={s.intro}>
          Базовые блоки (Header, Navigation, Main, Hero, Section, Article,
          Aside, Grid, Flex, Footer) для создания логичного каркаса страницы с
          правильной семантической разметкой, повышающей индексацию и
          релевантность контента.
        </p>
        <Link className={s.link} to="/structure">
          Перейти к структурам
        </Link>
        <br />
      </Article>

      <Article id="inp" title="Компоненты ввода" className={s.article}>
        <p className={s.intro}>
          Умные поля ввода с поддержкой режимов camelCase/snake_case, масками
          для телефонов и валидацией email.
        </p>
        <Link className={s.link} to="/inputs">
          Смотреть инпуты
        </Link>
        <br />
      </Article>

      <Article id="btn" title="Кнопки" className={s.article}>
        <p className={s.intro}>
          Интерактивные элементы с поддержкой состояний (normal, accent,
          blocked) и встроенной логикой обработки кликов.
        </p>
        <Link className={s.link} to="/buttons">
          Примеры кнопок
        </Link>
        <br />
      </Article>

      <Article id="dlg" title="Диалоговое окно" className={s.article}>
        <p className={s.intro}>
          Универсальные модальные окна для вывода уведомлений и взаимодействия
          без потери контекста пользователя.
        </p>
        <Link className={s.link} to="/dialogs">
          Открыть диалоги
        </Link>
        <br />
      </Article>

      <Article id="frm" title="Форма" className={s.article}>
        <p className={s.intro}>
          Контейнер Forma с автоматическим сбором данных и блокировкой Submit до
          полной валидности всех вложенных полей.
        </p>
        <Link className={s.link} to="/forms">
          Примеры форм
        </Link>
        <br />
      </Article>

      <Article
        id="auth"
        title="Регистрация и авторизация"
        className={s.article}
      >
        <p className={s.intro}>
          Готовые шаблоны страниц входа и создания аккаунта с проверкой
          совпадения паролей и email.
        </p>
        <Link className={s.link} to="/auth">
          Посмотреть авторизацию
        </Link>
        <br />
      </Article>

      <Article
        id="menu"
        title="Автогенерация меню страницы"
        className={s.article}
      >
        <p className={s.intro}>
          Компонент AutoAnchorNav, который автоматически собирает ссылки на
          основе ID существующих секций и статей.
        </p>
        <Link className={s.link} to="/menu">
          Настройка навигации
        </Link>
        <br />
      </Article>

      <Article id="pages" title="Страницы" className={s.article}>
        <p className={s.intro}>
          Демонстрация полноценных страниц, собранных из представленных выше
          семантических модулей.
        </p>
        <Link className={s.link} to="/pages">
          Галерея страниц
        </Link>
        <br />
      </Article>
    </Section>
  );
}
