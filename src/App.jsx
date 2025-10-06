import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

import StartPage from './pages/StartPage';
import ProfilePage from './pages/ProfilePage';

import SocionicsModule from './pages/SocionicsModule';
import SocionicsTest from './pages/SocionicsTest';
import Layout from './components/Layout'; // общий Layout с NavBar
import './ui.css';
// Импортируйте базовое начертание (400)
import "@fontsource/playfair-display-sc";
// Импортируйте дополнительные, если нужны (700, 900)
import "@fontsource/playfair-display-sc/700.css";
import "@fontsource/playfair-display-sc/900.css";


function App() {
  // const location = useLocation();


  // const currentStep = stepMap[location.pathname];

  return (
    <>
      
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

