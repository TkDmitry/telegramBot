import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import ProgressBar from './components/ProgressBar';
import StartPage from './pages/StartPage';
import ProfilePage from './pages/ProfilePage';
import CardPage from './pages/CardPage';
import KYCPage from './pages/KYCPage';
import PaymentPage from './pages/PaymentPage';
import TransferStatus from './pages/TransferStatus';
import TransferForm from './pages/TransferForm';
import './App.css';

function App() {
  const location = useLocation();

  // Карта шагов для прогресс-бара (без стартовой страницы!)
  const stepMap = {
    '/kyc': 0,
    '/transfer': 1,
    '/payment': 2,
    '/status': 3,
    '/card': 4,
  };

  const currentStep = stepMap[location.pathname];

  return (
    <>
      {/* Прогресс-бар показываем только на пошаговых страницах */}
      {currentStep !== undefined && <ProgressBar currentStep={currentStep} />}

      <Routes>
        {/* редирект с корня на стартовую */}
        <Route path="/" element={<Navigate to="/start" replace />} />

        {/* Стартовая страница вне flow */}
        <Route path="/start" element={<StartPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        {/* Основной flow */}
        <Route path="/kyc" element={<KYCPage />} />
        <Route path="/transfer" element={<TransferForm />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/status" element={<TransferStatus />} />
        <Route path="/card" element={<CardPage />} />

        {/* catch-all: любые неизвестные пути → старт */}
        <Route path="*" element={<Navigate to="/start" replace />} />
      </Routes>
    </>
  );
}

export default App;

