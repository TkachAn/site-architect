// src/components/strucGrig/Section/Section.jsx
import { Container } from "./container";
import s from "./s.module.css";

export function Header({ children, id }) {
  return (
    <header id={id}>
      <Container className={s.header}>{children}</Container>
    </header>
  );
}

export function Main({ children }) {
  return <main className={s.main}>{children}</main>;
}

export function Hero({ children, title = "HERO", id }) {
  return (
    <section id={id} className={s.hero} title={title}>
      <div className={s.heroContent}>{children}</div>
    </section>
  );
}

export function Section({ children, title, id, className }) {
  return (
    <section id={id} className={`${s.section} ${className || ""}`}>
      <h2 className={s.section_title}>{title}</h2>
      {children}
    </section>
  );
}
export function Grid({ children, id, className }) {
  return (
    <Container id={id} className={`${s.grid} ${className || ""}`}>
      {children}
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
    <article id={id} className={`${s.article} ${className || ""}`}>
      <h3 className={s.article_title}>{title}</h3>
      {children}
    </article>
  );
}

export function AsideLeft({ children, id, className }) {
  return (
    <aside
      id={id}
      
      className={`${s.asideLeft} ${className || ""}`}
    >
      
      {children}
    </aside>
  );
}

export function AsideRight({ children, id, className }) {
  return (
    <aside
      id={id}
      
      className={`${s.asideRight} ${className || ""}`}
    >
      
      {children}
    </aside>
  );
}

export function Footer({ children }) {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.flexbox}>{children}</div>
        <p>&copy; 2026 ARCH.ENGINE. Все права защищены.</p>
      </Container>
    </footer>
  );
}

export function PaddingBox({ children, className }) {
  return <div className={`${s.box} ${className || ""}`}>{children}</div>;
}
