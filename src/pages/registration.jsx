import { RegistrationForm } from "../contents/forAuthReg/regForm";
import { Layout } from "./layout";

export function RegPage() {
  return (
    <Layout>
      <h2>Регистрация</h2>
      <RegistrationForm />
    </Layout>
  );
}
