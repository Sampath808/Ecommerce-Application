import { useSelector } from "react-redux";

const SingleOrder = () => {
  const { orderItems, status, error } = useSelector((state) => state.order);
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <ul>
      {orderItems.map((orderItems, index) => (
        <>
          <li>{orderItems.product.name}</li>
          <li>{orderItems.quantiy}</li>
          <li>{orderItems.product.sellingPrice * orderItems.quantiy}</li>
        </>
      ))}
    </ul>
  );
};

export default SingleOrder;
