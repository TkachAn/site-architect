// src/contents/forAuthReg/loginForm.jsx
// src/contents/forAuthReg/loginForm.jsx
import { useNavigate, Link } from "react-router-dom";
import { authApi } from "../../services/api";
import { Forma } from "../../components/base/forms/form";
import {
  EmailInput,
  PasswordInput,
} from "../../components/base/inputs/inputsGPT";
import { SocialAuth } from "../../components/base/buttons/SocialAuth";
import { NormButton } from "../../components/base/buttons/buttons";
import s from "./a.module.css";

export function LoginForm({ onClose }) {
  const navigate = useNavigate();
  const isAuth = !!localStorage.getItem("token");
  const userName = localStorage.getItem("user_name") || "Пользователь";

  const handleLogout = () => {
    localStorage.clear();
    if (onClose) onClose();
    navigate("/");
    window.location.reload();
  };

  const handleLogin = async (data) => {
    try {
      const result = await authApi.login({
        email: data.email,
        password: data.password,
      });

      if (result.accessToken) {
        localStorage.setItem("token", result.accessToken);
        localStorage.setItem("user_full_data", JSON.stringify(result.user));
        const displayName = result.user.username || result.user.email || "Пользователь";
        localStorage.setItem("user_name", displayName);

        if (onClose) onClose();
        navigate("/cabinet");
      }
    } catch (err) {
      alert("Ошибка входа: " + err.message);
    }
  };

  // Состояние: ПОЛЬЗОВАТЕЛЬ УЖЕ ВОШЕЛ
  if (isAuth) {
    return (
      <div className={s.authStatusWrapper}>
        <h3 className={s.welcomeTitle}>Привет, {userName}!</h3>
        <p className={s.statusText}>Вы уже авторизованы в системе.</p>
        
        <div className={s.statusActions}>
          <NormButton onClick={() => { if(onClose) onClose(); navigate("/cabinet"); }} status="accent">
            Личный кабинет
          </NormButton>
          <NormButton onClick={handleLogout}>
            Выйти из аккаунта
          </NormButton>
        </div>
      </div>
    );
  }

  // Состояние: ОБЫЧНАЯ ФОРМА
  return (
    <Forma
      onSubmit={handleLogin}
      submitText="Войти"
      socialButtons={<SocialAuth />}
    >
      <p className="form-description">
        Введите свои учетные данные для входа в аккаунт.
      </p>
      <EmailInput name="email" label="Почта" required />
      <PasswordInput name="password" label="Пароль" required />
      
      <div className={s.footerLink}>
        Нет аккаунта?{" "}
        <Link to="/registration" onClick={onClose}>
          Зарегистрироваться
        </Link>
      </div>
    </Forma>
  );
}
/*
import { useNavigate, Link } from "react-router-dom";
import { authApi } from "../../services/api";
import { Forma } from "../../components/base/forms/form";
import {
  EmailInput,
  PasswordInput,
} from "../../components/base/inputs/inputsGPT";
import { SocialAuth } from "../../components/base/buttons/SocialAuth";
import s from "./a.module.css";

export function LoginForm({ onClose }) {
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const result = await authApi.login({
        email: data.email,
        password: data.password,
      });

     if (result.accessToken) {
       localStorage.setItem("token", result.accessToken);
       // КЛЮЧЕВОЕ ИЗМЕНЕНИЕ: Сохраняем весь объект пользователя целиком
       localStorage.setItem("user_full_data", JSON.stringify(result.user));
       // Если username нет, берем email (чтобы не было пустоты в кабинете)
       const displayName =
         result.user.username || result.user.email || "Пользователь";
       localStorage.setItem("user_name", displayName);

       if (onClose) onClose();
       navigate("/cabinet");
     }
    } catch (err) {
      alert("Ошибка входа: " + err.message);
    }
  };

  return (
    <Forma
      onSubmit={handleLogin}
      submitText="Войти"
      socialButtons={<SocialAuth />}
    >
      <p className="form-description">
        Введите свои учетные данные для входа в аккаунт.
      </p>
      <EmailInput name="email" label="Почта" required />
      <PasswordInput name="password" label="Пароль" required />
      <div className={s.footerLink}>
        Нет аккаунта?{" "}
        <Link to="/registration" onClick={onClose}>
          Зарегистрироваться
        </Link>
      </div>
    </Forma>
  );
}

      /*if (result.accessToken) {
        localStorage.setItem("token", result.accessToken);
        localStorage.setItem("user_name", result.user.username);

        if (onClose) onClose();
        navigate("/cabinet");
      }*/