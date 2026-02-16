import React from "react";
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

export function Layout({ children }) {
  return (
    <>
      <Header id="main-header">
        <DinNav />
      </Header>

      <Grid>
        {/* На Desktop (>1200px) здесь появится боковая панель */}
        <AsideLeft>
          <AutoAnchorNav />
        </AsideLeft>

        <Main>{children}</Main>
        {/*<AsideRight><p>Боковая панель справа</p>  </AsideRight>*/}
        <AsideRight>
          <Social />
        </AsideRight>
      </Grid>
      <Footer>
        <Address />
        <Contact />
      </Footer>
    </>
  );
}
