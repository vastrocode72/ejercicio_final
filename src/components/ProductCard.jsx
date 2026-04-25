import React from 'react';
import '../styles/ProductCard.css';

function ProductCard({ name, description, price, icon: Icon }) {
  return (
    <div className="product-card">
      <div className="product-card__image">
        <Icon size={40} strokeWidth={1.2} />
      </div>
      <div className="product-card__body">
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__desc">{description}</p>
        <div className="product-card__footer">
          <span className="product-card__price">€{price}</span>
          <button className="product-card__btn">Añadir</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
