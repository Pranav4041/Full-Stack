import React from "react";
import "./ProductCard.css";

function ProductCard({ name, price, inStock }) {
  return (
    <div className="card">
      <div className="image-placeholder"></div>

      <h2>{name}</h2>
      <p className="price">${price}</p>

      {inStock ? (
        <span className="stock in">In Stock</span>
      ) : (
        <span className="stock out">Out of Stock</span>
      )}
    </div>
  );
}

export default ProductCard;
