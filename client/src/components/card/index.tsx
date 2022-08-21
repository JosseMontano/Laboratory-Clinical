import React from "react";
import styled from "styled-components";
import IconAddUser from "../icons/addUser";
import IconReport from "../icons/report";
import IconQuiz from "../icons/quiz";
import Card from "./card";

const ContainerFather = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

`;

const Index = () => {
  let data = [
    {
      icon: <IconAddUser />,
      title: "Registrar Usuario",
      text: "Agrega nuevos usuarios para que tengan acceso al sistema, se recomienda que solo se agreguen a funcionarios",
    },
    {
      icon: <IconQuiz />,
      title: "Tomar examen",
      text: "registrar un nuevo examen a un paciente",
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
