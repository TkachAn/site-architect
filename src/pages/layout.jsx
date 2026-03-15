import { useState } from "react";
import {
  Header,
  Main,
  AsideLeft,
  AsideRight,
  Footer,
  Wrapper,
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

export function Layout({ children, title, al_title, ar_title, sw_h1 = "true" }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header id="main-header">
        <Logo />
        <DinNav />
        <LoginIconButton onClick={() => setIsModalOpen(true)} />
      </Header>

      <Wrapper>
        {/* На Desktop (>1200px) здесь появится боковая панель */}
        <AsideLeft title={al_title}>
          <AutoAnchorNav />
        </AsideLeft>

        <Main title={title} sw={sw_h1}>
          {children}
          <DeBag />
        </Main>
        {/*<AsideRight><p>Боковая панель справа</p>  </AsideRight>*/}
        <AsideRight title={ar_title}>
          <Social />
        </AsideRight>
      </Wrapper>

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
