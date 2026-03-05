import { useState } from "react";
import { Layout } from "./layout";
import { Section } from "../components/stsuct/sections/sections";
import { NormButton } from "../components/base/buttons/buttons";
import { EmailInput, PasswordInput } from "../components/base/inputs/inputsGPT"; // Путь проверь сам
import { useApi } from "../hooks/useApi";

export const Lab2 = () => {
  const { sendRequest } = useApi();
  const [email, setEmail] = useState("olivier@mail.com");
  const [password, setPassword] = useState("12345");
  const [user, setUser] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Стучимся на 3334, как на скриншоте
    const result = await sendRequest("http://localhost:3334/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    if (result && result.accessToken) {
      localStorage.setItem("token", result.accessToken);
      setUser(result.user);
      console.log("Токен получен и сохранен!");
    }
  };

  const fetchProtectedData = async () => {
    // Если токен в localStorage есть, useApi его подхватит
    const data = await sendRequest("http://localhost:3334/users");
    if (data) {
      alert("Доступ разрешен! Данные в консоли.");
      console.log(data);
    }
  };

  return (
    <Layout>
      <Section title="Авторизация" id="lab2">
        {!user ? (
          <form
            onSubmit={handleLogin}
            style={{ maxWidth: "400px", display: "grid", gap: "15px" }}
          >
            <EmailInput onChange={setEmail}  />
            <PasswordInput
              
              onChange={setPassword}
              
            />
            <NormButton type="submit" status="accent">
              Войти в систему
            </NormButton>
          </form>
        ) : (
          <div style={{ textAlign: "center" }}>
            <h3>Добро пожаловать, {user.email}!</h3>
            <div
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <NormButton onClick={fetchProtectedData} status="accent">
                Получить список юзеров
              </NormButton>
              <NormButton
                onClick={() => {
                  localStorage.removeItem("token");
                  setUser(null);
                }}
                status="normal"
              >
                Выйти
              </NormButton>
            </div>
          </div>
        )}
      </Section>
    </Layout>
  );
};
