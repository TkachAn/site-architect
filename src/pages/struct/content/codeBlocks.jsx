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

export const SchemaHero = () => (
  <pre className={s.codeBlock}>
    {`<Hero title="Главный баннер" id="home-hero">
    <h1>Заголовок Hero</h1>
    <p>Текст баннера</p>
  </Hero>`}
  </pre>
);
export const SchemaSection = () => (
  <pre className={s.codeBlock}>
    {`<Section title="Название раздела" id="section-1">
    {/* Контент */}
  </Section>`}
  </pre>
);
export const SchemaArticle = () => (
  <pre className={s.codeBlock}>
    {`<Article title="Заголовок статьи" id="art-1">
    {/* Детализированный контент */}
  </Article>`}
  </pre>
);

export const SchemaFlex = () => (
  <pre className={s.codeBlock}>
    {`<Flex className="custom-gap">
    <div>1</div>
    <div>2</div>
  </Flex>`}
  </pre>
);

export const SchemaGrid = () => (
  <pre className={s.codeBlock}>
    {`<Grid id="main-grid">
    <AsideLeft>
        <AutoNav title="Меню"/>
    </AsideLeft>
    <Main title="Контент" />
</Grid>`}
  </pre>
);

export const SchemaAside = () => (
  <pre className={s.codeBlock}>
    {`<AsideLeft>
    <nav>Группы ссылок</nav>
</AsideLeft>
  
<AsideRight>
    <Widget />
</AsideRight>`}
  </pre>
);

export const SchemaFooter = () => (
  <pre className={s.codeBlock}>
  {
    `<Footer>
    <p>© 2026 Все права защищены</p>
</Footer>`
  }
  </pre>
);