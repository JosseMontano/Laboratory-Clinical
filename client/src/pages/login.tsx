import styled from "styled-components";
import ColContent from "../components/login/colContent";
import ColPhoto from "../components/login/colPhoto";

const Container = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
  width: 100%;
`;
const ContainerSoon = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export function Login(): JSX.Element {
  return (
    <Container>
      <ContainerSoon>
        <ColPhoto />
        <ColContent />
      </ContainerSoon>
    </Container>
  );
}

export default Login;
