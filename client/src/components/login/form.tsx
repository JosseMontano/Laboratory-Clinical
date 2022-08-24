import styled from "styled-components";
import { ColorBtn, Button, Input, Label } from "../../styles/globals";
import { signIn } from "../../services/auth";
import { SyntheticEvent, useState } from "react";
import stateResponse from "../../utilities/stateResponse";
import { useNavigate } from "react-router-dom";
import Toast from "../toast";
const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
`;
const Or = styled.p`
  text-align: center;
  margin-top: 10px;
`;

const Form = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [flag, setFlag] = useState(false);
  const [msg, setMsg] = useState("Datos erroneos");
  
  const navigate = useNavigate();
  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const res = await signIn(email, password);
    const url = stateResponse(res);
    if (res.status === 200) {
      setMsg("Datos correctos");
    }
    navigate(`/${url}`);
    setFlag(true);
  };
  const handleFunc = () => {
    setFlag(false);
  };

  return (
    <form>
      <Label>Gmail</Label>
      <Input type="text" onChange={(e) => setEmail(e.target.value)} />
      <Label>Contraseña</Label>
      <Input type="text" onChange={(e) => setPassword(e.target.value)} />
      <ContainerButton>
        <Button onClick={submit} ColorBtn={ColorBtn}>
          Ingresar
        </Button>
      </ContainerButton>
      <Or>- - - - - O - - - - -</Or>
      <ContainerButton>
        <Button ColorBtn={ColorBtn}>Inicia sin Logearte</Button>
      </ContainerButton>
      <Toast msg={msg} flag={flag ? true : false} handleFunc={handleFunc} />
    </form>
  );
};

export default Form;
