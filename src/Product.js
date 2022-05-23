import React from "react";
import "./Product.css";
function Product({ title, price, rating, img }) {
  return (
    <div>
      <div className="product">
        <div className="product__info">
          <p key={Product.title}>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong key="price">{price}</strong>
          </p>
          <div key={Product.rating} className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
        </div>
        <img key={Product.img} src={img} alt="#" />
        <button>Add to basket</button>
      </div>
    </div>
  );
}

export default Product;
