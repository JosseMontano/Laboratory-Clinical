import React from 'react'
import styled from 'styled-components';
import { Enlace } from '../../models/nav';
import Links from "./links";

const Ul = styled.ul`
  float: right;
  margin-right: 20px;
  @media (max-width: 858px) {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #2c3e50;
    top: 80px;
    left: -100%;
    text-align: center;
    transition: all 0.5s;
  }

  @media (max-width: 858px) {
    #check:checked ~ & {
      left: 0;
    }
  }
`;

const ContainerLinks = () => {
  let data = [
    {
      text: "Inicio",
      url: "",
    },
    {
      text: "Segundo",
      url: "",
    },
    {
      text: "Tercero",
      url: "",
    },  {
      text: "Salir",
      url: "",
    },
  ];
  return (
    <Ul>
    {data.map((v, i) => (
      <Links {...v} key={i} />
    ))}
  </Ul>
  )
}

export default ContainerLinks