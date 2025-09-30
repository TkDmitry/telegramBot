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

  // Карта шагов для прогресс-бара
  const stepMap = {
    '/kycpage': 0,    // KYC
    '/transfer': 1,   // Перевод
    '/payment': 2,    // Оплата
    '/status': 3,     // Статус
    '/card': 4,       // Карта
  };

  const currentStep = stepMap[location.pathname];

  return (
    <>
      {/* Прогресс-бар показываем только на пошаговых страницах */}
      {currentStep !== undefined && <ProgressBar currentStep={currentStep} />}

      <Routes>
        {/* редирект с корня на стартовую */}
        <Route path="/" element={<Navigate to="/start" replace />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        {/* Основной flow */}
        <Route path="/kycpage" element={<KYCPage />} />        {/* шаг 1 */}
        <Route path="/transfer" element={<TransferForm />} />  {/* шаг 2 */}
        <Route path="/payment" element={<PaymentPage />} />    {/* шаг 3 */}
        <Route path="/status" element={<TransferStatus />} />  {/* шаг 4 */}
        <Route path="/card" element={<CardPage />} />          {/* шаг 5 */}
      </Routes>
    </>
  );
}

export default App;
