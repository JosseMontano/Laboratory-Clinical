import React from "react";
import Navbar from "../components/navbar";
import Card from "../components/card";
import styled from "styled-components";
import AuxNav from "../components/navbar/auxNav";



const IndexUser = () => {
  return (
    <>
      <Navbar />
      <AuxNav margin={"1560px"}/>
      <Card />
    </>
  );
};

export default IndexUser;
