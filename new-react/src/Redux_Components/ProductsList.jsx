import { useEffect } from "react";
import { fetchProducts } from "./actions";
import { useSelector, useDispatch } from "react-redux";

const ProductsList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {products && products.map((p) => <li key={p.productId}>{p.name}</li>)}
    </ul>
  );
};

export default ProductsList;
