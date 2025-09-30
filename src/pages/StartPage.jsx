import React from 'react';
import { useNavigate } from 'react-router-dom';

function StartPage() {
  const navigate = useNavigate();

  return (
    <div className="page start">
      <h1>FinTech Mini App</h1>
      <p>Переводы из России в Европу с прозрачным курсом и мгновенной картой.</p>
      <button onClick={() => navigate('/kyc')}>Начать перевод</button>
      <button onClick={() => navigate('/profile')} style={{marginTop: '12px'}}>
        Профиль
      </button>
    </div>
  );
}

export default StartPage;
