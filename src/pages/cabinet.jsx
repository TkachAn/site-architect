// src/pages/cabinet.jsx
/*
import { Section } from "../components/stsuct/sections/sections";
import { DataRenderer } from "../contents/forCabinet/DataRenderer";
import { Layout } from "./layout";

export const Cabinet = () => {
  // Достаем сохраненные данные. Если их нет — пишем дефолтное имя
  const name = localStorage.getItem("user_name") || "ARCH.ENGINE";
  const email = localStorage.getItem("user_email") || "не указан";
  const phone = localStorage.getItem("user_phone") || "не указан";

  return (
    <Layout>
      <Section title="личный кабинет" id="cabinet">
        <p>
          Добро пожаловать, <strong>{name}</strong>!
        </p>
        <p>Ваш профиль полностью активирован.</p>
      </Section>

      <Section title="Ваши данные" id="contacts">
        <DataRenderer data={userData} />
      </Section>
    </Layout>
  );
};*/


// src/pages/cabinet.jsx
import { Section } from "../components/stsuct/sections/sections";
import { DataRenderer } from "../contents/forCabinet/DataRenderer";
import { Layout } from "./layout";

export const Cabinet = () => {
  // 1. Получаем строку из localStorage и превращаем её в объект
  const storedData = localStorage.getItem("user_full_data");
  const userData = storedData ? JSON.parse(storedData) : null;

  // 2. Определяем имя для приветствия
  const name = userData?.username || userData?.name || localStorage.getItem("user_name") || "ARCH.ENGINE";

  return (
    <Layout>
      <Section title="личный кабинет" id="cabinet">
        <p>
          Добро пожаловать, <strong>{name}</strong>!
        </p>
        <p>Ваш профиль полностью активирован.</p>
      </Section>

      <Section title="Ваши данные" id="contacts">
        {/* Теперь userData определена и её можно передавать */}
        {userData ? (
          <DataRenderer data={userData} label="Полные данные профиля" />
          
        ) : (
          <p>Данные профиля не найдены. Попробуйте перезайти в аккаунт.</p>
        )}
      </Section>
    </Layout>
  );
};

/* <DataRenderer data={userData} />*/