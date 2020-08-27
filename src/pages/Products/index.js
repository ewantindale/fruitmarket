import React from "react";
import styles from "./styles.module.scss";
import Product from "../../components/Product";
import Masthead from "../../components/Masthead";
import { FiTruck } from "react-icons/fi";
import { GiShinyApple, GiThreeLeaves } from "react-icons/gi";

const products = [
  {
    id: 0,
    name: "Apples",
    image: "/images/apples.jpg",
    price: 2,
  },
  {
    id: 1,
    name: "Cherries",
    image: "/images/cherries.jpg",
    price: 1.5,
  },
  {
    id: 2,
    name: "Blueberries",
    image: "/images/blueberries.jpg",
    price: 1,
  },
  {
    id: 3,
    name: "Oranges",
    image: "/images/oranges.jpg",
    price: 3,
  },
  {
    id: 4,
    name: "Strawberries",
    image: "/images/strawberries.jpg",
    price: 2.5,
  },
  {
    id: 5,
    name: "Mango",
    image: "/images/mango.jpg",
    price: 5.25,
  },
];

export default function Products() {
  return (
    <div className={styles.container}>
      <Masthead />
      <div className={styles.badges}>
        <div className={styles.badge}>
          <GiShinyApple />
          <p>Fresh, high quality produce</p>
        </div>
        <div className={styles.badge}>
          <GiThreeLeaves />
          <p>100% Organic</p>
        </div>
        <div className={styles.badge}>
          <FiTruck />
          <p>Free Delivery when you spend £20</p>
        </div>
      </div>
      <div className={styles.productList}>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
