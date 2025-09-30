import { Routes, Route, Link } from 'react-router-dom';
import CardPage from './pages/CardPage.jsx';
import KYCPage from './pages/KYCPage.jsx';
import PaymentPage from './pages/PaymentPage.jsx';
import TransferStatus from './pages/TransferStatus.jsx';
import TransferForm from './pages/TransferForm.jsx';
import './App.css';

function App() {
  return (
    <>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/gift/1">KYC</Link>
        <Link to="/gift/2">Статус</Link>
        <Link to="/gift/3">Перевод</Link>
      </nav>
      <Routes>
        <Route path="/" element={<CardPage />} />
        <Route path="/gift/1" element={<KYCPage />} />
        <Route path="/gift/2" element={<TransferStatus />} />
        <Route path="/gift/3" element={<TransferForm />} />
        <Route path="*" element={<PaymentPage />} />
      </Routes>
    </>
  );
}

export default App;