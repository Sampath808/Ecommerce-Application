import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { fetchCart } from "./state/cartSlice";
import { fetchOrders, resetOrderApiStatus } from "./state/orderSlice";
import { fetchProducts } from "./state/productsSlice";

const ProductsList = () => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);
  const { items } = useSelector((state) => state.cart);
  const cartStatus = useSelector((state) => state.cart.status);
  const orderStatus = useSelector((state) => state.order.status);

  const { customer } = useSelector((state) => state.customer);

  useEffect(() => {
    const runActions = async () => {
      if (customer) {
        if (status != "success") {
          await dispatch(fetchProducts());
        }
        if (cartStatus != "success" && cartStatus != "loading") {
          await dispatch(fetchCart(customer.id));
        }
        if (orderStatus != "success" && orderStatus != "loaded") {
          await dispatch(fetchOrders(customer.id));
          resetOrderApiStatus();
        }
      }
    };
    runActions();
  }, [customer]);

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
