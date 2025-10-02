import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import ProgressBar from './components/ProgressBar';
import StartPage from './pages/StartPage';
import ProfilePage from './pages/ProfilePage';

import SocionicsModule from './pages/SocionicsModule';
import SocionicsTest from './pages/SocionicsTest';
import Layout from './components/Layout'; // общий Layout с NavBar
import './ui.css';


function App() {
  const location = useLocation();


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
        <Route path="/socionics" element={<Layout active="socionics"><SocionicsModule /></Layout>} />
        <Route path="/socionics/test" element={<Layout active="socionics"><SocionicsTest /></Layout>} />
        {/* Основной flow */}


        {/* catch-all: любые неизвестные пути → старт */}
        <Route path="*" element={<Navigate to="/start" replace />} />
      </Routes>
    </>
  );
}

export default App;

