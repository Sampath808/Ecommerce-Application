import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchOrders } from "./state/orderSlice";

const OrdersPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.order);
  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);
  return (
    <ul>
      {orders.map((ord, index) => (
        <li>
          Order Id: {ord.orderId}, Total Amount: {ord.amount}, Status:{" "}
          {ord.status}
        </li>
      ))}
    </ul>
  );
};

export default OrdersPage;
