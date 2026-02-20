import { Section } from "../../components/stsuct/sections/sections";
import s from "./s.module.css";
import { Layout } from "../layout";

export function NotFound() {
  return (
    <Layout>
      <Section title="Страница не найдена">
        {/* s.notFound для центрирования и базового оформления */}
        <div className={s.notFound}>
          {/* Код ошибки крупным планом */}
          <h1 className={s.errorCode}>404</h1>

          {/* Основное сообщение */}
          <p className={s.message}>Упс! Похоже, вы заблудились.</p>

          {/* Подробное описание */}
          <p className={s.description}>
            Запрашиваемая страница не найдена. Возможно, она была удалена или вы
            неправильно ввели адрес.
          </p>

          {/* Ссылка на главную (используйте компонент Link, если есть React Router) */}
          <a href="/" className={s.homeLink}>
            Вернуться на Главную страницу
          </a>

          {/* Дополнительный элемент: поле поиска */}
          {/* <div className={s.searchContainer}>
                    <input type="text" placeholder="Поиск по сайту..." className={s.searchInput} />
                    <button className={s.searchButton}>Искать</button>
                </div> */}
        </div>
      </Section>
    </Layout>
  );
}
