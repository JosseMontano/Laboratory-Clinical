import endpoint from "./http";
import cookies, { Cifrar, Descifrar } from "../utilities/cookies";

export const signIn = async (email: string, password: string) => {
  const res = await fetch(`${endpoint}login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials : 'include',
    body: JSON.stringify({
      email,
      password,
    }),
  });
//  if (res.status === 200) cookies.set("jwt", Cifrar(await res.json()));

  return res;
};

export const GetEmail = async () => {
  //const tokenci: string = cookies.get("jwt");

    const response = await fetch(`${endpoint}user`, {
      headers: { "Content-Type": "application/json" },
      credentials : 'include',
    });
   /* if (response.ok) {
      const result = await response.json();
     // return result;
     console.log(result)
    }*/
    console.log(await response.json());
};
