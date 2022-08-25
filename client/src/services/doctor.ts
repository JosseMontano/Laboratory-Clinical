import cookies, { Descifrar } from "../utilities/cookies";
import endpoint from "./http";

export const getDoctors = async () => {
    const tokenci: string = cookies.get("token");
    try {
        const response = await fetch(`${endpoint}doctors`, {
          method: 'GET',
          headers: {
            Token: Descifrar(tokenci)
          }
        });
      
        if (response.ok) {
          const result = await response.json();
          return result;
        }
      } catch (err) {
        console.error(err);
      }
}