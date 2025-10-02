import React, { useEffect, useState } from 'react';
import '../ui.css';

function ProfilePage() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    photo: "",
    city: "—",
    age: null,
    bookshelf: { read: [], reading: [], want: [] },
    socionics: { type: "—", description: "Тест ещё не пройден" },
    preferences: { genre: "—", location: "—", socionicsMatch: "—" }
  });

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      const initData = tg.initDataUnsafe;

      if (initData?.user) {
        setUser(prev => ({
          ...prev,
          name: `${initData.user.first_name} ${initData.user.last_name || ''}`,
          username: initData.user.username,
          photo: initData.user.photo_url
        }));
      }
    }
  }, []);

  return (
    <div className="page main">
      {/* Личная информация */}
      <section className="card">
        <h2>👤 Личная информация</h2>
        {user.photo && (
          <img
            src={user.photo}
            alt="avatar"
            style={{ width: 80, borderRadius: '50%', marginBottom: '12px' }}
          />
        )}
        <p><strong>Имя:</strong> {user.name || "—"}</p>
        <p><strong>Username:</strong> {user.username ? `@${user.username}` : "—"}</p>
        <p><strong>Возраст:</strong> {user.age || "не указано"}</p>
        <p><strong>Город:</strong> {user.city}</p>
      </section>

      {/* Книжная полка */}
      <section className="card">
        <h2>📚 Книжная полка</h2>
        <p><strong>Прочитанные:</strong> {user.bookshelf.read.join(", ") || "—"}</p>
        <p><strong>Читаю сейчас:</strong> {user.bookshelf.reading.join(", ") || "—"}</p>
        <p><strong>Хочу прочитать:</strong> {user.bookshelf.want.join(", ") || "—"}</p>
      </section>

      {/* Рейтинги и отзывы */}
      <section className="card">
        <h2>⭐ Рейтинги и отзывы</h2>
        <ul className="list">
          <li className="list-item">«1984» — ★★★★☆ — «Сильная антиутопия»</li>
          <li className="list-item">«Мастер и Маргарита» — ★★★★★ — «Любимая книга»</li>
        </ul>
      </section>

      {/* Соционика */}
      <section className="card">
        <h2>🧩 Соционический тип</h2>
        <p><strong>{user.socionics.type}</strong></p>
        <p className="text-secondary">{user.socionics.description}</p>
      </section>

      {/* Настройки подбора */}
      <section className="card">
        <h2>⚙️ Настройки подбора</h2>
        <p><strong>Жанры:</strong> {user.preferences.genre}</p>
        <p><strong>Локация:</strong> {user.preferences.location}</p>
        <p><strong>Соционика:</strong> {user.preferences.socionicsMatch}</p>
        <button className="btn btn-primary">Изменить настройки</button>
      </section>
    </div>
  );
}

export default ProfilePage;
