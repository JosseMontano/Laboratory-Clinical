import React from "react";
import styled from "styled-components";
import { ColorBtn } from "../../styles/globals";
import Check from "./check";
import ContainerLinks from "./containerLinks";
const Nav = styled.nav<{ ColorBtn: string }>`
  background: ${(props) => props.ColorBtn};
  height: 80px;
  width: 100%;
  position: absolute;
  top: 0px;
`;
const Logo = styled.label`
  color: white;
  font-size: 35px;
  line-height: 80px;
  padding: 0 100px;
  font-weight: bold;

  @media (max-width: 952px) {
    font-size: 30px;
    padding-left: 50px;
  }
`;
const NavAux = styled.nav`
  height: 80px;
`
const Index = () => {
  return (
   <>
    <Nav ColorBtn={ColorBtn}>
      <Check />
      <Logo>DesignX</Logo>
      <ContainerLinks />
    </Nav>
    <NavAux />
   </>
  );
};

export default Index;
