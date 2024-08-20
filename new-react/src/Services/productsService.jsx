import axios from "axios";

export const getAllProducts = () => {
  return axios.get("http://localhost:8080/products");
};

export const createProduct = (product) => {
  return axios.post("http://localhost:8080/saveProduct", product);
};
