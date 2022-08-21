import React from "react";
import styled from "styled-components";
import Form from "./form";
const Container = styled.div`
  display: grid;
  place-content: center;
  padding: 30px;
`;
const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
`;
const TextP = styled.p`
  margin-top: 10px;
  color: #b9b9b9;
  font-size: 22px;
`;

const ColContent = () => {
  return (
    <Container>
      <Title>Hola de nuevo</Title>
      <TextP>Inicia sesion o entra si eres paciente</TextP>
      <Form />
    </Container>
  );
};

export default ColContent;
