import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function KYCPage() {
  const [passport, setPassport] = useState('');
  const navigate = useNavigate();

  const handleVerify = () => {
    console.log('Отправка данных:', passport);
    navigate('/transfer');
  };

  return (
    <div className="page">
      <h2>Верификация личности</h2>
      <input
        placeholder="Номер паспорта"
        value={passport}
        onChange={e => setPassport(e.target.value)}
      />
      <button onClick={handleVerify}>Пройти KYC</button>
    </div>
  );
}

export default KYCPage;
