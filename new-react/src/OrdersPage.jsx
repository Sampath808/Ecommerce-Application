import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { fetchOrders } from "./state/orderSlice";

const OrdersPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.order);
  const { customer } = useSelector((state) => state.customer);

  useEffect(() => {
    dispatch(fetchOrders(customer.id));
  }, [dispatch, customer]);

  const handleOrder = (orderId) => {
    navigate(`/orderDetail/${orderId}`);
  };

  const currentOrders = JSON.parse(JSON.stringify(orders));

  currentOrders.forEach((ord) => {
    ord.imgUrl =
      "http://localhost:8080/images/" + ord.orderItems[0].product.imgName;
  });

  return (
    <div className="container mt-2">
      {currentOrders.map((ord, index) => (
        <MDBCard
          key={index}
          onClick={() => handleOrder(ord.orderId)}
          className="m-2"
        >
          <MDBCardBody className="d-flex justify-content-between">
            <MDBCardImage
              src={ord.imgUrl}
              height={150}
              width={150}
              fluid
              alt={ord.orderId}
            />
            <MDBCardTitle>
              {" "}
              {ord.orderItems.length > 1
                ? `${ord.orderItems[0].product.name}....`
                : ord.orderItems[0].product.name}
            </MDBCardTitle>
            <MDBCardTitle>Status: {ord.status}</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      ))}
    </div>
  );
};

export default OrdersPage;
