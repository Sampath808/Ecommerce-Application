import axios from "axios";

export const apiCall = async (method, url, body, headers) => {
  try {
    let bearerToken = "";
    const baseURL = "http://localhost:8080";
    let token = localStorage.getItem("jwtToken");
    if (token) {
      bearerToken = `Bearer ${token}`;
    }
    const response = await axios.request({
      baseURL: baseURL,
      url: url,
      method: method,
      headers: {
        ...headers,
        "Content-Type": "application/json",
        Authorization: bearerToken,
      },
      body: body,
    });

    const responseHeaders = response.headers;
    token = responseHeaders.getAuthorization("Authorization");
    if (token) {
      localStorage.setItem("jwtToken", token.split(" ")[1]);
    }
    return response.data;
  } catch (error) {
    console.error("Error in apiCall:", error);
    throw error;
  }
};