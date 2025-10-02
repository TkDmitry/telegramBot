import React, { useState } from 'react';
import '../ui.css';

const questions = [
  {
    id: 1,
    text: "Когда ты знакомишься с новым человеком, что для тебя важнее?",
    options: [
      { value: "logic", label: "Понять его взгляды и идеи" },
      { value: "ethics", label: "Почувствовать его настроение и эмоции" }
    ]
  },
  {
    id: 2,
    text: "Как ты предпочитаешь принимать решения?",
    options: [
      { value: "intuition", label: "Опираться на предчувствие и возможности" },
      { value: "sensing", label: "Опираться на факты и конкретные детали" }
    ]
  },
  {
    id: 3,
    text: "Что тебе комфортнее?",
    options: [
      { value: "extravert", label: "Быть в центре общения и событий" },
      { value: "introvert", label: "Сохранять уединение и внутренний фокус" }
    ]
  }
];

function SocionicsTest() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleAnswer = (value) => {
    setAnswers(prev => ({ ...prev, [questions[current].id]: value }));
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    // простая заглушка: считаем по первому ответу
    const first = answers[1];
    let type = "—";
    let description = "Результат теста будет доступен после полной версии.";
    if (first === "logic") {
      type = "Логико‑интуитивный экстраверт (Дон Кихот)";
      description = "Любознательный, энергичный, ищет новые идеи и возможности.";
    } else if (first === "ethics") {
      type = "Этико‑сенсорный интроверт (Достоевский)";
      description = "Эмпатичный, ценит гармонию и глубокие связи.";
    }
    setResult({ type, description });
  };

  const progress = Math.round(((current) / questions.length) * 100);

  return (
    <div className="page main">
      {!result ? (
        <section className="card">
          <h2>🧩 Соционический тест</h2>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
          <p>{questions[current].text}</p>
          <div className="options">
            {questions[current].options.map(opt => (
              <button
                key={opt.value}
                className="btn btn-secondary"
                onClick={() => handleAnswer(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </section>
      ) : (
        <section className="card">
          <h2>Ваш результат</h2>
          <p><strong>{result.type}</strong></p>
          <p className="text-secondary">{result.description}</p>
        </section>
      )}
      {/* Навигация */}
      <NavBar active="socionics" />
    </div>
  );
}

export default SocionicsTest;
