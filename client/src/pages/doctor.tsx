import styled from "styled-components";
import Show from "../components/doctor/show";

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #adacac;
  margin: 10px;
`;

const ContainerSoon = styled.div`
  width: 100%;
  overflow: auto;
  border: 1px solid #dddddd;
`;

const Doctor = () => {
  return (
    <Container>
      <ContainerSoon>
        <Show />
      </ContainerSoon>
    </Container>
  );
};

export default Doctor;
