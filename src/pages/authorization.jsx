// authorization.jsx
"use client";
import { Layout } from "./layout";
import { LoginForm } from "../contents/forAuthReg/loginForm";

export function AuthPage() {

  return (
    <Layout>
      <h2>Авторизация</h2>
      <LoginForm />
    </Layout>
  );
}
