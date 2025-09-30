import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TransferForm() {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState(null);
  const navigate = useNavigate();

  const handleCalculate = () => {
    // TODO: запрос к API для получения курса
    const rubToKzt = 5.2; // пример
    const kztToEur = 0.002; // пример
    const eur = (amount * rubToKzt * kztToEur).toFixed(2);
    setRate(eur);
  };

  return (
    <div className="page">
      <h2>Создание заявки</h2>
      <input
        type="number"
        placeholder="Сумма в рублях"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <button onClick={handleCalculate}>Рассчитать курс</button>

      {rate && (
        <div>
          <p>Вы получите: {rate} €</p>
          <button onClick={() => navigate('/payment')}>Перейти к оплате</button>
        </div>
      )}
    </div>
  );
}

export default TransferForm;
