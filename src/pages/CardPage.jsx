import React from 'react';

function CardPage() {
  const card = {
    number: '4111 1111 1111 1111',
    expiry: '12/28',
    cvv: '123',
    balance: '500.00 €',
  };

  return (
    <div className="page">
      <h2>Виртуальная карта</h2>
      <div className="card">
        <p><strong>Номер:</strong> {card.number}</p>
        <p><strong>Срок:</strong> {card.expiry}</p>
        <p><strong>CVV:</strong> {card.cvv}</p>
        <p><strong>Баланс:</strong> {card.balance}</p>
      </div>
      <button>Добавить в Apple Pay / Google Pay</button>
    </div>
  );
}

export default CardPage;
