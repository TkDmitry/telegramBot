import React from 'react';
import './ProgressBar.css';

const steps = ['KYC', 'Перевод', 'Оплата', 'Статус', 'Карта'];

function ProgressBar({ currentStep }) {
  return (
    <div className="progress-bar">
      {steps.map((step, index) => (
        <div key={index} className="progress-step">
          <div
            className={`circle ${index <= currentStep ? 'active' : ''}`}
          >
            {index + 1}
          </div>
          <span className={`label ${index <= currentStep ? 'active' : ''}`}>
            {step}
          </span>
          {index < steps.length - 1 && (
            <div
              className={`line ${index < currentStep ? 'active' : ''}`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProgressBar;
