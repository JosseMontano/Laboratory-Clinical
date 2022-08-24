import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GetEmail } from "../../services/auth";
import { ColorBtn } from "../../styles/globals";
import Check from "./check";
import ContainerLinks from "./containerLinks";
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
  const HandlerGetEmail = async () => {
    const res = await GetEmail();
    checkSignIn(res.email);
  };
  const checkSignIn = (user: string) => {
    if (user != "") {
      setNameUser(user);
      return
    }
    setNameUser("Welcome");
  };
  useEffect(() => {
    HandlerGetEmail();
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
