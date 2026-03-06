import { Link } from "react-router-dom";
import { Article, Section } from "../../../components/stsuct/sections/sections";
import s from "./c.module.css";

export default function Catalog() {
  return (
    
      <Section id="catalog" title="Каталог компонентов">
        <p>
          Проект <strong>ARCH.ENGINE</strong> построен на базе чистых
          семантических компонентов с использованием подхода
          <strong> Mobile First</strong>. Библиотека демонстрирует интеграцию
          модульных стилей, строгой валидации форм и адаптивной верстки для
          создания производительных веб-интерфейсов.
        </p>

        <Article id="st_c" title="Структурные компоненты" className={s.article}>
          <p>
            Базовые блоки (Section, Article, Grid, Flex) для создания логичного
            и доступного каркаса страницы.
          </p>
          <Link to="/structure">Перейти к структурам</Link>
          <br />
        </Article>

        <Article id="inp" title="Компоненты ввода" className={s.article}>
          <p>
            Умные поля ввода с поддержкой режимов camelCase/snake_case, масками
            для телефонов и валидацией email.
          </p>
          <Link to="/inputs">Смотреть инпуты</Link>
          <br />
        </Article>

        <Article id="btn" title="Кнопки" className={s.article}>
          <p>
            Интерактивные элементы с поддержкой состояний (normal, accent,
            blocked) и встроенной логикой обработки кликов.
          </p>
          <Link to="/buttons">Примеры кнопок</Link>
          <br />
        </Article>

        <Article id="dlg" title="Диалоговое окно" className={s.article}>
          <p>
            Универсальные модальные окна для вывода уведомлений и взаимодействия
            без потери контекста пользователя.
          </p>
          <Link to="/dialogs">Открыть диалоги</Link>
          <br />
        </Article>

        <Article id="frm" title="Форма" className={s.article}>
          <p>
            Контейнер Forma с автоматическим сбором данных и блокировкой Submit
            до полной валидности всех вложенных полей.
          </p>
          <Link to="/forms">Примеры форм</Link>
          <br />
        </Article>

        <Article id="auth" title="Регистрация и авторизация" className={s.article}>
          <p>
            Готовые шаблоны страниц входа и создания аккаунта с проверкой
            совпадения паролей и email.
          </p>
          <Link to="/auth">Посмотреть авторизацию</Link>
          <br />
        </Article>

        <Article id="menu" title="Автогенерация меню страницы" className={s.article}>
          <p>
            Компонент AutoAnchorNav, который автоматически собирает ссылки на
            основе ID существующих секций и статей.
          </p>
          <Link to="/menu">Настройка навигации</Link>
          <br />
        </Article>

        <Article id="pages" title="Страницы" className={s.article}>
          <p>
            Демонстрация полноценных страниц, собранных из представленных выше
            семантических модулей.
          </p>
          <Link to="/pages">Галерея страниц</Link>
          <br />
        </Article>
      </Section>
    
  );
}
