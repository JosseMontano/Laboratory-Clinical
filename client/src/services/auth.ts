import endpoint from "./http";

export const signIn = async (email: string, password: string) => {
  const res = await fetch(`${endpoint}signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  return res;
  //return res.json()
};
