import React from "react";
import styles from "./styles.module.scss";
import Product from "../../components/Product";
import Masthead from "../../components/Masthead";

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
      <div className={styles.productList}>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
