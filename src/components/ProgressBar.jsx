import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProgressBar.css';

const steps = [
  { label: 'KYC', path: '/' },
  { label: 'Перевод', path: '/transfer' },
  { label: 'Оплата', path: '/payment' },
  { label: 'Статус', path: '/status' },
  { label: 'Карта', path: '/card' },
];

function ProgressBar({ currentStep }) {
  const navigate = useNavigate();

  return (
    <div className="progress-bar">
      {steps.map((step, index) => (
        <div
          key={index}
          className="progress-step"
          onClick={() => navigate(step.path)}
          style={{ cursor: 'pointer' }}
        >
          <div className={`circle ${index <= currentStep ? 'active' : ''}`}>
            {index + 1}
          </div>
          <span className={`label ${index <= currentStep ? 'active' : ''}`}>
            {step.label}
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
