import React from "react";
import styled from "styled-components";
import ImgLogin from "../../assets/imgLogin.png";
import { ColorBtn } from "../../styles/globals";
const Container = styled.div<{ ColorBtn: string }>`
  background-color: ${(props) => props.ColorBtn};
  display: grid;
  place-content: center;
  @media screen and (max-width: 820px) {
    display: none;
  }
`;
const Image = styled.img`
  width: 400px;
`;
const ColPhoto = () => {
  return (
    <Container ColorBtn={ColorBtn}>
      <Image src={ImgLogin} />
    </Container>
  );
};

export default ColPhoto;
