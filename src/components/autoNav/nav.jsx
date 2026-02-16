import React, { useEffect, useState } from "react";
import s from "./Anav.module.css";

export function AutoAnchorNav1() {
  const [anchors, setAnchors] = useState([]);

  useEffect(() => {
    // Ищем секции и статьи с ID
    const elements = document.querySelectorAll("section[id], article[id]");

    const foundAnchors = Array.from(elements).map((el) => ({
      id: el.id,
      // Сохраняем тип тега (SECTION или ARTICLE)
      type: el.tagName.toLowerCase(),
      title:
        el.querySelector("h1, h2, h3")?.innerText ||
        el.getAttribute("title") ||
        el.id,
    }));

    setAnchors(foundAnchors);
  }, []);

  if (anchors.length === 0) return null;

  return (
    <nav className={s.anchorNav}>
      <details className={s.mobileDetails}>
        <summary className={s.summary}>Выбрать раздел</summary>
        <ul className={s.list}>
          {anchors.map((anchor) => (
            <li key={anchor.id} className={s.item}>
              <a
                href={`#${anchor.id}`}
                className={
                  anchor.type === "section" ? s.link_section : s.link_article
                }
              >
                {anchor.title}
              </a>
            </li>
          ))}
        </ul>
      </details>
    </nav>
  );
}
export function AutoAnchorNav() {
  const [anchors, setAnchors] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // 1. Следим за размером экрана
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    // 2. Собираем анкоры (твой текущий код)
    const elements = document.querySelectorAll("section[id], article[id]");
    const foundAnchors = Array.from(elements).map((el) => ({
      id: el.id,
      type: el.tagName.toLowerCase(),
      title:
        el.querySelector("h1, h2, h3")?.innerText ||
        el.getAttribute("title") ||
        el.id,
    }));
    setAnchors(foundAnchors);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const NavList = (
    <ul className={s.list}>
      {anchors.map((anchor) => (
        <li key={anchor.id} className={s.item}>
          <a
            href={`#${anchor.id}`}
            className={
              anchor.type === "section" ? s.link_section : s.link_article
            }
          >
            {anchor.title}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className={s.anchorNav}>
      {isMobile ? (
        <details className={s.mobileDetails}>
          <summary className={s.summary}>Выбрать раздел</summary>
          {NavList}
        </details>
      ) : (
        NavList
      )}
    </nav>
  );
}