// RegistrationForm.jsx
// src/contents/forAuthReg/regForm.jsx
import { useNavigate, Link } from "react-router-dom";
import { authApi } from "../../services/api";
import { Forma } from "../../components/base/forms/form";
import {
  EmailInput,
  PasswordInput,
  PhoneInput,
  TextInput,
} from "../../components/base/inputs/inputsGPT";
import { NormButton } from "../../components/base/buttons/buttons";
import s from "./a.module.css";

export function RegistrationForm({ onClose }) {
  const navigate = useNavigate();

  // 1. Проверка: Вошел ли пользователь в систему уже?
  const isAuth = !!localStorage.getItem("token");
  const userName = localStorage.getItem("user_name") || "Пользователь";

  const handleLogout = () => {
    localStorage.clear();
    if (onClose) onClose();
    navigate("/");
    window.location.reload();
  };

  const handleRegister = async (data) => {
    try {
      const result = await authApi.register({
        username: data.username,
        email: data.email,
        password: data.password,
        phone: data.phone,
      });

      if (result.accessToken) {
        localStorage.setItem("token", result.accessToken);
        localStorage.setItem("user_full_data", JSON.stringify(result.user));
        localStorage.setItem("user_name", result.user.username || "Пользователь");

        if (onClose) onClose();
        navigate("/cabinet");
      }
    } catch (err) {
      // 2. Проверка сервера: если email уже занят, сервер выкинет ошибку здесь
      // Обычно json-server-auth при дубликате email возвращает ошибку в err.message
      alert("Ошибка: " + (err.message.includes("400") ? "Этот email уже зарегистрирован!" : err.message));
    }
  };

  // ИНТЕРФЕЙС, ЕСЛИ УЖЕ АВТОРИЗОВАН
  if (isAuth) {
    return (
      <div className={s.authStatusWrapper}>
        <h3 className={s.welcomeTitle}>Вы уже авторизованы, {userName}!</h3>
        <p className={s.statusText}>
          Создание нового аккаунта невозможно, пока вы находитесь в текущем.
        </p>
        <div className={s.statusActions}>
          <NormButton onClick={() => { if(onClose) onClose(); navigate("/cabinet"); }} status="accent">
            В личный кабинет
          </NormButton>
          <NormButton onClick={handleLogout}>
            Выйти и создать новый
          </NormButton>
        </div>
      </div>
    );
  }

  // ИНТЕРФЕЙС РЕГИСТРАЦИИ (Если не вошел)
  return (
    <Forma onSubmit={handleRegister} submitText="Создать аккаунт">
      <TextInput
        name="username"
        label="Ваше имя"
        placeholder="Александр"
        required
      />
      <PhoneInput name="phone" label="Номер телефона" country="UA" required />
      <EmailInput name="email" label="Электронная почта" required />
      <PasswordInput
        name="password"
        label="Придумайте пароль"
        confirm={true}
        required
      />

      <div className={s.footerLink}>
        Уже есть аккаунт?{" "}
        <Link to="/Autorization" onClick={onClose}>
          Войти
        </Link>
      </div>
    </Forma>
  );
}
/*
"use client";
import { useNavigate } from "react-router-dom"; // Исправлено для Vite
import { Forma } from "../../components/base/forms/form";
import {
  EmailInput,
  PasswordInput,
  PhoneInput,
  TextInput,
} from "../../components/base/inputs/inputsGPT";
import { authApi } from "../../services/api";

// src/contents/forAuthReg/regForm.jsx
export function RegistrationForm() {
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    // 1. Имитируем запрос к серверу
    console.log("Данные получены:", data);
    try {
      // 1. Отправляем данные на JSON Server
      const result = await authApi.register({
        username: data.username,
        email: data.email,
        password: data.password,
        phone: data.phone,
      });

      // 2. Если сервер вернул успех (json-server-auth обычно возвращает accessToken и user)
      if (result.accessToken) {
        localStorage.setItem("token", result.accessToken);
        localStorage.setItem("user_name", result.user.username);
        localStorage.setItem("user_email", result.user.email);

        navigate("/cabinet");
      }
    } catch (err) {
      alert("Ошибка регистрации: " + err.message);
    }
  };
  return (
    <Forma onSubmit={handleRegister} submitText="Создать аккаунт">
      <TextInput
        name="username"
        label="Ваше имя"
        placeholder="Александр"
        required
      />
      <PhoneInput name="phone" label="Номер телефона" country="UA" required />
      <EmailInput
        name="email"
        label="Электронная почта"
        required
        
      />
      <PasswordInput
        name="password"
        label="Придумайте пароль"
        confirm={true}
        required
      />
    </Forma>
  );
}
/*
export function RegistrationForm() {
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    console.log("Регистрация...", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Редирект средствами react-router-dom
    navigate("/cabinet");
  };
*/