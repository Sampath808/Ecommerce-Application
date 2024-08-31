import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCart } from "./state/cartSlice";
import { resetOrderApiStatus } from "./state/orderSlice";

const SingleOrder = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { order, status, error } = useSelector((state) => state.order);
  useEffect(() => {
    if (Number(id) != 0 && id != undefined) {
      //load order details of order id
      dispatch(resetOrderApiStatus());
    } else if (order?.orderId) {
      dispatch(fetchCart());
      dispatch(resetOrderApiStatus());
    } else {
      navigate("/");
    }
  }, [dispatch, order, id]);
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <ul>
        {order.orderItems.map((orderItems, index) => (
          <div key={index}>
            <li>{orderItems.product.name}</li>
          </div>
        ))}
      </ul>
      <ul>
        {order.orderItems.map((orderItems, index) => (
          <div key={index}>
            <li>{orderItems.product.quantity}</li>
          </div>
        ))}
      </ul>
      <ul>
        <li>{orderItems.product.quantity}</li>
      </ul>
    </>
  );
};

export default SingleOrder;
