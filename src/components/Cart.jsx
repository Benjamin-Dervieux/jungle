import React from "react";

function Cart() {
  const monsteraPrice = 8;
  const lierrePrice = 10;
  const bouquetPrice = 15;
  return (
    <div>
      <ul>
        <li>Monstera : {monsteraPrice} €</li>
        <li>Lierre : {lierrePrice} €</li>
        <li>Bouquet : {bouquetPrice} €</li>
      </ul>
      <h2>Total : {monsteraPrice + lierrePrice + bouquetPrice} €</h2>
    </div>
  );
}

export default Cart;
