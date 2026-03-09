import { useState } from "react";
import s from "./str.module.css";
import {
  Section,
  Article,
  Flex,  
} from "../../../components/stsuct/sections/sections";
import { SchemaHeader, SchemaStruct } from "./codeBlocks";

export function StructContent() {
  // Состояние для переключения визуальной схемы
  const [viewMode, setViewMode] = useState("mobile");
  // Функция для определения класса контейнера схемы
  const getSchemaClass = () => {
    switch (viewMode) {
      case "tablet":
        return `${s.schemaContainer} ${s.isTablet}`;
      case "desktop":
        return `${s.schemaContainer} ${s.isDesktop}`;
      default:
        return `${s.schemaContainer} ${s.isMobile}`;
    }
  };
  return (
    <>
      <Section title="Визуальная схема макета" id="visual-schema">
        {/* Переключатель режимов (Radio Buttons) */}
        <Article title="Поведение Grid" id="grid-behavior">
          <p>
            <b>Wrapper</b> предназначен для адаптации под размеры экранов
            (Mobile First):
          </p>
          <ul className={s.modeList}>
            <li>
              <label className={s.switchItem}>
                <input
                  type="radio"
                  name="viewMode"
                  value="mobile"
                  checked={viewMode === "mobile"}
                  onChange={(e) => setViewMode(e.target.value)}
                />
                Mobile
              </label>
              <b>Mobile:</b> Все блоки (Aside, Main) выстраиваются вертикально в
              одну колонку.
            </li>
            <li>
              <label className={s.switchItem}>
                <input
                  type="radio"
                  name="viewMode"
                  value="tablet"
                  checked={viewMode === "tablet"}
                  onChange={(e) => setViewMode(e.target.value)}
                />
                Tablet
              </label>
              <b>Tablet:</b> Включается <code>flex-direction: row</code>,
              AsideLeft занимает место с лева от Main, а AsideRight под Main или
              Display:none.
            </li>
            <li>
              <label className={s.switchItem}>
                <input
                  type="radio"
                  name="viewMode"
                  value="desktop"
                  checked={viewMode === "desktop"}
                  onChange={(e) => setViewMode(e.target.value)}
                />
                Desktop
              </label>
              <b>Desktop:</b> Включается <code>flex-direction: row</code>, Aside
              занимают свои места по бокам от Main.
            </li>
          </ul>
        </Article>
        
        {/* <div className={s.schemaContainer}>
        ВИЗУАЛЬНАЯ СХЕМА С ДИНАМИЧЕСКИМ КЛАССОМ */}
        <Article className={getSchemaClass()}>
          <div className={s.schemaHeader}>
            Header (Container: Logo | Nav | Auth)
          </div>

          <div className={s.schemaGrid}>
            <div className={s.schemaGridHeader}>Grid (Основная сетка)</div>
            <div className={s.schemaGridInner}>
              <div className={s.schemaAside}>
                AsideLeft: <br /> (page Navigation
                <br />
                |Catalog|... )
              </div>
              <div className={s.schemaMain}>
                Main (H1)
                <div className={s.schemaHero}>Hero (Баннер / Оффер)</div>
                <div className={s.schemaSection}>
                  Section (H2)
                  <div className={s.schemaArticle}>Article (H3)</div>
                  <div className={s.schemaArticle}>Article (H3)</div>
                </div>
                <div className={s.schemaSection}>
                  Section (H2)
                  <div className={s.schemaArticle}>Article (H3)</div>
                  <div className={s.schemaArticle}>Article (H3)</div>
                </div>
              </div>
              <div className={s.schemaAside}>AsideRight (Social|...)</div>
            </div>
          </div>
          <div className={s.schemaFooter}>Footer</div>
        </Article>

        <Article title="Схема построения страницы" id="visual-schema">
          <p className={s.intro}>
            Ниже представлена иерархия основных компонентов. Grid выступает
            связующим звеном, внутри которого располагаются боковые панели и
            основная область контента.
          </p>
          <SchemaStruct />
        </Article>
      </Section>
      <Section title="Компоненты разметки" id="markup-components">
        {/* HEADER */}
        <Article title="Header" id="header-info">
          <p>
            Компонент <b>Header</b> — это «шапка» сайта. Она фиксируется сверху
            (sticky/fixed) и содержит в себе <b>Container</b> для
            автоматического выравнивания контента по центру.
          </p>

          <div className={s.demoBox}>
            <div
              className={s.headerReview}
              style={{ border: "1px solid #ccc", borderRadius: "4px" }}
            >
              [ Логотип ] ----------- [ Меню ] ---------- [ Авторизация ]
            </div>
          </div>
          <SchemaHeader />
        </Article>
      </Section>
      <Section title="Основные компоненты" id="main-components">
        {/* HERO */}
        <Article title="Hero" id="hero-info">
          <p>
            Компонент <b>Hero</b> — это презентационный блок. Он занимает
            значительную часть экрана, поддерживает фоновые изображения и
            центрирует контент. Используется для заголовков первого уровня и
            призывов к действию.
          </p>

          <div className={s.demoBox}>
            <div
              style={{
                backgroundColor: "#3498db",
                color: "#fff",
                padding: "40px 20px",
                textAlign: "center",
                borderRadius: "8px",
              }}
            >
              <h1 style={{ margin: 0 }}>Заголовок Hero</h1>
              <p style={{ margin: "10px 0 0" }}>
                Подзаголовок с описанием преимуществ
              </p>
            </div>
          </div>

          <pre className={s.codeBlock}>
            {`<Hero title="Главный баннер" id="home-hero">
  <h1>Заголовок Hero</h1>
  <p>Текст баннера</p>
</Hero>`}
          </pre>
        </Article>
      </Section>
      <Section title="Секция и статьи" id="section-article">
        {/* SECTION */}
        <Article title="Section" id="section-info">
          <p>
            <b>Section</b> — это тематический раздел страницы. Он автоматически
            генерирует заголовок <code>h2</code> и поддерживает <code>id</code>{" "}
            для создания якорных ссылок в меню.
          </p>
          <div className={s.demoBox}>
            <div style={{ border: "1px solid #ddd", padding: "15px" }}>
              <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
                Заголовок секции
              </h2>
              Контент секции...
            </div>
          </div>
          <pre className={s.codeBlock}>
            {`<Section title="Название раздела" id="section-1">
  {/* Контент */}
</Section>`}
          </pre>
        </Article>

        {/* ARTICLE */}
        <Article title="Article" id="article-info">
          <p>
            Компонент <b>Article</b> используется внутри секций для разделения
            материала на конкретные статьи или описания функций. Генерирует
            заголовок <code>h3</code>.
          </p>
          <div className={s.demoBox}>
            <div style={{ border: "1px solid #eee", padding: "10px" }}>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>
                Заголовок статьи
              </h3>
              Текст или пример кода внутри статьи...
            </div>
          </div>
          <pre className={s.codeBlock}>
            {`<Article title="Заголовок статьи" id="art-1">
  {/* Детализированный контент */}
</Article>`}
          </pre>
        </Article>
        {/* FLEX */}
        <Article title="Flex" id="flex-info">
          <p>
            <b>Flex</b> — обертка для управления дочерними элементами через
            Flexbox. Удобна для создания рядов кнопок, иконок или карточек.
          </p>
          <div className={s.demoBox}>
            <Flex style={{ gap: "10px", justifyContent: "center" }}>
              <div style={{ background: "#ddd", padding: "10px" }}>Item 1</div>
              <div style={{ background: "#ddd", padding: "10px" }}>Item 2</div>
              <div style={{ background: "#ddd", padding: "10px" }}>Item 3</div>
            </Flex>
          </div>
          <pre className={s.codeBlock}>
            {`<Flex className="custom-gap">
  <div>1</div>
  <div>2</div>
</Flex>`}
          </pre>
        </Article>
        {/* GRID */}
        <Article title="Grid" id="grid-info">
          <p>
            <b>Grid</b> — это высокоуровневый контейнер для основной разметки.
            Он наследует свойства Flexbox (из <code>s.grid</code>) и
            автоматически центрирует контент с помощью встроенного{" "}
            <b>Container</b>.
          </p>
          <div className={s.demoBox}>
            <div
              style={{
                display: "flex",
                gap: "10px",
                background: "#e0e0e0",
                padding: "10px",
              }}
            >
              <div style={{ flex: 1, background: "#fff", padding: "20px" }}>
                Основная область (Grid)
              </div>
            </div>
          </div>
          <pre className={s.codeBlock}>
            {`<Grid id="main-grid">
  <AsideLeft>Меню</AsideLeft>
  <Main title="Контент" />
</Grid>`}
          </pre>
        </Article>
        {/* ASIDE PANELS */}
        <Article title="Aside (Панели)" id="aside-info">
          <p>
            <b>AsideLeft</b> и <b>AsideRight</b> предназначены для размещения
            вспомогательного контента: навигации, фильтров или рекламных блоков.
          </p>
          <div className={s.demoBox}>
            <div style={{ display: "flex", gap: "10px" }}>
              <div
                style={{ width: "30%", background: "#d1ecf1", padding: "10px" }}
              >
                AsideLeft
              </div>
              <div
                style={{
                  width: "70%",
                  background: "#fff",
                  border: "1px solid #ccc",
                  padding: "10px",
                }}
              >
                Main Content
              </div>
            </div>
          </div>
          <pre className={s.codeBlock}>
            {`<AsideLeft>
  <nav>Группы ссылок</nav>
</AsideLeft>

<AsideRight>
  <Widget />
</AsideRight>`}
          </pre>
        </Article>
        {/* FOOTER */}
        <Article title="Footer" id="footer-info">
          <p>
            <b>Footer</b> — «подвал» сайта. Благодаря свойству{" "}
            <code>margin-top: auto</code> в базовых стилях, он всегда
            прижимается к низу страницы, даже если контента мало.
          </p>
          <pre className={s.codeBlock}>
            {`<Footer>
  <p>© 2026 Все права защищены</p>
</Footer>`}
          </pre>
        </Article>
      </Section>
    </>
  );
}


/*  

<Article className={s.viewSwitcher}>
          <label className={s.switchItem}>
            <input
              type="radio"
              name="viewMode"
              value="mobile"
              checked={viewMode === "mobile"}
              onChange={(e) => setViewMode(e.target.value)}
            />
            Mobile
          </label>
          <label className={s.switchItem}>
            <input
              type="radio"
              name="viewMode"
              value="tablet"
              checked={viewMode === "tablet"}
              onChange={(e) => setViewMode(e.target.value)}
            />
            Tablet
          </label>
          <label className={s.switchItem}>
            <input
              type="radio"
              name="viewMode"
              value="desktop"
              checked={viewMode === "desktop"}
              onChange={(e) => setViewMode(e.target.value)}
            />
            Desktop
          </label>
        </Article>

*/