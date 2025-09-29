import React, { useState } from 'react';
import '../../styles/GiftCard.css';


function OrderForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    onSubmit({ name, phone });
    window.Telegram.WebApp.sendData(JSON.stringify({ name, phone }));
    window.Telegram.WebApp.close();
  };

  return (
    <div className="form">
      <input placeholder="Имя" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Телефон" value={phone} onChange={e => setPhone(e.target.value)} />
      <button onClick={handleSubmit}>Оформить</button>
    </div>
  );
}

export default OrderForm;
