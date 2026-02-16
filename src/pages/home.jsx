import React from "react";
import {
  Section,
  Flex,
  Article,
  Hero,
} from "../components/stsuct/sections/sections";
import { DinNav } from "../contents/forNav/DinNav";
import { AutoAnchorNav } from "../components/autoNav/nav";
import { NormButton } from "../components/base/buttons/buttons";
import { Layout } from "./layout";

export function Home() {
  return (
    <Layout>
      {/* Блок Hero на всю ширину Main */}
      <Hero id="hero" title="Welcome to ARCH.ENGINE">
        <h1>Инженерия будущего</h1>
        <p>Создаем адаптивные интерфейсы с семантической точностью.</p>
        <NormButton>Узнать больше</NormButton>
      </Hero>

      {/* Основной контент в секциях */}
      <Section title="Наши услуги" id="services">
        <Flex>
          <Article title="Проектирование" id="service-1">
            <p>
              Разработка сложных архитектурных решений для React приложений.
              lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              doloremque. Doloribus, voluptate! Necessitatibus, magnam.
              Voluptas, doloremque. Doloribus, voluptate! Necessitatibus,
              magnam.
            </p>
          </Article>
          <Article title="Оптимизация" id="service-2">
            <p>
              Ускорение рендеринга и тонкая настройка жизненного цикла
              компонентов. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quas, optio. Necessitatibus et illo delectus perspiciatis
              incidunt perferendis ipsum, beatae, maiores, accusamus minus
              minima? Quasi nesciunt, sed dolor doloribus consequatur non!
            </p>
          </Article>
        </Flex>
      </Section>

      <Section title="Лаборатория идей" id="lab-preview">
        <Article title="Эксперименты с CSS Grid" id="exp-1">
          <p>
            Исследуем возможности современных браузеров для создания гибких
            сеток. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Magni iusto optio, nostrum explicabo, est unde voluptate, et fuga
            dolorem praesentium illo sint corporis ratione esse odit. Deserunt
            culpa explicabo esse!
          </p>
        </Article>
      </Section>
    </Layout>
  );
}
