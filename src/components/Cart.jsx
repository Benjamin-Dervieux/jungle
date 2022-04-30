import React from "react";
import "../styles/cart.css";

function Cart() {
  const monsteraPrice = 8;
  const lierrePrice = 10;
  const bouquetPrice = 15;
  return (
    <div className="cart">
      <ul className="list">
        <li>Monstera : {monsteraPrice} €</li>
        <li>Lierre : {lierrePrice} €</li>
        <li>Bouquet : {bouquetPrice} €</li>
      </ul>
      <h2>Total : {monsteraPrice + lierrePrice + bouquetPrice} €</h2>
    </div>
  );
}

export default Cart;
