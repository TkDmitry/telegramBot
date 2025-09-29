import React from 'react';
import './styles/GiftCard.css';

function GiftCard({ image, title, price, onClick }) {
  return (
    <div className="gift-card" onClick={onClick}>
      <img src={image} alt={title} className="gift-image" />
      <div className="gift-info">
        <h3 className="gift-title">{title}</h3>
        <p className="gift-price">{price} ₽</p>
      </div>
    </div>
  );
}

export default GiftCard;
