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
    '/gift/1': 0,   // KYC
    '/gift/3': 1,   // Перевод
    '/payment': 2,  // Оплата
    '/gift/2': 3,   // Статус
    '/': 4,         // Карта
  };

  const currentStep = stepMap[location.pathname] ?? 0;

  return (
    <>
      <ProgressBar currentStep={currentStep} />
      <Routes>
        <Route path="/" element={<CardPage />} />
        <Route path="/gift/1" element={<KYCPage />} />
        <Route path="/gift/2" element={<TransferStatus />} />
        <Route path="/gift/3" element={<TransferForm />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </>
  );
}

export default App;
