import React, { useState } from "react";
import Products from "./components/products";
import InputForm from "./components/inputForm";
import { getProducts } from "./data/products";
import "./App.css";

function App() {
  const [productValue, setProductValue] = useState("");

  const handleChange = (productValue) => {
    setProductValue(productValue);
  };

  return (
    <div className="app">
      <InputForm onChange={handleChange} />
      <Products productValue={productValue} products={getProducts()} />
    </div>
  );
}

export default App;
