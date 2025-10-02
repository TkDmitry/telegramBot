import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../ui.css';

function ProfilePage() {
  const { transfers, user } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="page profile">
      <h2>👤 Профиль</h2>
      {user ? (
        <div className="profile-card">
          <p><strong>Имя:</strong> {user.first_name} {user.last_name}</p>
          <p><strong>Username:</strong> @{user.username}</p>
          <p><strong>Язык:</strong> {user.language_code}</p>
          <p><strong>ID:</strong> {user.id}</p>
        </div>
      ) : (
        <p>Пользователь не авторизован</p>
      )}

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
