import Cookies from "universal-cookie";
import CryptoJS from "crypto-js";

const cookies = new Cookies();

export const Cifrar = (txt: string) => {
  var txtcifrado = CryptoJS.AES.encrypt(txt, "jose").toString();
  return txtcifrado;
};
export const Descifrar = (txt: string) => {
  var bytes = CryptoJS.AES.decrypt(txt, "jose");
  var txtDescifrado = bytes.toString(CryptoJS.enc.Utf8);
  return txtDescifrado;
};

export default cookies;
