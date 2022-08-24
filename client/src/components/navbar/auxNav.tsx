import React from "react";
import styled from "styled-components";

const ContainerAux = styled.div<{ margin: string }>`
  @media screen and (max-width: ${(props) => (props.margin)}) {
    margin-top: 80px;
  }
`;

export interface params{
    margin:string
}

const AuxNav = (params:params) => {
  return <ContainerAux margin={params.margin} />;
};

export default AuxNav;
