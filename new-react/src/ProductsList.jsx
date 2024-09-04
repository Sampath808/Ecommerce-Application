import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { fetchCart } from "./state/cartSlice";
import { fetchOrders } from "./state/orderSlice";
import { fetchProducts } from "./state/productsSlice";

const ProductsList = () => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);
  const { items } = useSelector((state) => state.cart);
  const { customer } = useSelector((state) => state.customer);

  useEffect(() => {
    if (customer) {
      dispatch(fetchCart(customer.id));
      dispatch(fetchOrders(customer.id));
    }
    dispatch(fetchProducts());
  }, [dispatch, customer]);

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
