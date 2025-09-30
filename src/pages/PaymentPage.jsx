import React from 'react';
import { useNavigate } from 'react-router-dom';

function PaymentPage() {
  const navigate = useNavigate();

  const handlePayment = () => {
    console.log('Оплата прошла успешно');
    navigate('/status');
  };

  return (
    <div className="page">
      <h2>Оплата через ЮKassa</h2>
      <p>Здесь будет форма ЮKassa</p>
      <button onClick={handlePayment}>Симулировать успешную оплату</button>
    </div>
  );
}

export default PaymentPage;
