import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import KYCPage from './pages/KYCPage';
import TransferForm from './pages/TransferForm';
import PaymentPage from './pages/PaymentPage';
import TransferStatus from './pages/TransferStatus';
import CardPage from './pages/CardPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<KYCPage />} />
        <Route path="/transfer" element={<TransferForm />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/status" element={<TransferStatus />} />
        <Route path="/card" element={<CardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


