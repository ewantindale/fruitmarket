import React from "react";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/basketSlice";

export default function BasketItem({ item }) {
  const dispatch = useDispatch();

  const handleRemoveItemClicked = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.name}>{item.name}</div>
        <div className={styles.quantity}>Quantity: {item.quantity}</div>
        <div className={styles.subTotal}>
          {"£" + (item.price * item.quantity).toFixed(2)}
        </div>
      </div>
      <div className={styles.buttons}>
        <button onClick={handleRemoveItemClicked}>Remove</button>
      </div>
    </div>
  );
}
