import React from "react";
import styled from "styled-components";
import {Enlace} from '../../models/nav'
const Container = styled.li`
  display: inline-block;
  line-height: 80px;
  margin: 0 5px;
  @media (max-width: 858px) {
    display: block;
    margin: 50px 0;
    line-height: 30px;
  }
`;
const A = styled.a`
  color: white;
  font-size: 17px;
  padding: 7px 13px;
  border-radius: 3px;
  text-transform: uppercase;
  &:hover {
    background: #1b9bff;
    transition: 0.5s;
  }
  @media (max-width: 952px) {
    font-size: 16px;
  }
  @media (max-width: 858px) {
    font-size: 20px;
    &:hover {
      background: none;
      color: #0082e6;
    }
  }
`;
const Links = (v:Enlace) => {
  return (
    <Container>
      <A href={v.url}>{v.text}</A>
    </Container>
  );
};

export default Links;
