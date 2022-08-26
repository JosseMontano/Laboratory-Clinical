import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ColorBtn } from "../../styles/globals";
import Check from "./check";
import ContainerLinks from "./containerLinks";
import HandlerGetEmail from "./getEmail";

const Nav = styled.nav<{ ColorBtn: string }>`
  background: ${(props) => props.ColorBtn};
  height: 80px;
  width: 100%;
  position: fixed;
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

const Index = () => {
  const [nameUser, setNameUser] = useState("");
  const CallGetEmail = async () => {
    const aux = await HandlerGetEmail();
    setNameUser(aux);
  };
  useEffect(() => {
    CallGetEmail();
  }, []);

  return (
    <>
      <Nav ColorBtn={ColorBtn}>
        <Check />
        <Logo>{nameUser}</Logo>
        <ContainerLinks />
      </Nav>
    </>
  );
};

export default Index;
