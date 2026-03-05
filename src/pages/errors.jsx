import { useParams } from "react-router-dom";
import { Section } from "../components/stsuct/sections/sections";
import { Layout } from "./layout";
import { Errors as ErrorsContent } from "../components/err/err";

export function ErrorsPage({ statusCode: propsCode }) {
  // Достаем код из URL (из :statusCode)
  const { statusCode: urlCode } = useParams();

  // Определяем итоговый код: либо из пропсов, либо из URL
  const finalCode = propsCode || urlCode;
  return (
    <Layout>
      <Section title={`Ошибка ${finalCode || ""}`}>
        <ErrorsContent statusCode={finalCode} />
      </Section>
    </Layout>
  );
}
