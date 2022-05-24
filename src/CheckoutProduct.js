import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct() {
  return (
    <div className="checkoutProduct">
      <img
        src="https://product.hstatic.net/200000201725/product/_nik0467_ba4f21a9a7174ddd81f9c3d4c761ba7c_master.jpg"
        alt=""
        className="checkoutProduct__image"
      />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">
          Benefit Mystic 15.5 inch Laptop Shouder Messager Sling Office
          Bag,Water Repellent Fabric for Men and Womem (Blue)
        </p>
        <p className="checkoutproduct__price">
          <small>$</small>
          <strong>20</strong>
        </p>
        <div className="checkoutproduct__rating">⭐⭐⭐</div>
        <button>Remove to basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
