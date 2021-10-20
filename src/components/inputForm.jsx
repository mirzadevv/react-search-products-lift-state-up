import React from "react";
import styles from "./inputForm.module.css";

const InputForm = () => {
  return (
    <div className={styles.container}>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="search"
            placeholder="Search for product"
          />
        </div>
      </form>
    </div>
  );
};

export default InputForm;
