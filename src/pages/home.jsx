import { Layout } from "./layout";
import Catalog from "../contents/forHome/catalog/catalog";
import HeroSlider from "../contents/forHero/hero";

export function Home() {
  return (
    <Layout sw_h1={true}>
      <HeroSlider />
      <Catalog />
    </Layout>
  );
}

  /* Блок Hero на всю ширину Main 
      <Hero id="hero" title="Welcome to ARCH.ENGINE">
        <h1>Инженерия будущего</h1>
        <p>Создаем адаптивные интерфейсы с семантической точностью.</p>
        <NormButton>Узнать больше</NormButton>
      </Hero>*/
