import React, { useState } from "react";
import { Hero } from "../../components/stsuct/sections/sections";
import { NormButton } from "../../components/base/buttons/buttons";
import s from "./h.module.css";

export default function HeroSlider() {
  const [step, setStep] = useState(0);
const [direction, setDirection] = useState("slideNext");
  const data = [
    {
      label: "Semantic Design",
      title: "Semantic Web Design",
      desc: "Проектирование интерфейсов через призму семантической точности. Логика данных, определяющая архитектуру.",
      btn: "Исследовать систему",
    },
    {
      label: "Component Engineering",
      title: "Component Engineering",
      desc: "Проектирование интерфейсов через призму семантической точности. Логика данных, определяющая архитектуру.",
      btn: "Исследовать систему",
    },
    {
      label: "Architecture",
      title: "Архитектура WEB-компонентов",
      desc: "Системный подход к разработке: от базовой разметки до сложных интерактивных моделей валидации.",
      btn: "Смотреть чертежи",
    },
    {
      label: "Engineering",
      title: "ARCH.ENGINE",
      desc: "Экспериментальная среда для создания масштабируемых UI-решений с глубокой семантической проработкой.",
      btn: "Запустить тесты",
    },
  ];

  const move = (dir) => {
    // Если dir > 0 (вперед), ставим анимацию выезда справа, если < 0 — слева
    setDirection(dir > 0 ? s.slideNext : s.slidePrev);
    setStep((prev) => (prev + dir + data.length) % data.length);
  };

  return (
    <Hero id="hero-slider">
      <div className={s.viewport}>
        {/* Кнопки-зоны со стрелочками */}
        <button onClick={() => move(-1)} className={`${s.navZone} ${s.prev}`}>
          &#10094;
        </button>
        <button onClick={() => move(1)} className={`${s.navZone} ${s.next}`}>
          &#10095;
        </button>

        <div className={s.container}>
          <div key={step} className={`${s.content} ${direction}`}>
            <div className={s.meta}>
              <span className={s.line}></span>
              <span className={s.label}>{data[step].label}</span>
            </div>

            <div className={s.titleBox}>
              <h1 className={s.title}>{data[step].title}</h1>
            </div>

            <div className={s.textBox}>
              <p className={s.text}>{data[step].desc}</p>
            </div>

            <div className={s.actions}>
              <NormButton status="accent">{data[step].btn}</NormButton>
            </div>
          </div>
        </div>
      </div>
    </Hero>
  );
}
