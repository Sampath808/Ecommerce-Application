import { jwtDecode } from "jwt-decode";

export const decodeToken = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    return decodedToken;
  } catch (error) {
    console.error("Invalid token", error);
    localStorage.removeItem("jwtToken");
    return null;
  }
};
