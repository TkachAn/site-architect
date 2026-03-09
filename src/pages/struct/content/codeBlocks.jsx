import s from "./str.module.css";

export const SchemaStruct = () => (
  <>
    <p>
      использование семантических компонентов значительно ускоряет вёрстку На
      пример:
    </p>
    <pre className={s.codeBlock}>
      {`<Header/>
<Wrapper>
    <AsideLeft>...</AsideLeft>
    <Main title="Заголовок">
        <Hero/>
        <Section title="Секция">
            <Article title="Статья 1"><NavPage/></Article>
            <Article title="Статья 2">...</Article>
        </Section>
        <Section title="Секция">
            <Article title="Статья 1">...</Article>
            <Article title="Статья 2">...</Article>
        </Section>
    </Main>
    <AsideRight><Social/></AsideRight>
</Wrapper>
<Footer/>`}
    </pre>
  </>
);

export const SchemaHeader = () => (
  <>
    <p>
      один из вариантов <b>Header </b>
    </p>
    <pre className={s.codeBlock}>
      {`<Header>
    <Logo />
    <Navigation />
    <Auth/>
</Header>`}
    </pre>
    <br />
    <p>код компанента </p>
    <pre className={s.codeBlock}>
      {`const Header = ({children}) =>
    <header>
        <Container>
            <div className="header">
                {children}
            </div>>
        </Container>
    </header>`}
    </pre>
  </>
);
