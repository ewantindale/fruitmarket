import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { selectItems } from "../../redux/basketSlice";
import BasketItem from "../../components/BasketItem";

export default function CheckoutPage() {
  const items = useSelector(selectItems);

  return (
    <div className={styles.container}>
      <h1>Checkout</h1>
      <div>
        <Link to="/">
          <button className={styles.backButton}>Back to Store page</button>
        </Link>
      </div>
      <div>
        {items.map((item) => (
          <BasketItem item={item} />
        ))}
      </div>
    </div>
  );
}
