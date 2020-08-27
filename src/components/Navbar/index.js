import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import {
  selectNumberOfItems,
  selectBasketSubTotal,
} from "../../redux/basketSlice";

export default function Navbar() {
  const numberOfItems = useSelector(selectNumberOfItems);
  const subTotal = useSelector(selectBasketSubTotal);

  return (
    <div className={styles.container}>
      <span className={styles.title}>FruitMarket</span>
      <Link to="/checkout" className={styles.checkoutButton}>
        <FaShoppingCart size={25} /> {numberOfItems} Items | £
        {subTotal.toFixed(2)}
      </Link>
    </div>
  );
}
