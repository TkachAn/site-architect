import {
  Grid,
  Main,
  AsideLeft,
  Section,
} from "../components/stsuct/sections/sections";
import { Layout } from "./layout";

export const Lab = () => (
 <Layout>
     <Section title="О Lab" id="about">
       <p>Информация о компании ARCH.ENGINE.</p>
     </Section>
     <Section title="Контакты" id="contacts">
       <p>Контактная информация компании ARCH.ENGINE.</p>
     </Section>
   </Layout>
);
