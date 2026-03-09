// src/components/strucGrig/Section/Section.jsx
import { Container } from "./container";
import s from "./s.module.css"; // Используем основной файл стилей

export function Header({ children, id }) {
  return (
    <header id={id}>
      <Container className={s.header}>{children}</Container>
    </header>
  );
}

export function Main({ children, title }) {
  return (
    <main className={s.main}>
      <h1>{title}</h1>
      {children}
    </main>
  );
}

export function Hero({ children, title = "HERO", id }) {
  return (
    <section id={id} className={s.hero} title={title}>
      {children}
    </section>
  );
}

export function Section({ children, title, id, className }) {
  return (
    <section
      id={id}
      className={`${s.section} ${className || ""}`}
      title={title}
    >
      {title && <h2 className={s.section_title}>{title}</h2>}
      {children}
    </section>
  );
}

/* ВОЗВРАЩЕНО: Используем Container для сетки, как и было в оригинале */
export function Grid({ children, id, className }) {
  return (
    <Container>
      <div id={id} className={`${s.grid} ${className || ""}`}>
        {children}
      </div>
    </Container>
  );
}

export function Wrapper({ children, id, className }) {
  return (
    <Container>
      <div id={id} className={`${s.wrapper} ${className || ""}`}>
        {children}
      </div>
    </Container>
  );
}

export function Flex({ children, id, className }) {
  return (
    <div id={id} className={`${s.flex} ${className || ""}`}>
      {children}
    </div>
  );
}

export function Article({ children, title, id, className }) {
  return (
    <article
      id={id}
      className={`${s.article} ${className || ""}`}
      title={title}
    >
      {title && <h3 className={s.article_title}>{title}</h3>}
      {children}
    </article>
  );
}

export function AsideLeft({ children, id, className }) {
  return (
    <aside id={id} className={`${s.asideLeft} ${className || ""}`}>
      {children}
    </aside>
  );
}

export function AsideRight({ children, id, className }) {
  return (
    <aside id={id} className={`${s.asideRight} ${className || ""}`}>
      {children}
    </aside>
  );
}

export function Footer({ children }) {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.flexbox}>{children}</div>
        <p className={s.copyright}>
          &copy; 2026 ARCH.ENGINE. Все права защищены.
        </p>
      </Container>
    </footer>
  );
}

export function PaddingBox({ children, className }) {
  return <div className={`${s.box} ${className || ""}`}>{children}</div>;
}
