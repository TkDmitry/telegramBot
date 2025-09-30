import { Routes, Route, Link } from 'react-router-dom';
import CardPage from './pages/CardPage.jsx';
import KYCPage from './pages/KYCPage.jsx';
import PaymentPage from './pages/PaymentPage.jsx';

function App() {
  return (
    <>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/gift/1">Подарок 1</Link>
      </nav>
      <Routes>
        <Route path="/" element={<CardPage />} />
        <Route path="/gift/:id" element={<KYCPage />} />
        <Route path="*" element={<PaymentPage />} />
      </Routes>
    </>
  );
}
export default App;


