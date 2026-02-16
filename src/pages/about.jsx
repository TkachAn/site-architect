import { Section } from "../components/stsuct/sections/sections";
import { Layout } from "./layout";

export const About = () => (
  <Layout>
    <Section title="О нас" id="about">
      <p>Информация о компании ARCH.ENGINE.</p>
    </Section>
    <Section title="Контакты" id="contacts">
      <p>Контактная информация компании ARCH.ENGINE.</p>
    </Section>
  </Layout>
);
