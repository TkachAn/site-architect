import { useState } from "react";
import {
  Header,
  Main,
  Grid,
  AsideLeft,
  AsideRight,
  Footer,
} from "../components/stsuct/sections/sections";
import { DinNav } from "../contents/forNav/DinNav";
import { AutoAnchorNav } from "../components/autoNav/nav";
import { Address } from "../contents/forFooter/address/address";
import { Contact } from "../contents/forFooter/contacts/contact";
import { Social } from "../contents/forFooter/social/socium";
import { Logo } from "../contents/forNav/logo";
import { LoginIconButton } from "../components/base/buttons/IconButtons";
import { Modal } from "../components/stsuct/extra/modal/mod";
import { LoginForm } from "../contents/forAuthReg/loginForm";
import { DeBag } from "../contents/debag/debag";

export function Layout({ children, title }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header id="main-header">
        <Logo />
        <DinNav />
        <LoginIconButton onClick={() => setIsModalOpen(true)} />
      </Header>

      <Grid>
        {/* На Desktop (>1200px) здесь появится боковая панель */}
        <AsideLeft>
          <AutoAnchorNav />
        </AsideLeft>

        <Main title={title}>
          {children}
          <DeBag />
        </Main>
        {/*<AsideRight><p>Боковая панель справа</p>  </AsideRight>*/}
        <AsideRight>
          <Social />
        </AsideRight>
      </Grid>

      <Footer>
        <Address />
        <Contact />
      </Footer>
      {/* Если стейт true — показываем модалку */}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <LoginForm onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </>
  );
}
/*
      <Container>
        <DeBag />
      </Container>
*/