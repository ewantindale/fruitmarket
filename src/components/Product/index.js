import React from "react";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/basketSlice";

export default function Product({ product }) {
  const dispatch = useDispatch();

  const handleAddToBasketClicked = () => {
    dispatch(addItem(product));
  };

  return (
    <div className={styles.product}>
      <img src={product.image} alt={product.name} />

      <div className={styles.info}>
        <h2>{product.name}</h2>
        <h3>{"£" + product.price.toFixed(2)}</h3>
        <button onClick={handleAddToBasketClicked}>Add to basket</button>
      </div>
    </div>
  );
}
