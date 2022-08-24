import endpoint from "./http";
import cookies, { Cifrar, Descifrar } from "../utilities/cookies";

export const signIn = async (email: string, password: string) => {
  const res = await fetch(`${endpoint}signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  if (res.status === 200) {
    cookies.set("token", Cifrar(await res.json()));
  }
  return res;
};

export const GetEmail = async () => {
  const tokenci:string = cookies.get("token");
  try {
    const response = await fetch(`${endpoint}profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Token: Descifrar(tokenci),
      },
    });
    if (response.ok) {
      const result = await response.json();
      return result
    }
  } catch (err) {
    console.error(err);
  }
};
