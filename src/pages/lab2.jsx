import {
  Grid,
  Main,
  AsideLeft,
  Section,
} from "../components/stsuct/sections/sections";
import { Layout } from "./layout";


export const Lab2 = () => (
  <Layout>
      <Section title="О нас" id="about">
        <p>Информация о компании ARCH.ENGINE.</p>
      </Section>
      <Section title="Контакты" id="contacts">
        <p>Контактная информация компании ARCH.ENGINE.</p>
      </Section>
    </Layout>
);
