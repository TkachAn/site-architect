import React from "react";
import { Section, Article, Hero } from "../components/stsuct/sections/sections";
import { InpG } from "../contents/forHome/sec_inp/inpG";
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
      <InpG />
    </Layout>
  );
}
