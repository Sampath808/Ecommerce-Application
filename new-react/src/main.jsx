import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import productsStore from "./Redux_Components/ProductsStore.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={productsStore}>
      <App />
    </Provider>
  </StrictMode>
);
