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

