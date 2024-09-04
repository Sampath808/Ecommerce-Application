import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  resetOrderApiStatus,
  resetOrder,
  getOrder,
  updateStatus,
} from "./state/orderSlice";
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBProgress,
  MDBProgressBar,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import Button from "react-bootstrap/esm/Button";
import { fetchCart } from "./state/cartSlice";

const OrderDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { order, status, error } = useSelector((state) => state.order);
  useEffect(() => {
    return () => {
      dispatch(resetOrder());
    };
  }, []);

  useEffect(() => {
    if (Number(id) != 0 && id != undefined) {
      if (!order) {
        dispatch(getOrder({ orderId: Number(id) }));
        dispatch(resetOrderApiStatus());
      }
    } else if (order?.orderId) {
      dispatch(fetchCart(customer.id));
      dispatch(resetOrderApiStatus());
    } else {
      navigate("/");
    }
  }, [dispatch, order, id, customer]);

  const handleCancelOrder = () => {
    dispatch(updateStatus({ orderId: order.orderId }));
    alert("Order Cancelled");
  };

  const statusStyle = {
    color:
      order?.status === "Order Placed"
        ? "green"
        : order?.status === "Order Cancelled"
        ? "red"
        : "yellow",
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {order && (
        <section
          className="h-100 gradient-custom"
          style={{ backgroundColor: "#eee" }}
        >
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol lg="10" xl="8">
                <MDBCard style={{ borderRadius: "10px" }}>
                  <MDBCardHeader className="px-4 py-5">
                    {/* <MDBTypography tag="h5" className="text-muted mb-0">
                    Thanks for your Order,{" "}
                    <span style={{ color: "#a8729a" }}>
                      {order.customer.userName}
                    </span>
                    !
                  </MDBTypography> */}
                  </MDBCardHeader>
                  <MDBCardBody className="p-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <p
                        className="lead fw-normal mb-0"
                        style={{ color: "#a8729a" }}
                      >
                        Receipt
                      </p>
                    </div>
                    {order?.orderItems.map((orderItems, index) => (
                      <MDBCard key={index} className="shadow-0 border mb-4">
                        <MDBCardBody>
                          <MDBRow>
                            <MDBCol
                              md="2"
                              className="text-center d-flex justify-content-center align-items-center"
                            >
                              <p className="text-muted mb-0">
                                {orderItems.product.name}
                              </p>
                            </MDBCol>
                            <MDBCol
                              md="2"
                              className="text-center d-flex justify-content-center align-items-center"
                            >
                              <p className="text-muted mb-0 small">
                                {orderItems.quantity}
                              </p>
                            </MDBCol>
                            <MDBCol
                              md="2"
                              className="text-center d-flex justify-content-center align-items-center"
                            >
                              <p className="text-muted mb-0 small">
                                {Number(orderItems.product.sellingPrice) *
                                  Number(orderItems.quantity)}
                              </p>
                            </MDBCol>
                          </MDBRow>
                          <hr
                            className="mb-4"
                            style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                          />
                          <MDBRow className="align-items-center">
                            <MDBCol md="2">
                              <p className="text-muted mb-0 small">
                                Track Order
                              </p>
                            </MDBCol>
                          </MDBRow>
                        </MDBCardBody>
                      </MDBCard>
                    ))}
                    <div className="d-flex justify-content-between pt-2">
                      <p className="fw-bold mb-0">Order Details</p>
                      <p className="text-muted mb-0">
                        <span className="fw-bold me-4">Total</span> Rs.
                        {order?.amount}.0
                      </p>
                    </div>

                    <div className="d-flex justify-content-between pt-2">
                      <p className=" mb-0" style={statusStyle}>
                        Order Status : {order?.status}
                      </p>
                    </div>

                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">
                        Order Id : {order?.orderId}
                      </p>
                    </div>

                    <div className="d-flex justify-content-between mb-5">
                      <p className="text-muted mb-0">
                        Payment Type : {order?.paymentType}
                      </p>
                      <p className="text-muted mb-0">
                        <span className="fw-bold me-4">Delivery Charges</span>{" "}
                        Free
                      </p>
                    </div>

                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">
                        Payment Reference-Id : {order.paymentReference}
                      </p>
                    </div>
                  </MDBCardBody>
                  <MDBCardFooter
                    className="border-0 px-4 py-5"
                    style={{
                      backgroundColor: "#a8729a",
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                    }}
                  >
                    <Button
                      variant="danger"
                      className="d-flex justify-content-end text-white text-uppercase mb-0"
                      onClick={() => handleCancelOrder()}
                    >
                      Cancel Order
                    </Button>
                    <MDBTypography
                      tag="h5"
                      className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0"
                    >
                      Total paid:{" "}
                      <span className="h2 mb-0 ms-2">{order.amount}</span>
                    </MDBTypography>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      )}
    </>
  );
};

export default OrderDetails;
