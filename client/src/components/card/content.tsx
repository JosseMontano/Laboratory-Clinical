import React from "react";
import styled from "styled-components";
import { CardModel } from "../../models/card";
const Container = styled.div`
  display: grid;
  height: 300px;
  place-content: center;
  padding: 10px;
  text-align: center;
`;
const ContainerAux = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`;
const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 30px;
`;
const Text = styled.p`
  text-align: center;
  margin: 10px 0px;
  font-size: 20px;
`;
const Button = styled.div`
  margin: 0px 0px 10px 0px;
  background-color: #000;
  color: #fff;
  border-radius: 10px;
  width: 300px;
  text-align: center;
  padding: 10px;
  text-transform: uppercase;
`;

const Content = (v: CardModel) => {
  return (
    <Container>
      <ContainerAux>{v.icon}</ContainerAux>
      <Title>{v.title}</Title>
      <Text>{v.text}</Text>
      <ContainerAux>
        <Button>Ir</Button>
      </ContainerAux>
    </Container>
  );
};

export default Content;
