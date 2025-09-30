import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TransferStatus() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const steps = [
    'Оплата получена',
    'Перевод в Казахстан',
    'Конвертация RUB → KZT → EUR',
    'SWIFT перевод',
    'Зачисление на карту',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(prev => {
        if (prev < steps.length - 1) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page">
      <h2>Статус перевода</h2>
      <ul>
        {steps.map((s, i) => (
          <li key={i} style={{ color: i <= step ? 'green' : 'gray' }}>
            {s}
          </li>
        ))}
      </ul>
      {step === steps.length - 1 && (
        <button onClick={() => navigate('/card')}>Перейти к карте</button>
      )}
    </div>
  );
}

export default TransferStatus;
