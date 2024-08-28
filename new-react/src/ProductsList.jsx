import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./state/productsSlice";
import ProductCard from "./ProductCard";
import { fetchCart } from "./state/cartSlice";

const ProductsList = () => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);
  const { items } = useSelector((state) => state.cart);

  useEffect(() => {
    if (items.length == 0) {
      dispatch(fetchCart());
    }
    if (products.length == 0) {
      dispatch(fetchProducts());
    }
  }, [status, items, products, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} items={items}></ProductCard>
      ))}
    </>
  );
};

export default ProductsList;
