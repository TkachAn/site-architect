import {Forma} from "../components/base/forms/form"
import { Layout } from "./layout";
import { EmailInput, PasswordInput } from "../components/base/inputs/inputsGPT";

export const Contacts = () => (
  <Layout>
    <Forma>
      <h2>Регистрация</h2>
      <p>
        форма для регистрации пользователей введите свой адрес электронной почты
        и придуматйте пароль (минимум 8 символов, одна цифра, одна
        большая буква, одна маленькая )
      </p>
      <EmailInput
        name="email"
        label="Почта"
        placeholder="Введите почту"
        required
      />
      <PasswordInput
        name="password"
        label="Пароль"
        confirm={true}
        placeholder="Введите пароль"
        required
      />
    </Forma>
  </Layout>
);
