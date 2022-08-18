import styled from "styled-components";
import ImgLogin from "../assets/imgLogin.png";
import { ColorBtn } from "../styles/globals";
const Container = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
  width: 100%;
`;
const ContainerSoon = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  box-shadow:0 2px 3px rgba(0,0,0,.3);
`;
const ColImage = styled.div<{ ColorBtn: string }>`
  background-color: ${(props) => props.ColorBtn};
  display: grid;
  place-content: center;
`;
const Image = styled.img`
  width: 400px;
`;
const ColContent = styled.div`
  display: grid;
  place-content: center;
  padding: 30px;
`;
const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
`;
const TextP = styled.p`
  margin-top: 10px;
  color: #b9b9b9;
  font-size: 22px;
`;
const Form = styled.form``;
const Label = styled.label`
  font-size: 22px;
  margin-top: 10px;
`;
const Input = styled.input`
  margin-top: 10px;
  font-family: "Roboto", sans-serif;
  color: #333;
  padding: 10px;
  border-radius: 0.2rem;
  border: none;
  display: block;
  border-bottom: 0.3rem solid transparent;
  transition: all 0.3s;
  width: 90%;
  box-shadow:0 2px 3px rgba(0,0,0,.3);
`;
const Button = styled.button<{ ColorBtn: string }>`
  background-color: ${(props) => props.ColorBtn};
  color: #fff;
  padding: 1.5rem 2rem;
  border: none;
  border-radius: 0.2rem;
  width: 100%;
  margin-top: 10px;
  font-size: 16px;
`;
const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
`;
const Or = styled.p`
  text-align: center;
  margin-top: 10px;
`;
export function Login(): JSX.Element {
  return (
    <Container>
      <ContainerSoon>
        <ColImage ColorBtn={ColorBtn}>
          <Image src={ImgLogin} />
        </ColImage>
        <ColContent>
          <Title>Hola de nuevo</Title>
          <TextP>Inicia sesion o entra si eres paciente</TextP>
          <Form>
            <Label>Gmail</Label>
            <Input type="text" />
            <Label>Contraseña</Label>
            <Input type="text" />
            <ContainerButton>
              <Button ColorBtn={ColorBtn}>Ingresar</Button>
            </ContainerButton>
            <Or>- - - - - O - - - - -</Or>
            <ContainerButton>
              <Button ColorBtn={ColorBtn}>Inicia sin Logearte</Button>
            </ContainerButton>
          </Form>
        </ColContent>
      </ContainerSoon>
    </Container>
  );
}

export default Login;
