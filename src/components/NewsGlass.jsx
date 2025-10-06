// src/components/NewsGlass.jsx
import React from "react";

function NewsGlass() {
  return (
    <section className="card glass-section">
      <h2 className="section-title">Новости и события</h2>

      <div className="glass-event">
        <div className="event-info">
          <p className="event-title">Онлайн-дискуссия по «1984»</p>
          <p className="event-time">Завтра в 19:00</p>
        </div>
        <button className="btn-glass">Подробнее</button>
      </div>

      <div className="glass-event">
        <div className="event-info">
          <p className="event-title">Читательский челлендж</p>
          <p className="event-time">«7 книг за октябрь»</p>
        </div>
        <button className="btn-glass">Присоединиться</button>
      </div>
    </section>
  );
}

export default NewsGlass;
