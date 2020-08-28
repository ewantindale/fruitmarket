import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { selectItems, selectBasketSubTotal } from "../../redux/basketSlice";
import BasketItem from "../../components/BasketItem";

export default function CheckoutPage() {
  const items = useSelector(selectItems);
  const subtotal = useSelector(selectBasketSubTotal);

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
      {items.length > 0 ? (
        <div className={styles.totals}>
          <div className={styles.subtotal}>
            <span>Subtotal: </span>
            <span>{"£" + subtotal.toFixed(2)}</span>{" "}
          </div>
          <div className={styles.delivery}>
            <span>Delivery: </span>
            <span>{subtotal < 20 ? "£" + (5).toFixed(2) : "FREE"}</span>
          </div>
          <div className={styles.total}>
            <span>Total:</span>
            <span>
              {"£" +
                (subtotal < 20
                  ? (subtotal + 5).toFixed(2)
                  : subtotal.toFixed(2))}
            </span>
          </div>
        </div>
      ) : null}
      {items.length > 0 ? (
        <button
          className={styles.purchaseButton}
          onClick={() => alert("This is as far as the demo goes :)")}
        >
          Purchase
        </button>
      ) : null}
    </div>
  );
}
