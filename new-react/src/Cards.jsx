import React, { useState, useEffect } from "react";
import { getAllProducts } from "./Services/productsService";
import Card from "./Card";
import "./index.css";

const Cards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getAllProducts();
      setProducts(
        response.data.map((p) => {
          return { ...p, imgUrl: "http://localhost:8080/images/" + p.imgUrl };
        })
      );
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <>
      {products.map((product, index) => (
        <Card key={index} product={product}></Card>
      ))}
    </>
  );
};

export default Cards;
