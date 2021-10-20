import React, { useEffect, useState } from "react";
import styles from "./inputForm.module.css";

const InputForm = ({ onChange }) => {
  const [productValue, setProductValue] = useState("");
  const handleChange = (e) => {
    setProductValue(e.currentTarget.value.toLowerCase());
  };

  useEffect(() => {
    onChange(productValue);
  }, [productValue]);

  return (
    <div className={styles.container}>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="search"
            placeholder="Search for product"
            onChange={handleChange}
            value={productValue}
          />
        </div>
      </form>
    </div>
  );
};

export default InputForm;
