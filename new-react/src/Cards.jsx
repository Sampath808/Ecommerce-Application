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
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const [imageSrc, setImageSrc] = useState(null);

  useEffect(
    (product) => {
      axios
        .get(`/image/${product.productId}`, { responseType: "blob" })
        .then((response) => {
          const url = URL.createObjectURL(response.data);
          setImageSrc(url);
        })
        .catch((error) => {
          console.error("There was an error fetching the image!", error);
        });
    },
    [product]
  );

  return (
    <>
      {products.map((product) => (
        <Card
          key={product.productId}
          source={imageSrc}
          product={product}
        ></Card>
      ))}
    </>
  );
};

export default Cards;
