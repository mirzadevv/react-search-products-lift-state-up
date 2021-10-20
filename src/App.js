import React, { useState } from "react";
import InputForm from "./components/inputForm";
import "./App.css";

function App() {
  const [productValue, setProductValue] = useState("");

  const handleChange = (productValue) => {
    setProductValue(productValue);
  };

  return (
    <div className="app">
      <InputForm onChange={handleChange} />
    </div>
  );
}

export default App;
