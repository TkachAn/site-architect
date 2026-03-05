import { Layout } from "./layout";
import { Section } from "../components/stsuct/sections/sections";
import { useApi } from "../hooks/useApi";
import { useEffect } from "react";

export const Lab2 = () => {
  // 1. Вся логика должна быть ЗДЕСЬ (внутри фигурных скобок до return)
  const { sendRequest } = useApi();

  useEffect(() => {
    // Делаем запрос при загрузке страницы
    sendRequest("http://localhost:3334/users");
  }, []);

  // 2. Весь HTML-код должен быть внутри return
  return (
    <Layout>
      <Section title="О нас" id="about">
        <p>Информация о компании ARCH.ENGINE.</p>
      </Section>

      <Section title="Контакты" id="contacts">
        <p>Контактная информация компании ARCH.ENGINE.</p>
      </Section>
    </Layout>
  );
};
