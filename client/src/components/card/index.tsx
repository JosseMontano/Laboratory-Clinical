import React from "react";
import styled from "styled-components";
import IconAddUser from "../icons/addUser";
import IconReport from "../icons/report";
import IconQuiz from "../icons/quiz";
import Card from "./card";

const ContainerFather = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

`;

const Index = () => {
  let data = [
    {
      icon: <IconAddUser />,
      title: "Registrar funcionario",
      text: "Registrar datos del personal para luego creares una cuenta de usuario",
    },
    {
      icon: <IconQuiz />,
      title: "Tomar examen",
      text: "Registrar un nuevo examen a un paciente",
    },
    {
      icon: <IconReport />,
      title: "Reporte de examen",
      text: "Ver reporte del examen tomado",
    },
  ];
  return (
    <ContainerFather>
      {data.map((v, i) => (
        <Card {...v} key={i} />
      ))}
    </ContainerFather>
  );
};

export default Index;
