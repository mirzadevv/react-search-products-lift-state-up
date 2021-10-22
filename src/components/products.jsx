import React, { useRef } from "react";
import styles from "./products.module.css";
const Products = ({ products, productValue }) => {
  const { current: cloneProducts } = useRef(products);
  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.data} ${styles.columns}`}>
          <h5>id</h5>
          <h5>name</h5>
          <h5>price</h5>
        </div>
        {products.map((product) => (
          <div className={styles.data} key={product.id}>
            <p>{product.id}</p>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
