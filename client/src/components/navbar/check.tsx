import React from "react";
import styled from "styled-components";

const Container = styled.input`
  display: none;
`;
const Checkbtn = styled.label`
  font-size: 30px;
  color: white;
  float: right;
  line-height: 80px;
  margin-right: 40px;
  cursor: pointer;
  display: none;
  @media (max-width: 858px) {
    display: block;
  }
`;
const Check = () => {
  return (
    <>
      <Container type="checkbox" id="check" />
      <Checkbtn htmlFor="check">
        <i className="fas fa-bars">☰</i>
      </Checkbtn>
    </>
  );
};

export default Check;
