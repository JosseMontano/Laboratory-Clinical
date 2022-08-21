import React from "react";
import styled from "styled-components";
import { CardModel } from "../../models/card";
import Content from "./content";
import { ColorBtn } from "../../styles/globals";
const Container = styled.div<{ ColorBtn: string }>`
  height: 300px;
  width: 500px;
  border: 1px solid #000;
  margin: 5px 10px;
  &:hover {
    background-color: ${(props) => props.ColorBtn};
    filter: invert(1) hue-rotate(180deg);
  }
`;

const Card = (v: CardModel) => {
  return (
    <Container ColorBtn={ColorBtn}>
      <Content {...v} />
    </Container>
  );
};

export default Card;
