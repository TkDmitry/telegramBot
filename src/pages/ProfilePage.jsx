import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function ProfilePage() {
  const { user, transfer } = useContext(AppContext);

  return (
    <div className="page profile">
      <h2>Профиль</h2>
      <div className="avatar">👤</div>
      <p><strong>Паспорт:</strong> {user?.passport || 'Не указано'}</p>
      <h3>Последний перевод</h3>
      {transfer?.amount ? (
        <p>{transfer.amount} ₽ → {transfer.eur} €</p>
      ) : (
        <p>Нет переводов</p>
      )}
    </div>
  );
}

export default ProfilePage;
