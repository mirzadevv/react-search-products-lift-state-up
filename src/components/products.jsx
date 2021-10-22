import React, { useRef, useState, useEffect } from "react";
import styles from "./products.module.css";
const Products = ({ products, productValue }) => {
  const { current: cloneProducts } = useRef(products);
  const [searchedProducts, setSearchedProducts] = useState([]);
  useEffect(() => {
    let foundProducts = products.filter((product) => {
      if (productValue !== "") {
        if (product.name.toLowerCase().includes(productValue)) {
          return product;
        }
      }
    });

    if (foundProducts.length !== 0) {
      setSearchedProducts(foundProducts);
    } else {
      setSearchedProducts(cloneProducts);
    }
  }, [productValue]);
  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.data} ${styles.columns}`}>
          <h5>id</h5>
          <h5>name</h5>
          <h5>price</h5>
        </div>
        {searchedProducts.map((product) => (
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
