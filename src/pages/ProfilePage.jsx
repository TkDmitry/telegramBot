import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import './ProfilePage.css';

function ProfilePage() {
  const { transfers, user } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="page profile">
      <h2>👤 Профиль</h2>
      <div className="profile-card">
        <p><strong>Имя:</strong> {user?.name || 'Не указано'}</p>
        <p><strong>Паспорт:</strong> {user?.passport || 'Не указано'}</p>
      </div>

      <h3>📜 История переводов</h3>
      {transfers && transfers.length > 0 ? (
        <div className="history-list">
          {transfers.map((t, idx) => (
            <div key={idx} className="history-item">
              <p><strong>{t.amount} ₽ → {t.eur} €</strong></p>
              <p className="status">{t.status}</p>
              <p className="date">{new Date(t.date).toLocaleString()}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="empty">История пуста</p>
      )}

      <button onClick={() => navigate('/start')} className="main-btn">
        🏠 На главную
      </button>
    </div>
  );
}

export default ProfilePage;
