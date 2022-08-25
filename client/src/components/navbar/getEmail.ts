import { GetEmail } from "../../services/auth";

const checkSignIn = (user: string) => {
  if (user != "") {
    return user;
  }
  return "Welcome";
};

const HandlerGetEmail = async () => {
  var nameUser;
  const res = await GetEmail();
  nameUser = checkSignIn(res.email);
  return nameUser;
};

export default HandlerGetEmail;
