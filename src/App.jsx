import { Routes, Route, useLocation } from 'react-router-dom';
import ProgressBar from './components/ProgressBar';
import CardPage from './pages/CardPage';
import KYCPage from './pages/KYCPage';
import PaymentPage from './pages/PaymentPage';
import TransferStatus from './pages/TransferStatus';
import TransferForm from './pages/TransferForm';
import './App.css';

function App() {
  const location = useLocation();

  const stepMap = {
    '/': 0,           // KYC
    '/transfer': 1,   // Перевод
    '/payment': 2,    // Оплата
    '/status': 3,     // Статус
    '/card': 4,       // Карта
  };

  const currentStep = stepMap[location.pathname] ?? 0;

  return (
    <>
      <ProgressBar currentStep={currentStep} />
      <Routes>
        <Route path="/" element={<KYCPage />} />
        <Route path="/transfer" element={<TransferForm />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/status" element={<TransferStatus />} />
        <Route path="/card" element={<CardPage />} />
      </Routes>
    </>
  );
}

export default App;
