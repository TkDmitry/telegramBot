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
    '/kyc': 0,
    '/transfer': 1,
    '/payment': 2,
    '/status': 3,
    '/card': 4,
  };

  // const currentStep = stepMap[location.pathname];

  const currentStep = stepMap[location.pathname] ?? 0;
  
  return (
    <>
      {currentStep !== undefined && <ProgressBar currentStep={currentStep} />}

      <ProgressBar currentStep={currentStep} />
      <Routes>
        <Route path="/" element={<KYCPage />} />          {/* дефолт */}
        <Route path="/transfer" element={<TransferForm />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/status" element={<TransferStatus />} />
        <Route path="/card" element={<CardPage />} />
      </Routes>
      
    </>
  );
}

export default App;
